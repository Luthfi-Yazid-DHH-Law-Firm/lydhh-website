"use client";

import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { easeIn } from "motion";

const FounderProfileDetail = () => {
  return (
    <AnimationWrapper
      classname="w-full flex flex-col items-start justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div>
        <h2 className="text-lg font-semibold text-[#A22C51]">Meet Our Founder</h2>
        <h3 className="text-2xl bg-gradient-to-r from-[#E1BC1C] to-[#a98e16] bg-clip-text text-transparent font-bold">Dr. TM. Luthfi Yazid, S.H., LL.M.</h3>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>LL.B. (Sarjana Hukum), Universitas Gadjah Mada, Yogyakarta</li>
          <li>LL.M., University of Warwick, School of Law, United Kingdom</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Notable Legal Experience:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Assisted numerous foreign and Japanese companies with investments,
            real estate, corporate matters, and disputes
          </li>
          <li>
            Handled both civil and criminal cases, including high-profile
            clients:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Former Minister of State-Owned Enterprises</li>
              <li>
                Former Coordinating Minister for Economy, Finance, and Industry
              </li>
              <li>Former Minister of Trade and Industry</li>
              <li>Minister of Labor and Manpower (as legal counsel)</li>
              <li>
                Represented one of Indonesia&apos;s largest mining companies in a
                major criminal case
              </li>
              <li>Served as legal counsel for President Prabowo Subianto</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Academic and International Recognition:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Fellow of the LEAD Program (New York & London)</li>
          <li>
            British Chevening Scholar (2001, Foreign Commonwealth Office, UK)
          </li>
          <li>Visiting Scholar at Gakushuin University, Tokyo (2010 - 2011)</li>
          <li>International speaker at universities in Japan and China</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Advanced Training & Research:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            Environmental and legal programs in Costa Rica, Thailand, Zimbabwe
          </li>
          <li>ADR training in Boulder, USA</li>
          <li>
            IP law research in Chennai, India & University of Technology Sydney
          </li>
          <li>
            Legal and judicial comparative studies in Japan (JICA & UNAFEI)
          </li>
          <li>Labor law research in Doha, Qatar</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Professional Affiliations:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>General Chairman of Indonesian Bar Association (DePA-RI)</li>
          <li>Licensed Advocate and admitted to the Indonesian Bar</li>
        </ul>
      </div>
    </AnimationWrapper>
  );
};

export default FounderProfileDetail;