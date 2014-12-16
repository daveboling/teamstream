create table project(
  id serial primary key,
  owner_id integer not null,
  creation_date timestamp not null default now()
);