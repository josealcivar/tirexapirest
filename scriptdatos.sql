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


