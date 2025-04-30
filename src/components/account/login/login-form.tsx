"use client";

import styles from "@/components/account/login/login-form.module.scss";
import InputField from "@/components/forms/inputs/InputFields";
import Button from "@/components/forms/buttons/button";
import Login from "@/actions/login";

import { useFormState, useFormStatus } from "react-dom";

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

  return (
    <>
      <form action={action} className={styles.form}>

        <div className={styles.inputs}>
          <InputField
            id="username"
            name="username"
            type="text"
            placeholder="Usuário"
            label="Usuário"
           
          />

          <InputField
            id="passwoerd"
            name="password"
            label="Senha"
            type="password"
            placeholder="Senha"
           
          />
          <p>{state.error}</p>
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
