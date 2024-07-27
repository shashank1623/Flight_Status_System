
import {Link} from "react-router-dom"
export const Footer = () => {
    return <footer className="bg-blue-600 text-primary-foreground py-4 px-6 flex items-center justify-between">
    <div className="text-sm">&copy; 2024 Indigo Flight Status. All rights reserved. Made by @TheGhost(Shashank Bhardwaj)</div>
    <nav className="flex items-center gap-4">
      <Link href="#" className="hover:underline" prefetch={false}>
        Contact Us
      </Link>
    </nav>
  </footer>
}