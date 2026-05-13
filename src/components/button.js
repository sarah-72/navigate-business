"use client";

import Link from "next/link";

export function Button({
  children,
  href,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-(--primary) text-(--primary-foreground) hover:bg-(--primary)/90",
    outline:
      "border border-(--input) bg-transparent hover:bg-(--accent) hover:text-(--accent-foreground)",
    ghost: "hover:bg-(--accent) hover:text-(--accent-foreground)",
    secondary:
      "bg-(--secondary) text-(--secondary-foreground) hover:bg-(--secondary)/80",
    link: "text-(--primary) underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-9 px-3",
    default: "h-10 px-4",
    lg: "h-11 px-6",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}