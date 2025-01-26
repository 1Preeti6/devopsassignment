# devopsAssignment

### Project Overview
A comprehensive DevOps project demonstrating containerization, infrastructure as code, and CI/CD pipeline implementation.
Technologies Used

- Node.js
- Docker
- Terraform
- GitHub Actions
- AWS EC2

### Project Structure
├── package.json
├── package-lock.json
├── server.js           # Node.js Express application
├── Dockerfile          # Docker containerization
├── main.tf             # Terraform infrastructure script
└── .github/workflows/
    └── cicd-workflow.yml  # GitHub Actions CI/CD pipeline

### Prerequisites

- Docker
- Terraform
- AWS Account
- GitHub Account
- Docker Hub Account

### Application Details
#### Node.js Application (server.js)

~ Simple Express server
~ Runs on port 3000
~ Returns "Hello, World! This is Preeti DevOps Assignment"

#### Dockerfile

~ Uses Node.js 16 base image
~ Copies application files
~ Installs dependencies
~ Exposes port 3000

#### Terraform Configuration

~ Creates AWS VPC
~ Provisions EC2 instance
~ Configures security groups
~ Sets up network infrastructure

#### CI/CD Workflow

~ Builds Docker image
~ Pushes to Docker Hub
~ Deploys to self-hosted runner

#### GitHub Actions

~ Triggered on push to main branch
~ Builds and publishes Docker image
~ Deploys to self-hosted runner

#### Security Considerations

~ Use environment secrets
~ Limit network access
~ Implement least privilege

#### Deployment Steps

~ Configure AWS credentials
~ Set GitHub secrets
~ Push code to repository
~ GitHub Actions handles deployment
