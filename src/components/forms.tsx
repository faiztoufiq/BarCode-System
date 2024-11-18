import React from "react";

interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}) => (
  <div className="mb-4">
    {label && (
      <label htmlFor={name} className="block text-sm text-gray-600">
        {label}
      </label>
    )}
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full p-2 border rounded-md"
    />
  </div>
);

export default InputField;
