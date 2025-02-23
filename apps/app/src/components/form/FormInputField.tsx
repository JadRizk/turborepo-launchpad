import type { InputProps } from 'ui';
import { Input } from 'ui';
import type { FieldValues, Path } from 'react-hook-form';
import { useFormContext, useController } from 'react-hook-form';
import { FormFieldset } from './FormFieldset';

export type FormInputFieldProps<T> = Omit<
  InputProps,
  'id' | 'name' | 'invalid'
> & {
  path: Path<T>;
  label?: string;
};

export function FormInputField<T extends FieldValues>({
  path,
  type = 'text',
  placeholder,
  label,
  onChange,
  disabled,
  onBlur,
  children,
  ...rest
}: FormInputFieldProps<T>) {
  const { register, control } = useFormContext<T>();

  const { fieldState } = useController<T>({
    name: path,
    control,
  });

  return (
    <FormFieldset<T> label={label} path={path}>
      <Input
        id={path}
        invalid={fieldState.invalid}
        placeholder={placeholder}
        type={type}
        {...rest}
        {...register(path, {
          setValueAs: value => {
            if (!value) return null;
            if (
              type === 'number' ||
              rest.inputMode === 'numeric' ||
              rest.inputMode === 'decimal'
            ) {
              const output = parseFloat(value);
              return isNaN(output) ? undefined : output;
            }
            return value;
          },
          onChange,
          onBlur,
        })}
        autoCapitalize='none'
        autoCorrect='off'
        disabled={disabled}
      >
        {children}
      </Input>
    </FormFieldset>
  );
}
