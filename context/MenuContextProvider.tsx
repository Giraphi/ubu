import React, { ReactNode, useState } from "react";
import { ScrollId } from "../components/ScrollTarget";
import { MenuContext } from "./MenuContext";

export interface MenuContextProviderProps {
    children: ReactNode;
}

export default function MenuContextProvider(props: MenuContextProviderProps) {
    const [activeItem, setActiveItem] = useState<ScrollId>(ScrollId.top);
    return <MenuContext.Provider value={{ activeItem, setActiveItem }}>{props.children}</MenuContext.Provider>;
}
