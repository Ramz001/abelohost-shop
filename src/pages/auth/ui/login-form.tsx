/* eslint-disable react/no-children-prop */
"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { Spinner } from "@shared/ui/spinner";
import { FormError } from "@shared/ui/form-error";
import { handleError } from "@shared/utils/handle-error";
import { useRouter } from "next/navigation";
import { LoginSchema } from "../models/login.schema";
import { authApi } from "@shared/api/auth.api";
import styles from "./login-form.module.scss";

export function LoginForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    validators: {
      onSubmit: LoginSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await authApi.login(value);

        if (!response.success) {
          // toast.error(response.message || "Authentication failed");
          return;
        }

        toast.success("Successfully logged in");
        router.push("/");
      } catch (error) {
        handleError(error);
      }
    },
  });

  return (
    <section className={styles.section}>
      <form
        id="login-form"
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
      >
        <form.Field
          name="username"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div className={styles.fieldWrapper} data-invalid={isInvalid}>
                <label htmlFor={field.name} className={styles.label}>
                  Username
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Enter your username"
                  autoComplete="username"
                  className={styles.input}
                />
                {isInvalid && <FormError errors={field.state.meta.errors} />}
              </div>
            );
          }}
        />

        <form.Field
          name="password"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div className={styles.fieldWrapper} data-invalid={isInvalid}>
                <label htmlFor={field.name} className={styles.label}>
                  Password
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className={styles.input}
                />
                {isInvalid && <FormError errors={field.state.meta.errors} />}
              </div>
            );
          }}
        />
      </form>

      <form.Subscribe
        selector={(state) => state.isSubmitting}
        children={(isSubmitting) => (
          <button
            type="submit"
            form="login-form"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? <Spinner /> : "Login"}
          </button>
        )}
      />
    </section>
  );
}
