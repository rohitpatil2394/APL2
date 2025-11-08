const AboutUs = () => {
  return (
    <section id="about-us" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed mb-6">
              To be a premier institution of technical education, fostering innovation, research, and entrepreneurship to meet the challenges of the global engineering community.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To provide quality technical education through innovative teaching-learning processes, industry-academia collaboration, and research activities that prepare students for successful careers and contribute to societal development.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Excellence in Education</h3>
            <ul className="space-y-2 text-lg">
              <li>• Autonomous Institute since 2010</li>
              <li>• NBA Accredited Programs</li>
              <li>• NAAC 'A' Grade Accreditation</li>
              <li>• NIRF Ranking: Top 200 Engineering Colleges</li>
              <li>• 40+ Years of Academic Excellence</li>
              <li>• Strong Industry Partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
