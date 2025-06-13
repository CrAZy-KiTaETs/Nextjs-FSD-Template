'use client';
import { PhoneInput } from '@altricade/react-mask-field';
import clsx from 'clsx';
import { useState } from 'react';

import S from './InputPhone.module.scss';
import type { TInputPhoneProps } from './InputPhone.type';

export const InputPhone = (props: TInputPhoneProps) => {
  const { className, onChange, name = 'phone', errorMsg = 'Номер введен не верно', id } = props;
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const checkForError = () => {
    const cleanedValue = value.replace(/[^+\d]/g, '');

    if (/^(\+7\d{10})$/.test(cleanedValue)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inpValue = event.target.value;
    setValue(inpValue);

    if (onChange) {
      onChange(inpValue.replace(/[^+\d]/g, ''));
    }
  };

  return (
    <PhoneInput
      helperText={errorMsg}
      className={clsx(S.input, className)}
      name={name}
      id={id}
      countryCode="RU"
      required
      onBlur={checkForError}
      onChange={onHandleChange}
      data-error={error}
    />
  );
};
