import MemberProfileDetail from "@/components/features/team/member-profile-detail";
import MemberProfileTitle from "@/components/features/team/member-profile-title";

const MemberProfile = () => {
  return (
    <section className="w-full flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="w-full 2xl:w-[1440px] flex flex-col items-center gap-10 justify-center">
        <MemberProfileTitle />
        <MemberProfileDetail />
      </div>
    </section>
  );
};

export default MemberProfile;
