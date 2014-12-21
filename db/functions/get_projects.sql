CREATE or REPLACE FUNCTION get_projects(uid integer)
RETURNS TABLE(id integer, project_name varchar, date_created timestamp, collaborators varchar[]) AS $$
BEGIN

RETURN QUERY
SELECT projects.id, projects.project_name, projects.date_created, array_agg(DISTINCT users.username)
FROM projects, collaborators, users
WHERE collaborators.user_id = uid OR projects.owner_id = uid
GROUP BY projects.id, projects.owner_id, projects.project_name, projects.date_created;

END;
$$ LANGUAGE plpgsql;
