
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
    },
};