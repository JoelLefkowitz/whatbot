FROM node:15.5

WORKDIR /whatbot
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
