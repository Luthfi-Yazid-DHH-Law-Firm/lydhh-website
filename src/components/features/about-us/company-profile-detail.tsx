"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";

const CompanyProfileDetail = () => {
  return (
    <AnimationWrapper 
        classname="w-full flex flex-col items-start justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeIn }}
    >
      <h2 className="text-2xl font-semibold text-[#A22C51]">About Luthfi Yazid DHH Law Firm</h2>
      <p className="text-justify">
        Indonesia has been fully recovering from severe economic crisis of 1997
        after relatively stable political environment under Yudhoyono presidency
        from 2004. Indonesia offers vast opportunities for businesses going
        forward considering its rich natural resources and large population. To
        materialize these opportunities and be part of global marketplace,
        Indonesian legal system needs to be adjusted towards good and clean
        governance. In this regards, the traditional law firm attitude may not
        sustain changing demands thus a new radical approach is indispensable.
        Upon the spirit of globalization, Luthfi Yazid DHH Law Firm is established as a commercial law firm based in Jakarta,
        Indonesia. The firm is our response to the growing demand for
        sophisticated legal services with global scope. Indeed, we represent the
        next generation of lawyers with a clear vision for legal solution in the
        connected world. For more specific goals, we would like to assist
        international companies which intend to or are doing business in
        Indonesia or Indonesian companies having business activities with
        foreign companies or individuals. As Indonesia for the time being has
        been considered as one of the best places for investment in Asian
        countries, we anticipate the growing needs of legal assistances of many
        international companies for such purposes. Fresh formation of visionary
        people with dreams, imagination, people with ideas, eyes for detail and
        determination to succeed, Luthfi Yazid DHH Law Firm is intended to be a modern and advanced
        law firm with a dynamic and innovative attitude. Most of our lawyers are
        celebrated leaders in their field. They are dedicated lawyers with long
        standing experiences in handling legal matters and disputes. We work
        closely to help each other in realizing our potentials and develop our
        career objectives. We do believe that one key of success is being our
        self. Unlike many other firms, we are not attracted in becoming the
        biggest and the oldest. Instead, Luthfi Yazid DHH Law Firm focus on delivering best solution
        to the client&apos;s problem and ensuring the highest quality of
        services. We prepare to offer and to deliver the best services to our
        clients in an extensive variety of legal areas. In spite of everything,
        we are a client-centric organization that places a great emphasis on our
        client&apos;s needs. The firm offers a wide range of services, which
        encompasses almost all of the commercial matters. It combines potency in
        major legal business areas with strong global perspective. Our alliance
        policy, for example, aimed to promote links with other independent
        international law firms in major jurisdictions. As a newly formed law
        firm, Luthfi Yazid DHH Law Firm have successfully gaining recognition that is reflected
        through our access to international lawyers from several other
        jurisdictions.
      </p>
    </AnimationWrapper>
  );
};

export default CompanyProfileDetail;
