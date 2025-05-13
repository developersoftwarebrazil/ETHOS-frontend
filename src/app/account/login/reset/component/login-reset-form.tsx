"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import passwordReset from "@/actions/auth/password-reset";

import styles from "@/app/account/login/styles/login-form.module.scss";
import Button from "@/components/forms/buttons/button";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? "Resetando..." : "Resetar senha"}
    </Button>
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
        {state.ok && (
          <p className={styles.success}>Senha alterada com sucesso.</p>
        )}

        <FormButton />
      </div>
    </form>
  );
}
