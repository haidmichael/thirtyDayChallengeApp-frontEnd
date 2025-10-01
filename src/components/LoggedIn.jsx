import { Button } from "@/components/Button"
import { Link } from "react-router"

export const LoggedIn = () => {
    return(
        <>
            <div class="flex justify-center items-center h-screen flex-col bg-gray-100">
                <form action="" class="flex justify-center flex-col">
                    <input 
                        type="text" 
                        placeholder="User Name" 
                        className="placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                    />
                    <input 
                        type="text" 
                        placeholder="Password"  
                        className="placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                    />

                    <Button>Log In</Button>
                </form>
                <Link to='/register'>Register Here!</Link>
            </div>
        </>
    )
}