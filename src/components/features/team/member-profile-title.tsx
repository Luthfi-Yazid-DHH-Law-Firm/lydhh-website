import { Playfair_Display } from "next/font/google";

const playFairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
});

const MemberProfileTitle = () => {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center text-center">
      <h6 className="text-sm text-[#9B6F45]">Team Member</h6>
      <h3 className="text-3xl font-semibold">
        You will introduce with our
        <br /> expert team{" "}
        <span
          className={`${playFairDisplay.className} bg-linear-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent`}
        >
          member
        </span>
      </h3>
      <div className="h-1 w-12 bg-linear-to-r from-[#E1BC1C] to-[#a98e16] rounded" />
    </div>
  );
};

export default MemberProfileTitle;
