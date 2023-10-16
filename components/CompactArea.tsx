import React, { ReactNode } from "react";
import { cn } from "../util/functions";

export interface CompactAreaProps {
    children: ReactNode;
    className?: string;
}

export default function CompactArea(props: CompactAreaProps) {
    return <div className={cn("col-content md:col-compact", props.className)}>{props.children}</div>;
}
