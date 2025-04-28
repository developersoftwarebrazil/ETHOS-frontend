"use client";
import { useState } from "react";
import styles from "@/app/account/login/login.module.scss";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({username, email });
  }
  return (
    <div className={styles.formContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <div className={styles.links}>
        <a href="#">Esqueceu a senha?</a>
        <p>Ainda não possui uma conta?<br />Cadastre-se no site.</p>
      </div>
    </div>
  );
}
