import { useState } from "react"
import BaseLayout from "@/layouts/index"

const State404 = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col text-center justify-center">
        <h3>404</h3>
        <p>Sorry, the page you visited does not exist.</p>
      </div>
    </BaseLayout>
  )
}

export default State404
