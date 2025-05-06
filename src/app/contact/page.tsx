"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Họ và tên"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Số điện thoại"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Nội dung"
        onChange={handleChange}
        required
      />
      <button type="submit">Gửi liên hệ</button>
    </form>
  );
}
