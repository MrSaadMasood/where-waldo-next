'use client'

import { FallingLines } from "react-loader-spinner"

export default function Loader() {
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
