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

#create data
psql $1 -f ./data.sql 

echo -e "The slate has been cleaned."
echo -e "Query responsibly."