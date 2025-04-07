import { Link } from "react-router-dom";

export default function NavLink({children, to}){
    return (
        <Link to={to}>
            <div className="pr-4 text-3xl text-gray-200 hover:text-orange-400 hover:underline">
                {children}
            </div>
        </Link>
    );
}