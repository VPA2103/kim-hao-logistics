import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // 👈 email nhận
      pass: process.env.EMAIL_PASS,         // 👈 app password (không phải mật khẩu thường)
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Liên hệ từ ${name}`,
    text: `Họ tên: ${name}\nEmail: ${email}\nSĐT: ${phone}\nNội dung: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Gửi thành công!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Lỗi gửi email!' }, { status: 500 });
  }
}
