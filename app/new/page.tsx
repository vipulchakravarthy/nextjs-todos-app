import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length == 0) {
    return new Error("Invalid type");
  }

  await prisma.todo.create({ data: { title: title, complete: false } });

  redirect("/");
}

export default function page() {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New todo</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          name="title"
          type="text"
          className="border border-slate-300 text-slate-300 px-2 py-1 outline-none rounded"
        />
        <div className="flex gap-1 justify-end">
          <Link href="..">Cancel</Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 outline-none rounded"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
