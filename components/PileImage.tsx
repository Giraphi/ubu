import Image, { StaticImageData } from "next/image";
import { imageRenditions } from "../imageRenditions";
import { useState } from "react";

export interface PileImageProps {
    src: StaticImageData;
}

export default function PileImage(props: PileImageProps) {
    const topXFactor = useState(random(0, 1))[0];
    const y = useState(random(0, 100))[0];

    function random(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const isWide = props.src.width / props.src.height > 1;
    const height = isWide ? "65%" : "80%";

    return (
        <div
            className={`absolute  w-full`}
            style={{ top: `calc(${topXFactor} * (75vh - 80%))`, height: height }}
        >
            <Image
                alt={"pile image"}
                fill={true}
                src={props.src}
                sizes={imageRenditions.full}
                className={"object-contain"}
                style={{ objectPosition: `${y}%` }}
            />
        </div>
    );
}
