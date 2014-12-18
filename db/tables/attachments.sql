create table attachments(
  id serial primary key,
  url varchar(255) not null,
  segment_id integer not null references segments(id)
);