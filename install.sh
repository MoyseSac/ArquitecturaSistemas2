#!/bin/bash
set -e

echo "Iniciando Minikube..."
minikube start --kubernetes-version=v1.28.0

echo "Esperando que Minikube esté listo..."
sleep 10

echo "Instalando ArgoCD..."
kubectl create namespace argocd 2>/dev/null || true
kubectl apply -n argocd -f \
  https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

echo "Esperando ArgoCD (30 segundos)..."
sleep 30

echo "Instalando Traefik..."
helm repo add traefik https://traefik.github.io/charts
helm repo update
helm install traefik traefik/traefik -n traefik --create-namespace \
  --set service.type=LoadBalancer \
  --set ports.web.port=80

echo "Esperando Traefik (20 segundos)..."
sleep 20

echo "Desplegando aplicación y rutas..."
kubectl apply -f k8s/

echo "¡Instalación completada!"
echo ""
echo "Configurar DNS local (/etc/hosts):"
echo "127.0.0.1 app.local"
echo "127.0.0.1 argo.moisessac.com"
echo "127.0.0.1 traefik.moisessac.com"
echo ""
echo " En otra terminal, ejecutar:"
echo "kubectl port-forward svc/traefik -n traefik 8000:80"
echo ""
echo " Acceder a:"
echo "- App: http://app.local:8000"
echo "- ArgoCD: http://argo.moisessac.com:8000"
echo "- Traefik Dashboard: http://traefik.moisessac.com:8000"