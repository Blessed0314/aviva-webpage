import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "gold";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-navy focus:ring-brand-gold";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20",
    secondary:
      "bg-brand-navy-light border border-white/10 text-gray-200 hover:bg-white/5 hover:border-white/20",
    outline:
      "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy hover:shadow-lg hover:shadow-brand-gold/20",
    gold:
      "bg-brand-gold text-brand-navy font-semibold hover:bg-brand-gold-hover hover:shadow-lg hover:shadow-brand-gold/30",
    text:
      "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const widthStyle = fullWidth ? "w-full flex" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
