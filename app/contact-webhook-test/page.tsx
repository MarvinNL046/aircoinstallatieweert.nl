import type { Metadata } from "next"
import ContactWebhookTest from "./ContactWebhookTest"

export const metadata: Metadata = {
  title: "Contact Webhook Test | Airco Installatie Weert",
  description: "Test page for GoHighLevel webhook integration",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ContactWebhookTestPage() {
  return <ContactWebhookTest />
}