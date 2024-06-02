import React, { FC, ReactNode, RefObject } from "react";
import { Device, useDeviceStore } from "../../../context/useDeviceStore";
import FruhtrunkBackgroundLg from "./FruhtrunkBackgroundLg";
import Lines from "../../../images/lines.svg";
import Image from "next/image";

export type FruhtrunkBackgroundProps = {
    children: ReactNode;
    scrollRef: RefObject<HTMLDivElement>;
};

export default function FruhtrunkBackground(props: FruhtrunkBackgroundProps) {
    const { device } = useDeviceStore();

    return device > Device.md ? (
        <FruhtrunkBackgroundLg scrollRef={props.scrollRef}>{props.children}</FruhtrunkBackgroundLg>
    ) : (
        <div className="relative">
            <div className="absolute left-0 top-0 flex size-full items-center justify-center overflow-hidden">
                {/* 
                currently I didn not find a way to set the <Lines> to object-fit:cover
                The current approach with height:100% plus overflow-hidden on parent assumes that the svg
                canvas is wide enough to cover the mobile
                 */}
                <Lines
                    style={{
                        position: "absolute",
                        height: "150vh",
                        width: "auto",
                        right: "50%",
                        transform: "translateX(50%) translateY(-50%) rotate(45deg)",
                        top: "50%",
                    }}
                />
            </div>
            <div className="relative z-10 pb-8 pt-3">{props.children}</div>
        </div>
    );
}
