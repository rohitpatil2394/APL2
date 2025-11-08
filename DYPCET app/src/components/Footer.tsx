import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/dyp-logo.png.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-academic-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="DYP Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg">D Y PATIL</h3>
                <p className="text-sm opacity-90">COLLEGE OF ENGINEERING & TECHNOLOGY</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              An Autonomous Institute committed to excellence in technical education 
              for over 40 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about-us" className="hover:text-academic-blue cursor-pointer block">About Us</a>
              <a href="#academics" className="hover:text-academic-blue cursor-pointer block">Academics</a>
              <a href="#admissions" className="hover:text-academic-blue cursor-pointer block">Admissions</a>
              <a href="#placements" className="hover:text-academic-blue cursor-pointer block">Placements</a>
              <a href="#research" className="hover:text-academic-blue cursor-pointer block">Research</a>
              <a href="#campus-life" className="hover:text-academic-blue cursor-pointer block">Campus Life</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Kasaba Bawada, Kolhapur, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9158615999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>principal@coep.org.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>coek.dypgroup.edu.in</span>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Important Links</h4>
            <div className="space-y-2 text-sm">
              <div className="hover:text-academic-blue cursor-pointer">NAAC</div>
              <div className="hover:text-academic-blue cursor-pointer">NBA</div>
              <div className="hover:text-academic-blue cursor-pointer">NIRF</div>
              <div className="hover:text-academic-blue cursor-pointer">AICTE</div>
              <div className="hover:text-academic-blue cursor-pointer">RTI</div>
              <div className="hover:text-academic-blue cursor-pointer">Alumni</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>&copy; 2025 D Y Patil College of Engineering & Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;