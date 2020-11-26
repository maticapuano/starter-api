FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install --only=prod

USER node

COPY . .

CMD ["npm", "start"]
