// Shared across components that generate a "message us" CTA.
// Each component builds its own message text from its own state/lang,
// then calls this to produce the wa.me link.
const OPERATIONS_PHONE = "201008125634" // Egypt Operations Desk

export function buildWhatsAppLink(text: string): string {
  return `https://wa.me/${OPERATIONS_PHONE}?text=${encodeURIComponent(text)}`
}
