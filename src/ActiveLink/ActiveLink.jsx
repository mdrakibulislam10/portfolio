import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "border-b-4 border-gray-700 p-1 text-sm md:text-lg font-medium"
                    : "rounded-md p-1 text-sm md:text-lg font-medium"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
