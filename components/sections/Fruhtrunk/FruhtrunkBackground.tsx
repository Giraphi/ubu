import React, { FC, ReactNode, RefObject } from "react"
import { Device, useDeviceStore } from "../../../context/useDeviceStore"
import FruhtrunkBackgroundLg from "./FruhtrunkBackgroundLg"
import Lines from "../../../images/lines.svg"
import Image from "next/image"
import FruhtrunkBackgroundSm from "./FruhtrunkBackgroundSm"

export type FruhtrunkBackgroundProps = {
  children: ReactNode
  scrollRef: RefObject<HTMLDivElement>
}

export default function FruhtrunkBackground(props: FruhtrunkBackgroundProps) {
  const { device } = useDeviceStore()

  return device > Device.md ? (
    <FruhtrunkBackgroundLg scrollRef={props.scrollRef}>{props.children}</FruhtrunkBackgroundLg>
  ) : (
    <FruhtrunkBackgroundSm scrollRef={props.scrollRef}>{props.children}</FruhtrunkBackgroundSm>
  )
}
