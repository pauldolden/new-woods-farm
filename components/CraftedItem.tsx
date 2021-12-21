import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";

interface Props {
  data: any;
}

export const CraftedItem = ({ data }: Props) => {
  return (
    <li
      key={data.email}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          src={data.imageUrl}
          alt=""
        />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{data.name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm">{data.title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {data.role}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <a
              href={`mailto:${data.email}`}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3">Email</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={`tel:${data.telephone}`}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
