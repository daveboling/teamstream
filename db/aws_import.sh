#drop all
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f ../scripts/drop.sql team_stream


#re-add all
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f functions/delete_segment.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f functions/get_archived.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f functions/get_projects.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f functions/get_replys.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f functions/get_segments.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f functions/get_streams.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/users.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/projects.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/streams.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/segments.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/replys.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/attachments.sql team_stream
psql -h davedb.cmmrgl4xz9gn.us-east-1.rds.amazonaws.com -p 5432 -U soyaku -f tables/collaborators.sql team_stream
