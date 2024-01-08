
# Creating a Replicated Application

## Pre requisite

### Install Nginx ingress controller

``` 
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
```



install metrics server

``` 
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

## Frontend

``` 
kustomize build frontend/ | kubectl apply -f - -n frontend
```

## Redis

``` 
kustomize build redis/ | kubectl apply -f - -n redis
```

## File-server

``` 
kustomize build fileserver/ | kubectl apply -f - -n frontend
```


### create a secret password for your Redis database

``` 
kubectl apply -f redis/passwd-secret.yaml -n redis
```

### create the headless Service for the Redis StatefulSet

it creates a DNS entry redis-0.redis;

``` 
kubectl create configmap redis-config --from-file=./launch.sh -n redis
```

### deploying three-replica Redis 

``` 
kubectl apply -f redis/statefulset.yaml -n redis
```