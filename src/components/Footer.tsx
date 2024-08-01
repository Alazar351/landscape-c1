import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Location, Mail, Phone } from "../../public";
import Image from "next/image";
import Logo from "../../public/assets/Logo.png";

export default function Footer() {
  return (
    <section className="relative bg-primary-foreground px-4 pb-[30px] pt-[60px] md:px-8">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/"
          className="flex h-[126px] w-[267px] items-center justify-center rounded-[10px] bg-background"
        >
          <Image src={Logo} alt="Logo" className="h-[60px]" />
        </Link>
        <div className="flex flex-col gap-4">
          <h4 className="font-jost text-2xl text-white">Get In Touch</h4>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center gap-2">
              <Location className="size-5 fill-white" />
              <p>123 Street, New York, USA</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-5 fill-white" />
              <p>+012 345 67890</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-5 fill-white" />
              <p>info@example.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-jost text-2xl text-white">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/">Home</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/About">About Us</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/Features">Services</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/Portfolio">Portfolio</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/Contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-jost text-2xl text-white">Popular Links</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/">Home</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/About">About Us</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/Features">Features</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/Classes">Classes</Link>
            </div>
            <div className="flex items-center gap-1 text-white">
              <ChevronRight strokeWidth={4} className="size-4 font-extrabold" />
              <Link href="/Contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-white md:col-span-2 lg:col-span-4">
          <p>
            &copy; <span className="font-bold">Your Site Name</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
