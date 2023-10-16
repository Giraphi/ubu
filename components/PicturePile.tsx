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

export interface PicturePileProps {}

export default function PicturePile(props: PicturePileProps) {
    // const numClicks

    return (
        <div className={"col-content  h-[80vh] px-5 "}>
            <div className={"h-full w-full bg-darkGray"}>
                <div className={"relative h-full w-full "}>
                    <PileImage src={balveDaniel} />
                    <PileImage src={balveDrums} />
                    <PileImage src={UBU3} />
                    <PileImage src={murf1} />
                    <PileImage src={murf2} />
                    <PileImage src={murf3} />
                    <PileImage src={ruebeSimon} />
                    <PileImage src={UBU2} />
                    <PileImage src={kaufbeurenLogo} />
                    <PileImage src={kaufbeurenBand} />
                </div>
            </div>
        </div>
    );
}
