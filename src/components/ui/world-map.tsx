import { useRef } from "react"
import { motion } from "motion/react"
import DottedMap from "dotted-map"

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
}

const REGION_COUNTRIES = [
  "EGY",
  "LBY",
  "SOM",
  "YEM",
  "SAU",
  "IRQ",
  "SDN",
  "ETH",
  "ERI",
  "DJI",
  "TCD",
  "NER",
  "JOR",
  "SYR",
  "TUR",
  "IRN",
  "ISR",
  "LBN",
  "KWT",
  "ARE",
  "OMN",
  "QAT",
]

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const map = new DottedMap({
    height: 80,
    grid: "diagonal",
    countries: REGION_COUNTRIES,
    // Add this exact region block:
  })

  const svgMap = map.getSVG({
    radius: 0.25,
    color: "#00000020",
    shape: "circle",
    backgroundColor: "white",
  })

  const projectPoint = (lat: number, lng: number) => {
    // Bounding box matches the DottedMap region perfectly
    const MIN_LNG = 2
    const MAX_LAT = 50

    const SPAN_LNG = 60 // max lng (90) - min lng (-30)
    const SPAN_LAT = 58 // max lat (50) - min lat (-10)

    // 800x400 is the native ViewBox size of Aceternity's SVG
    const x = (lng - MIN_LNG) * (800 / SPAN_LNG)
    const y = (MAX_LAT - lat) * (560 / SPAN_LAT)

    return { x, y }
  }

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative aspect-[1.41/1] w-full rounded-lg bg-white font-sans dark:bg-black">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="pointer-events-none h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] select-none"
          alt="world map"
          height="495"
          width="1056"
          draggable={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 560"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
        >
          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng)
            const endPoint = projectPoint(dot.end.lat, dot.end.lng)
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1.4"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * i,
                    ease: "easeOut",
                  }}
                  key={`start-upper-${i}`}
                ></motion.path>
              </g>
            )
          })}
          <defs>
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          {dots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}
