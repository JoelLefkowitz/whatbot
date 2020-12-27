FROM node:15.5

WORKDIR /autobots
COPY package.json .
COPY tsconfig.json .
RUN npm i -g typescript
RUN npm i

COPY src src
RUN tsc

ENTRYPOINT ["node", "dist/main.js", "keyfile.json"]
