
# Creating a Replicated Application

## Prerequisite

```
kubectl create ns redis
```

## Redis


### create the headless Service for the Redis StatefulSet

it creates a DNS entry redis-0.redis;

``` 
kubectl create configmap redis-config --from-file=./launch.sh -n redis
```

### deploying three-replica Redis 

``` 
kubectl apply -f redis/statefulset.yaml -n redis
```