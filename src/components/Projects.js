import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const responsibilities = [
  'Implemented NGINX Ingress Controller with HTTP/HTTPS and TCP routing on EKS, reducing ELB count and improving traffic management.',
  'Configured EBS persistent volumes for database pods to ensure data durability and persistence.',
  'Installed and configured Kubecost on EKS for namespace-level cost monitoring and optimization.',
  'Created Kubernetes CronJobs to automate routine tasks and maintenance activities.',
  'Automated daily AMI image creation of production environments using AWS CLI for disaster recovery.',
  'Managed AWS resources: EC2, S3, EKS, Auto Scaling, Load Balancer, VPC, EBS, EFS, AMI, and Snapshots.',
  'Used AWS CLI and IAM to manage account access and permissions securely.',
  'Worked on RedHat, Ubuntu, and CentOS Linux distributions for deployments and administration.',
  'Set up CI/CD pipelines in Jenkins integrating Git, SonarQube, Maven, Docker, Kubernetes, and Tomcat.',
  'Managed Jenkins agents for streamlined build and deployment workflows.',
  'Built Docker images including multi-stage builds for efficient production deployment.',
  'Used Terraform (IaC) to provision consistent AWS infrastructure.',
  'Participated in Kubernetes cluster migration ensuring minimal downtime.',
  'Deployed Prometheus and Grafana to monitor clusters, EC2 instances, and container health metrics.',
  'Troubleshot Jenkins job failures and maintained CI/CD uptime.',
  'Handled deployments across dev, test, UAT, and production environments.',
  'Created and managed IAM roles and policies for secure access control.',
  'Configured dashboards in Grafana for pod status, CPU, and memory usage visualization.'
];

function RolesResponsibilities() {
  return (
    <motion.section
      id="responsibilities"
      className="container-fluid text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Roles & Responsibilities</h2>
      <div className="row justify-content-center px-3">
        <div className="col-lg-8 text-start">
          <ul className="list-group list-group-flush bg-transparent">
            {responsibilities.map((item, index) => (
              <motion.li
                key={index}
                className="list-group-item bg-transparent text-light border-light"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default RolesResponsibilities;
