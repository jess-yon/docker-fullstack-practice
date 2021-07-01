### Builder Stage ###
FROM node:alpine as builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build


### Run Stage ###
FROM nginx

EXPOSE 3000

# '/etc/nginx/conf.d/default.conf'는 컨테이너 안의 Nginx 설정 파일의 경로 => 덮어쓰기
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
