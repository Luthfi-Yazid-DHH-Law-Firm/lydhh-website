import { FC } from "react";

interface NoDataProps {
  sectionName: string;
}

const NoData: FC<NoDataProps> = ({ sectionName }) => {
  return (
    <div className="w-full h-32 flex justify-center items-center">
      <h1 className="text-gray-400 text-xl text-center font-semibold">No {sectionName} available</h1>
    </div>
  );
};

export default NoData;
