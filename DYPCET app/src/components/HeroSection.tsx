import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import campusImage from "@/assets/college-campus.jpg.avif";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-r from-primary to-academic-blue">
        <img 
          src={campusImage} 
          alt="College Campus" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-academic-blue/80" />
        
        {/* Admission Banner Overlay */}
        <div className="absolute left-8 top-8 bg-white rounded-lg p-6 max-w-md shadow-xl">
          <div className="text-primary">
            <h2 className="text-2xl font-bold mb-2">ADMISSIONS</h2>
            <p className="text-4xl font-bold text-academic-blue">OPEN 2025-26</p>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="bg-stats-bg text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Immersion Program */}
            <Card className="bg-white/10 border-none text-white p-6">
              <h3 className="font-bold text-lg mb-2">IMMERSION PROGRAM</h3>
              <p className="text-sm mb-4">WITH UK, EUROPEAN, MALAYSIAN UNIVERSITY</p>
              <div className="space-y-2 text-sm">
                <div>SOU SHANTADEVI D. PATIL MERIT SCHOLARSHIP</div>
                <div>RURAL & SOCIAL ENTREPRENEUR CENTRE</div>
                <div>GLOBAL ALUMNI NETWORK</div>
              </div>
            </Card>

            {/* Statistics */}
            <Card className="bg-white/10 border-none text-white p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">PLACEMENT ASSISTANCE</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">227</div>
                  <div className="text-sm">Students Internship at IIT Mumbai</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">32+</div>
                  <div className="text-sm">MoU</div>
                </div>
              </div>
            </Card>

            {/* Package Information */}
            <Card className="bg-white/10 border-none text-white p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-stats-accent">₹64 Lakh</div>
                  <div className="text-sm">P.A. Highest Package</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-stats-accent">₹4.5 Lakh</div>
                  <div className="text-sm">P.A. Average Package</div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/10 border-none text-white p-6">
              <h3 className="font-bold mb-2">CONTACT INFO</h3>
              <div className="text-sm space-y-1">
                <p>D.Y. Patil College of Engineering and Technology</p>
                <p>Kasaba Bawada, Kolhapur</p>
                <p>📞 9158615999 | 9860518701 | 9800029004</p>
                <p>✉️ principal@coep.org.in</p>
                <p>🌐 coek.dypgroup.edu.in</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;