import { createFileRoute } from "@tanstack/react-router"
import MarketingPage from "../components/MarketingPage"
import { translations } from "@/lib/translations"

export const Route = createFileRoute("/ar")({
  head: () => {
    const { title, description } = translations.ar.seo

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:locale", content: "ar_EG" },
      ],
      links: [
        { rel: "canonical", href: "https://www.YOUR_DOMAIN.com/ar" },
        // hreflang alternates tell Google these two URLs are the same page
        // in different languages, not duplicate content
        {
          rel: "alternate",
          hrefLang: "ar",
          href: "https://www.YOUR_DOMAIN.com/ar",
        },
        {
          rel: "alternate",
          hrefLang: "en",
          href: "https://www.YOUR_DOMAIN.com/en",
        },
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: "https://www.YOUR_DOMAIN.com/ar",
        },
      ],
    }
  },
  component: () => <MarketingPage lang="ar" />,
})
