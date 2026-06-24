import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  badge,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-brand-navy-card p-8 border border-white/5 hover:border-brand-gold/25 hover:shadow-2xl hover:shadow-brand-gold/5 hover:-translate-y-1 transition-all duration-500 ${className}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Icon */}
      <div className="mb-6 inline-flex rounded-xl bg-brand-gold/10 p-3 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
        {icon}
      </div>

      {/* Optional Badge */}
      {badge && (
        <span className="absolute top-6 right-6 inline-block rounded-full bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-brand-gold uppercase">
          {badge}
        </span>
      )}

      {/* Text Content */}
      <h3 className="mb-3 font-serif text-xl font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}
