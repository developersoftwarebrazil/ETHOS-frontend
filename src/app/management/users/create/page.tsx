"use client";
import FormCreate, { FormField } from "@/components/forms/create/form-create";
import React, { useState } from "react";

export default function CreateUserPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      setErrors({ confirmPassword: "Senha não conhecidem" });
    } else {
      setErrors({});
      console.log("Dados enviado:", values);
    }
  };

  const fields: FormField[]  = [
    { name: "username", label: "Usuário", required: true, component: "input" },
    { name: "password", label: "Senha", type: "password", required: true, component: "input",
    },
    {name: "confirmPassword",label: "Confirmar senha",type: "password",required: true,component: "input",
    },
  ];
  return (
    <FormCreate
      title="Adicionar usuário"
      fields={fields}
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
}
