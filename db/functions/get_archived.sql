CREATE or REPLACE FUNCTION get_archived(sid integer)
RETURNS TABLE(id integer, created_on timestamp, segment_creator integer, body text, creator varchar, email varchar,attachments varchar[], edited_by varchar, date_edited timestamp, is_archived boolean) AS $$
BEGIN

RETURN QUERY
SELECT segments.id, segments.date_created, segments.creator,  segments.body, users.username, users.email, array_agg(DISTINCT attachments.url), segments.edited_by, segments.date_edited, segments.is_archived
FROM segments
INNER JOIN users on segments.creator = users.id
LEFT OUTER JOIN attachments on attachments.segment_id = segments.id
WHERE segments.stream_id = sid and segments.is_archived = true
GROUP BY segments.id, segments.date_created, segments.creator,  segments.body, users.username, segments.edited_by, segments.date_edited, segments.is_archived, users.email;

END;
$$ LANGUAGE plpgsql;