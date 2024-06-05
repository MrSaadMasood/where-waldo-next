'use client'
import App from "@/Components/App";
import Loader from "@/Components/Loader";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loader />} >
      <App />
    </Suspense>
  )
}
