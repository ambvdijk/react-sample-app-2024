#!/bin/sh

docker stop react-sample-app
docker rm react-sample-app
docker build -t react-sample-app:latest .
docker run -d -p 127.0.0.1:80:80/tcp --name=react-sample-app react-sample-app
