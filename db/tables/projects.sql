create table projects(
  id serial primary key,
  project_name varchar(255) not null,
  owner_id integer not null references users(id),
  date_created timestamp not null default now(),
  global_access boolean default false,
  is_complete boolean default false
);