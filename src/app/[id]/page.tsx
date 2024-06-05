'use client'
import App from "@/Components/App";
import { Suspense } from "react";
import { FallingLines } from "react-loader-spinner";

export default function Page() {
  return (
    <Suspense fallback={<Loader />} >
      <App />
    </Suspense>
  )
}


function Loader() {
  return (
    <div className="w-screen bg-black h-screen flex justify-center text-white items-center">
      <FallingLines
        color="#4fa94d"
        width="80"
        visible={true}
      />
    </div>
  )
}
