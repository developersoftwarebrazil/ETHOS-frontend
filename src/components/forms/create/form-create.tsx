"use client";
import React from "react";

import styles from "../../styles/form-create.module.scss";

import FormBody from "../body/form-body";
import InputField from "../inputs/InputFields";
import Input from "../inputs/input";

export interface FormField {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  component?: "input" | "inputField";
  required?: boolean;
}
interface FormCreateProps {
  title: string;
  fields: FormField[];
  values: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: Record<string, string>;
  submitLabel?: string;
}

export default function FormCreate({
  title,
  fields,
  values,
  onChange,
  onSubmit,
  errors = {},
  submitLabel = "Salvar",
}: FormCreateProps) {
  return (
    <FormBody title={title}>
      <form onSubmit={onSubmit} className={styles.form}>
        {fields.map((field) => {
          const commomProps = {
            key: field.name,
            name: field.name,
            label: field.label,
            placeholder: field.placeholder || "",
            type: field.type || "text",
            value: values[field.name] || "",
            onChange,
            required: field.required,
          };
          return field.component === "inputField" ? (
            <InputField id={field.name} {...commomProps} />
          ) : (
            <Input error={errors[field.name]} {...commomProps} />
          );
        })}
        <button type="submit" className={styles.button}>{submitLabel}</button>
      </form>
    </FormBody>
  );
}
