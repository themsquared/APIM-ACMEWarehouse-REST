############################################################
# Dockerfile to run ACMEWarehouse REST Container
# Based on Ubuntu Image
############################################################

LABEL version="1.0"
LABEL stage="alpha"
LABEL description="This image will contain an ACMEWarehosue REST Demo using Swagger"

# Set the base image to use to Ubuntu
FROM ubuntu

# Set the file maintainer (your name - the file's author)
MAINTAINER Mike Moore

# Update the default application repository sources list
RUN apt-get update

# Install Memcached, MondoDB, NodeJS, and npm.
RUN apt-get install -y memcached
RUN apt-get install -y mongodb
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git
RUN apt-get install -y nginx

# Install NodeJS Needs
RUN npm install mongodb
RUN npm install connect
RUN npm install swagger-tools

# Clone the most recent ACMEWarehouse REST Demo
RUN git clone https://github.com/themsquared/ACMEWarehouse-REST-Swagger.git acmewarehouse

# Expose port 80 for nginx API proxy
EXPOSE 80

# Default command
CMD ["nginx"]
