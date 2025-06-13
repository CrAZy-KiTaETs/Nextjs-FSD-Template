'use client';
import clsx from 'clsx';
import { ChangeEvent, useState } from 'react';

import S from './Input.module.scss';
import { TInputProps } from './Input.types';

export const Input = (props: TInputProps) => {
  const {
    className,
    placeholder,
    errorMsg,
    label,
    type = 'text',
    onChange,
    required,
    pattern,
    inputMode,
    name,
    error,
  } = props;

  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const onHangleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (inputMode === 'numeric') {
      newValue = newValue.replace(/[^+\d]/g, '');
    }
    setFocused(false);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className={clsx(S.inputWrapper, className)}>
      <label>{label}</label>
      <input
        onChange={onHangleChange}
        value={value}
        type={type}
        className={S.input}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        onBlur={handleBlur}
        data-focused={focused}
        data-error={error && focused}
        inputMode={inputMode}
        name={name}
      />
      <span className={S.errorMsg}>{errorMsg}</span>
    </div>
  );
};
