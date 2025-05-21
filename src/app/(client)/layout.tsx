import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})

const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={`min-h-screen w-full relative ${poppins.className}`}>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
};

export default ClientLayout;