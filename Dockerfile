FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN chown -R node: .

EXPOSE 8000
USER node

CMD ["npm", "start"]