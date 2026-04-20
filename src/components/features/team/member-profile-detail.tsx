import MemberBio from "@/components/composites/team/member-bio";
import MemberProfileImage from "@/components/composites/team/member-profile-image";
import { MEMBER_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { FC } from "react";

interface MemberProfileDetailProps {
    member: MEMBER_QUERYResult;
}

const BackIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
    >
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const MemberProfileDetail: FC<MemberProfileDetailProps> = ({ member }) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
            {/* ── Left: image card ── */}
            <MemberProfileImage
                image={member?.image}
                name={member?.name}
                position={member?.position}
            />

            {/* ── Right: bio ── */}
            <div className="flex flex-col">
                {/* Back link */}
                <Link
                    href="/team"
                    className="inline-flex items-center gap-1.5 text-[#8a8a8a] text-[11px] tracking-[0.1em] uppercase mb-8 hover:text-[#c9a84c] transition-colors duration-200 group w-fit"
                >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
            <BackIcon />
          </span>
                    Back to Team
                </Link>

                {/* Eyebrow */}
                <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-3">
                    Team Member
                </p>

                {/* Name */}
                <h1 className="text-[#0d1117] text-3xl lg:text-4xl font-light leading-snug mb-2">
                    {member?.name ?? ""}
                </h1>

                {/* Position */}
                {member?.position && (
                    <p className="text-[#8a8a8a] text-sm mb-4">{member.position}</p>
                )}

                {/* Gold rule */}
                <div className="w-9 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded mb-8" />

                {/* Bio */}
                <MemberBio member={member} />

                {/* Contact strip */}
                <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-black/[0.07]">
                    <div className="flex items-center gap-2 border border-[#c9a84c]/25 bg-[#c9a84c]/[0.04] px-3.5 py-2.5 text-[#4a4a4a] text-[12px]">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Jakarta, Indonesia
                    </div>
                    <div className="flex items-center gap-2 border border-[#c9a84c]/25 bg-[#c9a84c]/[0.04] px-3.5 py-2.5 text-[#4a4a4a] text-[12px]">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        info@lydhhlawfirm.com
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfileDetail;