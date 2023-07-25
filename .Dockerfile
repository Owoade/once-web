FROM node:19.6-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

USER node

COPY --chown=node:node . ./usr/src/app

EXPOSE 3000

CMD ['npm', 'run', 'start']

