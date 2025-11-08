import { Card, CardContent, Typography, Chip, Box, Grid } from '@mui/material';
import { School, Star, TrendingUp, Business } from '@mui/icons-material';

const AboutUsWithMUI = () => {
  const excellenceItems = [
    { text: 'Autonomous Institute since 2010', icon: <School /> },
    { text: 'NBA Accredited Programs', icon: <Star /> },
    { text: 'NAAC \'A\' Grade Accreditation', icon: <Star /> },
    { text: 'NIRF Ranking: Top 200 Engineering Colleges', icon: <TrendingUp /> },
    { text: '40+ Years of Academic Excellence', icon: <School /> },
    { text: 'Strong Industry Partnerships', icon: <Business /> }
  ];

  return (
    <section id="about-us" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Typography variant="h2" component="h2" className="text-3xl font-bold mb-6 text-center">
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3} className="h-full">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom className="text-2xl font-semibold mb-4">
                  Our Vision
                </Typography>
                <Typography variant="body1" className="text-lg leading-relaxed">
                  To be a premier institution of technical education, fostering innovation, research, and entrepreneurship to meet the challenges of the global engineering community.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3} className="h-full">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom className="text-2xl font-semibold mb-4">
                  Our Mission
                </Typography>
                <Typography variant="body1" className="text-lg leading-relaxed">
                  To provide quality technical education through innovative teaching-learning processes, industry-academia collaboration, and research activities that prepare students for successful careers and contribute to societal development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h5" component="h3" gutterBottom className="text-2xl font-semibold mb-4 text-center">
            Excellence in Education
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center">
            {excellenceItems.map((item, index) => (
              <Chip
                key={index}
                icon={item.icon}
                label={item.text}
                variant="outlined"
                color="primary"
                className="m-1"
              />
            ))}
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default AboutUsWithMUI;
