"use client"

import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {startHomeIncrement} from "@/lib/features/counters/homeCounters";

export default function Home() {

  const count = useAppSelector((state) => state.homeCounter);
  const dispatch = useAppDispatch()

  console.log(count)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <Link href={"/about"}>
          About
        </Link>
        <button onClick={() => dispatch(startHomeIncrement())}>
          start increment
        </button>
        <p>counter: {count}</p>
      </div>
    </main>
  );
}
