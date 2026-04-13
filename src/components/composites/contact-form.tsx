"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validationSchema";
import { easeIn } from "motion";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";

// ── Underline field wrapper ──────────────────────────────────────────────────
interface FieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

const Field = ({ label, icon, error, children }: FieldProps) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#E1BC1C] text-[10px] tracking-[0.18em] uppercase font-medium">
        {label}
      </label>
      <div
          className={`flex items-start gap-2.5 border-b pb-2.5 transition-colors duration-200
        ${error ? "border-red-500/60" : "border-white/12 focus-within:border-[#E1BC1C]/50"}`}
      >
      <span className="opacity-40 focus-within:opacity-80 transition-opacity mt-0.5 flex-shrink-0">
        {icon}
      </span>
        {children}
      </div>
      {error && (
          <p className="text-red-400 text-[11px] mt-0.5">{error}</p>
      )}
    </div>
);

const inputClass =
    "w-full bg-transparent border-none outline-none text-[#e0e6ee] text-[13.5px] placeholder:text-white/25 font-sans";

// ── Icons ────────────────────────────────────────────────────────────────────
const UserIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1BC1C" strokeWidth="1.5" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
);

const MailIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1BC1C" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
);

const SubjectIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1BC1C" strokeWidth="1.5" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
    </svg>
);

const MessageIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1BC1C" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

// ── Main form ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: { name: "", subject: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <AnimationWrapper
          classname="w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeIn, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Full name */}
          <Field label="Full Name" icon={<UserIcon />} error={errors.name?.message}>
            <input
                className={inputClass}
                placeholder="Your full name"
                {...register("name")}
            />
          </Field>

          {/* Email + Subject row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Email Address" icon={<MailIcon />} error={errors.email?.message}>
              <input
                  type="email"
                  className={inputClass}
                  placeholder="your@email.com"
                  {...register("email")}
              />
            </Field>
            <Field label="Subject" icon={<SubjectIcon />} error={errors.subject?.message}>
              <input
                  className={inputClass}
                  placeholder="How can we help?"
                  {...register("subject")}
              />
            </Field>
          </div>

          {/* Message */}
          <Field label="Message" icon={<MessageIcon />} error={errors.message?.message}>
          <textarea
              className={`${inputClass} resize-none h-[100px] pt-0.5`}
              placeholder="Tell us about your legal matter..."
              {...register("message")}
          />
          </Field>

          {/* Submit row */}
          <div className="flex items-center justify-between gap-6 mt-2">
            <p className="text-white/30 text-[11.5px] leading-relaxed hidden sm:block">
              We typically respond within
              <br />
              one business day.
            </p>
            <button
                type="submit"
                disabled={isSubmitting}
                className="flex-shrink-0 bg-gradient-to-r from-[#E1BC1C] to-[#a98e16] text-[#0a0c0f] text-[11px] tracking-[0.18em] uppercase font-semibold px-8 py-3.5 transition-opacity duration-200 hover:opacity-85 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </div>

          {/* Success message */}
          {submitSuccess && (
              <div className="flex items-center gap-3 border border-[#E1BC1C]/30 bg-[#E1BC1C]/8 px-5 py-3.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1BC1C" strokeWidth="2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-[#E1BC1C] text-sm">
                  Thank you — your message has been sent successfully.
                </p>
              </div>
          )}
        </form>
      </AnimationWrapper>
  );
}