\c dream_log_database; 



INSERT INTO users (email, password) VALUES
('sharukhgv@gmail.com', 'hellokitty112');    




INSERT INTO dreams (name, good_dream, dream_description, topic, date, night, user_id) VALUES
('Fabbulous Dream 1', true, 'The first beautiful dream in a series of 3 dreams spread out over 2 weeks', 'poly-m-lv', '2023-01-12', true, 1 );    

-- TO TEST DATABASE LOCALLY WITHOUT USER AUTH



-- command to initialize seed file
-- RUN THIS
-- db:seed

