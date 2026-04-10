type Props = {
  name: string;
  avatar?: string; // 👈 ADD THIS
  className?: string;
};

export default function TeamAvatar({ name, avatar, className }: Props) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className={`h-20 w-20 rounded-full object-cover border-2 border-white shadow-md ${className}`}
      />
    );
  }

  return (
    <div
      className={`h-20 w-20 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold ${className}`}
    >
      {name.charAt(0)}
    </div>
  );
}