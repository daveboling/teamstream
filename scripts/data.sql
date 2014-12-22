--user inserts
insert into users (username, password, email) values ('a1', 'b1', 'b@b');
insert into users (username, password, email) values ('a2', 'b2', 'b@b');
insert into users (username, password, email) values ('a3', 'b3', 'b@b');

delete from users; --this it to offset the sequence

insert into users (id, username, email, password) values (1, 'bob', 'kadowki@gmail.com', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234 
insert into users (id, username, email, password) values (2, 'sue', 'kadowki+sue@gmail.com', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234
insert into users (id, username, email, password) values (3, 'jim', 'kadowki+jim@gmail.com', '$2a$08$Ekv2PGTlRzMw3w4qew.eEObmFEKJZfCSE7Lu6PGU22xmUknknc1Kq'); --password 1234

--project inserts
insert into projects (project_name, owner_id) values ('dumby', 1);
insert into projects (project_name, owner_id) values ('dumby', 1);
delete from projects; --offset sequence

insert into projects (id, project_name, owner_id) values (1, 'Bob Project', 1);
insert into projects (id, project_name, owner_id) values (2, 'Sue Project', 2);
insert into projects (project_name, owner_id) values ('Bob Other Project', 1);

--collaborators inserts (adds Sue as a collaborator on Bob Project)
insert into collaborators (project_id, user_id) values (1, 2);
insert into collaborators (project_id, user_id) values (1, 3);
insert into collaborators (project_id, user_id) values (2, 3);

--stream inserts
insert into streams (project_id, name) values (1, 'null');
insert into streams (project_id, name) values (1, 'null');
delete from streams; --offset for sequence

insert into streams (id, project_id, name) values (1, 1, 'Stream One');
insert into streams (id, project_id, name) values (2, 1, 'Stream Two');
insert into streams (project_id, name) values (1, 'Stream Three');

--segment inserts
insert into segments (creator, stream_id, body) values (2, 1, '');
insert into segments (creator, stream_id, body) values (2, 1, '');
insert into segments (creator, stream_id, body) values (2, 1, '');
delete from segments; --offset for sequence

insert into segments (id, creator, stream_id, body) values (1, 2, 1, 'Added my PDF file to this stream for everyone to read');
insert into segments (id, creator, stream_id, body) values (2, 2, 1, 'Good, I will read it soon.');
insert into segments (id, creator, stream_id, body) values (3, 1, 2, 'It is coming along.');

--replys inserts
insert into replys (creator, segment_id, body) values (1, 1, 'Thank you Sue, I will read it very soon.');
insert into replys (creator, segment_id, body) values (2, 2, 'Great to hear Bob!');


--attachment inserts
insert into attachments (url, segment_id) values ('http://somewhere.com/something.pdf', 1);
insert into attachments (url, segment_id) values ('http://somewhere.com/something2.pdf', 1);









