CREATE DATABASE orders_db;

USE orders_db;

CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
order_item VARCHAR(100),
completed BOOLEAN
);

DELETE FROM orders WHERE order_item IS NULL;

SELECT * FROM orders

