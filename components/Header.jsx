import React from "react";
import Image from "next/legacy/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <div className="shadow-md border-b bg-white sticky-top top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 h-10 mt-3 lg:hidden flex-shrink-0">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle - search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_VjNAwh3Bw8AX_vcVOp&_nc_ht=scontent-lga3-2.xx&oh=00_AfBmnNYW0kclv5GyZipZ76fhH_t505W4okGV7cbbIJ73WQ&oe=63EA9511"
            alt=""
            className="h-10 rounded-full cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
          />
        </div>
      </div>
    </div>
  );
};
