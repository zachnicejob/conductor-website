FROM node:14.17.1 as build

WORKDIR /home/ui
COPY package.json .
COPY yarn.lock .
COPY . .
RUN yarn install
COPY . .
RUN yarn build

#webserver
FROM nginx:stable-alpine
COPY --from=build /home/ui/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]