const CampusLife = () => {
  return (
    <section id="campus-life" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Campus Life</h2>
        <p className="text-lg leading-relaxed mb-6">
          Experience a vibrant campus life with numerous clubs, cultural events, sports activities, and student organizations that foster holistic development and lifelong friendships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Clubs & Societies</h3>
            <ul className="space-y-2">
              <li>• Robotics Club</li>
              <li>• Coding Club</li>
              <li>• Cultural Committee</li>
              <li>• Sports Club</li>
              <li>• Entrepreneurship Cell</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Events & Festivals</h3>
            <ul className="space-y-2">
              <li>• Annual Tech Fest</li>
              <li>• Cultural Fest</li>
              <li>• Sports Meet</li>
              <li>• Guest Lectures & Workshops</li>
              <li>• Alumni Meets</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Facilities</h3>
            <ul className="space-y-2">
              <li>• Modern Hostels</li>
              <li>• Sports Complex</li>
              <li>• Cafeteria & Food Courts</li>
              <li>• Library & Digital Resources</li>
              <li>• Wi-Fi Enabled Campus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
