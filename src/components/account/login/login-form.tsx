"use client";

import styles from "@/components/account/login/login-form.module.scss";
import Button from "@/components/forms/buttons/button";
import Login from "@/actions/login";

import { useFormState, useFormStatus } from "react-dom";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";
import React from "react";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(Login, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(()=>{
    if(state.ok) window.location.href='/account';
  },[state.ok]);
  
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
            label="Senha"
            name="password"
            placeholder="senha"
            type="password"
          />

          <ErrorMessage error={state.error} />
        </div>
        <FormButton />
        <div className={styles.links}>
          <a href="/account/login/lost">Esqueceu a senha?</a>{" "}
          <a href="/account/login/create">Ainda não possui uma conta?</a>
          <button className={styles.register}>Cadastre-se no site</button>
        </div>
      </form>
    </>
  );
}
