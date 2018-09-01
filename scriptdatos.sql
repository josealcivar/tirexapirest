use tirexdb;

create table empresa(
empresaid varchar(5) primary key,
razonsocial varchar(100) not null,
estado varchar(1)
);


create table vendedor(
vendedorid integer auto_increment primary key,
empresaid varchar(5),
codigointerno varchar(5),
nombre varchar(30) not null,
usuario varchar(10) not null,
contrasena varchar(20) not null,
estado varchar(1),
foreign key (empresaid) references empresa(empresaid)
);

create table cliente(
clienteid integer auto_increment primary key,
empresaid varchar(5),
codigointerno varchar(5),
vendedorid integer not null,
razonsocial varchar(100) not null,
identificacion varchar(20),
email varchar(20),
direccion varchar(100),
telefono varchar(15),
tipoprecio varchar(1) not null,
estado varchar(1),
foreign key (empresaid) references empresa(empresaid),
foreign key (vendedorid) references vendedor(vendedorid)
);

create table producto(
productoid integer auto_increment primary key,
empresaid varchar(5),
codigoalterno varchar(30),
descripcion varchar(200) not null,
grupoid varchar(10),
marcaid varchar(10),
destacado varchar(1),
stock integer,
precio1 decimal(10,4),
precio2 decimal(10,4),
precio3 decimal(10,4),
precio4 decimal(10,4),
precio5 decimal(10,4),
origen varchar(1),
rutaimagen varchar(100),
estado varchar(1) not null,
foreign key (empresaid) references empresa(empresaid)
);

create table pedido(
pedidoid integer auto_increment primary key,
empresaid varchar(5),
fecha datetime,
clienteid integer not null,
vendedorid integer not null,
subtotal decimal(10,4) not null,
impuesto decimal(10,4) not null,
porcdscto decimal(2,2),
descuento decimal(10,4),
total decimal(10,4) not null,
estado_orden varchar(1) not null,
estado varchar(1) not null,
foreign key (empresaid) references empresa(empresaid),
foreign key (vendedorid) references vendedor(vendedorid),
foreign key (clienteid) references cliente(clienteid)
);

create table det_pedido(
pedidoid integer,
empresaid varchar(5),
secuencia integer not null,
productoid integer not null,
cantidad integer not null,
tipoprecio varchar(1) not null,
preciovta decimal(10,4) not null,
porcdscto decimal(2,2),
porcpromo decimal(2,2),
primary key (pedidoid, secuencia, productoid),
foreign key (empresaid) references empresa(empresaid),
foreign key (productoid) references producto(productoid),
foreign key (pedidoid) references pedido(pedidoid)
);


create table promocion(
promoid integer auto_increment primary key,
empresaid varchar(5),
comentario varchar(200) not null,
fecha datetime,
foreign key (empresaid) references empresa(empresaid)
);

create table det_promo(
promoid integer,
empresaid varchar(5),
secuencia integer not null,
productoid integer not null,
fechadesde datetime not null,
fechahasta datetime not null,
porcentaje decimal(2,2),
estado varchar(1),
primary key (promoid, secuencia, productoid),
foreign key (empresaid) references empresa(empresaid),
foreign key (productoid) references producto(productoid),
foreign key (promoid) references promocion(promoid)
);

create database mascota;
use anpr;
describe auth_user;
show tables;
select * from auth_user where date_joined>'2018-07-17 22:22';

update vehiculo_caracteristica set servicio = 'USO PARTICULAR' where id > 1;
select * from auth_user;
select * from vehiculo_vehiculo v, vehiculo_caracteristica c where c.vehiculo_id=v.id;
select * from vehiculo_caracteristica;
INSERT INTO vehiculo_vehiculo values(null, 'JUAN PEREZ', 'GFR8654', '2018-07-12', '07:30:10', 'INGRESO');
select * from vehiculo_caracteristica;

select v.placa, v.marca, v.modelo, f.fecha, f.horacaptura from vehiculo_vehiculo v, vehiculo_flujo_vehicular f where f.vehiculo_id=v.id and v.placa = '' or v.modelo='' or v.marca='CHEVROLET';

INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-30', '05:12:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-30', '06:22:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-30', '06:22:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-30', '06:22:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-31', '07:22:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-31', '07:42:10', 'INGRESO',5);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-12', '07:52:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-13', '08:32:10', 'INGRESO',7);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-13', '08:32:10', 'INGRESO',8);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-13', '09:32:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-13', '08:35:10', 'INGRESO',7);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-14', '10:34:10', 'INGRESO',8);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-15', '08:33:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-15', '09:34:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',1);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',5);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',6);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',5);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-16', '09:34:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-17', '09:34:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-17', '09:34:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-18', '09:34:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-18', '09:34:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-18', '09:34:10', 'INGRESO',1);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-18', '09:34:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-18', '09:34:10', 'INGRESO',6);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-19', '09:34:10', 'INGRESO',6);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-19', '09:34:10', 'INGRESO',6);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-07-19', '09:34:10', 'INGRESO',6);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-15', '09:35:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-15', '09:36:10', 'INGRESO',1);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-16', '09:37:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-17', '10:45:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-18', '11:34:10', 'INGRESO',5);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-19', '12:58:10', 'INGRESO',4);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-20', '13:32:10', 'INGRESO',6);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-20', '09:35:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-20', '09:36:10', 'INGRESO',1);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-20', '09:37:10', 'INGRESO',2);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-21', '10:45:10', 'INGRESO',3);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-29', '11:34:10', 'INGRESO',7);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-29', '12:58:10', 'INGRESO',8);
INSERT INTO vehiculo_flujo_vehicular values(null, '2018-08-29', '13:32:10', 'INGRESO',9);

