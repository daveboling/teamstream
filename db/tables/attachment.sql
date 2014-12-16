create table attachment(
  id serial primary key,
  link varchar(255) not null,
  segment_id integer not null
);