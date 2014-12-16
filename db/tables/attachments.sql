create table attachments(
  id serial primary key,
  link varchar(255) not null,
  segment_id integer not null
);