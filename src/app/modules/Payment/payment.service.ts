import { PaymentStatus } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { SSLService } from "../SSL/ssl.service";



const initPayment = async (appointmentId: string) => {
    const paymentData = await prisma.payment.findFirstOrThrow({
        where: {
            appointmentId
        },
        include: {
            appointment: {
                include: {
                    patient: true
                }
            }
        }
    });

    const initPaymentData = {
        amount: paymentData.amount,
        transactionId: paymentData.transactionId,
        name: paymentData.appointment.patient.name,
        email: paymentData.appointment.patient.email,
        address: paymentData.appointment.patient.address,
        phoneNumber: paymentData.appointment.patient.contactNumber
    }

    const result = await SSLService.initPayment(initPaymentData);
    return {
        paymentUrl: result.GatewayPageURL
    };

};



const validatePayment = async (payload: any) => {

    // commenting out the actual payment validation for testing purpose
    // uncomment it when you are going to test with real payment


    // if (!payload || !payload.status || !(payload.status === 'VALID')) {
    //     return {
    //         message: "Invalid Payment!"
    //     }
    // }

    // const response = await SSLService.validatePayment(payload);

    // if (response?.status !== 'VALID') {
    //     return {
    //         message: "Payment Failed!"
    //     }
    // }



    // manually assigning payload to response for testing purpose

    const response = payload;

    await prisma.$transaction(async (tx) => {
        const updatedPaymentData = await tx.payment.update({
            where: {
                transactionId: response.tran_id
            },
            data: {
                status: PaymentStatus.PAID,
                paymentGatewayData: response
            }
        });

        await tx.appointment.update({
            where: {
                id: updatedPaymentData.appointmentId
            },
            data: {
                paymentStatus: PaymentStatus.PAID
            }
        })
    });

    return {
        message: "Payment success!"
    }

}




export const PaymentService = {
    initPayment,
    validatePayment
};