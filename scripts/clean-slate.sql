--delete all current data
delete from users;

--insert test data
insert into users (id, username, password) values ('a', 'b');  --this is to get past the SQL sequence
insert into users (id, username, password) values (1, 'bob', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234 
insert into users (id, username, password) values (2, 'sue', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234
  