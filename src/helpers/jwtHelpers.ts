import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import type { StringValue } from 'ms';

const generateToken = (payload: any, secret: Secret ) => {
     const expiresIn = process.env.JWT_EXPIRES_IN as string as StringValue;
    // Define the options object with a specific type to ensure correctness
    const options: SignOptions = {
        algorithm: 'HS256',
        expiresIn 
    };

    const token = jwt.sign(
        payload,
        secret,
        options // Pass the combined options object here
    );

    return token;
};

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
    generateToken,
    verifyToken
};