# Использование базового образа PHP с Apache
FROM php:7.4-apache

# Установка необходимых зависимостей и расширений PHP
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libwebp-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libxpm-dev \
        libgmp-dev \
        libbz2-dev \
        libkrb5-dev \
        libicu-dev \
        libxml2-dev \
        libzip-dev \
        libcurl4-openssl-dev \
        libonig-dev \
        && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp --with-xpm \
        && docker-php-ext-install -j$(nproc) gd bcmath bz2 exif gettext gmp mysqli soap sockets xmlrpc zip intl opcache pdo pdo_mysql

# Активация необходимых модулей Apache
RUN a2enmod rewrite headers

# Установка прав доступа для файлов и папок
RUN find /var/www/html -type d -exec chmod 755 {} \; \
    && find /var/www/html -type f -exec chmod 644 {} \; \
    && chown -R www-data:www-data /var/www/html

# Открытие порта 80 для HTTP
EXPOSE 80