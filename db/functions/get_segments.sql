CREATE or REPLACE FUNCTION get_segments(sid integer)
RETURNS TABLE(id integer, created_on timestamp, segment_creator integer, body text, creator varchar, attachments varchar[]) AS $$
BEGIN

RETURN QUERY
SELECT segments.id, segments.date_created, segments.creator,  segments.body, users.username, array_agg(DISTINCT attachments.url)
FROM segments
INNER JOIN users on segments.creator = users.id
LEFT OUTER JOIN attachments on attachments.segment_id = segments.id
WHERE segments.stream_id = sid
GROUP BY segments.id, segments.date_created, segments.creator,  segments.body, users.username;

END;
$$ LANGUAGE plpgsql;