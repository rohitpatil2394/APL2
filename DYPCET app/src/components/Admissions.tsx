const Admissions = () => {
  return (
    <section id="admissions" className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Admissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium">For Undergraduate Programs</h4>
                <p>Admission through MHT-CET/JEE Main scores</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">For Postgraduate Programs</h4>
                <p>Admission through GATE/MHT-MBA/MCA CET scores</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Direct Admission</h4>
                <p>For NRI/PIO/FN candidates and management quota</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-medium">MHT-CET 2025</h4>
                <p>Application: March - April 2025</p>
                <p>Exam: May 2025</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-medium">JEE Main 2025</h4>
                <p>Session 1: January 2025</p>
                <p>Session 2: April 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
