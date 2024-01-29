FROM httpd:latest

WORKDIR /app

COPY ./.next /usr/local/apache2/htdocs/


RUN sed -i 's/Listen 80/Listen 443/' /usr/local/apache2/conf/httpd.conf
RUN echo '<VirtualHost *:443>\n\
DocumentRoot "/usr/local/apache2/htdocs"\n\
SSLEngine on\n\
SSLCertificateFile "/usr/local/apache2/htdocs/fullchain.pem"\n\
SSLCertificateKeyFile "/usr/local/apache2/htdocs/privkey.pem"\n\
</VirtualHost>' >> /usr/local/apache2/conf/httpd.conf
