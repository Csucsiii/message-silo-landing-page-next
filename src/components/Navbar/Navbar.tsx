import { navbarConst } from "@/config/navbar";
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <nav className="relative flex items-center py-[4.5rem] w-[90%]">
            <div className="hidden absolute top-1/2 transform -translate-y-1/2 md:flex justify-center items-center w-[10%] xl:w-[3%] aspect-square">
                <img src={navbarConst.logo.src} alt={navbarConst.logo.alt} />
            </div>

            <ul className="flex justify-center items-center gap-[5%] text-zinc-200 w-full h-full list-none text-xl font-semibold">
                {
                    navbarConst.items.map((item, index) => {
                        return (
                            <NavItem key={`nav_item_${index}`} href={item.href}>{item.value}</NavItem>
                        )
                    })
                }
            </ul>
        </nav>
    );
};


export default Navbar;