// import { Button } from "@/components/Button"
import { Link } from "react-router"


export const Header = () => {
    return (
        <>
        <div class="flex justify-between p-8 bg-gray-200" >
            <Link to='/'>
                <span class="flex ">30 day Challenge</span>
            </Link>
        <div>
                <div >
                    <Link to="/LoggedIn">
                        <span class="pr-3">Sign In/Register</span> 
                        <span>Log Out</span>
                    </Link>

                </div>
        </div>
    </div>
            {/* <div className="header"> */}
                {/* <Link> */}
                    {/* <Button>Sign In</Button> */}
                    {/* <Button>Register</Button> */}
                    {/* <Button>Log In</Button>  */}
                    {/* <a>Log in</a> */}
                    {/* <span>Sign In/Register</span>
                    <span>Log Out</span> */}
                {/* </Link>  */}
            {/* </div> */}
        </>
)
}

export default Header 