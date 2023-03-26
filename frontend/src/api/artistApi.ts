import {artistInstance} from './instances';

export const artistApi = {
	get: async () => {
		try {
			const response = await artistInstance.get('');
			return response.data;
		} catch (err: unknown) {
			console.log(err);
		}
	},
};
