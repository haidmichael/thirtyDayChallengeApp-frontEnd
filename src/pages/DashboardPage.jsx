import { Button } from "@/components/Button"
import { BrowserRouter, Routes, Route } from "react-router";

export function DashboardPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center flex-col">
            <span className='m-8 p-5'>Home Page - Place Holder</span>
            {/* <Button>Push Me</Button> */}
          </div>
        </div>
      </div>
    </>
  )
}

// export default DashboardPage