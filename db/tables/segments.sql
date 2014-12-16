create table segments(
  id serial primary key,
  stream_id integer not null,
  sort_order integer
);