############################################################
# Dockerfile to run ACMEWarehouse REST Container
# Based on Ubuntu Image
############################################################

# Set the base image to use to Ubuntu
FROM ubuntu

LABEL version="1.0"
LABEL stage="alpha"
LABEL description="This image will contain an ACMEWarehosue REST Demo using Swagger"

# Set the file maintainer (your name - the file's author)
MAINTAINER Mike Moore

# Update the default application repository sources list
RUN apt-get update

# Install MondoDB, NodeJS, Git, and npm.
RUN apt-get install -y mongodb
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git
RUN apt-get install -y nginx

# Install NodeJS Needs
RUN npm install mongodb
RUN npm install mongoose
RUN npm install http
RUN npm install connect
RUN npm install swagger-tools
RUN npm install swagger
RUN npm install shortid

# Create directory for the demo
RUN mkdir /demo

# Define nginx mountable directories
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Expose port 80 for nginx API proxy
EXPOSE 80

ADD server-startup /demo/server-startup

# Default command
CMD ["bash","/demo/server-startup"]
