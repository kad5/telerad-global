import WorldMap from "./ui/world-map"

export function AnimatedMap() {
  return (
    <WorldMap
      dots={[
        {
          start: { lat: 26.3351, lng: 17.2283 }, // Libya
          end: { lat: 31, lng: 30.5 }, // Cairo
        },
        {
          start: { lat: 22, lng: 34.2283 }, // hurdaga
          end: { lat: 31, lng: 30.5 }, // Cairo
        },
        {
          start: { lat: 15, lng: 25 }, // chad
          end: { lat: 31, lng: 30.5 }, // Cairo
        },
        {
          start: { lat: 7.3351, lng: 37.2283 }, // sudan
          end: { lat: 23.8859, lng: 45.0792 }, // SAUDI
        },
        {
          start: { lat: 5.1521, lng: 47.2996 }, // Somalia
          end: { lat: 31, lng: 30.5 }, // Cairo
        },
        {
          start: { lat: 23.8859, lng: 45.0792 }, // Saudi Arabia
          end: { lat: 31, lng: 30.5 }, // Cairo
        },
        {
          start: { lat: 33.2232, lng: 43.6793 }, // Iraq
          end: { lat: 23.4241, lng: 53.8478 }, // UAE
        },
        {
          start: { lat: 33, lng: 34.5 }, // Palestine
          end: { lat: 23.8859, lng: 45.0792 }, // Saudi Arabia
        },
      ]}
    />
  )
}
