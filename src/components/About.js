import React from 'react';
import '../App.css';
import profileImg from '../assets/Avi.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">DevOps Engineer | Cloud Enthusiast</h4>
              <p className="text-muted">
                I’m a DevOps Engineer with ~1 year of hands-on experience in building, automating, and optimizing infrastructure and application deployment pipelines in AWS environments. I have worked extensively with <strong>AWS</strong>, <strong>Kubernetes</strong>, <strong>Terraform</strong>, <strong>Jenkins</strong>, <strong>Docker</strong>, and <strong>Grafana</strong>.
              </p>
              <p className="text-muted">
                At <strong>Trinity Mobility Pvt. Ltd.</strong>, I contributed to cost-effective cloud deployments by implementing NGINX Ingress Controllers, EBS-backed storage for persistent data, and namespace-level cost monitoring with Kubecost on EKS clusters.
              </p>
              <p className="text-muted">
                My experience also includes configuring CI/CD pipelines, managing containerized applications, setting up CronJobs, automating backup tasks with AMIs, and maintaining secure IAM policies across environments.
              </p>
              <p className="text-muted mb-0">
                I’m passionate about delivering scalable, reliable, and observable infrastructure. I enjoy learning new tools and technologies and aim to contribute to efficient and secure DevOps ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



