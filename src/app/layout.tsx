import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Luthfi Yazid DHH Law Firm",
  description: "Luthfi Yazid DHH Law Firm Firm focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
