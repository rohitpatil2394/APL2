import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Phone, Globe } from "lucide-react";
import logo from "../assets/dyp-logo.png.png";
import campusImage from "../assets/college-campus.jpg.avif";

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Information */}
            <div className="bg-primary text-white p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">D Y Patil College of</h1>
                <h2 className="text-2xl font-bold mb-2">Engineering & Technology</h2>
                <p className="text-sm opacity-90">Kasaba Bawada, Kolhapur</p>
                <p className="text-sm opacity-90">An Autonomous Institute</p>
              </div>

              <div className="mb-8">
                <h3 className="text-4xl font-bold mb-2">ADMISSION</h3>
                <h3 className="text-4xl font-bold mb-2">OPEN</h3>
                <p className="text-xl">2025-26</p>
              </div>

              <div className="mb-6">
                <p className="text-sm mb-2">Contact for Admission:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-lg font-bold">9158915999</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-lg font-bold">9158615999</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img src={logo} alt="DYP Logo" className="h-16 w-16 bg-white rounded-full p-2" />
                <div>
                  <h4 className="font-bold">D Y PATIL</h4>
                  <p className="text-xs">COLLEGE OF</p>
                  <p className="text-xs">ENGINEERING & TECHNOLOGY</p>
                  <p className="text-xs opacity-90">AN AUTONOMOUS INSTITUTE</p>
                </div>
              </div>

              <div className="flex space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <Globe className="h-3 w-3" />
                  <span>@dypercollege</span>
                </div>
                <div>
                  <span>Dypatil_official</span>
                </div>
                <div>
                  <span>coek.dypgroup.edu.in</span>
                </div>
              </div>
            </div>

            {/* Right Side - Campus Image */}
            <div className="relative">
              <img 
                src={campusImage} 
                alt="College Campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white p-6 text-center border-t">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Admission Enquiry Click Here
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionModal;