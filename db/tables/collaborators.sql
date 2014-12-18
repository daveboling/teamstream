create table collaborators(
  project_id integer not null references projects(id),
  user_id integer not null references users(id)
);