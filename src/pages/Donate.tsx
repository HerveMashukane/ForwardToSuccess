import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { btnPrimary, btnSecondary, focusRing, inputBase } from "../lib/ui";

type Step = 1 | 2 | 3;

const PRESET_AMOUNTS = [5, 10, 15, 20, 25, 30, 50, 100] as const;

type Details = {
  fullName: string;
  email: string;
  note: string;
};

const initialDetails: Details = { fullName: "", email: "", note: "" };

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Donate() {
  const [step, setStep] = useState<Step>(1);
  const [amount, setAmount] = useState<string>("25");
  const [customAmount, setCustomAmount] = useState("");
  const [details, setDetails] = useState<Details>(initialDetails);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const numericAmount = useMemo(() => {
    if (amount === "custom") {
      const n = parseFloat(customAmount.replace(",", "."));
      return Number.isFinite(n) ? n : NaN;
    }
    return parseFloat(amount);
  }, [amount, customAmount]);

  const amountError =
    !Number.isFinite(numericAmount) || numericAmount < 1
      ? "Enter a valid amount of at least 1."
      : "";

  const nameError =
    details.fullName.trim().length < 2
      ? "Please enter your full name."
      : "";
  const emailError = !validateEmail(details.email)
    ? "Please enter a valid email."
    : "";

  const markTouched = (field: string) =>
    setTouched((t) => ({ ...t, [field]: true }));

  const canProceedStep1 = !amountError;
  const canProceedStep2 = !nameError && !emailError;

  const goNext = () => {
    if (step === 1 && canProceedStep1) setStep(2);
    if (step === 2 && canProceedStep2) setStep(3);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canProceedStep1 || !canProceedStep2) {
      setTouched({
        amount: true,
        fullName: true,
        email: true,
        custom: amount === "custom",
      });
      return;
    }
    setSubmitted(true);
  };

  const resetFlow = () => {
    setStep(1);
    setAmount("25");
    setCustomAmount("");
    setDetails(initialDetails);
    setTouched({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-lg rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-section">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <i className="bi bi-check-lg text-3xl" aria-hidden />
          </div>
          <h1 className="mb-3 text-heading2 font-bold text-gray-900">
            Thank you
          </h1>
          <p className="mb-2 text-gray-600">
            Your pledge of{" "}
            <span className="font-semibold text-gray-900">
              ${numericAmount.toFixed(2)}
            </span>{" "}
            is recorded. In production, this step would connect to a secure
            payment provider.
          </p>
          <p className="mb-8 text-small text-gray-500">
            We sent a confirmation summary to {details.email.trim()}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" className={btnPrimary} onClick={resetFlow}>
              Make another donation
            </button>
            <Link to="/" className={btnSecondary}>
              Back home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Support our mission
          </p>
          <h1 className="mb-3 text-heading2 font-bold text-gray-900">
            Donate
          </h1>
          <p className="text-gray-600">
            Help keep language programs accessible. Choose an amount, share
            your details, and confirm — simple and transparent.
          </p>
        </div>

        <ol className="mb-10 flex items-center justify-center gap-2 text-small md:gap-4">
          {[
            { n: 1, label: "Amount" },
            { n: 2, label: "Details" },
            { n: 3, label: "Confirm" },
          ].map((s) => (
            <li key={s.n} className="flex items-center gap-2 md:gap-4">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                  step >= s.n
                    ? "bg-brand-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s.n}
              </span>
              <span
                className={
                  step >= s.n ? "font-medium text-gray-900" : "text-gray-500"
                }
              >
                {s.label}
              </span>
              {s.n < 3 && (
                <span className="hidden text-gray-300 sm:inline">—</span>
              )}
            </li>
          ))}
        </ol>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-section"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-heading3 font-semibold text-brand-secondary">
                Choose an amount
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {PRESET_AMOUNTS.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => {
                      setAmount(String(v));
                      markTouched("amount");
                    }}
                    className={`rounded-inputRadius border py-3 text-center font-semibold transition duration-200 ${focusRing} ${
                      amount === String(v)
                        ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    ${v}
                  </button>
                ))}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Custom amount (USD)
                </label>
                <input
                  type="number"
                  min={1}
                  step="0.01"
                  inputMode="decimal"
                  placeholder="e.g. 75"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("custom");
                    markTouched("amount");
                  }}
                  onBlur={() => markTouched("custom")}
                  className={`${inputBase} border-gray-300 py-3 pt-3 focus:ring-brand-primary ${
                    touched.custom && amount === "custom" && amountError
                      ? "border-red-400 focus:ring-red-400"
                      : ""
                  }`}
                />
                {touched.amount && amountError && (
                  <p className="mt-1 text-xs text-red-600">{amountError}</p>
                )}
              </div>
              <button
                type="button"
                className={`${btnPrimary} w-full`}
                onClick={() => {
                  markTouched("amount");
                  if (amount === "custom") markTouched("custom");
                  goNext();
                }}
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-heading3 font-semibold text-brand-secondary">
                Your details
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    id="donate-name"
                    name="fullName"
                    value={details.fullName}
                    onChange={(e) =>
                      setDetails((d) => ({ ...d, fullName: e.target.value }))
                    }
                    onBlur={() => markTouched("fullName")}
                    placeholder=" "
                    autoComplete="name"
                    className={`${inputBase} border-gray-300 focus:ring-brand-primary ${
                      touched.fullName && nameError
                        ? "border-red-400 focus:ring-red-400"
                        : ""
                    }`}
                  />
                  <label
                    htmlFor="donate-name"
                    className="pointer-events-none absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-primary"
                  >
                    Full name
                  </label>
                  {touched.fullName && nameError && (
                    <p className="mt-1 text-xs text-red-600">{nameError}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="donate-email"
                    name="email"
                    type="email"
                    value={details.email}
                    onChange={(e) =>
                      setDetails((d) => ({ ...d, email: e.target.value }))
                    }
                    onBlur={() => markTouched("email")}
                    placeholder=" "
                    autoComplete="email"
                    className={`${inputBase} border-gray-300 focus:ring-brand-primary ${
                      touched.email && emailError
                        ? "border-red-400 focus:ring-red-400"
                        : ""
                    }`}
                  />
                  <label
                    htmlFor="donate-email"
                    className="pointer-events-none absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-brand-primary"
                  >
                    Email
                  </label>
                  {touched.email && emailError && (
                    <p className="mt-1 text-xs text-red-600">{emailError}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="donate-note"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Note (optional)
                  </label>
                  <textarea
                    id="donate-note"
                    name="note"
                    rows={3}
                    value={details.note}
                    onChange={(e) =>
                      setDetails((d) => ({ ...d, note: e.target.value }))
                    }
                    className="w-full rounded-inputRadius border border-gray-300 px-4 py-3 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    placeholder="Dedicated to language scholarships, in honor of…"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row-reverse">
                <button
                  type="button"
                  className={`${btnPrimary} w-full sm:flex-1`}
                  onClick={() => {
                    markTouched("fullName");
                    markTouched("email");
                    goNext();
                  }}
                >
                  Review
                </button>
                <button
                  type="button"
                  className={`${btnSecondary} w-full sm:flex-1`}
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-heading3 font-semibold text-brand-secondary">
                Confirm
              </h2>
              <dl className="space-y-3 rounded-inputRadius bg-page p-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Amount</dt>
                  <dd className="font-semibold text-gray-900">
                    ${numericAmount.toFixed(2)} USD
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Name</dt>
                  <dd className="text-right font-medium text-gray-900">
                    {details.fullName.trim()}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Email</dt>
                  <dd className="break-all text-right font-medium text-gray-900">
                    {details.email.trim()}
                  </dd>
                </div>
                {details.note.trim() && (
                  <div>
                    <dt className="text-gray-500">Note</dt>
                    <dd className="mt-1 text-gray-800">{details.note.trim()}</dd>
                  </div>
                )}
              </dl>
              <p className="text-small text-gray-500">
                By confirming, you agree to our use of your details only to
                process this donation and communicate with you about it.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row-reverse">
                <button type="submit" className={`${btnPrimary} w-full sm:flex-1`}>
                  Confirm donation
                </button>
                <button
                  type="button"
                  className={`${btnSecondary} w-full sm:flex-1`}
                  onClick={() => setStep(2)}
                >
                  Edit details
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
