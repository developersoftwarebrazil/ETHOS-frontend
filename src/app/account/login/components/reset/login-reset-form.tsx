"use client";
import passwordReset from "@/actions/auth/password-reset";

import styles from "@/app/account/login/styles/login-form.module.scss";

import Button from "@/components/forms/buttons/button";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";

import { useFormState, useFormStatus } from "react-dom";
import React from "react";

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

export default function LoginResetForm({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <div className={styles.inputs}>
        <Input label="Nova Senha" name="password" type="password" />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />

        <ErrorMessage error={state.error} />

        <FormButton />
      </div>
    </form>
  );
}
