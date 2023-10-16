import React, { useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "../context/LanguageContext";

export interface LocaleTextProps {
    texts: { de: string; en: string };
}

export default function LocaleText(props: LocaleTextProps) {
    const language = useContext(LanguageContext).locale;
    return <>{props.texts[language]}</>;
}
