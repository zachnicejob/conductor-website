FROM node:14.17.1 as build

WORKDIR /home/ui
COPY . .
RUN yarn prettier -w "src/assets/**/*.js"
RUN yarn build

#webserver
FROM nginx:stable-alpine
COPY --from=builder /home/ui/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]