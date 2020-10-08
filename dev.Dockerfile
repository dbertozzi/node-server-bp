FROM node:14-stretch

RUN npm i -g nodemon

WORKDIR /home/david/davidbertozzi-server

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

USER node

RUN mkdir /home/node/code

COPY --chown=node:node . .

CMD ["nodemon", "dist/bundle.js"]