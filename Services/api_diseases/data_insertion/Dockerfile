FROM node:16.17.1


WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install
# pa produccion
# RUN npm ci --omit=dev

COPY . .

EXPOSE 8080
CMD [ "node", "main.js" ]