'use client';

export default function Projects() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:pl-80" id="project">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-4">Projects</h2>
        
        <div className="space-y-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Automated CI/CD Pipeline for Microservices</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jenkins</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ArgoCD</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Terraform</span>
            </div>
            <p className="text-gray-700 mb-4">
              Designed and implemented a fully automated CI/CD pipeline for a microservices-based application, enabling continuous delivery with zero-downtime deployments.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Set up Jenkins for continuous integration with automated testing and security scanning</li>
              <li>Containerized the application using Docker and deployed to a Kubernetes cluster</li>
              <li>Implemented GitOps with ArgoCD for declarative deployments</li>
              <li>Created infrastructure as code using Terraform for repeatable environment setup</li>
              <li>Reduced deployment time by 70% and eliminated deployment-related outages</li>
            </ul>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                  </svg>
                  GitHub
                </span>
              </a>
              <a 
                href="#" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Live Demo
                </span>
              </a>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Cloud-Native Monitoring Solution</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Prometheus</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Grafana</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Alertmanager</span>
            </div>
            <p className="text-gray-700 mb-4">
              Developed a comprehensive monitoring and alerting solution for cloud-native applications deployed on AWS, providing real-time insights and proactive issue detection.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Configured Prometheus for metric collection from applications and AWS services</li>
              <li>Created custom dashboards in Grafana for visualizing key performance indicators</li>
              <li>Set up Alertmanager with escalation policies and integration with PagerDuty</li>
              <li>Developed Python scripts for custom metric collection from various sources</li>
              <li>Improved system reliability by 35% through proactive issue detection</li>
            </ul>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                  </svg>
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 