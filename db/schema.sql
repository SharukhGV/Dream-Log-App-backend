DROP DATABASE IF EXISTS dream_log_database;
CREATE DATABASE dream_log_database; 

\c dream_log_database; 

-- PASSPORT JS USER:: NOTE: IN FRONTEND: THE VALUE OF INPUT FILED SHOULD BE EMAIL FOR USERNAME IF LABEL IS CALLED USERNAME FOR USER FIELD
-- CREATE TABLE users (
--  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--  email CHAR(128),
--  password CHAR(60)
-- );

CREATE TABLE dreams (
    id INT GENERATED always AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    good_dream TEXT, 
    dream_description TEXT,
    topic TEXT NOT NULL, 
    date date NOT NULL,
    night BOOLEAN NOT NULL
    -- user_id INT,
    -- FOREIGN KEY (user_id) REFERENCES users(id)
    
);

-- command to initialize schema file
-- RUN THIS

-- db:init


-- NOTES: ChatGPT generated values for foreign key, and id, and user_id
-- Question asked: Upon creating a scema.sql and a seed.sql file, If I want to use a foreign key in another table called "dreams" while using postgreSQL, what should the values be if the foreign key is taken from a table called "users" being that the table created called users has the following data values: CREATE TABLE users (
--  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--  email CHAR(128),
--  password CHAR(60)
-- );

-- ANSWER GIVEN: A foreign key in the "dreams" table would reference the "id" column in the "users" table as the primary key. The "dreams" table would look something like this:

-- CREATE TABLE dreams (
--   id INT GENERATED always AS IDENTITY PRIMARY KEY,
--   dream_description TEXT,
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- This creates a foreign key constraint in the "dreams" table that requires the "user_id" column to have a value that exists in the "id" column of the "users" table. In other words, a dream can only be associated with a user if the "user_id" in the "dreams" table matches the "id" of a row in the "users" table.