FROM node:10
WORKDIR /app
COPY package.json yarn.lock index.ts tsconfig.json ./
RUN yarn install
EXPOSE 5002
CMD ["yarn", "start"]
