import { ReactNode } from "react";

export interface SectionHeadlineProps {
    children: ReactNode;
}

export default function SectionHeadline(props: SectionHeadlineProps) {
    return <h2 className={"text-5xl pb-8"}>{props.children}</h2>;
}
