"use client";
import { useState } from "react";
import styles from "@/app/account/login/login.module.scss";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ username, email });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label id={username}>Usuário</label>
      <input
        id={username}
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label id={email}>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Entrar</button>

      <div className={styles.links}>
        <a href="#">Esqueceu a senha?</a>
        <a href="#">Ainda não possui uma conta? Cadastre-se no site.</a>
      </div>
    </form>
  );
}
