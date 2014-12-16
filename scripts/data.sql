--user inserts
insert into users (username, password) values ('a1', 'b1');
insert into users (username, password) values ('a2', 'b2');
insert into users (username, password) values ('a3', 'b3');

delete from users; --this it to offset the sequence

insert into users (id, username, password) values (1, 'bob', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234 
insert into users (id, username, password) values (2, 'sue', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234


--project inserts


--stream inserts


--segment inserts


--admin inserts


--attachment inserts