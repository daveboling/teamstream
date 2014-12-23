#!/bin/bash

#drop tables
psql $1 -f ./drop.sql

#recreate tables
psql $1 -f ../db/tables/users.sql
psql $1 -f ../db/tables/projects.sql
psql $1 -f ../db/tables/streams.sql
psql $1 -f ../db/tables/segments.sql
psql $1 -f ../db/tables/attachments.sql
psql $1 -f ../db/tables/replys.sql
psql $1 -f ../db/tables/collaborators.sql

#recreate functions
psql $1 -f ../db/functions/get_streams.sql
psql $1 -f ../db/functions/get_projects.sql
psql $1 -f ../db/functions/get_segments.sql
psql $1 -f ../db/functions/get_replys.sql


#create data
psql $1 -f ./data.sql
mongoimport --jsonArray --drop --db $1 --collection rooms --file rooms.json


echo -e "The slate has been cleaned."
echo -e "Query responsibly."
