#!/bin/bash

#drop tables
psql $1 -f ./drop.sql team_stream

#recreate tables
psql $1 -f ../db/tables/users.sql team_stream
psql $1 -f ../db/tables/projects.sql team_stream
psql $1 -f ../db/tables/streams.sql team_stream
psql $1 -f ../db/tables/segments.sql team_stream
psql $1 -f ../db/tables/attachments.sql team_stream
psql $1 -f ../db/tables/replys.sql team_stream
psql $1 -f ../db/tables/collaborators.sql team_stream

#create data
psql $1 -f ./data.sql team_stream

echo -e "The slate has been cleaned."
echo -e "Query responsibly."