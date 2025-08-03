import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from 'https://esm.sh/resend@3.2.0';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const resend = new Resend(RESEND_API_KEY);

serve(async (req) => {
  try {
    const { record } = await req.json();
    const newUserEmail = record.email;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'virtualoffice@metahaven.in',
      subject: `New Subscriber on MetaHaven: ${newUserEmail}`,
      html: `<h1>New Subscriber!</h1><p>A new user has subscribed with the email: <strong>${newUserEmail}</strong></p>`,
    });

    return new Response(JSON.stringify({ message: 'Email sent!' }), {
      headers: { 'Content-Type': 'application/json' }, status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' }, status: 500,
    });
  }
})