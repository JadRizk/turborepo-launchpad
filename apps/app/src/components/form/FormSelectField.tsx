import type { FieldValues, Path } from 'react-hook-form';
import { useFormContext, useController } from 'react-hook-form';
import { FormFieldset } from './FormFieldset';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ui';

export type FormSelectFieldProps<T> = {
  path: Path<T>;
  label?: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
};

export function FormSelectField<T extends FieldValues>({
  path,
  label,
  options,
  disabled,
}: FormSelectFieldProps<T>) {
  const { control, setValue } = useFormContext<T>();

  const {
    field: { value },
    fieldState,
  } = useController<T>({ name: path, control });

  return (
    <FormFieldset<T> label={label} path={path}>
      <Select
        value={value}
        onValueChange={val => setValue(path, val as any)}
        disabled={disabled}
      >
        <SelectTrigger id={path}>
          <SelectValue placeholder='Select an option' />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormFieldset>
  );
}
