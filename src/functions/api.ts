export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST() {
	return {
		url: API_URL + '/jwt-auth/v1/token'
	};
}

export function USER_POST() {
	return {
		url: API_URL + '/api/user',
	}
}

export function PASSWORD_LOST() {
	return {
		url: API_URL + '/api/password/lost',
	}
}

export function PASSWORD_RESET() {
	return {
		url: API_URL + '/api/password/reset',
	}
}