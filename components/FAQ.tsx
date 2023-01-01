import React from "react";
import { FAQSection } from "../types/HomePage";

interface Props {
  data: FAQSection;
}

const FAQ = ({ data }: Props) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {data.sectionTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {data.sectionText.json.content.map((item) =>
                item.content.map((item) => item.value)
              )}
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {data?.faQsCollection?.items?.map((faq) => (
                <div key={faq?.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq?.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq?.answer.json.content.map((item) =>
                      item.content.map((item) => item.value)
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
