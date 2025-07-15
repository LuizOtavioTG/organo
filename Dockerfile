FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli
RUN npm install -g json-server@0.17.4

COPY . .

RUN ng build --configuration production --base-href organo

FROM nginx:alpine

COPY --from=build /app/dist/organo/browser    /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
