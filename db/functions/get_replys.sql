CREATE or REPLACE FUNCTION get_replys(segId integer)
RETURNS TABLE(id integer, body text, created_on timestamp, segment_id integer, creator varchar, email varchar) AS $$
BEGIN

RETURN QUERY
SELECT replys.id, replys.body, replys.date_created, replys.segment_id, users.username, users.email
FROM replys
INNER JOIN users on replys.creator = users.id
WHERE replys.segment_id = segId;

END;
$$ LANGUAGE plpgsql;
