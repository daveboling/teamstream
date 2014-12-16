create table streams(
  id serial primary key,
  project_id integer not null,
  sort_order integer
);