"use client";

import userPost from "@/actions/user-post";

import styles from "@/app/account/login/styles/login-form.module.scss"

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
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button disabled={pending}>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCreateForm() {
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
