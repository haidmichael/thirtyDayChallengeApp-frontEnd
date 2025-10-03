import { Button } from "@/components/Button"
import { Link } from "react-router"
import { login } from "@/api/api"
import { useState } from "react"

export const LoggedIn = () => {
    const [email, setEmail] = useState('')
    const handleClick = () => {

        console.log('hi on click')
        // use state
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log('Change', e.target.value)
    }
    return(
        <>
            <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <div className="flex justify-center flex-col">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="m-1 p-2 border border-black rounded  placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                            onChange={handleEmailChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Password"  
                            className="m-1 p-2 border border-black rounded  placeholder:italic placeholder:text-gray-500 placeholder:text-sm"
                        />
                        <Button onClick={handleClick}>Log In</Button>
                        {/* <button>Log In</button> */}
                    </div>
                    <Link to='/register'>Register Here!</Link>
                </div>
            </div>
        </>
    )
}