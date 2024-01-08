
# Creating a Replicated Application

## Prerequisite

```
kubectl create ns frontend
```

## Frontend

### Deployment

``` 
kubectl apply -f deployment.yaml -n frontend
```

### Setting Up an External Ingress for HTTP Traffic

``` 
kubectl apply -f service.yaml -n frontend
kubectl apply -f ingress.yaml -n frontend
```

### Configuring an Application with ConfigMaps

``` 
kubectl apply -f config.yaml -n frontend
```

### create a secret password for your Redis database

``` 
kubectl apply -f redis-secret.yaml -n frontend
```

