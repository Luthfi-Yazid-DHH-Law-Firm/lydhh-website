import LinkButton from "@/components/ui/link";

const HomepageServicesTitle = () => {
  return (
    <div className="mb-16">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-2">
        <div className="text-start">
          <p className="text-lg text-[#E1BC1C] mb-3">Our Practice Areas</p>
          <h2 className="text-2xl font-bold">
            We are here to fight against any
            <br />
            violance with{" "}
            <span className="text-[#E1BC1C] italic font-normal">
              experience
            </span>
          </h2>
        </div>
        <div className="w-1/2 h-[1px] hidden lg:block bg-[#E1BC1C]" />
        <LinkButton
          href="/practice-areas"
          underline={false}
          className="border p-3 text-white hover:text-[#E1BC1C] transition-colors duration-300"
        >
          Explore All
        </LinkButton>
      </div>
    </div>
  );
};

export default HomepageServicesTitle;
