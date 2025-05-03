"use client";

import styles from "@/components/account/login/login-form.module.scss";
import Button from "@/components/forms/buttons/button";


import { useFormState, useFormStatus } from "react-dom";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";
import React from "react";
import userPost from "@/actions/user-post";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button disabled={pending}>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCreate() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <div className={styles.inputs}>
          <Input
            label="Usuário"
            name="username"
            placeholder="usuário"
            type="text"
          />
          <Input
            label="Email"
            name="email"
            placeholder="email"
            type="email"
          />
          <Input
            label="Senha"
            name="password"
            placeholder="senha"
            type="password"
          />

          <ErrorMessage error={state.error} />
        </div>
        <FormButton />
      </form>
    </>
  );
}
