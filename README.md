# Web Site La Fabbrica

## Core
* Drupal

## Modules


## Development Enviroment

### Server Requirements

* Debian 9 or Ubuntu 16.04
* Vagrant and vagrant-hostsupdater plugin
* VDD GR https://github.com/griddick/vdd_gr

```
# apt-get install -y mysql-server
# apt-get instal -y apache2
# apt-get install php
# apt-get install php-xml

```
### Steps

### Database

1. Create a new mysql user and grant to privileges

```
$ mysql -u root -p
$ Enter password: xxx
mysql>  CREATE USER 'lafabbrica'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
mysql>  GRANT ALL PRIVILEGES ON *.* TO 'lafabbrica'@'localhost' WITH GRANT OPTION;

```

2. login with new user and create the new database

```
$ mysql -u lafabbrica -p
$ Enter password: xxx
mysql> CREATE DATABASE lafabbrica;
```

3. import some database if necessary

```
$ mysql -u lafabbrica -p lafabbrica < lafabbrica_net.sql
```

4. Edit the file ```/sites/default/settings.php```

```
$databases = array (
  'default' =>
  array (
    'default' =>
    array (
      'database' => 'lafabbrica',
      'username' => 'lafabbrica',
      'password' => '123456',
      'host' => 'localhost',
      'port' => '',
      'driver' => 'mysql',
      'prefix' => 'laf_',
    ),
  ),
);

```

5- Ative as urls limpas

5.1 - Habilite o módulo rewrite do apache;

```
# a2enmod rewrite
```

5.2 Edite o arquivo /etc/apache2/sites-available/default para habilitar a reescrita de URLs.

```
nano /etc/apache2/sites-available/default ou .conf
```

Procure a linha Directory usando Ctrl+W. Acrescente logo após allow from all as seguintes linhas, conforme abaixo:

```
 <Directory /var/www/>
  Options Indexes FollowSymLinks MultiViews
  AllowOverride None
  Order allow,deny
  allow from all

  RewriteEngine on
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]
 </Directory>
```

5.3 - Reinicie o apache com o comando
```
 /etc/init.d/apache2 restart
 ```
ou

```
# service apache2 restart
```

6 - Rode o updates.php

6.1 logue no painel do site
6.2 acesse pela url drupal7.dev/update.php

7 - Instale o php-xml

```
apt-get install php7.0-xml
```

8 - Instale o php-mbstring

apt-get install php-mbstring


