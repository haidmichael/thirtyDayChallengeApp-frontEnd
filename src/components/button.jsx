import { Button as ShadcnButton } from "./ui/button"

export const Button = (props) => {
    return (
        <ShadcnButton {...props}>{props.children}</ShadcnButton>
)
}

export default Button 