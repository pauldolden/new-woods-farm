import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import { NewsArticleData } from "../types/AllNewsArticles";
import { ContentfulRichText } from "./ContentfulRichText";
dayjs.extend(relativeTime);

interface Props {
  data: NewsArticleData;
}

export const Article = ({ data }: Props) => {
  return (
    <Link href={`/news/${data.sys.id}`}>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={data?.previewImage?.url ?? "/sheep.jpg"}
            alt={data.previewImage?.description ?? "Sheep"}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            {data?.contentfulMetadata?.tags?.map((tag) => (
              <p
                key={tag.name || String(Math.random() * 10000)}
                className="text-sm font-medium text-green-600"
              >
                {tag?.name}
              </p>
            ))}

            <div>
              <p className="text-xl font-semibold text-gray-900 block mt-2">
                {data?.title}
              </p>
              <div className="mt-3 text-base text-gray-500">
                <ContentfulRichText data={data.description.json} />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{data?.author?.name}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={data?.author?.image?.url}
                alt={data?.author?.image?.description}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {data?.author?.name}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={dayjs(data?.sys?.firstPublishedAt).fromNow()}>
                  {dayjs(data?.sys?.firstPublishedAt).fromNow()}
                </time>
                <span aria-hidden="true">&middot;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
