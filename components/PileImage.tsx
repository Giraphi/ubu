import Image, { StaticImageData } from "next/image";
import { imageRenditions } from "../imageRenditions";
import { useState } from "react";

export interface PileImageProps {
    src: StaticImageData;
}

const widthPercentage = 30;

export default function PileImage(props: PileImageProps) {
    const x = useState(random())[0];
    const y = useState(random())[0];

    const objectX = useState(random())[0];
    const objectY = useState(random())[0];

    function random() {
        const min = 0;
        const max = 30;
        return Math.random() * (max - min) + min;
    }

    return (
        <div
            className={`absolute h-[70%] w-[70%]`}
            style={{ left: `${x}%`, top: `${y}%` }}
        >
            <Image
                alt={"pile image"}
                fill={true}
                src={props.src}
                className={"object-contain"}
                sizes={imageRenditions.full}
            />
        </div>
    );
}
