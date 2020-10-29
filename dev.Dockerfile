FROM node:14-stretch

WORKDIR /home/node/code

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

CMD ["npm", "start:dev"]