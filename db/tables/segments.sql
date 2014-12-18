create table segments(
  id serial primary key,
  creator integer not null references users(id),
  body text not null,
  stream_id integer not null references streams(id),
  sort_order integer null
);