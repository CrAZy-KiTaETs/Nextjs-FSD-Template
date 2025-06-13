'use client';
import clsx from 'clsx';
import { ChangeEvent, useState } from 'react';

import S from './InputPassword.module.scss';
import { TInputProps } from './InputPassword.types';

const standartErrorMsg = 'Пароль должен содержать минимум 6 символов, 1 заглавную и 1 цифру';

export const InputPassword = (props: TInputProps) => {
  const { className, label, onChange, errorMsg = standartErrorMsg, error } = props;
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);

  const onHangleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
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
      <div className={S.passwordWrapper}>
        <input
          onChange={onHangleChange}
          value={value}
          type={show ? 'text' : 'password'}
          className={S.input}
          placeholder="Пароль"
          onBlur={handleBlur}
          data-focused={focused}
          data-error={error && focused}
          required
          pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$"
          name="password"
        />
        <button type="button" className={S.icon} onClick={() => setShow(!show)}>
          {/* {show ? <EyeClosedIcon /> : <EyeIcon />} */}
        </button>
        <span className={S.errorMsg}>{errorMsg}</span>
      </div>
    </div>
  );
};
