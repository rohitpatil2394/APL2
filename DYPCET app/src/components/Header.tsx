import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/dyp-logo.png.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about-us" },
    { label: "Academics", href: "#academics" },
    { label: "Admissions", href: "#admissions" },
    { label: "Placements", href: "#placements" },
    { label: "Research", href: "#research" },
    { label: "Campus Life", href: "#campus-life" },
    { label: "e-office", href: "#e-office" },
    { label: "Career", href: "#career" },
  ];


  const topBarItems = [
    "OFFICER INVENTORY",
    "CITIZENS CHARTER", 
    "ONLINE STUDENT GRIEVANCE REDRESSAL",
    "IQAC",
    "NIRF",
    "STAFF / STUDENT LOGIN",
    "ALUMNI",
    "हिंदी सेवा",
    "AICTE MANDATORY DISCLOSURE",
    "RTI",
    "CONTACT"
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-academic-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center py-2 text-xs">
            {topBarItems.map((item, index) => (
              <span key={index} className="mx-2 hover:text-academic-blue cursor-pointer">
                {item}
                {index < topBarItems.length - 1 && <span className="ml-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and College Name */}
            <div className="flex items-center space-x-4">
              <img src={logo} alt="DYP Logo" className="h-16 w-16" />
              <div className="text-left">
                <h1 className="text-2xl font-bold">D Y PATIL</h1>
                <p className="text-sm">COLLEGE OF ENGINEERING & TECHNOLOGY</p>
                <p className="text-xs opacity-90">AN AUTONOMOUS INSTITUTE</p>
              </div>
            </div>

            {/* Years of Excellence */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold">40</div>
                <div className="text-sm">of Excellence in</div>
                <div className="text-sm">Technical Education</div>
              </div>
              
              {/* Accreditation Badges */}
              <div className="flex space-x-2">
                <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
                  NAAC
                </div>
                <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
                  NBA
                </div>
                <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
                  NIRF
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block border-t border-blue-400">
            <div className="flex space-x-8 py-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-academic-blue hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;