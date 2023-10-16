import Image from "next/image";
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

export interface PicturePileProps {}

const numImages = 10;
export default function PicturePile(props: PicturePileProps) {
    const [showImages, setShowImages] = useState(numImages);

    function handleClick() {
        if (showImages === 0) {
            setShowImages(numImages);
            return;
        }

        setShowImages((x) => x - 1);
    }

    return (
        <div
            className={"col-content  h-[80vh] pt-4"}
            onClick={handleClick}
        >
            <div className={"h-full w-full bg-darkGray"}>
                <div className={"relative h-full w-full "}>
                    <PileImage
                        src={balveDaniel}
                        index={0}
                        showImages={showImages}
                    />
                    <PileImage
                        src={balveDrums}
                        index={1}
                        showImages={showImages}
                    />
                    <PileImage
                        src={UBU3}
                        index={2}
                        showImages={showImages}
                    />
                    <PileImage
                        src={murf1}
                        index={3}
                        showImages={showImages}
                    />
                    <PileImage
                        src={murf2}
                        index={4}
                        showImages={showImages}
                    />
                    <PileImage
                        src={murf3}
                        index={5}
                        showImages={showImages}
                    />
                    <PileImage
                        src={ruebeSimon}
                        index={6}
                        showImages={showImages}
                    />
                    <PileImage
                        src={UBU2}
                        index={7}
                        showImages={showImages}
                    />
                    <PileImage
                        src={kaufbeurenLogo}
                        index={8}
                        showImages={showImages}
                    />
                    <PileImage
                        src={kaufbeurenBand}
                        index={9}
                        showImages={showImages}
                    />
                </div>
            </div>
        </div>
    );
}
