import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
  Outlet,
} from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Telerad Global",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isArabic = pathname.startsWith("/ar")
  const lang = isArabic ? "ar" : "en"
  const dir = isArabic ? "rtl" : "ltr"

  return (
    <html lang={lang} dir={dir}>
      <head>
        <HeadContent />
      </head>
      <body className={dir === "rtl" ? "font-cairo" : "font-sans"}>
        <Outlet />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
