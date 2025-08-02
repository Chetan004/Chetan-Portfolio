import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
        DevOps Engineer with 1.3 year of hands-on experience in automating, deploying, and managing cloud-native applications on AWS. Skilled in Kubernetes, CI/CD pipelines, Docker, infrastructure automation using Terraform, and monitoring using Grafana and Prometheus. Proven ability to reduce cloud costs, enhance system availability, and streamline deployments across multiple environments.
      </p>
    </motion.section>
  );
}

export default Summary;