import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-sm md:text-lg font-medium text-orange-600"
                    : "rounded-md p-1 text-sm md:text-lg font-medium"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
