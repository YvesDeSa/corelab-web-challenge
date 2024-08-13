import React from 'react';
import { useController, Control } from 'react-hook-form';
import { StyledInput } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
  control?: Control<any>;
  defaultValue?: string;
  useControllerFlag?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  control,
  defaultValue = '',
  useControllerFlag = true,
  ...props
}) => {
  // Initialize field with props by default
  let field = {
    value: props.value,
    onChange: props.onChange,
  };

  // If useControllerFlag is true and control is provided, use useController
  if (useControllerFlag && control) {
    const controller = useController({ name, control, defaultValue });
    field = controller.field;
  }

  return (
    <StyledInput
      {...props}
      placeholder={placeholder}
      value={field.value}
      onChange={field.onChange}
    />
  );
};
