#69 SIMPLE BOOKSTORE
PROJECT DETAILS
    purring-mockingbird
    #69 [L1]: Simple Book Store
    Members: Glenn-David Daniel
    Coach: TBD
    Cycle : 47
    Created on 6/5/2017

---
ATTRIBUTIONS
    Dataset :  jaidevd Aug 14, 2015 ("https://gist.github.com/jaidevd/23aef12e9bf56c618c41/revisions")

---

TOOLS AND LIBRARIES
    Views
        □ Handlebars server-side templating engine ('npm install express-handlebars')
        □ Bootstrap CSS library for UI

    Web Server
        □ npm
        □ Node (local)
        □ Nodemon server monitor
        □ Express web server framework (local)
    
    Libraries
        □ Knex - Query builder for Node (be sure to initialize with 'knex init' to create knexfile.js configuration file)
        □ pg - PostgreSQL library for node

    Database
        □ PostgreSQL database
        □ PgAdmin SQL modeling designer: 
        □ Dataset: "https://gist.github.com/jaidevd/23aef12e9bf56c618c41/revisions"
	

NOTES
Data cleaning.  The recommended csv file, books.csv is very dirty.  There are problematic records that include one or more of the following:
    "last name, first name"
    "Broca's Brain" (possessives)
    "Justice, Judiciary and Democracy" (concatenated strings)
A considerable amount of time was consumed (for this project and several others) trying to find a clean way to convert the recommended file to a clean SQL insert query.  Multiple conversion tools have given different results, none of which worked uniformly depending on the target database.  The tool that worked best for MySQL output garbage for PostgreSQL, etc.

Solution: For PostgreSQL use this combination:
Raw file -> Excel/Data-to-Text 
2. Copy and paste Excel Results -> Text-Wiz (http://tools.perceptus.ca/text-wiz.php) -> Copy and paste Text-Wiz results -> SQL query.

3. Replace escape characters ( \ ) with a single quote (')  Or just copy the file from this repo:
    "books3-CREATE-INSERT.sql" to create table + insert rows.
    "books3-INSERT.sql" to insert rows only.

4. IMPORTANT: Don't forget to rename the table from "books3" to whatever table name you plan to use for your application!