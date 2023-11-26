"use client";
import { Plus, Search, BookOpenText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  async function handleInput() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: input,
          user: "firza@gmail.com",
          additionalData: "",
        }),
      }
    );
    const data = await res.json();
    // console.log(data);
    router.refresh();
    return data;
  }

  return (
    <div className="">
      <div className="w-full flex gap-2 mt-5 bg-white justify-between p-2 items-center rounded-xl">
        <h1 className="ml-3 font-bold">MiNote.</h1>
        {/* <div className="flex justify-center items-center">
          <Search />
          <input
            className="rounded-xl border-1 border-zinc-500 w-20 bg-gray-200 focus:outline-none focus:bg-slate-400 p-1"
            onChange={(e) => setInput(e.target.value)}
          />
        </div> */}
        {/* <input className="w-full border-2 border-zinc-300 focus:outline-none rounded-xl" /> */}
        <Image
          src="/profile.jpeg"
          width={50}
          height={50}
          className="rounded-full mr-3"
        />
      </div>
      <div className="relative">
        <button
          className="bg-yellow-300 rounded-md p-2 absolute right-0 mt-3 flex font-medium hover:bg-yellow-100"
          onClick={handleInput}
        >
          <Plus /> Add Note
        </button>
      </div>
      <div className="flex gap-5 mt-3  items-center">
        <BookOpenText />
        <input
          type="text"
          className="border-2 border-zinc-400 w-[700px] p-1 rounded-md focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your notes here.."
        />
      </div>
    </div>
  );
};
