import MemberProfileDetail from "@/components/features/team/member-profile-detail";
import { MEMBER_QUERYResult } from "@/sanity/types";
import { FC } from "react";

interface MemberProfileProps {
    member: MEMBER_QUERYResult;
}

const MemberProfile: FC<MemberProfileProps> = ({ member }) => {
    return (
        <section className="relative w-full bg-[#f9f7f4] py-20 overflow-x-hidden">
            {/* Top gold divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

            <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-16">
                <MemberProfileDetail member={member} />
            </div>

            {/* Bottom gold divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
    );
};

export default MemberProfile;