import React, { RefObject } from 'react';
import { useController, Control } from 'react-hook-form';
import { StyledTextarea } from './styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  name: string;
  control: Control<any>;
  defaultValue?: string;
  ref?: RefObject<HTMLTextAreaElement>;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  name,
  control,
  ref,
  defaultValue = '',
  ...props
 
}) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, defaultValue });

  return (
    <StyledTextarea
      {...props}
      ref={ref} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
