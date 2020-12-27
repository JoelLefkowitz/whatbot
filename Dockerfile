FROM node:15.5-buster

WORKDIR /autobots
ENV PATH /autobots/node_modules/.bin:$PATH

COPY package.json .
RUN npm i

COPY src src
COPY tsconfig.json .
RUN npx tsc

ENTRYPOINT ["node", "dist/main.js", "keyfile.json"]
