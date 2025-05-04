'use client';

export default function Certification() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:pl-80" id="certification">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-4">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">AWS Certified Cloud Practitioner</h3>
            <p className="text-gray-500 mb-4">Amazon Web Services</p>
            <p className="text-gray-600 mb-2">Credential ID: XXXX-XXXX-XXXX</p>
            <p className="text-gray-600">Issued: January 2023 · Expires: January 2026</p>
            <div className="mt-4">
              <a 
                href="#" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">Microsoft Azure Fundamentals (AZ-900)</h3>
            <p className="text-gray-500 mb-4">Microsoft</p>
            <p className="text-gray-600 mb-2">Credential ID: XXXX-XXXX-XXXX</p>
            <p className="text-gray-600">Issued: March 2023 · No Expiration</p>
            <div className="mt-4">
              <a 
                href="#" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">Microsoft Azure Administrator (AZ-104)</h3>
            <p className="text-gray-500 mb-4">Microsoft</p>
            <p className="text-gray-600 mb-2">Credential ID: XXXX-XXXX-XXXX</p>
            <p className="text-gray-600">Issued: June 2023 · Expires: June 2025</p>
            <div className="mt-4">
              <a 
                href="#" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">Docker Certified Associate</h3>
            <p className="text-gray-500 mb-4">Docker, Inc.</p>
            <p className="text-gray-600 mb-2">Credential ID: XXXX-XXXX-XXXX</p>
            <p className="text-gray-600">Issued: September 2023 · Expires: September 2026</p>
            <div className="mt-4">
              <a 
                href="#" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 