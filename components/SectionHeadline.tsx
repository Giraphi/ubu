import { ReactNode } from "react"

export interface SectionHeadlineProps {
  children: ReactNode
}

export default function SectionHeadline(props: SectionHeadlineProps) {
  return <h2 className={"pb-6 font-bungee text-5xl md:pb-8"}>{props.children}</h2>
}
