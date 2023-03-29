FROM nginx
COPY build /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

RUN mkdir -p /usr/share/nginx/html/public/
RUN rm -f /usr/share/nginx/html/public/release.txt
RUN touch /usr/share/nginx/html/public/release.txt
RUN echo $(date) > /usr/share/nginx/html/public/release.txt

EXPOSE 80
