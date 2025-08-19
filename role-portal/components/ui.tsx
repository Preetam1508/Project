"use client";

import React from "react";

export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">
      {children}
    </label>
  );
}

export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }
) {
  const { label, id, className, ...rest } = props;
  return (
    <div>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <input
        id={id}
        className={`w-full border rounded-md px-3 py-2 text-sm bg-transparent ${className ?? ""}`}
        {...rest}
      />
    </div>
  );
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }
) {
  const { label, id, className, children, ...rest } = props;
  return (
    <div>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <select
        id={id}
        className={`w-full border rounded-md px-3 py-2 text-sm bg-transparent ${className ?? ""}`}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }
) {
  const { variant = "primary", className, ...rest } = props;
  const base =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-black/[.08] dark:border-white/[.145] hover:bg-foreground hover:text-background";
  return (
    <button
      className={`px-4 py-2 rounded text-sm transition disabled:opacity-50 ${base} ${className ?? ""}`}
      {...rest}
    />
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white/50 dark:bg-black/20 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

