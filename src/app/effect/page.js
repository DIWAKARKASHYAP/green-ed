import Image from "next/image"
import Forest from "../components/forest"
import Ocean from "../components/ocean"
import Smoke from "../components/smoke"
import Economical from "../components/economical"
import Biodiversity from "../components/biodiversity"

export default function Effect() {
  return (
    <div>
      <Forest />
      {/* <Effect /> */}
      <Ocean />
      <Smoke />
      <Economical />
      <Biodiversity />
    </div>
  )
}

