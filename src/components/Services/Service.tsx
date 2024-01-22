import type { ServiceProps } from "@/types/types";

const Service = ({ img, children, index }: ServiceProps) => {
    return (
        <li className={`flex ${ index === 0? "justify-start": "justify-start xl:justify-center" } items-center gap-8 w-full`}>
            <div className="w-1/6 aspect-square">
                <img src={img.src} alt={img.alt} />
            </div>
            <h1 className="text-3xl">{children}</h1>
        </li>
    );
};

export default Service;
