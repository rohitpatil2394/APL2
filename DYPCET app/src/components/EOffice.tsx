const EOffice = () => {
  return (
    <section id="e-office" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">E-Office</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Online Services</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-medium">Student Portal</h4>
                <p>Access grades, attendance, and academic records</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-medium">Faculty Portal</h4>
                <p>Manage courses, assignments, and student progress</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-medium">Alumni Portal</h4>
                <p>Stay connected and access exclusive resources</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Administrative Services</h3>
            <ul className="space-y-2 text-lg">
              <li>• Online Fee Payment</li>
              <li>• Application Forms</li>
              <li>• Document Verification</li>
              <li>• Grievance Redressal</li>
              <li>• Certificate Requests</li>
              <li>• Exam Registration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EOffice;
