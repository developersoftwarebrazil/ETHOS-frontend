import "../../styles/input.module.scss";

// components/shared/InputField.tsx
import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
