# Web Site La Fabbrica

This is the current repository for lafabbrica.net's website (since 2015). We use it to process the modification in it.

## Core
* Drupal 7

## Development Enviroment

### Server Requirements
How to deploy a developer enviroment?

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

5. Activate clean url

5.1. - Enable the rewritten apache module

```
# a2enmod rewrite
```

5.2. Edit file /etc/apache2/sites-available/default to enable rewritable urls.

```
nano /etc/apache2/sites-available/default ou .conf
```

Search the line with "Directory" using Ctrl+W or a similar command into your editor. Put this lines after "allow from all":

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

5.3. - Restart apache
```
 /etc/init.d/apache2 restart
 ```
or

```
# service apache2 restart
```

6. Execute yoururl / updates.php through the browser

6.1. Login to the panel 

6.2. Get the default url with update.php, like this -> drupal7.dev/update.php

7. Install php-xml

```
apt-get install php7.0-xml
```

8. Install php-mbstring

```
apt-get install php-mbstring
```

9. Looking for php.ini and activate the mbstring
