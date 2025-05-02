"use client";

import styles from "@/components/account/login/login-form.module.scss";
import Button from "@/components/forms/buttons/button";
import Login from "@/actions/login";

import { useFormState, useFormStatus } from "react-dom";
import Input from "@/components/forms/inputs/input";
import ErrorMessage from "@/components/helpers/error-messager";
import React from "react";
import Link from "next/link";

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
            label="Senha"
            name="password"
            placeholder="senha"
            type="password"
          />

          <ErrorMessage error={state.error} />
        </div>
        <FormButton />
        <div className={styles.links}>
          <Link href="/account/login/lost" className={styles.lost}>
            Esqueceu ou perdeu a senha?
          </Link>

          <div className={styles.register}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
              <p>Ainda não possui uma conta?  Cadastre-se no site.</p>  
          </div>
          <Link className={styles.register_button} href='/account/login/create'>
            Cadastre-se no site
          </Link>
      
        </div>
      </form>
    </>
  );
}
