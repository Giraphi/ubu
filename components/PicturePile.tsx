import balveDaniel from "../images/pile/balve-danie.jpeg";
import balveDrums from "../images/pile/balve-drums.jpg";
import kaufbeurenBand from "../images/pile/kaufbeuren-band.jpeg";
import kaufbeurenLogo from "../images/pile/kaufbeuren-logo.jpeg";
import murf1 from "../images/pile/murf1.jpeg";
import murf2 from "../images/pile/murf2.jpeg";
import murf3 from "../images/pile/murf3.jpeg";
import ruebeSimon from "../images/pile/ruebe-simon.jpg";
import UBU2 from "../images/pile/UBUIMPERATOR-2.jpg";
import UBU3 from "../images/pile/UBUIMPERATOR-3.jpg";

import PileImage from "./PileImage";
import { useState } from "react";
import RotateButton from "./RotateButton";

export interface PicturePileProps {}

export default function PicturePile(props: PicturePileProps) {
    const [pileImageProps] = useState([
        { src: kaufbeurenLogo, text: "11.03.22 Roundhouse, Kaufbeuren", textRight: true },
        { src: UBU3, text: "Bandportrait by Vanessa Mönius" },
        { src: ruebeSimon, text: "2022 Ruebezahl Festival" },
        { src: balveDaniel, text: "27.05.2023 Kunstblock Balve, München" },
        { src: balveDrums, text: "27.05.2023 Kunstblock Balve, München" },
        { src: UBU2, text: "Bandportrait by Vanessa Mönius" },
        { src: kaufbeurenBand, text: "11.03.22 Roundhouse, Kaufbeuren" },
        { src: murf1, text: "01.10.23 Murf/Murw Festival, Tilburg NL" },
        { src: murf3, text: "30.09.23 Murf/Murw Festival, Tilburg NL" },
        { src: murf2, text: "30.09.23 Murf/Murw Festival, Tilburg NL" },
    ]);

    const [showImages, setShowImages] = useState(pileImageProps.length);

    function handleClick() {
        if (showImages === 0) {
            setShowImages(pileImageProps.length);
            return;
        }

        setShowImages((x) => x - 1);
    }

    return (
        <div className={" col-content select-none "}>
            <div
                className={"relative h-[60lvh] w-full cursor-clickText bg-darkGray md:h-[80lvh]"}
                onClick={handleClick}
            >
                <div className={"relative h-full w-full select-none"}>
                    {pileImageProps.map((props, index) => (
                        <PileImage
                            key={index}
                            index={index}
                            showImages={showImages}
                            {...props}
                        />
                    ))}
                </div>
                <RotateButton className={"absolute bottom-2 right-2 md:hidden"} />
            </div>
        </div>
    );
}
