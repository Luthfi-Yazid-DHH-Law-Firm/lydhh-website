import {
    Shield, TrendingDown, Radio, Leaf, Building2, Stethoscope,
    Pickaxe, Landmark, Scale, User, Users, ChevronsRight
} from "lucide-react";
import {ReactNode} from "react";

// Icon mapper function - add outside your Navbar component
export const getPracticeAreaIcon = (name: string | null | undefined) => {
    const iconMap: Record<string, ReactNode> = {
        "Insurances Law": <Shield className="w-4 h-4" />,
        "Liquidation Law": <TrendingDown className="w-4 h-4" />,
        "Telecommunication Law": <Radio className="w-4 h-4" />,
        "Environmental Law": <Leaf className="w-4 h-4" />,
        "General Corporate Law": <Building2 className="w-4 h-4" />,
        "Medical Malpractice Law": <Stethoscope className="w-4 h-4" />,
        "Mining, Oil, and Gas Law": <Pickaxe className="w-4 h-4" />,
        "Islamic Banking (Syariah Banking Law)": <Landmark className="w-4 h-4" />,
        "Our Founder": <User className="w-4 h-4" />,
        "Our Members": <Users className="w-4 h-4" />,
        "More Practice Areas": <ChevronsRight className="w-4 h-4" />
    };

    return iconMap[name ?? ""] ?? <Scale className="w-4 h-4" />;  // Scale as fallback
};