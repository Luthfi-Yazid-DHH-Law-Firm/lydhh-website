import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Jakarta International Law Office",
  description: "Jakarta International Law Office focus on delivering best solution to the client’s problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "jilo", "jilolaw", "jakarta", "indonesia"]
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})

const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={`min-h-screen w-full relative bg-[#f4f4f4] ${poppins.className}`}>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
};

export default ClientLayout;