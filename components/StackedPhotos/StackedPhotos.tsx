import balveDaniel from "../../images/pile/balve-danie.jpeg"
import balveDrums from "../../images/pile/balve-drums.jpg"
import kaufbeurenBand from "../../images/pile/kaufbeuren-band.jpeg"
import kaufbeurenLogo from "../../images/pile/kaufbeuren-logo.jpeg"
import murf1 from "../../images/pile/murf1.jpeg"
import murf2 from "../../images/pile/murf2.jpeg"
import murf3 from "../../images/pile/murf3.jpeg"
import ruebeSimon from "../../images/pile/ruebe-simon.jpg"
import UBU2 from "../../images/pile/UBUIMPERATOR-2.jpg"
import UBU3 from "../../images/pile/UBUIMPERATOR-3.jpg"
import rebl from "../../images/pile/rebl.jpg"
import gallery from "../../images/pile/gallery.jpg"

import leipzig from "../../images/pile/leipzig.jpg"
// import tuebingen from "../../images/pile/tuebingen.jpg"
import zBau from "../../images/pile/z-bau.jpg"
import greenSugar from "../../images/pile/green-sugar.webp"
import ruebe1 from "../../images/pile/ruebe-buehne.jpg"
import ruebe2 from "../../images/pile/ruebe-buehne-2.jpg"

import StackedPhoto from "./StackedPhoto"
import { useState } from "react"
import RotateButton from "../RotateButton"

export interface PicturePileProps {}

export default function StackedPhotos(props: PicturePileProps) {
  const [pileImageProps, setPileImageProps] = useState([
    { src: kaufbeurenLogo, text: "11.03.22 Roundhouse, Kaufbeuren", textRight: true, id: "1" },
    { src: UBU3, text: "Bandportrait by Vanessa Mönius", id: "2" },
    // { src: ruebeSimon, text: "2022 Ruebezahl Festival", id: "3" },
    { src: rebl, text: "24.04.23 Walter Storms Galerie, München", id: "4" },
    { src: gallery, text: "24.04.23 Walter Storms Galerie, München", id: "5" },
    { src: balveDaniel, text: "27.05.2023 Kunstblock Balve, München", id: "6" },
    { src: balveDrums, text: "27.05.2023 Kunstblock Balve, München", id: "7" },
    { src: kaufbeurenBand, text: "11.03.22 Roundhouse, Kaufbeuren", id: "8" },
    { src: UBU2, text: "Bandportrait by Vanessa Mönius", id: "9" },
    { src: murf1, text: "01.10.23 Murf/Murw Festival, Tilburg NL", id: "10" },
    { src: murf3, text: "30.09.23 Murf/Murw Festival, Tilburg NL", id: "11" },
    { src: murf2, text: "30.09.23 Murf/Murw Festival, Tilburg NL", id: "12" },

    // { src: tuebingen, text: "19.07.24 Shedhalle, Tübingen", id: "13" },
    { src: zBau, text: "28.09.24 Z-Bau, Nürnberg", id: "14" },
    { src: greenSugar, text: "14.09.24 Import Export at Green Sugar Festival, Munich", id: "15" },
    { src: leipzig, text: "09.11.24 Nochbesserleben, Leipzig", id: "13" },
    { src: ruebe2, text: "17.08.24 Wald, Nürnberg", id: "17", textTop: true, textRight: true },
    { src: ruebe1, text: "17.08.24 Wald, Nürnberg", id: "16" },
  ])

  const [counter, setCounter] = useState(pileImageProps.length)

  function handleClick() {
    if (counter === -1 * pileImageProps.length) {
      setCounter(pileImageProps.length - 1)
      return
    }

    setCounter((x) => x - 1)
  }

  return (
    <div className={"col-content select-none"}>
      <div
        className={"relative h-[60lvh] w-full cursor-clickText bg-darkGray px-2 py-4 md:h-[80lvh] md:px-4 md:py-8"}
        onClick={handleClick}
      >
        <div className={"relative size-full select-none"}>
          {pileImageProps.map((props, index) => (
            <StackedPhoto key={props.id} index={index} showImages={Math.abs(counter)} {...props} />
          ))}
        </div>
        <RotateButton className={"absolute bottom-2 right-2 md:hidden"} />
      </div>
    </div>
  )
}
