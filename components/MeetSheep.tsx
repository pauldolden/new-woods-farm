import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SheepProfilesSection } from "../types/HomePage";
dayjs.extend(relativeTime);

interface Props {
  data: SheepProfilesSection;
}

export const MeetSheep = ({ data }: Props) => {
  return (
    <div className="bg-green-700">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              {data.sectionTitle}
            </h2>
            <p className="text-xl text-gray-300">
              {data.sectionText.json.content.map((item) =>
                item.content.map((item) => item.value)
              )}
            </p>
          </div>
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {data?.sheepProfilesCollection.items?.map((sheep) => (
              <li
                key={sheep.name}
                className="py-10 px-6 bg-green-800 text-center rounded-lg xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={sheep.image?.url ?? "/Placeholder.jpg"}
                    alt={sheep.image?.description}
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{sheep.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {dayjs(sheep.dateOfBirth).format("D MMMM YYYY")}
                      </p>
                      <p className="text-white text-sm pt-3">
                        {sheep.description.json.content.map((item) =>
                          item.content.map((item) => item.value)
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
