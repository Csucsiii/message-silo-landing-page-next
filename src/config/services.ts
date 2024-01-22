import type { ServicesConfig } from "@/types/types";

export const servicesConfig: ServicesConfig = {
	bgColor: "#021327",
    services: [
        {
            img: {
                src: "/service-bus.svg", //Kép elérési útja.
                alt: "service_bus" //Alt szöveg ha sikeretelen lenne a kép betöltése.
            },
            text: "Azure Service Bus" //Képhez tartozó szöveg.
        },
        {
            img: {
                src: "/rabbitmq.svg",
                alt: "rabbitmq"
            },
            text: "RabbitMQ"
        },
        {
            img: {
                src: "/aws-sqs.svg",
                alt: "aws_sqs"
            },
            text: "AWS SQS"
        }
    ]
}