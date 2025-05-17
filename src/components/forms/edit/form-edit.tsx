"use client";

import styles from "../../styles/form-edit.module.scss";

import FormBody from "../body/form-body";
import InputField from "../inputs/InputFields";
import Input from "../inputs/input";
import Checkbox from "../inputs/checkboxe"; // Crie esse componente se não existir
import { FormField } from "@/types/form-fields";

interface FormEditProps {
  title: string;
  subtitle?: string;
  fields: FormField[];
  values: Record<string, string | boolean>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors?: Record<string, string>;
  submitLabel?: string;
  headerButtonLabel?: string;
  onHeaderButtonClick?: () => void;
}

export default function FormEdit({
  title,
  subtitle,
  fields,
  values,
  onChange,
  onSubmit,
  errors = {},
  submitLabel = "Salvar",
  headerButtonLabel,
  onHeaderButtonClick,
}: FormEditProps) {
  const groupedFields = fields.reduce((acc, field) => {
    const section = field.section || "default";
    acc[section] = acc[section] || [];
    acc[section].push(field);
    return acc;
  }, {} as Record<string, FormField[]>);

  return (
    <FormBody
      title={title}
      buttonLabel={headerButtonLabel}
      onButtonClick={onHeaderButtonClick}
    >
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <form onSubmit={onSubmit} className={styles.formWrapper}>
        {Object.entries(groupedFields).map(([section, sectionFields]) => (
          <div key={section}>
            {section !== "default" && (
              <h3 className={styles.sectionTitle}>{section.toUpperCase()}</h3>
            )}
            <div className={styles.inputFields}>
              {sectionFields.map((field) => {
                const commonProps = {
                  name: field.name,
                  label: field.label,
                  placeholder: field.placeholder || "",
                  type: field.type || "text",
                  value: String(values[field.name] ?? ""),
                  onChange,
                  required: field.required,
                  disabled: field.disabled,
                };

                if (field.component === "inputField") {
                  return (
                    <InputField
                      key={field.name}
                      id={field.name}
                      {...commonProps}
                    />
                  );
                }

                if (field.component === "checkbox") {
                  return (
                    <Checkbox
                      key={field.name}
                      id={field.name}
                      label={field.label}
                      checked={!!values[field.name]}
                      onChange={onChange}
                    />
                  );
                }

                return (
                  <span className="error" key={field.name}>
                    <Input error={errors[field.name]} {...commonProps} />
                  </span>
                );
              })}
            </div>
          </div>
        ))}
        <button type="submit" className={styles.buttonSubmit}>
          {submitLabel}
        </button>
      </form>
    </FormBody>
  );
}
