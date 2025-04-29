"use client";
import { useState } from "react";
import styles from "@/components/account/login/login-form.module.scss";
import InputField from "@/components/forms/inputs/InputFields";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ username, email });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <InputField
          id="username"
          label="Usuário"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
          required
        />

        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <button className={styles.enter} type="submit">
          Entrar
        </button>
      </div>
      <div className={styles.links}>
        <a href="#">Esqueceu a senha?</a>{" "}
        <a href="#">Ainda não possui uma conta?</a>
        <button className={styles.register}>Cadastre-se no site</button>
      </div>
    </form>
  );
}
