import React from "react";
import { ScrollId } from "../components/ScrollTarget";

export interface MenuContextType {
    activeItem?: ScrollId;
    setActiveItem: (id: ScrollId) => void;
}

export const MenuContext = React.createContext<MenuContextType>({
    activeItem: undefined,
    setActiveItem: (id: ScrollId) => undefined,
});
