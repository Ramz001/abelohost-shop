import React, { useMemo } from "react";
import styles from "./form-error.module.scss";

export interface FormErrorProps extends React.ComponentProps<"div"> {
  errors?: Array<{ message?: string } | undefined>;
}

export const FormError: React.FC<FormErrorProps> = ({
  errors,
  children,
  ...props
}) => {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors?.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className={styles.ErrorList}>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) return null;

  return (
    <div className={styles.FormError} {...props}>
      {content}
    </div>
  );
};
