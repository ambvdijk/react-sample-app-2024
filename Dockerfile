FROM node:lts-alpine as build-stage
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY ./ ./
RUN npm run build

FROM nginx:1.25.5-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
