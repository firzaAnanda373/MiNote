"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();
  const [currentContent, setCurrentContent] = useState(content);
  const [onEdit, setOnEdit] = useState(false);

  async function handleDelete() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(id);
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: currentContent }),
      }
    );
    const data = res.json();
    setOnEdit(false);
    router.refresh();
  }
  return (
    <div>
      <div>
        <textarea
          name=""
          id={id}
          cols="30"
          rows="10"
          value={content}
          defaultValue="..."
          className="focus:outline-none resize-none rounded-lg w-full p-3"
        ></textarea>
        <div className="flex gap-4">
          <div>
            <button
              onClick={handleDelete}
              className="bg-red-500 p-2 rounded-md text-white"
            >
              Delete
            </button>
          </div>
          <div>
            {onEdit ? (
              <textarea
                value={currentContent}
                onChange={(e) => setCurrentContent(e.target.value)}
                className="border-2 p-2 rounded-lg resize-none w-full"
              />
            ) : (
              <button
                onClick={() => setOnEdit(true)}
                className="bg-yellow-300 p-2 rounded-md text-black"
              >
                Edit
              </button>
            )}
            {onEdit ? (
              <button
                onClick={handleUpdate}
                className="bg-blue-400 p-2 rounded-md text-white"
              >
                Update
              </button>
            ) : undefined}
          </div>
        </div>
      </div>
    </div>
  );
};
