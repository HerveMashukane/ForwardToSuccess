/** Shared UI class strings for consistent buttons and focus rings across pages. */
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2";

export const btnPrimary =
  `inline-flex items-center justify-center gap-2 font-semibold rounded-btnRadius px-btnX py-btnY shadow-btnShadow transition duration-200 ease-out bg-brand-accent text-white hover:bg-brand-accent-hover active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 ${focusRing}`;

export const btnSecondary =
  `inline-flex items-center justify-center gap-2 font-semibold rounded-btnRadius border border-gray-300 bg-white px-btnX py-btnY text-gray-800 transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 ${focusRing}`;

export const btnOnDark =
  `inline-flex items-center justify-center gap-2 font-semibold rounded-btnRadius px-btnX py-btnY shadow-btnShadow transition duration-200 ease-out bg-brand-accent text-white hover:bg-brand-accent-hover active:scale-[0.98] ${focusRing}`;

export const inputBase =
  "peer w-full rounded-inputRadius border bg-white px-4 pt-5 pb-2 text-gray-900 transition duration-200 placeholder:text-transparent focus:outline-none focus:ring-2";
