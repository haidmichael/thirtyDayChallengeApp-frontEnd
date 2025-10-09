import { Button } from "@/components/Button"
import { Link } from "react-router"
import { loginUser } from "@/api/api"
import { useState } from "react"

export const LoggedIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShown, setIsShown] = useState(false) // For Showing Password

    const togglePassword = () => {
        setIsShown((isShown) => !isShown)
    }
    
    const handleClick = async (e) => {
        e.preventDefault() 
        
        try {
            console.log('hi on click')
            const data = await loginUser({ email, password })
            console.log('Login Success: ', data)
            
        } catch (error) {
            console.error('Login Failed: ', error.message)
        }
    }

    const handleEmailChange = (e) => {
        e.preventDefault() 
        console.log('Change', e.target.value)
        setEmail(e.target.value)

    }

    const handlePasswordChange = (e) => {
        e.preventDefault() 
        console.log('Password: ', e.target.value)
        setPassword(e.target.value)
    }

    return(
        <>
            <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <div className="flex justify-center flex-col">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="m-1 p-2 border border-black rounded  
                                        placeholder:italic 
                                        placeholder:text-gray-500 
                                        placeholder:text-sm"
                            onChange={handleEmailChange}
                        />
                        <input 
                            type={isShown ? "text" : "password"} 
                            placeholder="Password"  
                            className="m-1 p-2 border border-black rounded  
                                        placeholder:italic 
                                        placeholder:text-gray-500 
                                        placeholder:text-sm"

                            onChange={handlePasswordChange}
                        />

                        <div>
                            <label>Show Password</label>
                            <input 
                                className="flex m-1 p-2 border-black rounded"
                                type="checkbox"
                                check={isShown}
                                onChange={togglePassword}
                            />
                        </div>

                        <Button onClick={handleClick}>Log In</Button>
                        {/* <button>Log In</button> */}
                    </div>
                    <Link to='/register'>Register Here!</Link>
                </div>
            </div>
        </>
    )
}