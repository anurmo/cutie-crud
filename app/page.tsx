import Image from "next/image";
import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import CuteList from "./components/CuteList";


export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-autot-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text 2xl font-bold">CUTE CRUD </h1>
        <AddTask />
     <button className="btn"> hello button </button>
     </div>
   <CuteList />
    </main>
  );
}
