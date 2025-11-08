const Research = () => {
  return (
    <section id="research" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Research Centers</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-medium">Center for Advanced Computing</h4>
                <p>Focus on AI, Machine Learning, and Data Science</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-medium">Sustainable Energy Research Center</h4>
                <p>Renewable energy solutions and green technologies</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-medium">Smart Manufacturing Lab</h4>
                <p>Industry 4.0 and automation technologies</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Research Achievements</h3>
            <ul className="space-y-2 text-lg">
              <li>• 200+ Research Publications</li>
              <li>• 50+ Patents Filed</li>
              <li>• Funded Research Projects worth ₹2+ Crores</li>
              <li>• International Collaborations</li>
              <li>• Ph.D. Program with 50+ Scholars</li>
              <li>• Innovation and Incubation Center</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
