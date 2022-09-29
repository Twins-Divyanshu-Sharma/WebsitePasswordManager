FROM node:18-bullseye

RUN npm install -g nodemon

WORKDIR /appBack

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${NODE_PORT}

CMD npm run exec_nodemon
