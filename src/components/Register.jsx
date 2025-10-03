import { Button } from "@/components/Button"

export const Register = () => {
    return (
        <>
            <div class="flex justify-center items-center h-screen flex-col bg-gray-100">
                <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <form action="" class="flex justify-center flex-col">
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            class="m-1 p-2 border border-black rounded  placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                        />
                        <input 
                            type="text" 
                            placeholder="Last Name"  
                            class="m-1 p-2 border border-black rounded  placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                        />
                        <input 
                            type="text" 
                            placeholder="Register Email" 
                            class="m-1 p-2 border border-black rounded  placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                        />
                        <input 
                            type="text" 
                            placeholder="Register Password"  
                            class="m-1 p-2 border border-black rounded placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                        />
                            {/* <Button> Register </Button> */}
                        <button class='m-1 bg-black text-white py-2 px-4 rounded hover:bg-gray-800'> Register </button>
                    </form>
                </div>
            </div>
        </>
    )
}