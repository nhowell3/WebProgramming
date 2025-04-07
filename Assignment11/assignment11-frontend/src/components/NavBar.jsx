import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function NavBar({}){
    return (
        <nav className="w-full bg-neutral-950 pt-6 pb-4">
            <div className="flex flex-row justify-center gap-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/hobbies">Hobbies</NavLink>
                <NavLink to="/personal">Personal Information</NavLink>
            </div>
        </nav>
    );
}