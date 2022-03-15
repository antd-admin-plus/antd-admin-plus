import { useState } from "react"
import BaseLayout from "@/layouts/index"

const State500 = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col text-center justify-center">
        <h3>500</h3>
        <p>Sorry, the server is reporting an error.</p>
      </div>
    </BaseLayout>
  )
}

export default State500
