"use client";

import IconCard from "@/components/composites/icon-card";
import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { UsersIcon } from "@sanity/icons";
import { easeIn } from "motion";

const companyApproaches = [
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
  {
    title: "Team Work",
    description:
      "the core of everything we do, forming the foundation of our long-term vision.",
    icon: UsersIcon,
  },
];

const CompanyApproachesList = () => {
  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {companyApproaches.map((item, i) => (
          <IconCard
            key={i}
            className="w-full flex flex-col items-center justify-center"
            Icon={item.icon}
            index={i}
          >
            <div className="w-full text-center">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
            </div>
          </IconCard>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default CompanyApproachesList;
