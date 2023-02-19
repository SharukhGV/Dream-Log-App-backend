\c dream_log_database; 



-- INSERT INTO users (email, password) VALUES
-- ('sharukhgv@gmail.com', 'hellokitty112');    




-- INSERT INTO dreams (name, good_dream, dream_description, topic, date, night, user_id) VALUES
-- ('Jerry Fabbulous Dreams', 'good', 'The first beautiful dream in a series of 3 dreams spread out over 2 weeks', 'poly-m-lv', '2023-01-12', true, 1 ),  
-- ('August Kekulé Fabbulous Dream', 'neutral', 'Maybe Benzene has a chemical configuration like a ring...', 'Chemistry Dream', '1865-01-01', false, 1 ),
-- ('Beauty of Dream 7', 'bad', 'The third beautiful dream in a series of 3 dreams spread out over 2 weeks', 'poly-m-lv', '2023-01-12', true, 1 );



INSERT INTO dreams (name, good_dream, dream_description, topic, date, night) VALUES
('Jerry Fabbulous Dreams', 'good', 'The first beautiful dream in a series of 3 dreams spread out over 2 weeks', 'poly-m-lv', '2023-01-12', true),  
('August Kekulé Fabbulous Dream', 'neutral', 'Maybe Benzene has a chemical configuration like a ring...', 'Chemistry Dream', '1865-01-01', false),
('Beauty of Dream 7', 'bad', 'The third beautiful dream in a series of 3 dreams spread out over 2 weeks', 'poly-m-lv', '2023-01-12', true);


-- TO TEST DATABASE LOCALLY WITHOUT USER AUTH



-- command to initialize seed file
-- RUN THIS
-- db:seed
