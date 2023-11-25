"use client";
import { Plus, Search } from "lucide-react";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div>
      <div className="w-full flex gap-2 mt-5 bg-white justify-between p-2 items-center rounded-xl">
        <h1 className="ml-3">MiNote.</h1>
        <div className="flex justify-center items-center">
          <Search />
          <input className="rounded-xl border-1 border-zinc-500 w-20 bg-gray-200 focus:outline-none focus:bg-slate-400 p-1" />
        </div>
        {/* <input className="w-full border-2 border-zinc-300 focus:outline-none rounded-xl" /> */}
        <Image
          src="/profile.jpeg"
          width={50}
          height={50}
          className="rounded-full mr-3"
        />
      </div>
      <div className="relative">
        <button className="bg-yellow-300 rounded-md p-2 absolute right-0 mt-5 flex font-medium hover:bg-yellow-100">
          <Plus /> Add Note
        </button>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="bubble">All</div>
        <div className="bubble">Pin</div>
        <div className="bubble">Star</div>
        <div className="bubble">Past</div>
        <div className="bubble">Fav</div>
      </div>
    </div>
  );
};
