import { createFileRoute, redirect } from "@tanstack/react-router"

// "/" itself isn't a real page — it just picks a default locale and
// redirects. Arabic is the default since it's the primary target market;
// flip this if you'd rather default to English.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/ar" })
  },
})
