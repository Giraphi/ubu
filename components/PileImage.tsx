import Image, { StaticImageData } from "next/image";
import { imageRenditions } from "../imageRenditions";
import { useEffect, useState } from "react";
import { cn } from "../util/functions";

export interface PileImageProps {
    src: StaticImageData;
    showImages: number;
    index: number;
}

export default function PileImage(props: PileImageProps) {
    const topXFactor = useState(random(0, 1))[0];
    const y = useState(random(0, 100))[0];
    const [isFirstRender, setIsFirstRender] = useState(true);

    function random(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const isWide = props.src.width / props.src.height > 1;
    const height = isWide ? "80%" : "90%";

    useEffect(() => {
        if (!isFirstRender) {
            return;
        }
        setIsFirstRender(false);
    }, [isFirstRender]);

    return (
        <div
            className={cn(`absolute  w-full`, { hidden: props.showImages < props.index + 1 })}
            style={isFirstRender ? {} : { top: `calc(${topXFactor} * (75vh - ${height}))`, height: height }}
        >
            <Image
                alt={"pile image"}
                fill={true}
                src={props.src}
                sizes={imageRenditions.full}
                className={"border-white object-contain"}
                style={isFirstRender ? {} : { objectPosition: `${y}%` }}
            />
        </div>
    );
}
