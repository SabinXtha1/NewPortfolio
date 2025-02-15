import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req){
    try{

        const {name,email,msg} = await req.json()
        if(!name|| !email || !email){
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

const mailOptions={
    from:email,
    to:process.env.EMAIL_FROM,
    subject:'Contact',
    text:`
    Name:${name},
    Message:${msg}
    `
}
await transpoter.sendMail(mailOptions)


return NextResponse.json({ success: "Message sent successfully" }, { status: 200 })
}catch{
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
}

}
