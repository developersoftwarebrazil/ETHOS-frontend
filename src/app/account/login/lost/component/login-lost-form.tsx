"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import passwordLost from "@/actions/auth/password-lost";

import styles from "@/app/account/login/styles/login-form.module.scss";

import Button from "@/components/forms/buttons/button";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? "Enviando..." : "Enviar email"}
    </Button>
  );
}

export default function LoginLostForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("lost", "reset"));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <div className={styles.inputs}>
        <Input label="Email / Usuário" name="login" type="text" />
        <Input label="" type="hidden" name="url" value={url} />

        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p className={styles.success}>Email enviado.</p>
        ) : (
          <FormButton />
        )}
      </div>
    </form>
  );
}