select count(vehiculo_id), fecha from vehiculo_flujo_vehicular where fecha>='2018-07-12' and fecha<='2018-08-25' group by fecha;
INSERT INTO vehiculo_vehiculo values(null, 'PEDRO PAZMINO', 'MFR2154', '2018-07-12', '07:30:10', 'INGRESO');
INSERT INTO vehiculo_vehiculo values(null, 'DAVID POZO', 'GFR8654', '2018-07-12', '07:30:10', 'SALIDA');
INSERT INTO vehiculo_vehiculo values(null, 'PABLO DOMINGUEZ', 'PFG3422', '2018-07-12', '07:30:10', 'SALIDA');
select * from vehiculo_vehiculo where placa='GUO8566';
select * from vehiculo_flujo_vehicular;
select f.id, v.placa, v.marca, v.modelo, v.color, v.modelo, v.servicio, f.fecha, f.horacaptura, f.camara 
from vehiculo_flujo_vehicular f LEFT OUTER JOIN vehiculo_vehiculo v on f.vehiculo_id=v.id;
ALTER TABLE vehiculo_flujo_vehicular
ADD rutaimagen date;
select f.vehiculo_id, v.placa, v.marca, v.modelo, v.color, v.modelo, v.servicio, f.fecha, f.horacaptura, f.camara 
from vehiculo_flujo_vehicular f, vehiculo_vehiculo v where f.vehiculo_id=v.id;
select * from vehiculo_vehiculo;
UPDATE vehiculo_vehiculo SET modelo = 'ZULO' WHERE id=5 and id=5;
delete from vehiculo_lista_negra_vehiculos where vehiculo_id=10;
insert into vehiculo_lista_negra_vehiculos values (null, 'taxis piratas','2018-08-04','ACTIVO',10);
insert into vehiculo_vehiculo (id, placa) values (null, 'GUO0765');
insert into vehiculo_vehiculo (id, placa) values (null, 'TYU4432');
 
insert into vehiculo_vehiculo values (null,'GSZ5800', 'MAZDA', 'BLANCO', '2018', 'CX-3 ENTRY AC 2.0 5- 4X2 TM', '1', '2018-06-14', '2018', 'USO PARTICULAR', '2018-07-12', '2.jpg');
insert into vehiculo_vehiculo values (null,'RTU7965', 'MONTERO', 'NEGRO', '2012', 'CHEVROLET', '1', '2018-07-12', '2013', 'ACTIVO', '2018-07-12');
insert into vehiculo_vehiculo values (null,'GRT8756', 'LANDROVER', 'GRIS', '2012', 'NISSAN', '1', '2018-07-12', '2013', 'ACTIVO', '2018-07-12');

use anpr;
create database anpr;
update vehiculo_vehiculo set rutaimagen='out.png' where id>=5;
update vehiculo_vehiculo set rutaimagen='in.png' where id>=1
show tables;
select * from vehiculo_lista_negra_vehiculos where vehiculo_id=1;
select count(placa) as flujo, fecha from vehiculo_vehiculo group by fecha order by fecha;

select v.placa, c.marca, c.modelo, c.color, c.servicio, v.fecha, v.horacaptura, v.camara from vehiculo_vehiculo v FULL JOIN vehiculo_caracteristica c ON v.id=c.vehiculo_id;
select * from vehiculo_vehiculo
select * from vehiculo_flujo_vehicular where vehiculo_id=2

SELECT f.id, v.placa, c.marca, c.modelo, c.color, c.servicio, v.fecha, v.horacaptura, v.camara FROM vehiculo_vehiculo v LEFT OUTER JOIN 
vehiculo_caracteristica c ON v.id=c.vehiculo_id where v.fecha <= '2018-08-31' UNION ALL SELECT v.placa, c.marca, c.modelo, c.color, c.servicio, v.fecha, v.horacaptura, v.camara 
FROM vehiculo_vehiculo v RIGHT OUTER JOIN vehiculo_caracteristica c ON v.id=c.vehiculo_id;


SELECT *
FROM `t1`
RIGHT OUTER JOIN `t2` ON `t1`.`id` = `t2`.`id`;

