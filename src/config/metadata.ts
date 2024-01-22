import { Metadata } from "next";

const siteUrl = "message_silo_url";
const description =
    "Message Silo, Clean up the mess of messages. A tool to fix or enrich messages with the power of AI, and make integration simpler for event-driven systems.";
const title = "Message Silo";

export const metadata: Metadata = {
    metadataBase: new URL("https://message-silo.dev"),
    title: title,
    description: description,
    keywords: [
        "message silo",
        "messagesilo",
        "silo",
        "message",
        "ai",
        "event",
        "event-driven",
        "tool",
        "power",
        "system",
        "artifical intelligence",
    ],
    icons: ["/favicon.ico"],
    applicationName: title,
    robots: {
        follow: true,
        index: true
    },
    openGraph: {
        title: title,
        description: description,
        type: "website",
        url: siteUrl,
        images: ["/nav-logo.webp"],
    },
    twitter: {
        title: title,
        description: description,
        site: siteUrl,
        images: ["/nav-logo.webp"],
    },
    appleWebApp: {
        title: title,
        capable: true,
        statusBarStyle: "black-translucent",
    }
}