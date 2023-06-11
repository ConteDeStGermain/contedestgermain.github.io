"use client";

import Intro from "@/components/intro"
import DescAndTable from "@/components/descAndTable"
import RendezvousCards from "@/components/rendezvousCards";


export default function Home() {

  return (
    <main className="min-h-screen bg-[#F6F0DF]">
        <Intro />
        <DescAndTable />
        <RendezvousCards />
    </main>
  )
}
