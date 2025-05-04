'use client';

export default function Skills() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:pl-80" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-4">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="skill-category">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">AWS</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Azure</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Terraform</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">CloudFormation</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Ansible</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Linux</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Containerization & Orchestration</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Docker</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Kubernetes</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Helm</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Docker Compose</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="text-xl font-bold text-blue-600 mb-4">CI/CD & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Jenkins</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">GitHub Actions</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">GitLab CI</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">CircleCI</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">ArgoCD</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Monitoring & Logging</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Prometheus</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Grafana</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">ELK Stack</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Datadog</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">New Relic</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Programming & Scripting</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Python</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Bash</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">JavaScript</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Go</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">HCL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Miscellaneous</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Git</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">RESTful APIs</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Microservices</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Agile Methodology</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 