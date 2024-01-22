import { servicesConfig } from "@/config/services";
import Service from "./Service";

const Services = () => {
    return (
        <section style={{ background: servicesConfig.bgColor }} className="flex justify-center items-center w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-center w-[90%] text-zinc-200 font-medium p-6 gap-4">
                {
                    servicesConfig.services.map((service, index) => {
                        return (
                            <Service key={`services_${index}`} img={service.img} index={index}>{service.text}</Service>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Services;