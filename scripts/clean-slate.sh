#!/bin/bash

#drop tables
psql $1 -f ./drop.sql mosh

#recreate tables
psql $1 -f ../db/tables/users.sql mosh
psql $1 -f ../db/tables/projects.sql mosh
psql $1 -f ../db/tables/streams.sql mosh
psql $1 -f ../db/tables/segments.sql mosh
psql $1 -f ../db/tables/admins.sql mosh
psql $1 -f ../db/tables/attachments.sql mosh

#create data
psql $1 -f ./data.sql mosh

echo -e "The slate has been cleaned."
echo -e "Query responsibly."