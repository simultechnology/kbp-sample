# Use an official nginx image as a parent image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the static content into the container at /usr/share/nginx/html
# This is where you put your website's files
COPY ./public/ .

# Expose port 80
EXPOSE 80

# Start nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
