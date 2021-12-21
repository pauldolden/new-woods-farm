import dayjs from "dayjs";
import React from "react";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer className="bg-green-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1 flex md:flex-row justify-between flex-1 flex-col">
          <p className="text-center text-base text-white">
            &copy; {dayjs(Date.now()).year()} New Woods Farm Ltd. All rights
            reserved.
          </p>
          <p className="text-center text-base text-white">
            Made with 💚 by <a href="https://dolden.dev">Paul Dolden</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
