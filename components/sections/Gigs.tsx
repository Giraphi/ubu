import ScrollTarget, { ScrollId } from "../ScrollTarget";
import React from "react";
import Grid from "../Grid";
import CompactArea from "../CompactArea";
import SectionHeadline from "../SectionHeadline";
import { FormattedMessage } from "react-intl";
import SectionSpace from "../SectionSpace";

export interface GigsProps {}

export default function Gigs(props: GigsProps) {
    return (
        <>
            <ScrollTarget id={ScrollId.gigs} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>Gigs </SectionHeadline>
                    <p className={"animate-color pb-2 font-bold"}>UPCOMING</p>
                    <ul className={"flex flex-col gap-1 pb-6"}>
                        <li>
                            <a>28.9.2024 Z-Bau, Nürnberg</a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://moodclub.org/programm/"}
                            >
                                16.12.2023 Mood Club, Memmingen
                            </a>
                        </li>

                        <li>
                            <a
                                target={"_blank"}
                                href={
                                    "https://eventfrog.de/de/p/konzert/hard-rock-heavy-metal/exxasens-ubu-imperator-7091301423107756810.html"
                                }
                            >
                                09.11.2023 Glockenbach Werkstatt, München
                            </a>
                        </li>
                    </ul>
                    <p className={"pb-2 font-bold"}>PAST</p>
                    <ul>
                        <li>01.10.23 Murf/Murw Festival, Hallo of Fame, Tilburg NL</li>
                        <li>30.09.23 Murf/Murw Festival, Little Devil, Tilburg NL</li>
                        <li>27.05.23 Kunstblock Balve, München</li>
                        <li>29.09.23 Mufi Kino, Fulda</li>
                        <li>09.09.23 Klangfest, München</li>
                        <li>22.07.23 Kulturspektakel Gauting</li>
                        <li className={"pb-4"}>11.03.23 Roundhouse, Kaufbeuren</li>

                        <li>26.10.22 Sunny Red, München</li>
                        <li>24.09.22 Import/Export, München</li>
                        <li>09.2022 Ruebezahl Festival</li>
                    </ul>
                </CompactArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
