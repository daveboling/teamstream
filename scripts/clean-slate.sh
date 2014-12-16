#!/bin/bash
echo -e "The slate has been cleaned."
psql $1 -f ./clean-slate.sql mosh

#recreate tables
psql $1 -f ../db/tables/users.sql
psql $1 -f ../db/tables/project.sql
psql $1 -f ../db/tables/stream.sql
psql $1 -f ../db/tables/segment.sql
psql $1 -f ../db/tables/admin.sql
psql $1 -f ../db/tables/attachment.sql