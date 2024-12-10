FROM node

ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN if [ "$NODE_ENV" = "production" ]; then rm -rf /app/public/mockServiceWorker.js; fi

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]