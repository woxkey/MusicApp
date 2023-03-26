import {albumInstance} from './instances';

export const albumApi = {
	get: async () => {
		try {
			const response = await albumInstance.get('');
			return response.data;
		} catch (err: unknown) {
			console.log(err);
		}
	},
};
