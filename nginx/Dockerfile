# 개발환경과 운영환경의 설정이 동일하므로, Dockerfile.dev 생성하지 않고 Dockerfile 하나만 작성


FROM nginx

# 작성된 conf 파일을 컨테이너에서 실행될 Nginx에 적용될 수 있게 COPY
COPY ./default.conf /etc/nginx/conf.d/default.conf
