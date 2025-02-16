import { Link } from "react-router-dom"
import Button from "./Button"
import { Children } from "react"

const Header = () => {
    const nav_links = [
        {
            id: 1,
            link: 'Products',
            to: '/product'
        },
        {
            id: 2,
            link: 'Solutions',
            to: '/solution'
        },
        {
            id: 3,
            link: 'About us',
            to: '/about'
        },
        {
            id: 4,
            link: 'Contact',
            to: '/contact'
        },
        {
            id: 5,
            link: 'Pricing',
            to: '/pricing'
        },
    ]
  return (
   <nav className="bg-white py-6 fixed top-0 w-full border-b border-gray-300">
    <div className="container flex items-center justify-between">
        {/* logo */}
        <h2 className="text-[#486284] font-medium text-[25px]">Meetio</h2>
        <ul className="list-none flex items-center">
            {nav_links.map(({id, link, to})=>(
                <Link to={to} key={id} className="mr-4 text-sm text-[#000000]">{link}</Link>
            ))}
        </ul>
        <div className="flex items-center gap-3">
            <Button containerClass="btn_primary" to="/login">Log In</Button>
            <Button containerClass="btn_secondary" to="/signup">Sign up free</Button>
        </div>
    </div>
   </nav>
  )
}

export default Header