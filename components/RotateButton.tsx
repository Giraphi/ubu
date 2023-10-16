"use client";

import React from "react";
// @ts-ignore
import ReactCurvedText from "react-curved-text";
import { cn } from "../util/functions";

export interface RotateButtonProps {
    className?: string;
}

export default function RotateButton(props: RotateButtonProps) {
    const letters = "TAP".split("");

    return (
        <div
            className={cn(
                "flex h-10 w-10 animate-rotate cursor-pointer items-center justify-center rounded-full border border-primary bg-black font-bold text-primary duration-300",
                props.className,
            )}
        >
            {letters.map((letter, index) => (
                <div
                    className={"absolute inset-x-auto flex h-full w-2 justify-center  text-[0.7rem] "}
                    style={{ transform: `rotate(${index * 45}deg)` }}
                    key={index}
                >
                    {letter}
                </div>
            ))}
        </div>
    );
}
