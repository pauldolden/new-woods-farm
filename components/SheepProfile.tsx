import dayjs from "dayjs";
import React from "react";
import { SheepProfileData } from "../types/AllSheepProfiles";

interface Props {
  data: SheepProfileData;
}

export const SheepProfile = ({ data }: Props) => {
  return (
    <div
      key={data.name}
      className="py-10 px-6 bg-green-800 text-center rounded-lg xl:px-10 xl:text-left"
    >
      <div className="space-y-6 xl:space-y-10">
        <img
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={data.image?.url ?? "/Placeholder.jpg"}
          alt={data.image?.description}
        />
        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
          <div className="font-medium text-lg leading-6 space-y-1">
            <h3 className="text-white">{data.name}</h3>
            <p className="text-gray-400 text-sm">
              {dayjs(data.dateOfBirth).format("D MMMM YYYY")}
            </p>
            <p className="text-white text-sm pt-3">
              {data.description.json.content.map((item) =>
                item.content.map((item) => item.value)
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
