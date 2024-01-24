FROM phpmyadmin/phpmyadmin
RUN echo 'post_max_size = 50M' >> /usr/local/etc/php/conf.d/uploads.ini
RUN echo 'upload_max_filesize = 50M' >> /usr/local/etc/php/conf.d/uploads.ini
RUN echo 'ServerName localhost' >> /etc/apache2/apache2.conf
RUN echo 'ErrorLog /var/log/apache2/phpmyadmin_error.log' >> /etc/apache2/apache2.conf
RUN echo 'CustomLog /var/log/apache2/phpmyadmin_access.log combined' >> /etc/apache2/apache2.conf