'use client';

import login from "@/actions/login";
import React from 'react';
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
	const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });
	
	React.useEffect(() => {
		console.log(state.ok)
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

	return (
		<>
			<form action={action}>
				<Input 
					label="Usuário" 
					name="username" 
					type="text" />
				<Input 
					label="Senha" 
					name="password" 
					type="password" />
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
		</>
	)
}