import { Button } from "@/components/Button"
import { BrowserRouter, Routes, Route } from "react-router";

export function DashboardPage() {
  return (
    <>
      <div class="flex justify-center items-center h-screen flex-col bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div class="flex justify-center flex-col">
            <span class='p-5'>Dashboard Place Holder</span>
            <Button>Push Me</Button>
          </div>
        </div>
      </div>
    </>
  )
}

// export default DashboardPage