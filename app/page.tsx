import Hero from "@/Components/Hero";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <><Hero /><Link href="/login"></Link></>
  )
}
