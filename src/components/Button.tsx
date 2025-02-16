import { Link } from "react-router-dom"

type Buttonprops = {
    children: string,
    containerClass: string,
    to?: string
}
const Button: React.FC<Buttonprops> = ({children, containerClass, to}) => {
 return to ?(
    <Link to={to} className={`${containerClass} relative py-3 px-6 cursor-pointer rounded-full font-medium`}>
        {children}
    </Link>
 ): (
    <button className={`${containerClass} relative py-3 px-6 cursor-pointer rounded-full font-medium`}>
        {children}
    </button>
 )
}

export default Button