import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../App.css';

const experiences = [
  {
    role: 'Associate DevOps Engineer',
    company: 'Trinity Mobility Pvt Ltd',
    duration: 'February 2023 - February 2024',
    description:
      'Collaborated with cross-functional teams to automate cloud infrastructure, streamline CI/CD workflows, and enhance deployment efficiency. Gained hands-on experience with tools like Jenkins, Git, SonarQube, and Docker, while managing production workloads on AWS EKS.'
  },
  {
    role: 'Cloud DevOps Engineer',
    company: 'NIFF Labs',
    duration: 'February 2025 - April 2025',
    description:
      'Worked on AWS and Kubernetes-based infrastructure. Implemented NGINX Ingress Controller, managed CI/CD pipelines with Jenkins, configured monitoring with Prometheus and Grafana, and automated deployments using Docker and Terraform.'
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience-section section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="section-title mb-5">Experience</h2>
        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-md-5 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <div className="experience-card p-4 h-100 text-start">
                <div className="icon-wrapper mb-3">
                  <FaBriefcase className="experience-icon" />
                </div>
                <h5 className="experience-role">{exp.role}</h5>
                <h6 className="experience-company">{exp.company}</h6>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
