import ScrollTarget, { ScrollId } from "../ScrollTarget";
import React from "react";
import Grid from "../Grid";
import CompactArea from "../CompactArea";
import SectionHeadline from "../SectionHeadline";
import { FormattedMessage } from "react-intl";
import SectionSpace from "../SectionSpace";

export interface GigsProps {}

export default function Gigs(props: GigsProps) {
    const pastGigs = (
        <ul className={"flex flex-col gap-2 md:gap-1"}>
            <li>
                <a
                    target={"_blank"}
                    href={"https://www.instagram.com/treibhaus_acts/"}
                >
                    23.02.24 Treibhaus, München
                </a>
            </li>
            <li>
                <a
                    target={"_blank"}
                    href={"https://moodclub.org/programm/"}
                >
                    16.12.23 Mood Club, Memmingen
                </a>
            </li>
            <li>
                <a
                    target={"_blank"}
                    href={"https://www.instagram.com/p/CzttGAfCXgs/?img_index=1"}
                >
                    07.12.23 Walter Storms Galerie, München
                </a>
            </li>

            <li>
                <a
                    target={"_blank"}
                    href={"https://eventfrog.de/de/p/konzert/hard-rock-heavy-metal/exxasens-ubu-imperator-7091301423107756810.html"}
                >
                    09.11.23 Glockenbach Werkstatt, München
                </a>
            </li>
            <li>01.10.23 Hallo of Fame, Murf/Murw Festival, Tilburg NL</li>
            <li>30.09.23 Little Devil, Murf/Murw Festival, Tilburg NL</li>
            <li>27.05.23 Kunstblock Balve, München</li>
            <li>29.09.23 Mufi Kino, Fulda</li>
            <li>09.09.23 Klangfest, München</li>
            <li>22.07.23 Kulturspektakel Gauting</li>
            <li>24.04.23 Walter Storms Galerie, München</li>
            <li>11.03.23 Roundhouse, Kaufbeuren</li>

            <li>26.10.22 Sunny Red, München</li>
            <li>24.09.22 Import/Export, München</li>
        </ul>
    );

    return (
        <>
            <ScrollTarget id={ScrollId.gigs} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>Gigs </SectionHeadline>
                    <p className={"animate-color pb-2 font-bold"}>UPCOMING</p>
                    <ul className={"flex flex-col gap-2 pb-8 md:gap-1"}>
                        <li>
                            <a
                                href="https://www.nochbesserleben.com/"
                                target="_blank"
                            >
                                09.11.24 Nochbesserleben, Leipzig
                            </a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://www.facebook.com/events/1015451419730315"}
                            >
                                28.09.24 Z-Bau, Nürnberg
                            </a>
                        </li>
                        <li>
                            <span>17.08.24 Secret Location at Nürnberg &#128561; Contact us for info</span>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://waldschaenke-dornheim.de/"}
                            >
                                27.07.24 Dornheim, Würzburg
                            </a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://www.schokoladen-mitte.de/"}
                            >
                                26.07.24 Schokoladen, Berlin
                            </a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"http://www.c-keller.de/"}
                            >
                                24.07.24 C.Keller, Weimar
                            </a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://www.horstklub.ch/"}
                            >
                                20.07.24 Horst Club, Kreuzlingen CH
                            </a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://www.glockenbachwerkstatt.de/"}
                            >
                                18.07.24 Glockbachwerkstatt, München
                            </a>
                        </li>
                        <li>
                            <a
                                target={"_blank"}
                                href={"https://www.lenbachhaus.de/"}
                            >
                                15.07.24 Lenbachhaus / Fashion Performance, München
                            </a>
                        </li>
                    </ul>
                    {/* <details className={"md:hidden"}>
                        <summary>
                            <p className={"inline cursor-pointer font-bold"}>PAST</p>
                        </summary>
                        <div className={"pt-2"}>{pastGigs}</div>
                    </details> */}

                    <details>
                        <summary className="cursor-pointer">
                            <p className={"ml-2 inline cursor-pointer font-bold"}>PAST</p>
                        </summary>
                        <div className={"pt-2"}>{pastGigs}</div>
                    </details>
                    {/* 
                    <div className={"hidden flex-col md:flex"}>
                        <p className={"inline pb-2 font-bold"}>PAST</p>
                        {pastGigs}
                    </div> */}
                </CompactArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
