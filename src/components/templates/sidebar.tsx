import { MenuIcon } from "@sanity/icons";
import { useState } from "react";
import Sheet from "../ui/sheet";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="w-6 h-6 flex justify-center items-center lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="text-white text-2xl" />
      </button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Menu"
        size="sm"
      >
        <Sheet.Content className="space-y-1 h-full flex flex-col">
          <Link href="/about-us" className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors">
            About
          </Link>
          <Link href="/team" className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors">
            Our Team
          </Link>
          <Link href="/our-services" className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors">
            Services
          </Link>
          <Link href="/articles" className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors">
            Articles
          </Link>
          <Link href="/gallery" className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors">
            Gallery
          </Link>
          <Link href="/contact" 
            className="bg-linear-to-r from-[#E1BC1C] to-[#a98e16] text-white w-full py-3 px-4 rounded-sm hover:transition-colors text-center mt-auto"
          >
            Contact Us
          </Link>
        </Sheet.Content>
      </Sheet>
    </>
  );
};

export default Sidebar;
