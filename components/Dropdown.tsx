import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { Fragment } from "react";

interface Props {
  data: any[];
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = ({ data }: Props) => {
  return (
    <Popover className="relative z-50">
      {({ open }) => (
        <>
          <Popover.Button
            className={
              "group  inline-flex items-center text-base font-medium text-white"
            }
          >
            <span className="hidden md:block">About</span>
            <ChevronDownIcon
              className={"ml-2 h-10 w-10 md:h-5 md:w-5 text-white"}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {data.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div className="text-base font-medium text-white hover:text-green-600 cursor-pointer">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
