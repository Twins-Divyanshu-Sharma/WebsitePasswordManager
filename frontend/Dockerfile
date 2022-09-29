FROM node:18-bullseye

WORKDIR /appFront

COPY package.json .

RUN npm install

COPY . .

RUN chmod +x ./replacer

EXPOSE ${VUE_PORT}

CMD ./replacer && npm run serve -- --port ${VUE_PORT}
