# 🐰 ToDoBunny — A Simple To-Do App with Docker, GitHub Actions, and AWS ECS

ToDoBunny is a lightweight and cute to-do application built with **React (Vite)**.  
The project showcases a full CI/CD pipeline using **Docker**, **GitHub Actions**, **Docker Hub**, and **AWS ECS (Fargate)**.

> ### 🚀 Live Demo: [http://13.61.11.13/](http://13.61.11.13/) <br>
[![Visit Live Website](https://img.shields.io/badge/Visit-Live%20Website-%23ee0000?style=for-the-badge&logo=globe&logoColor=white)](http://13.61.11.13/)
---

## 📦 Technologies Used

- **React (Vite)** – Frontend framework
- **Docker** – Containerization
- **Docker Hub** – Container registry  
  ↪ [DockerHub: sumudu21/todo-bunny](https://hub.docker.com/repository/docker/sumudu21/todo-bunny/general)
- **GitHub Actions** – CI/CD pipeline
- **AWS ECS (Fargate)** – Container orchestration
- **AWS VPC, Security Groups, Subnets** – Network infrastructure

---




## 🐳 Run Locally Using Docker

You can pull and run the Docker image from Docker Hub without cloning the code.

```
# Pull image from DockerHub
docker pull sumudu21/todo-bunny
```
```
# Run container on port 5173
docker run -d -p 5173:80 --name todo-bunny sumudu21/todo-bunny
```
#### Then open your browser and go to: 👉 http://localhost:5173


---
## 📥 Setup Locally from Source
```
# Clone the repository
git clone https://github.com/sumudu-k/ToDoBunny--DockerHub-GitHub_Actions-AWS.git
cd ToDoBunny--DockerHub-GitHub_Actions-AWS
```

```
# Install dependencies
npm install
```

```
# Run development server
npm run dev
```
#### The app will be available at: 👉 http://localhost:5173


---

## ☁️ Deployment on AWS (Fargate)

The app is containerized using Docker and deployed to **AWS ECS (Fargate)** with the following setup:

### 🔧 AWS Resources Used

| Resource             | Description                             |
|----------------------|-----------------------------------------|
| **ECR**              | Stores Docker image                     |
| **VPC/Subnets**      | Custom networking setup                 |
| **Security Groups**  | Opens port 80 for public access         |
| **ECS Cluster**      | Manages tasks                           |
| **Task Definition**  | Config for container CPU, memory, ports |



---

## ✅ ECS Task Settings
<ul>
<li>CPU: 256 (0.25 vCPU)</li>
<li>Memory: 512 MiB </li>
<li>Container Port: 80 </li>
<li>Protocol: HTTP </li>
</ul>

---

## 🔁 CI/CD with GitHub Actions

Every time code is pushed to the main branch, GitHub Actions will:
<ul>
<li>Build the Docker image</li>
<li>Push it to DockerHub</li>
</ul>

---

## 🌐 Visit Live on AWS

App is publicly hosted on:
#### 🔗 http://13.61.11.13

---

## 👤 Author

**Sumudu Kulathunga**

- 🐙 GitHub: [@sumudu-k](https://github.com/sumudu-k)
- 🐳 DockerHub: [@sumudu21](https://hub.docker.com/u/sumudu21)


---

## 📸 Screenshots
<p align="center" style="display: flex; justify-content: center; gap: 20px;">
  <div style="display: inline-block; text-align: center;">
    <img src="https://drive.google.com/uc?export=view&id=1b0JJYk0w3Uyq0_cIczc2gvUfXMo80Gcc" alt="Screenshot 1" width="500" />
    <p><strong>Locally Runs</strong></p>
  </div>

  <div style="display: inline-block; text-align: center;">
    <img src="https://drive.google.com/uc?export=view&id=1BpnwqecNdRHm_yxQLNmX8LAm6y4XIH49" alt="Screenshot 2" width="500" />
    <p><strong>AWS Deployed</strong></p>
  </div>
</p>



---

#### If you found this project useful or inspiring:

⭐ **Star** the repo  
🍴 **Fork** it to contribute or build your own version  
📢 **Share** it with others who might find it helpful  
