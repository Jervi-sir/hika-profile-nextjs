import { FilmIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-4 md:px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <FilmIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Hika - Video Edits</span>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https://x.com/HikaEdits" className="text-sm hover:underline" prefetch={false}>
          <FaSquareXTwitter className="h-5 w-5" />
        </Link>
        <Link href="https://www.instagram.com/defnothika/" className="text-sm hover:underline" prefetch={false}>
          <FaInstagram className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
};