CREATE or REPLACE FUNCTION get_streams(pid integer)
RETURNS TABLE(id integer, sort_order integer, last_edit timestamp, name varchar) AS $$
BEGIN

RETURN QUERY
  SELECT streams.id, streams.sort_order, streams.last_edit, streams.name
  FROM streams
  WHERE streams.project_id = pid;
END;
$$ LANGUAGE plpgsql;
