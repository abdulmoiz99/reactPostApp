import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav style={{ margin: 10 }}>
                <NavLink to="/" style={{ padding: "5px" }}>Home</NavLink>
                <NavLink to="/post" style={{ padding: "5px" }} end>Post</NavLink>
            </nav>
        </>
    )
}

export default NavBar