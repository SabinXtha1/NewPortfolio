import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req){
    try{

        const {name,email,msg} = await req.json()
        if(!name|| !email || !msg){
    return NextResponse.json({
        error:'All Fields are required'
    },{
        status:400
    })

}
  const transpoter= nodemailer.createTransport({
      service:'gmail',
    auth:{
        user:process.env.EMAIL_FROM,
        pass:process.env.PASS
    }
})

const mailOptions = {
  from: email,
  to: process.env.EMAIL_FROM,
  subject: 'Contact Message',
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #333;">📬 New Contact Form Message</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Message:</td>
          <td style="padding: 8px; white-space: pre-line;">${msg}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #888;">
        This message was sent via the contact form on your website.
      </p>
    </div>
  `
};
await transpoter.sendMail(mailOptions)


return NextResponse.json({ success: "Message sent successfully" }, { status: 200 })
}catch{
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
}

}
