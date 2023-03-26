import {JwtPayload} from 'jsonwebtoken';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string;
			MONGO_URL: string;
		}
	}
}

export {};
