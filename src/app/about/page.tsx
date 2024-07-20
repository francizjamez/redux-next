"use client"
import Link from "next/link";
import {useAppSelector} from "@/lib/hooks";

export default function About() {

  const count = useAppSelector((state) => state.counter);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <Link href={"/"}>Home</Link>
        <p>count: {count}</p>

      </div>
    </main>
  );
}
