FROM node:alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
# 운영 환경에서는 nodemon 필요 없음 => 'npm run start'로 실행
