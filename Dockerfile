FROM node:alpine3.16

ARG DATABASE_URL

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]