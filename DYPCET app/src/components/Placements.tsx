const Placements = () => {
  return (
    <section id="placements" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Placements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-lg">Placement Assistance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">₹64 LPA</div>
            <div className="text-lg">Highest Package</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">₹4.5 LPA</div>
            <div className="text-lg">Average Package</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Top Recruiters</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-medium">TCS</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-medium">Infosys</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-medium">Wipro</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-medium">Accenture</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-medium">Cognizant</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="font-medium">Capgemini</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Placement Support</h3>
            <ul className="space-y-2 text-lg">
              <li>• Dedicated Training & Placement Cell</li>
              <li>• Soft Skills Development</li>
              <li>• Mock Interviews & GD Sessions</li>
              <li>• Industry Connect Programs</li>
              <li>• Internship Opportunities</li>
              <li>• Career Counseling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
