import type { NavItemProps } from "@/types/types";

const NavItem = ({ href, children }: NavItemProps) => {
    return (
        <li className="duration-300 hover:text-[#00d9D0] hover:scale-105">
            <a href={href}>{children}</a>
        </li>
    );
};


export default NavItem;