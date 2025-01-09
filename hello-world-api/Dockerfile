FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "index.js"]