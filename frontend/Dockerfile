FROM node

ENV NODE_ENV=production
ENV NEXT_PUBLIC_ENABLE_MSW=true

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN if [ "$NODE_ENV" = "production" ]; then rm -rf /app/public/mockServiceWorker.js; fi

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]