--user inserts
insert into users (username, password) values ('a1', 'b1');
insert into users (username, password) values ('a2', 'b2');
insert into users (username, password) values ('a3', 'b3');

delete from users; --this it to offset the sequence

insert into users (id, username, password) values (1, 'bob', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234 
insert into users (id, username, password) values (2, 'sue', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234


--project inserts
insert into projects (project_name, owner_id) values ('Bob Project', 1);
delete from projects; --offset sequence
insert into projects (id, project_name, owner_id) values (1, 'Bob Project', 1);
insert into projects (project_name, owner_id) values ('Bob Other Project', 1);
insert into projects (project_name, owner_id) values ('Sue Project', 2);

  
--collaborators inserts

--stream inserts
insert into streams (project_id, name) values (1, 'null');
delete from streams; --offset for sequence
insert into streams (id, project_id, name) values (1, 1, 'Stream One');
insert into streams (project_id, name) values (1, 'Stream Two');
insert into streams (project_id, name) values (1, 'Stream Three');

--segment inserts




--attachment inserts