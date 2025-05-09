"use client";

import styles from "@/components/account/login/login-form.module.scss";
import Button from "@/components/forms/buttons/button";

import { useFormState, useFormStatus } from "react-dom";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";
import React from "react";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Enviar email</Button>
      )}
    </>
  );
}

// export const dynamic = 'force-dynic';

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
    <>
      <form action={action} className={styles.form}>
        <div className={styles.inputs}>
          <Input label="Email / Usuário" name="login" type="text" />
          <Input
            label=''
            type="hidden"
            name="url"
            value={url}
          />

          <ErrorMessage error={state.error} />
          {state.ok ? (
            <p style={{ color: "#4c1" }}>Email enviado.</p>
          ) : (
            <FormButton />
          )}
        </div>
      </form>
    </>
  );
}
