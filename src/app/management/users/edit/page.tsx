'use client'

import FormEdit from "@/components/forms/edit/form-edit";
import { FormField } from "@/types/form-fields";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditUserPage() {
  const router = useRouter();

  const [values, setValues] = useState({
    username: "exemplo@user.com",
    fullName: "",
    email: "",
    active: true,
    superuser: false,
    lastLoginDate: "2025-05-10",
    lastLoginTime: "14:30",
    registeredDate: "2024-12-01",
    registeredTime: "09:00",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validação simples
    const newErrors: Record<string, string> = {};
    if (!values.fullName.trim()) newErrors.fullName = "Campo obrigatório";
    if (!values.email.trim()) newErrors.email = "Campo obrigatório";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Salvar usuário:", values);
    setErrors({});
  };

const fields: FormField[] = [
  {
    name: "username",
    label: "usuário",
    type: "text",
    disabled: true,
    required: true,
    component: "input",
  },
  {
    section: "Informações Pessoais",
    name: "fullName",
    label: "nome completo",
    type: "text",
    disabled: true,
    required: true,
    component: "input",
  },
  {
    section: "Informações Pessoais",
    name: "email",
    label: "endereço de email",
    type: "email",
    disabled: false,
    required: true,
    component: "input",
  },
  {
    section: "Permissões",
    name: "active",
    label: "ativo?",
    type: "checkbox",
    disabled: false,
    component: "checkbox",
  },
  {
    section: "Permissões",
    name: "superuser",
    label: "status de super usuário",
    type: "checkbox",
    disabled: false,
    component: "checkbox",
  },
  {
    section: "Datas importantes",
    name: "lastLoginDate",
    label: "último login (data)",
    type: "date",
    disabled: true,
    component: "input",
  },
  {
    section: "Datas importantes",
    name: "lastLoginTime",
    label: "último login (hora)",
    type: "time",
    disabled: true,
    component: "input",
  },
  {
    section: "Datas importantes",
    name: "registeredDate",
    label: "data de registro",
    type: "date",
    disabled: true,
    component: "input",
  },
  {
    section: "registeredDate",
    name: "registeredTime",
    label: "hora de registro",
    type: "time",
    disabled: true,
    component: "input",
  },
];

  return (
    <FormEdit
      title="Modificar usuário para editar"
      subtitle={values.username}
      fields={fields}
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
      submitLabel="Salvar alterações"
      headerButtonLabel="histórico"
      onHeaderButtonClick={() => router.push("/management/users/history")}
    />
  );
}
