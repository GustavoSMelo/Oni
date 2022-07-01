FROM node:18.4-alpine

WORKDIR /src
ADD package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "start:dev"]
