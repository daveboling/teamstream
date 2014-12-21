CREATE or REPLACE FUNCTION get_segments(sid integer)
RETURNS TABLE(id integer, created_on timestamp, segment_creator integer, body text, creator varchar) AS $$
BEGIN

RETURN QUERY
SELECT segments.id, segments.date_created, segments.creator,  segments.body, users.username
FROM segments
INNER JOIN users on segments.creator = users.id
WHERE segments.stream_id = sid;

END;
$$ LANGUAGE plpgsql;
