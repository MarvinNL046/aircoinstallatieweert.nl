import emailjs from '@emailjs/browser';

const DEBUG_MODE = false;

emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

const EMAILJS_SERVICE_ID = "service_1rruujp";
const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city?: string;
}

const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      contact_number: Math.random() * 100000 | 0,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || 'Not specified',
        message: data.message
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending to webhook:', webhookData);
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        console.error('Webhook response not ok:', response.status, response.statusText);
      }
      return false;
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  const emailJSSuccess = await sendViaEmailJS(data);
  const webhookSuccess = await sendToWebhook(data);
  
  if (DEBUG_MODE) {
    console.log('Email sending results:', {
      emailJS: emailJSSuccess,
      webhook: webhookSuccess
    });
  }
  
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }
};

export const sendWebhookOnly = async (data: EmailData): Promise<void> => {
  const success = await sendToWebhook(data);
  
  if (!success) {
    throw new Error('Failed to send data to webhook');
  }
};