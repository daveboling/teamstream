CREATE OR REPLACE FUNCTION delete_segment(segId integer) 
RETURNS void AS $$
BEGIN
DELETE FROM attachments WHERE segment_id = segId;
DELETE FROM replys WHERE segment_id = segId;
DELETE FROM segments WHERE id = segId;
END;
$$ LANGUAGE plpgsql;
