
# Creating a Replicated Application

## Frontend

### Deployment

``` 
kubectl apply -f frontend/deployment.yaml -n frontend
```

### Setting Up an External Ingress for HTTP Traffic

``` 
kubectl apply -f frontend/service.yaml -n frontend
kubectl apply -f frontend/ingress.yaml -n frontend
```

### Configuring an Application with ConfigMaps

``` 
kubectl apply -f frontend/config.yaml -n frontend
```


## Redis

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