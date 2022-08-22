FROM node:16-alpine3.15

WORKDIR /home/server/

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]