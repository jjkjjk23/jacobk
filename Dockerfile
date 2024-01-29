FROM httpd:latest

WORKDIR /app

COPY ./.next /usr/local/apache2/htdocs/


