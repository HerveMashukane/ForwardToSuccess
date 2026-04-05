type Props = {
  name: string;
  className?: string;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function TeamAvatar({ name, className = "" }: Props) {
  const label = initials(name);
  return (
    <div
      className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-accent/40 bg-gradient-to-br from-brand-primary/15 to-brand-accent/20 text-xl font-bold text-brand-primary shadow-inputShadow ${className}`}
      aria-hidden
    >
      {label}
    </div>
  );
}
