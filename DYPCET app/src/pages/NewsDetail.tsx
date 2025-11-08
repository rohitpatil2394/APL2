import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, fetch from API or state
  const newsItems = {
    1: {
      title: "Free vaccination for 18-44 years age group is starting from 21 June 2021.",
      date: "June 21, 2021",
      category: "Health",
      content: `
        <p>We are pleased to announce that the free vaccination drive for individuals aged 18-44 years will commence from June 21, 2021. This initiative is part of the government's ongoing efforts to combat the COVID-19 pandemic and ensure widespread immunization across all age groups.</p>

        <h3>Key Details:</h3>
        <ul>
          <li><strong>Eligibility:</strong> All individuals between 18 and 44 years of age</li>
          <li><strong>Vaccination Centers:</strong> Available at all designated government hospitals and community centers</li>
          <li><strong>Registration:</strong> Required through the official portal or mobile application</li>
          <li><strong>Documents Needed:</strong> Valid ID proof and age verification documents</li>
        </ul>

        <p>The vaccination will be administered in phases to ensure smooth operations and maintain social distancing protocols. Priority will be given to frontline workers, senior citizens, and those with comorbidities in the initial rollout.</p>

        <h3>Important Guidelines:</h3>
        <ul>
          <li>Arrive at the vaccination center 15 minutes before your scheduled time</li>
          <li>Wear a mask and maintain physical distance</li>
          <li>Carry a valid photo ID and appointment confirmation</li>
          <li>Stay at the observation area for 30 minutes after vaccination</li>
        </ul>

        <p>For more information and to book your slot, please visit the official health department website or contact your nearest vaccination center. Together, we can achieve herd immunity and return to normalcy.</p>
      `
    },
    2: {
      title: "New Academic Session 2025-26 Registration Opens",
      date: "March 15, 2025",
      category: "Admission",
      content: `
        <p>The D.Y. Patil College of Engineering and Technology is excited to announce that registration for the new academic session 2025-26 is now open. We invite aspiring engineers and technologists to join our prestigious institution and embark on a journey of academic excellence and innovation.</p>

        <h3>Programs Offered:</h3>
        <ul>
          <li><strong>Bachelor of Technology (B.Tech)</strong> in Computer Science, Mechanical Engineering, Civil Engineering, Electrical Engineering, and Electronics & Communication</li>
          <li><strong>Master of Technology (M.Tech)</strong> in various specializations</li>
          <li><strong>Master of Business Administration (MBA)</strong> with focus on Technology Management</li>
        </ul>

        <h3>Admission Process:</h3>
        <ol>
          <li>Online registration through our official website</li>
          <li>Entrance examination for eligible candidates</li>
          <li>Personal interview and document verification</li>
          <li>Final admission offer and fee payment</li>
        </ol>

        <p>Our institution boasts state-of-the-art facilities, experienced faculty, and strong industry partnerships that ensure our graduates are well-prepared for successful careers in their chosen fields.</p>

        <h3>Scholarship Opportunities:</h3>
        <p>We offer various scholarships including merit-based, need-based, and special category scholarships to support deserving students in pursuing their educational goals.</p>

        <p>Don't miss this opportunity to be part of a legacy of excellence. Register now and take the first step towards a bright future in engineering and technology.</p>
      `
    },
    3: {
      title: "Technical Fest 'Visiom Waves' Successfully Concluded",
      date: "March 10, 2025",
      category: "Events",
      content: `
        <p>The much-awaited Technical Fest 'Visiom Waves 2025' concluded successfully on March 10, 2025, leaving participants and attendees with unforgettable memories and valuable learning experiences. The three-day event brought together students, faculty, and industry experts from across the region.</p>

        <h3>Event Highlights:</h3>
        <ul>
          <li><strong>Technical Competitions:</strong> Over 50 competitions in various categories including coding, robotics, circuit design, and project presentations</li>
          <li><strong>Workshops:</strong> Hands-on sessions on emerging technologies like AI, IoT, Blockchain, and 3D Printing</li>
          <li><strong>Guest Lectures:</strong> Renowned industry leaders shared insights on current trends and future prospects</li>
          <li><strong>Exhibition:</strong> Showcase of innovative projects by students and research scholars</li>
        </ul>

        <h3>Key Achievements:</h3>
        <ul>
          <li>Participation from over 2,000 students from 50+ colleges</li>
          <li>Industry partnerships worth ₹50 lakhs announced</li>
          <li>15 startup ideas selected for incubation program</li>
          <li>Record-breaking attendance at technical workshops</li>
        </ul>

        <p>The fest provided a platform for students to showcase their talents, learn from experts, and network with peers and industry professionals. Many participants expressed enthusiasm about implementing the knowledge gained in their academic and professional pursuits.</p>

        <h3>Special Thanks:</h3>
        <p>We extend our gratitude to our sponsors, faculty coordinators, student volunteers, and all participants who made 'Visiom Waves 2025' a resounding success. We look forward to even bigger and better events in the coming years.</p>
      `
    },
    4: {
      title: "Hackathon Winners Announced – Innovation at its Best",
      date: "March 5, 2025",
      category: "Competition",
      content: `
        <p>The results of the highly anticipated 48-hour Hackathon 2025 have been announced, showcasing remarkable innovation and technical prowess among participants. The event, themed "Tech Solutions for Sustainable Future," challenged participants to develop solutions addressing real-world problems using cutting-edge technology.</p>

        <h3>Winning Teams:</h3>
        <ul>
          <li><strong>1st Place - Team InnovateX:</strong> Developed an AI-powered waste management system that optimizes collection routes and reduces operational costs by 40%</li>
          <li><strong>2nd Place - Team CodeCrafters:</strong> Created a blockchain-based platform for transparent supply chain management in agriculture</li>
          <li><strong>3rd Place - Team TechTitans:</strong> Built an IoT solution for smart energy management in residential buildings</li>
        </ul>

        <h3>Competition Highlights:</h3>
        <ul>
          <li><strong>Participants:</strong> 150+ teams from engineering colleges across the state</li>
          <li><strong>Mentorship:</strong> Guidance provided by industry experts and faculty members</li>
          <li><strong>Technologies Used:</strong> Machine Learning, IoT, Blockchain, Mobile Apps, Web Development</li>
          <li><strong>Prizes:</strong> Total prize pool of ₹5 lakhs plus incubation opportunities</li>
        </ul>

        <h3>Judges' Perspective:</h3>
        <p>"The quality of projects this year was exceptional. Participants demonstrated not just technical skills but also a deep understanding of real-world problems and sustainable solutions," said Dr. Priya Sharma, Chief Judge and Professor of Computer Science.</p>

        <p>The winning teams have been offered incubation support and opportunities to collaborate with industry partners for further development of their projects. This hackathon has once again proven to be a catalyst for innovation and entrepreneurship among young minds.</p>

        <h3>Future Prospects:</h3>
        <p>Many participating teams have expressed interest in continuing their projects beyond the competition, with several already in talks with potential investors and industry partners.</p>
      `
    }
  };

  const newsItem = newsItems[id] || newsItems[1]; // Default to first item if ID not found

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-gray-500">{newsItem.date}</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {newsItem.category}
          </span>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
      </div>
    </div>
  );
};

export default NewsDetail;
