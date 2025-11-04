import emailjs from '@emailjs/browser';

export async function sendEmail(form: HTMLFormElement) {
    try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        const response = await emailjs.sendForm(serviceId, templateId, form, publicKey);

        console.log('✅ Email sent successfully:', response.status, response.text);
        return response;
    } catch (error) {
        console.error('❌ Failed to send email:', error);
        throw error;
    }
}