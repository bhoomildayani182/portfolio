'use client';

export default function Achievements() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:pl-80" id="Achievements">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-4">Achievements</h2>
        
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute top-6 right-6">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Cloud Cost Optimization Champion</h3>
            <p className="text-gray-700">
              Led a cloud cost optimization initiative that reduced monthly AWS costs by 45% while maintaining the same level of performance and reliability. Implemented reserved instances, spot instances, and resource right-sizing strategies.
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute top-6 right-6">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Disaster Recovery Solution Award</h3>
            <p className="text-gray-700">
              Recognized for designing and implementing a robust disaster recovery solution that reduced the Recovery Time Objective (RTO) from 4 hours to less than 30 minutes, ensuring business continuity for critical applications.
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute top-6 right-6">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Security Excellence Recognition</h3>
            <p className="text-gray-700">
              Received recognition for implementing a comprehensive security framework that enhanced the organization's security posture, including automated security scanning in CI/CD pipelines, infrastructure hardening, and security monitoring.
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute top-6 right-6">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Technical Documentation Champion</h3>
            <p className="text-gray-700">
              Spearheaded the creation of comprehensive technical documentation for DevOps processes, infrastructure architecture, and security controls, which became the gold standard for the organization's documentation practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 