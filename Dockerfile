FROM httpd:2.4

WORKDIR /app

COPY ./out/ /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./httpd-ssl.conf /usr/local/apache2/conf/extra/httpd-ssl.conf
COPY ./apple-auth /usr/local/apache2/htdocs/.well-known/apple-app-site-association
COPY ./android-auth.json  /usr/local/apache2/htdocs/.well-known/assetlinks.json 

