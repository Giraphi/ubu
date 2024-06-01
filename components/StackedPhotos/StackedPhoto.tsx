import Image, { StaticImageData } from "next/image";
import { imageRenditions } from "../../imageRenditions";
import { useEffect, useState } from "react";
import { cn } from "../../util/functions";

export interface PileImageProps {
    src: StaticImageData;
    showImages: number;
    index: number;
    text?: string;
    textRight?: boolean;
}

export default function StackedPhoto(props: PileImageProps) {
    const top = useState(random(0, 1))[0];
    const left = useState(random(0, 1))[0];
    const [isFirstRender, setIsFirstRender] = useState(true);

    function random(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const isWide = props.src.width / props.src.height > 1;
    const heightScreenPercentage = isWide ? 0.6 : 0.7;
    const widthScreenPercentage = isWide ? 0.82 : 0.6;

    const screenHeight = typeof window === "undefined" ? 1000 : window.innerHeight;
    const screenWidth = typeof window === "undefined" ? 1000 : window.innerWidth;

    const scaleFactor =
        screenWidth > screenHeight
            ? (screenHeight * heightScreenPercentage) / props.src.height
            : (screenWidth * widthScreenPercentage) / props.src.width;

    const height = Math.floor(props.src.height * scaleFactor);
    const width = Math.floor(props.src.width * scaleFactor);

    useEffect(() => {
        if (!isFirstRender) {
            return;
        }
        setIsFirstRender(false);
    }, [isFirstRender]);

    return (
        <div
            className={cn("absolute select-none shadow-2xl", {
                hidden: props.index + 1 > props.showImages,
                "blur-[2px] md:blur-sm": props.index + 1 !== props.showImages,
            })}
            style={
                isFirstRender
                    ? {}
                    : {
                          width: `${width}px`,
                          height: `${height}px`,
                          left: `calc(${left} * (100% - ${width}px))`,
                          top: `calc(${top} * (100% - ${height}px))`,
                      }
            }
        >
            <Image
                alt={"pile image"}
                fill={true}
                src={props.src}
                sizes={imageRenditions.full}
                quality={30}
                loading={"eager"}
                className={cn("select-none object-contain transition-all")}
            />
            <div
                className={`absolute bottom-0 px-1 py-0.5 text-xs md:px-2 md:py-1 md:text-base ${
                    props.textRight ? "right-0" : "left-0"
                } bg-blackTransparent`}
            >
                <p>{props.text}</p>
            </div>
        </div>
    );
}
