import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface MemberCardProps {
    name: string;
    position: string;
    imgUrl?: string;
};

const MemberCard: FC<MemberCardProps> = ({ name, position, imgUrl }) => {
  return (
    <Link href="" className="relative w-full h-96 overflow-hidden group cursor-pointer">
        <Image
            src={imgUrl || "/founder-image.webp"}
            alt={name}
            fill
            className="object-cover"
        />
        
        <div className="absolute inset-x-0 bottom-0 h-0 bg-black/80 group-hover:h-full transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                See Profile
            </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm opacity-90">{position}</p>
        </div>
    </Link>
  );
};

export default MemberCard;