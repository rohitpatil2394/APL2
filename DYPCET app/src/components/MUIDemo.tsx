import { Card, CardContent, Typography, Chip, Box, Button, Grid2 } from '@mui/material';
import { School, Star, TrendingUp, Business } from '@mui/icons-material';

const MUIDemo = () => {
  const excellenceItems = [
    { text: 'Autonomous Institute since 2010', icon: <School /> },
    { text: 'NBA Accredited Programs', icon: <Star /> },
    { text: 'NAAC \'A\' Grade Accreditation', icon: <Star /> },
    { text: 'NIRF Ranking: Top 200 Engineering Colleges', icon: <TrendingUp /> },
    { text: '40+ Years of Academic Excellence', icon: <School /> },
    { text: 'Strong Industry Partnerships', icon: <Business /> }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Typography variant="h2" component="h2" className="text-3xl font-bold mb-6 text-center">
          MUI Components Demo
        </Typography>

        <Grid2 container spacing={4}>
          <Grid2 xs={12} md={6}>
            <Card elevation={3} className="h-full">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  To be a premier institution of technical education, fostering innovation, research, and entrepreneurship.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 xs={12} md={6}>
            <Card elevation={3} className="h-full">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  To provide quality technical education through innovative teaching-learning processes.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        <Box mt={4}>
          <Typography variant="h5" component="h3" gutterBottom className="text-center">
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

        <Box mt={4} display="flex" gap={2} justifyContent="center">
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary Button
          </Button>
          <Button variant="text" color="success">
            Success Button
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default MUIDemo;
