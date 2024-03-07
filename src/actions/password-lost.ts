'use server';

import { PASSWORD_LOST } from '@/functions/api';
import apiError from '@/functions/api-error';

export default async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
	const urlLost = formData.get('url') as string | null;
  
	try {
    if (!login) throw new Error('Preencha os dados.');
    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
      body: JSON.stringify({
				login,
				urlLost
			})
    });
    if (!response.ok) throw new Error('Email ou usuário já cadastrado.');
    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}