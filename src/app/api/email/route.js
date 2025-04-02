import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, msg } = await req.json();

        if (!name || !email || !msg) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM, // Always use your verified email
            to: process.env.EMAIL_FROM, // Your email
            subject: 'Contact',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: "Message sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
