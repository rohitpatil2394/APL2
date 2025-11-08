const Academics = () => {
  return (
    <section id="academics" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Academics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Undergraduate Programs</h3>
            <ul className="space-y-2">
              <li>• Computer Engineering</li>
              <li>• Mechanical Engineering</li>
              <li>• Civil Engineering</li>
              <li>• Electrical Engineering</li>
              <li>• Electronics & Telecommunication</li>
              <li>• Information Technology</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Postgraduate Programs</h3>
            <ul className="space-y-2">
              <li>• M.Tech in Computer Engineering</li>
              <li>• M.Tech in Mechanical Engineering</li>
              <li>• M.Tech in Civil Engineering</li>
              <li>• MBA</li>
              <li>• MCA</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Research Programs</h3>
            <ul className="space-y-2">
              <li>• Ph.D. in Engineering</li>
              <li>• Ph.D. in Management</li>
              <li>• Research Centers</li>
              <li>• Publications</li>
              <li>• Patents</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            Our academic programs are designed with industry collaboration, practical learning, and research opportunities to prepare students for successful careers in engineering and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academics;
