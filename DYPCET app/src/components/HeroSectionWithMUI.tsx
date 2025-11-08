import { Button, Card, CardContent, Typography, Box, Grid, Chip } from '@mui/material';
import { School, Work, TrendingUp, ContactMail } from '@mui/icons-material';
import campusImage from "@/assets/college-campus.jpg.avif";

const HeroSectionWithMUI = () => {
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
            <Typography variant="h5" component="h2" className="text-2xl font-bold mb-2">
              ADMISSIONS
            </Typography>
            <Typography variant="h4" component="p" className="text-4xl font-bold text-academic-blue">
              OPEN 2025-26
            </Typography>
            <Button variant="contained" className="mt-4 bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="bg-stats-bg text-white py-8">
        <div className="container mx-auto px-4">
          <Grid container spacing={3}>
            {/* Immersion Program */}
            <Grid item xs={12} md={3}>
              <Card className="bg-white/10 border-none text-white h-full">
                <CardContent>
                  <Typography variant="h6" component="h3" className="font-bold text-lg mb-2">
                    IMMERSION PROGRAM
                  </Typography>
                  <Typography variant="body2" className="text-sm mb-4">
                    WITH UK, EUROPEAN, MALAYSIAN UNIVERSITY
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Chip label="SOU SHANTADEVI D. PATIL MERIT SCHOLARSHIP" size="small" className="bg-white/20 text-white" />
                    <Chip label="RURAL & SOCIAL ENTREPRENEUR CENTRE" size="small" className="bg-white/20 text-white" />
                    <Chip label="GLOBAL ALUMNI NETWORK" size="small" className="bg-white/20 text-white" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Statistics */}
            <Grid item xs={12} md={3}>
              <Card className="bg-white/10 border-none text-white h-full">
                <CardContent>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Box>
                      <Typography variant="h4" component="div" className="text-2xl font-bold">
                        100%
                      </Typography>
                      <Typography variant="body2" className="text-sm">
                        PLACEMENT ASSISTANCE
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" component="div" className="text-2xl font-bold">
                        227
                      </Typography>
                      <Typography variant="body2" className="text-sm">
                        Students Internship at IIT Mumbai
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" component="div" className="text-2xl font-bold">
                        32+
                      </Typography>
                      <Typography variant="body2" className="text-sm">
                        MoU
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Package Information */}
            <Grid item xs={12} md={3}>
              <Card className="bg-white/10 border-none text-white h-full">
                <CardContent>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Box>
                      <Typography variant="h4" component="div" className="text-2xl font-bold text-stats-accent">
                        ₹64 Lakh
                      </Typography>
                      <Typography variant="body2" className="text-sm">
                        P.A. Highest Package
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" component="div" className="text-2xl font-bold text-stats-accent">
                        ₹4.5 Lakh
                      </Typography>
                      <Typography variant="body2" className="text-sm">
                        P.A. Average Package
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={3}>
              <Card className="bg-white/10 border-none text-white h-full">
                <CardContent>
                  <Typography variant="h6" component="h3" className="font-bold mb-2">
                    CONTACT INFO
                  </Typography>
                  <Typography variant="body2" className="text-sm">
                    D.Y. Patil College of Engineering and Technology<br />
                    Kasaba Bawada, Kolhapur<br />
                    📞 9158615999 | 9860518701 | 9800029004<br />
                    ✉️ principal@coep.org.in<br />
                    🌐 coek.dypgroup.edu.in
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWithMUI;
