import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found | Luthfi Yazid & DHH Law Firm"
};

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center pt-20">
      <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-center shadow-2xl p-5 lg:p-20 gap-y-5">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-center">Opps! Page is not found</h1>
          <span className="w-12 h-1 rounded bg-[#d5aa6d]" />
        </div>
        <p className="text-center">Sorry, we can&apos;t seem to find what you&apos;re looking for.</p>
        <Image 
          src="/images/image-404.png"
          alt="Page Not Found"
          height="400"
          width="400"
          className="aspect-video"
        />
        <Link href="/" className="mt-10 bg-linear-to-r from-[#E1BC1C] to-[#ba9b12] px-4 py-2 rounded-md">
          Back to Home
        </Link>
      </div>
    </div>
  );
}