import { useField } from "formik";
import React, { FC, useEffect, useState } from "react";
import "./FormikField.scss";
const FormikField: FC<{
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
}> = ({ label, name, type, placeholder, disabled }) => {
  const [field, meta] = useField(name);

  if (type === "textarea") {
    return (
      <div className="formik-field">
        {label && <p className="formik-field__label">{label}</p>}
        <textarea disabled={disabled} {...field} placeholder={placeholder} />
        {meta.error && meta.touched && (
          <p className="formik-field__error">{meta.error}</p>
        )}
      </div>
    );
  }

  return (
    <div className="formik-field">
      {label && <p className="formik-field__label">{label}</p>}
      <input
        disabled={disabled}
        {...field}
        type={type}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && (
        <p className="formik-field__error">{meta.error}</p>
      )}
    </div>
  );
};

export default FormikField;
