FROM node:14.17.3

COPY . /app

WORKDIR /app/

RUN npm install

EXPOSE 8080

CMD ["npm","start"]
