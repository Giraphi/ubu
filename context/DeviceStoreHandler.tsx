"use client";

import { useEffect } from "react";
import { KeyValuePair, Screen } from "tailwindcss/types/config";

import config from "../tailwind.config";
import { Device, useDeviceStore } from "./useDeviceStore";
const screens = config.theme!.screens as KeyValuePair<string, string | Screen | Screen[]>;

export interface DeviceStoreHandlerProps {}

export default function DeviceStoreHandler(props: DeviceStoreHandlerProps) {
    const { setDevice } = useDeviceStore();

    function getDevice() {
        if (matchMedia(`(min-width: ${screens.xl})`).matches) {
            return Device.xl;
        }
        if (matchMedia(`(min-width: ${screens.lg})`).matches) {
            return Device.lg;
        }
        if (matchMedia(`(min-width: ${screens.md})`).matches) {
            return Device.md;
        }
        return Device.sm;
    }

    useEffect(() => {
        function onResize() {
            setDevice(getDevice());
        }
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [setDevice]);

    return null;
}
