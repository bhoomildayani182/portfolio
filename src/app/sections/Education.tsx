'use client';

export default function Education() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:pl-80" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-4">Education</h2>
        
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-600">Bachelor of Technology in Computer Engineering</h3>
            <p className="text-gray-500">2019 - 2023</p>
          </div>
          <h4 className="text-lg font-medium mb-2">L.D. College of Engineering</h4>
          <p className="text-gray-600 mb-2">Ahmedabad, Gujarat</p>
          <p className="italic mb-4">CGPA: 8.5/10</p>
          <p>Relevant coursework: Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Cloud Computing, Web Development</p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-600">Higher Secondary Education (12th)</h3>
            <p className="text-gray-500">2018 - 2019</p>
          </div>
          <h4 className="text-lg font-medium mb-2">School Name</h4>
          <p className="text-gray-600 mb-2">Ahmedabad, Gujarat</p>
          <p className="italic">Percentage: 85%</p>
        </div>
      </div>
    </section>
  );
} 