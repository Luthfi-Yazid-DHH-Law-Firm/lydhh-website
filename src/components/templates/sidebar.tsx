import { MenuIcon } from "@sanity/icons";
import { useState } from "react";
import Sheet from "@/components/ui/sheet";
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
          <Sheet.Close className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors bg-transparent justify-start">
            <Link href="/about-us" >
              About
            </Link>
          </Sheet.Close>
          <Sheet.Close className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors bg-transparent justify-start">
            <Link href="/team" >
              Our Team
            </Link>
          </Sheet.Close>
          <Sheet.Close className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors bg-transparent justify-start">
            <Link href="/our-services" >
              Services
            </Link>
          </Sheet.Close>
          <Sheet.Close className="text-black w-full py-3 px-4 rounded-sm hover:bg-gray-100 hover:text-[#997d03] hover:transition-colors bg-transparent justify-start">
            <Link href="/articles" >
              Articles
            </Link>
          </Sheet.Close>
          <Sheet.Close className="bg-transparent mt-10">
            <Link href="/contact" 
              className="bg-linear-to-r from-[#E1BC1C] to-[#a98e16] text-white w-full py-3 px-4 rounded-sm hover:transition-colors text-center"
            >
              Contact Us
            </Link>
          </Sheet.Close>
        </Sheet.Content>
      </Sheet>
    </>
  );
};

export default Sidebar;
