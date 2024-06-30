import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FilmIcon } from "lucide-react"

export const Header = () => {
  return (
    <header className=" px-4 lg:px-6 h-14 flex">
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Hika</a>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <a href="#contact" className="btn btn-link text-white">Get in Touch</a>
        </div>
      </div>
    </header>
  );
};