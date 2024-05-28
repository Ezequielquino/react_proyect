// import { Input } from "@nextui-org/react";

// export default function InputPrimary(
//     props: {
//         label: string

//     }
// ) {
//     return (
//         <Input
//             label={props.label}
//             size="sm"
//             classNames={
//                 {
//                     inputWrapper: "bg-background_secondary rounded-lg",
//                     input: "border-none text-foreground font-semibold",
//                     label: "text-middle_ground"
//                 }
//             }
//         />
//     )
// }

import React, { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import { Input } from '@nextui-org/react';

interface InputPrimaryProps {
  fullWidth?: boolean;
  label: string;
  name: string;
  value: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  error?: boolean;
  helperText?: string;
  size?: 'medium' | 'small';
  disabled?: boolean;
  minRows?: string | number;
  rows?: string | number;
  multiline?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputPrimary: FC<InputPrimaryProps> = ({
  fullWidth = false,
  label,
  name,
//   value,
//   defaultValue,
  placeholder,
  type = 'text',
  error = false,
  helperText,
  size = 'medium',
  disabled = false,
  minRows,
  rows,
  multiline = false,
  onChange,
}) => {
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      <Input
        label={label}
        name={name}
        // value={value}
        // defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
       // error={error}
        disabled={disabled}
        fullWidth={fullWidth}
        onChange={(e) => onChange && onChange(e as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)}
        {...(multiline ? { as: 'textarea', rows: rows ?? minRows } : {})}
        size={size === 'small' ? 'sm' : 'md'}
      />
      {error && helperText && <p className="text-sm text-red-500 mt-1">{helperText}</p>}
    </div>
  );
};

export default InputPrimary;