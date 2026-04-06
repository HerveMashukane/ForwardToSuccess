const DEFAULT_PHONE = "243901284995";
const DEFAULT_MESSAGE =
  "Hello ForwardToSuccess, I would like to know more about your programs.";

type Props = {
  phone?: string;
  message?: string;
};

export default function WhatsAppFloat({
  phone = DEFAULT_PHONE,
  message = DEFAULT_MESSAGE,
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 ease-out hover:scale-110 hover:shadow-xl active:scale-95 md:bottom-8 md:right-8 animate-bounce"
    >
      <i className="bi bi-whatsapp text-2xl" aria-hidden />
    </a>
  );
}
