// import { Button } from "@/components/Button"
import { Link } from "react-router"
// import { loginUser } from "@/api/api"


export const Header = (props) => {
    const { loggedIn } = props
    // const user = loginUser('first_name')
    return (
        <>
        <div className="flex justify-between p-8 bg-gray-200" >
            <Link to='/'>
                <span className="flex ">30 day Challenge</span>
            </Link>
            <div >
                {!loggedIn ? <span className='pr-3'>Hello Guest</span> :
                <span>Hello User</span> }

                <Link to="/LoggedIn">
                {/* ToDo: write a conditional if not logged in show signin/reg else show log out */}
                   {!loggedIn ? <span className="pr-3">Sign In/Register</span> :
                    <span>Log Out</span>}
                </Link>

            </div>
        </div>
        </>
)
}

export default Header 