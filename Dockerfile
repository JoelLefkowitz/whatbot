FROM node:15.6

WORKDIR /whatbot
COPY package.json .
RUN npm i -g typescript
RUN npm i

COPY src src
RUN tsc -p src

ENTRYPOINT [        \
  "node",           \
  "dist/main.js",   \
  "keyfile.json",   \
  "--whitelist",    \
  "whitelist.json", \
  "--logfile",      \
  "logs.log"        \
]
