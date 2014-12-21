CREATE or REPLACE FUNCTION get_projects(uid integer)
RETURNS TABLE(id integer, project_name varchar, date_created timestamp, collaborators varchar[]) AS $$
BEGIN

RETURN QUERY
select p.id, p.project_name, p.date_created, array_agg(DISTINCT u.username)
FROM projects p 
LEFT OUTER JOIN collaborators c  ON p.id = c.project_id
FULL OUTER JOIN users u on u.id = c.user_id
WHERE p.owner_id = uid or c.user_id = uid
GROUP BY p.id, p.owner_id, p.project_name, p.date_created;

END;
$$ LANGUAGE plpgsql;