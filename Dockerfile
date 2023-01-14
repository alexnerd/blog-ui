FROM --platform=linux/arm64/v8 nginx
RUN mkdir -p /usr/share/nginx/images/upload
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-config/nginx.conf /etc/nginx/conf.d/default.conf
COPY src /usr/share/nginx/html