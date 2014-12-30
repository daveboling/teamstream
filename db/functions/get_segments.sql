CREATE or REPLACE FUNCTION get_segments(sid integer)
RETURNS TABLE(id integer, created_on timestamp, segment_creator integer, body text, creator varchar, attachments varchar[], edited_by varchar, date_edited timestamp) AS $$
BEGIN

RETURN QUERY
SELECT segments.id, segments.date_created, segments.creator,  segments.body, users.username, array_agg(DISTINCT attachments.url), segments.edited_by, segments.date_edited
FROM segments
INNER JOIN users on segments.creator = users.id
LEFT OUTER JOIN attachments on attachments.segment_id = segments.id
WHERE segments.stream_id = sid
GROUP BY segments.id, segments.date_created, segments.creator,  segments.body, users.username, segments.edited_by, segments.date_edited;

END;
$$ LANGUAGE plpgsql;