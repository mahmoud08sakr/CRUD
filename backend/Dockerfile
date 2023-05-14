FROM node:latest

RUN mkdir -p /usr/src/app

COPY package*.json ./

WORKDIR /usr/src/app


RUN npm install

COPY . .
EXPOSE 7272

CMD [ "npm", "start" ]