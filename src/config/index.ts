
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    jwt: {
        jwt_secret: process.env.JWT_SECRET, // Corrected
        expires_in: process.env.JWT_EXPIRES_IN, // Corrected
        refresh_token_secret: process.env.JWT_REFRESH_SECRET, // Corrected
        refresh_token_expires_in: process.env.JWT_REFRESH_EXPIRES_IN, // Corrected
        reset_pass_token: process.env.RESET_PASS_TOKEN,
        reset_pass_token_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN,
    },
    reset_pass_link: process.env.RESET_PASS_LINK,
    emailSender : {
        email: process.env.EMAIL,
        appPassword: process.env.APP_PASSWORD
    },
     ssl: {
        storeId: process.env.STORE_ID,
        storePass: process.env.STORE_PASS,
        sslPaymentApi: process.env.SSL_PAYMENT_API,
        successUrl: process.env.SUCCESS_URL,
        failUrl: process.env.FAIL_URL,
        cancelUrl: process.env.CANCEL_URL,
        sslValidationApi: process.env.SSL_VALIDATION_API,
        
        
    }
};