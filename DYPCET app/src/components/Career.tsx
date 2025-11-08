const Career = () => {
  return (
    <section id="career" className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Career Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Faculty Positions</h3>
            <p className="text-lg leading-relaxed mb-4">
              Join our esteemed faculty and contribute to shaping the future of engineering education. We offer positions in various departments with competitive compensation and research opportunities.
            </p>
            <ul className="space-y-2">
              <li>• Assistant Professor</li>
              <li>• Associate Professor</li>
              <li>• Professor</li>
              <li>• Research Associates</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Administrative Positions</h3>
            <p className="text-lg leading-relaxed mb-4">
              Support our administrative functions and help maintain excellence in operations. Various roles available in administration, student services, and technical support.
            </p>
            <ul className="space-y-2">
              <li>• Administrative Officer</li>
              <li>• Lab Technician</li>
              <li>• Librarian</li>
              <li>• IT Support Staff</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">
            Interested candidates can send their resumes to careers@dypcet.edu.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
