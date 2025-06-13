import { HTMLInputTypeAttribute } from 'react';

export type TInputProps = {
  className?: string;
  placeholder?: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  pattern?: string;
  errorMsg?: string;
  inputMode?: 'email' | 'search' | 'tel' | 'text' | 'url' | 'numeric' | 'none' | 'decimal';
  error?: boolean;
};
