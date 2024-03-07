'use client';

import React from 'react';
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import styles from './login-form.module.css';
import passwordLost from '@/actions/password-lost';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
	const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

	const [url, setUrl] = React.useState('');

	React.useEffect(() => {
		setUrl(window.location.href.replace('perdeu', 'resetar'))
	}, [])

	return (
		<>
			<form action={action} 
						className={styles.form}>
				<Input 
					label="Email / Usuário" 
					name="login" 
					type="text" />
				<input 
					type="hidden"
					value={url}/>
				{state.ok && <p style={{ color: '#4c1'}}>Email enviado.</p>}
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
		</>
	)
}