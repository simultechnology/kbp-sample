
# Creating a Replicated Application

## Redis

``` 
kustomize build redis/ | kubectl apply -f - -n redis
```

## Frontend

``` 
kustomize build frontend/ | kubectl apply -f - -n frontend
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