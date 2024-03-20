import type { ReactNode } from "react";
import { cn, Label } from "ui";
import { ErrorMessage } from "@hookform/error-message";
import type { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "react-hook-form";

export type FormFieldsetProps<T> = {
  path: Path<T>;
  label?: string;
  children?: ReactNode;
};

export function FormFieldset<T extends FieldValues>({
  path,
  label,
  children,
}: FormFieldsetProps<T>) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="flex flex-col gap-1">
      <Label className="sr-only" htmlFor={path}>
        {label}
      </Label>
      {children}

      <ErrorMessage
        errors={errors}
        name={path}
        render={({ message }: { message: string }) => (
          <p
            className={cn([
              "text-sm",
              "leading-tight",
              "text-red-500",
              "dark:text-red-400",
              "font-medium",
            ])}
          >
            {message}
          </p>
        )}
      />
    </fieldset>
  );
}
