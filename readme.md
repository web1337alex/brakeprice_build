## Установка

Сначала устанавливаем права доступа, потом билдим и поднимаем докер-контейнеры


```bash
sudo chown -R www-data:www-data source 
sudo find source -type d -exec chmod 755 {} \;
sudo find source -type f -exec chmod 644 {} \;
```

```bash
docker-compose build
docker-compose up -d
```

