import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import '../App.css';

const certifications = [
 {
    "title": "Linux",
    "issuer": "Besant Technologies",
    "year": "2022",
    "description": "Gained hands-on experience with Linux command-line tools, file system navigation, user and permission management, and basic shell scripting."
  },
  {
    "title": "Cloud Platform: AWS",
    "issuer": "Besant Technologies",
    "year": "2022",
    "description": "Learned core AWS services including EC2, S3, VPC, IAM, and RDS, with a focus on designing secure and scalable cloud infrastructure."
  },
  {
    "title": "DevOps Tools",
    "issuer": "Besant Technologies",
    "year": "2022",
    "description": "Understood CI/CD pipelines, version control, containerization, monitoring, and infrastructure automation using tools like Git, Jenkins, Docker, and Kubernetes."
  }
];

function Certification() {
  return (
    <motion.section
      id="certification"
      className="container certification-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="cert-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaCertificate className="me-2 text-info cert-icon" />
                {cert.title}
              </h5>
              <h6 className="text-light fst-italic">{cert.issuer}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{cert.year}</small>
              </p>
              <p className="cert-desc mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certification;