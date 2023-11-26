import { NoteCard } from "@/components/NoteCard";
import { SearchBar } from "@/components/SearchBar";

async function getData() {
  const response = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='firza@gmail.com')",
    {
      cache: "no-store",
    }
  );
  const resJSON = await response.json();
  return resJSON;
}

export default async function Page() {
  const { items } = await getData();
  return (
    <div className="">
      <SearchBar />
      <div className="grid grid-cols-3 gap-3 mt-5">
        {items.map(({ id, content }) => {
          return <NoteCard key={id} content={content} id={id} />;
        })}
      </div>
    </div>
  );
}
