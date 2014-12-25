create table replys(
  id serial primary key,
  creator integer not null references users(id),
  body text not null,
  segment_id integer not null references segments(id),
  date_created timestamp not null default now(),
  edited_by varchar(80) default null,
  date_edited timestamp default null
);