import React from "react"
import Grid from "../../Grid"
import CompactArea from "../../CompactArea"
import SectionHeadline from "../../SectionHeadline"
import Image from "next/image"
import screenshot from "/images/screenshot.png"
import album from "/images/album.png"
import { imageLazyBoundary, imageRenditions } from "../../../imageRenditions"
import { FormattedMessage } from "react-intl"
import SectionSpace from "../../SectionSpace"

type Props = {
  className?: string
}

export default function AveUbu({}: Props) {
  return (
    <Grid className="relative">
      <CompactArea className="relative z-10">
        <SectionHeadline>Release - Ave Ubu</SectionHeadline>
        <p className="mb-4 md:mb-8">
          <FormattedMessage
            id={"home.aveubu.text1"}
            values={{
              klangschutzLink: (
                <a
                  href={"https://www.klangschutz.com/epages/78930758.sf/de_DE/?ObjectPath=/Shops/78930758/Products/0000022"}
                  className="underline underline-offset-2"
                >
                  Klangschutz Mailorder
                </a>
              ),
            }}
          ></FormattedMessage>
        </p>
        <div className="mb-4 flex justify-center md:mb-8 ">
          <a className="relative aspect-square w-full max-w-96" href={"https://open.spotify.com/intl-de/album/4ynJsOnfJRlr8qF5Z7Cpxh"}>
            <Image
              src={album}
              layout={"fill"}
              objectFit={"cover"}
              alt={"video screenshot"}
              sizes={imageRenditions.full}
              lazyBoundary={imageLazyBoundary}
              className="rounded"
            />
          </a>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <FormattedMessage
              id={"home.aveubu.order"}
              values={{
                link: (
                  <a href={"https://www.klangschutz.com/PRESALE-UBU-IMPERATOR-AVE-UBU"} className="underline underline-offset-2">
                    Klangschutz Webshop
                  </a>
                ),
              }}
            ></FormattedMessage>
          </li>
          <li>
            <FormattedMessage
              id={"home.aveubu.listen"}
              values={{
                spotify: (
                  <a href={"https://open.spotify.com/intl-de/album/4ynJsOnfJRlr8qF5Z7Cpxh"} className="underline underline-offset-2">
                    Spotify
                  </a>
                ),
                bandcamp: (
                  <a href={"https://ubuimperator.bandcamp.com/album/ave-ubu"} className="underline underline-offset-2">
                    Bandcamp
                  </a>
                ),
              }}
            ></FormattedMessage>
          </li>
          <li>
            <FormattedMessage
              id={"home.aveubu.watch"}
              values={{
                lilian: (
                  <a href={"https://lilianrobl.de/"} className="underline underline-offset-2">
                    Lilian Robl
                  </a>
                ),
                youtube: (
                  <a href={"https://www.youtube.com/watch?v=2TsZOFkTB2E"} className="underline underline-offset-2">
                    youtube
                  </a>
                ),
              }}
            ></FormattedMessage>
          </li>
        </ul>
        <SectionSpace />
      </CompactArea>
      <Image
        src={screenshot}
        layout={"fill"}
        objectFit={"cover"}
        alt={"video screenshot"}
        sizes={imageRenditions.full}
        lazyBoundary={imageLazyBoundary}
        className="object-cover object-center brightness-90"
      />
      <div className="absolute inset-0 bg-center" style={{ background: "radial-gradient(transparent, #111 70%)" }} />
    </Grid>
  )
}
