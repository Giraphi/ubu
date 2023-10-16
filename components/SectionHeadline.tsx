import { ReactNode } from "react";

export interface SectionHeadlineProps {
    children: ReactNode;
}

export default function SectionHeadline(props: SectionHeadlineProps) {
    return <h2 className={"text-5xl pb-6 md:pb-8 font-bungee"}>{props.children}</h2>;
}
