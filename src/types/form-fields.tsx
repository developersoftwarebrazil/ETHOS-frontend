// src/types/form-field.ts

export type FormField = {
  name: string;
  label: string;
  type: "text" | "password" | "email" | "checkbox" | "date" | "time"; // obrigatoriamente definido
  required?: boolean;
  disabled?: boolean;
  section?: string;
  component?: "input" | "inputField" | "checkbox";
  placeholder?: string;
};
