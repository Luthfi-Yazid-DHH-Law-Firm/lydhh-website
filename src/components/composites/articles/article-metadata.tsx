import { CalendarIcon, UlistIcon } from "@sanity/icons";

const ArticleMetadata = () => {
  return (
    <div className="w-full text-gray-400 space-y-3">
      <div className="w-full flex gap-5">
        <div className="flex gap-1 items-center">
            <CalendarIcon className="text-lg" />
            <p className="text-sm">June 23 2025</p>
        </div>
        <div className="flex gap-1 items-center">
            <UlistIcon className="text-lg" />
            <p className="text-sm">Business</p>
        </div>
      </div>

      <div className="w-full relative flex flex-col justify-end">
        <div className="absolute w-10 h-[3px] bg-linear-to-r from-[#E1BC1C] to-[#a98e16]" />
        <div className="w-full h-[2px] bg-gray-100" />
      </div>
    </div>
  );
};

export default ArticleMetadata;
