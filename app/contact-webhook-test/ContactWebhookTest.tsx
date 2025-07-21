"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2, CheckCircle, XCircle } from "lucide-react"
import { sendWebhookOnly } from "@/src/utils/email"

export default function ContactWebhookTest() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setWebhookStatus('idle')

    try {
      await sendWebhookOnly(formData)
      setWebhookStatus('success')
      toast.success("Webhook data sent successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      })
    } catch (error) {
      setWebhookStatus('error')
      toast.error("Failed to send webhook data")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-16 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">GoHighLevel Webhook Test</h1>
        <p className="text-gray-600 mb-8">
          This page is for testing the webhook integration only. It does not send emails.
        </p>

        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-semibold mb-2">Webhook Details:</h2>
          <p className="text-sm text-gray-700 break-all">
            URL: https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <Input
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending to webhook...
              </>
            ) : (
              "Send Test Data to Webhook"
            )}
          </Button>
        </form>

        {webhookStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <p className="text-green-800">Webhook received the data successfully!</p>
          </div>
        )}

        {webhookStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 rounded-lg flex items-center">
            <XCircle className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-red-800">Failed to send data to webhook. Check console for details.</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Data Structure Sent:</h3>
          <pre className="text-xs overflow-x-auto">
{JSON.stringify({
  data: {
    name: formData.name || "Customer Name",
    email: formData.email || "customer@email.com",
    phone: formData.phone || "0612345678",
    city: formData.city || "Maastricht",
    message: formData.message || "I need an airco installation"
  }
}, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}