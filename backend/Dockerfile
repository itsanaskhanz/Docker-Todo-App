FROM node:18-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
