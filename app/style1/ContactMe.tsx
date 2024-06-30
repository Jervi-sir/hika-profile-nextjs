'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InstagramIcon, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import { MdEmail } from "react-icons/md";

export const ContactMe = () => {


  return (
    <>
      <div className="container px-4 md:px-6">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? Let&apos;s chat and see how I can help.
          </p>
        </div>
        <div className="max-w-md mx-auto space-y-4 flex flex-col items-center">
          {/* <ContactForm /> */}
          <div className="flex flex-col gap-4">
            <a href="mailto:imhika1@gmail.com" className="text-primary hover:underline flex items-center space-x-4" >
              <MdEmail className="w-6 h-6" />
              <span>imhika1@gmail.com</span>
            </a>
            <Link href="https://x.com/HikaEdits" className="text-primary hover:underline flex items-center space-x-4" target="_blank" prefetch={false}>
              <FaSquareXTwitter className="w-6 h-6" />
              <span>@HikaEdits</span>
            </Link>
            <Link href="https://www.instagram.com/defnothika/" target="_blank" className="text-primary hover:underline flex items-center space-x-4" prefetch={false}>
              <FaInstagram className="w-6 h-6" />
              <span>@defnothika</span>
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-2xl">Thank you!</h3>
          <p>Your message has been sent successfully.</p>
        </div>
      ) : (
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" className="w-full" value={formData.name} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" className="w-full" value={formData.email} onChange={handleChange} />
          <Textarea name="message" placeholder="Message" className="w-full" rows={5} value={formData.message} onChange={handleChange} />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      )}
    </>
  )
}