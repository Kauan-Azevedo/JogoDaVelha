FROM node:18-alpine
WORKDIR /front

COPY . .
COPY package.json .

RUN yarn
RUN yarn build

EXPOSE 9000

CMD yarn start