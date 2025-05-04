"use client";

import styles from "@/components/account/login/login-form.module.scss";
import Button from "@/components/forms/buttons/button";

import { useFormState, useFormStatus } from "react-dom";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";
import React from "react";
import passwordReset from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button disabled={pending}>Resetar senha</Button>
      )}
    </>
  );
}

// export const dynamic = 'force-dynic';

export default function LoginResetForm({keyToken, login}:{keyToken: string, login: string}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });


  return (
    <>
      <form action={action} className={styles.form}>
        <div className={styles.inputs}>
          <Input label="Resetar Senha" name="password" type="password" />
          <input type="hidden" name="login" value={login}/>
          <input type="hidden" name="key" value={keyToken}/>
        
          <ErrorMessage error={state.error} />

          <FormButton />
        </div>
      </form>
    </>
  );
}
