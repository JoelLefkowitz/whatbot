FROM node:15.5

WORKDIR /autobots
COPY package.json .
RUN npm i -g typescript
RUN npm i

COPY src src
RUN tsc -p src

ENTRYPOINT [       \
  "node",          \
  "dist/main.js",  \
  "keyfile.json",  \
  "--whitelist",   \
  "whitelist.json" \
]
