import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { NewsSection } from "../types/HomePage";

interface Props {
  data: NewsSection;
}

const BlogSection = ({ data }: Props) => {
  return (
    <div className="relative bg-green-700 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {data?.sectionHeader}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {data?.sectionText?.json.content.map((item) =>
              item.content.map((item) => item.value)
            )}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data?.latestPostsCollection?.items?.map((post) => (
            <Link href={`/news/${post.sys.id}`} key={post.title}>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post?.image?.url ?? "/sheep.jpg"}
                    alt={post.image?.description ?? "Sheep"}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {post?.contentfulMetadata?.tags?.map((tag) => (
                      <p
                        key={tag.name}
                        className="text-sm font-medium text-green-600"
                      >
                        {tag?.name}
                      </p>
                    ))}

                    <div>
                      <p className="text-xl font-semibold text-gray-900 block mt-2">
                        {post?.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post?.description?.json?.content?.map((item) =>
                          item.content.map((item) => item.value)
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post?.author?.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post?.author?.image?.url}
                        alt={post?.author?.image?.description}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post?.author?.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time
                          dateTime={dayjs(
                            post?.sys?.firstPublishedAt
                          ).fromNow()}
                        >
                          {dayjs(post?.sys?.firstPublishedAt).fromNow()}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
