import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SheepProfilesSection } from "../types/HomePage";
import { SheepProfile } from "./SheepProfile";
import { ContentfulRichText } from "./ContentfulRichText";
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
            <div className="text-xl text-gray-300">
              <ContentfulRichText data={data.sectionText.json} />
            </div>
          </div>
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {data?.sheepProfilesCollection.items?.map((sheep) => (
              <SheepProfile data={sheep} key={sheep.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
