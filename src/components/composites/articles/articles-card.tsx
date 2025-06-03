import { CalendarIcon } from "@sanity/icons";
import Image from "next/image";
import Link from "next/link";

const ArticlesCard = () => {
  return (
    <div className="shadow-sm">
      <Image
        src="/blog7.jpg"
        alt="blog-picture"
        width={350}
        height={350}
        className="w-full h-64 object-cover"
      />
      <div className="p-8 space-y-2 bg-white">
        <div className="flex items-center gap-3 text-[#999999]">
          <CalendarIcon className="text-lg" />
          <p className="text-sm">18 June 2025</p>
        </div>
        <p className="text-xl font-semibold mb-8">
          Strategy for Norway&apos;s Peion Fund Global
        </p>
        <Link
          href="/articles/test-article"
          className="bg-gray-300 text-[#333] py-2 px-4 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] hover:bg-linear-to-l hover:from-[#D5AA6D] hover:to-[#9B6F45] hover:text-white transition-colors"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
