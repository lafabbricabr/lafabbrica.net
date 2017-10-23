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
