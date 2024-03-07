'use server';

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function login(state: {}, form: FormData) {
	const username = form.get('username') as string | null;
	const password = form.get('password') as string | null;

	try {
		if(!username || !password) throw new Error('Preencha os dados.');
		const { url } = TOKEN_POST();
		const response = await fetch(url, {
			method: 'POST',
			body: form
		})
		if(!response.ok) throw new Error('Preencha os dados.');
		const data = await response.json();
		
		cookies().set('token', data.token, {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24
		})

		return { data: null, ok: false, error: ''}
	} catch (error: unknown) {
		return apiError(error);
	}
}