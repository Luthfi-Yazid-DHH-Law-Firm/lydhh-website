import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";
import { client } from "@/sanity/lib/client";
import { COMPANY_LOGO_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Luthfi Yazid & DHH Law Firm",
  description: "Jakarta International Law Office focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})

const options = { next: { revalidate: 60 } };

const ClientLayout = async ({ children }: { children: ReactNode }) => {
    const mainLogo = await client.fetch(COMPANY_LOGO_QUERY, {slug: "main-logo"}, options);
    return (
        <div className={`min-h-screen w-full relative bg-[#f4f4f4] ${poppins.className}`}>
            <Navbar logo={mainLogo}/>
            { children }
            <Footer logo={mainLogo} />
        </div>
    )
};

export default ClientLayout;