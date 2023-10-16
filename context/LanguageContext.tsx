import React from "react";
import { ScrollId } from "../components/ScrollTarget";

export interface LanguageContextType {
    locale: "en" | "de";
}

export const LanguageContext = React.createContext<LanguageContextType>({
    locale: "en",
});
