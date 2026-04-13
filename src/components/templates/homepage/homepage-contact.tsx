import ContactForm from "@/components/composites/contact-form";
import HomepageContactTitle from "@/components/features/homepage/homepage-contact-title";
import { PhoneIcon } from "@/assets/service-icons";

// ── Contact info pill ────────────────────────────────────────────────────────
const ContactPill = ({
                         icon,
                         label,
                         value,
                     }: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <div className="flex items-center gap-3 border border-[#E1BC1C]/20 bg-[#E1BC1C]/[0.05] px-4 py-3">
        <span className="text-[#E1BC1C] flex-shrink-0">{icon}</span>
        <div>
            <p className="text-[#6b7785] text-[10px] tracking-[0.12em] uppercase mb-0.5">
                {label}
            </p>
            <p className="text-[#c8d0da] text-[12.5px]">{value}</p>
        </div>
    </div>
);

// ── Section ──────────────────────────────────────────────────────────────────
const HomepageContact = () => {
    return (
        <section className="relative w-full bg-[#0a0c0f] text-white overflow-hidden">
            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E1BC1C]/40 to-transparent" />

            <div className="w-full 2xl:w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

                {/* ── Left panel — branding + info ── */}
                <div className="relative overflow-hidden">
                    {/* Background image with dark overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url(/images/bg-parallax3.webp)",
                            filter: "grayscale(30%) brightness(0.35)",
                        }}
                    />
                    {/* Directional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c0f]/60 via-[#0a0c0f]/20 to-[#E1BC1C]/[0.06]" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full px-10 lg:px-14 py-14 gap-12">
                        <HomepageContactTitle />

                        {/* Contact info pills at bottom of left panel */}
                        <div className="flex flex-col gap-2.5">
                            <ContactPill
                                icon={
                                    <PhoneIcon className="w-[14px] h-[14px]" />
                                }
                                label="Phone"
                                value="+62-21-2949-0519"
                            />
                            <ContactPill
                                icon={
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                }
                                label="Email"
                                value="info@lydhhlawfirm.com"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Right panel — form ── */}
                <div className="relative bg-[#0d1117] border-t lg:border-t-0 lg:border-l border-[#E1BC1C]/12 px-10 lg:px-14 py-14 flex flex-col justify-center">
                    {/* Left gold accent bar (desktop only) */}
                    <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#E1BC1C]/40 to-transparent hidden lg:block" />

                    <ContactForm />
                </div>
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E1BC1C]/30 to-transparent" />
        </section>
    );
};

export default HomepageContact;