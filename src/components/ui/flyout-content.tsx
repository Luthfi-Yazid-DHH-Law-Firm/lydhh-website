import { FlyOutLink } from "@/types/flyout-content.types";

interface FlyOutContentProps {
  flyOutList: FlyOutLink[];
}

const FlyOutContent: React.FC<FlyOutContentProps> = ({ flyOutList }) => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 flex flex-col space-y-3">
        {
            flyOutList.map((link, i) => (
                <a key={i} href={link.href} className="blox text-sm hover:underline">
                    {link.title}
                </a>
            ))
        }
        </div>
    </div>
  );
};

export default FlyOutContent;
