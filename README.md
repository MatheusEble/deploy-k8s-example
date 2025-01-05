# 🚀 DevOps Challenge: CI/CD com GitHub Actions, Docker e Kubernetes (Minikube)

## 📚 **Descrição do Projeto**
Este projeto implementa um pipeline **CI/CD** utilizando **GitHub Actions**, **Docker** e **Kubernetes (Minikube)** para automatizar o processo de **build**, **deploy** e **atualização contínua** de uma aplicação Node.js "Hello World".

A aplicação é implantada em um cluster Kubernetes local gerenciado pelo **Minikube** e exposta via **Service NodePort**.

---

## ⚙️ **Tecnologias Utilizadas**

- **Node.js:** Backend simples para uma API "Hello World".
- **Docker:** Criação e gerenciamento de imagens da aplicação.
- **Docker Hub:** Registro remoto para armazenar imagens Docker.
- **Kubernetes:** Orquestração dos containers.
- **Minikube:** Cluster Kubernetes local para desenvolvimento.
- **GitHub Actions:** Automação CI/CD.

---

## 🛠️ **Funcionalidades**

- **Build Automático:** A imagem Docker é criada e armazenada no Docker Hub.
- **Deploy Automatizado:** A aplicação é implantada automaticamente no Minikube.
- **Atualização Contínua:** Imagem atualizada com `kubectl set image`.
- **Pipeline CI/CD:** Automatização via GitHub Actions.
- **Escalabilidade:** Deployment configurado para 3 réplicas.

---

## 📂 **Estrutura do Projeto**
```
├── .github/
│   └── workflows/
│       └── build-and-deploy.yaml   # Pipeline do GitHub Actions
├── k8s/
│   ├── deployment.yaml             # Configuração do Deployment
│   ├── service.yaml                # Configuração do Service
│   ├── namespace.yaml              # Namespace para o Deployment
├── hello-world-api/
│   ├── Dockerfile                  # Build da imagem Docker
│   ├── index.js                    # Aplicação js
│   ├── package.json                # Dependências
├── .gitignore
└── README.md
```

---

## 🚦 **Fluxo do Pipeline CI/CD**

1. **Build da Imagem Docker:** Imagem criada com base no Dockerfile.
2. **Push para Docker Hub:** A imagem é enviada para o Docker Hub.
3. **Deploy no Minikube:** Aplicação é implantada no namespace `devops-challenge`.
4. **Atualização da Imagem:** Comando `kubectl set image` atualiza o Deployment.

---

## 🚦 **Como rodar a pipeline de build e deploy?**

**A pipeline irá rodar automaticamente ao abrir pull requests ou merges na branch principal.**

---

## 🐳 **Docker**

**Build e execução manual da imagem:**
```bash
docker build -t <usuario>/devops-app:latest .
docker run -p 3000:3000 <usuario>/devops-app:latest
```

**Login no Docker Hub:**
```bash
docker login
```

**Push para Docker Hub:**
```bash
docker push <usuario>/devops-app:latest
```

---

## ☸️ **Kubernetes**

**Criar Namespace:**
```bash
kubectl apply -f k8s/namespace.yaml
```

**Aplicar Deployment e Service:**
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

**Atualizar Imagem:**
```bash
kubectl set image deployment/hello-world-api hello-world-api=<usuario>/hello-world-api:<tag> -n devops-challenge
```

**Acessar Serviço via Minikube:**
```bash
minikube service hello-world-service -n devops-challenge --url
```

---

## 🤖 **GitHub Actions Workflow**

Arquivo localizado em `.github/workflows/build-and-deploy.yaml`, responsável por:
- Build da imagem Docker
- Push para Docker Hub
- Deploy no Kubernetes
- Atualização do Deployment com nova imagem

---

## 🔑 **Secrets no GitHub**

- `DOCKER_USERNAME`: Usuário Docker Hub
- `DOCKER_PASSWORD`: Senha Docker Hub

---

## 📊 **Monitoramento e Logs**

**Verificar Pods:**
```bash
kubectl get pods -n devops-challenge
```

**Logs do Deployment:**
```bash
kubectl logs deployment/hello-world-api -n devops-challenge
```

**Descrever Deployment:**
```bash
kubectl describe deployment hello-world-api -n devops-challenge
```

---

## 🚀 **Testar Localmente**

1. Inicie o Minikube:
```bash
minikube start --driver=docker
```
2. Acesse o serviço:
```bash
minikube service hello-world-api-service -n devops-challenge
```

---