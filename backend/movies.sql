CREATE TABLE filmsV1 (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    director VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    rating INTEGER NOT NULL
);

INSERT INTO filmsV1 (title, director, year, rating)
VALUES ('The Shawshank Redemption', 'Frank Darabont', 1994, 9.3),
       ('The Godfather', 'Francis Ford Coppola', 1972, 9.2),
       ('The Dark Knight', 'Christopher Nolan', 2008, 9.0),
       ('The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, 8.9),
       ('Pulp Fiction', 'Quentin Tarantino', 1994, 8.9),
       ('Forrest Gump', 'Robert Zemeckis', 1994, 8.8),
       ('The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson', 2001, 8.8),
       ('The Lord of the Rings: The Two Towers', 'Peter Jackson', 2002, 8.7),
       ('The Godfather: Part II', 'Francis Ford Coppola', 1974, 9.0),
       ('The Matrix', 'Lana Wachowski', 1999, 8.7),
       ('The Shawshank Redemption', 'Frank Darabont', 1994, 9.3),
       ('The Godfather', 'Francis Ford Coppola', 1972, 9.2),
       ('The Dark Knight', 'Christopher Nolan', 2008, 9.0),
       ('The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, 8.9),
       ('Pulp Fiction', 'Quentin Tarantino', 1994, 8.9),
       ('Forrest Gump', 'Robert Zemeckis', 1994, 8.8),
       ('The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson', 2001, 8.8),
       ('The Lord of the Rings: The Two Towers', 'Peter Jackson', 2002, 8.7),
       ('The Godfather: Part II', 'Francis Ford Coppola', 1974, 9.0),
       ('The Matrix', 'Lana Wachowski', 1999, 8.7);

CREATE TABLE filmsV2 (
                       name TEXT,
                       release_year INTEGER
);

INSERT INTO filmsV2 (name, release_year)
VALUES ('The Matrix', 1999);

INSERT INTO filmsV2 (name, release_year)
VALUES ('Monsters, Inc.', 2001);

INSERT INTO filmsV2 (name, release_year)
VALUES ('Call Me By Your Name', 2017);

SELECT * FROM filmsV2 WHERE release_year = 1999;

ALTER TABLE filmsV2 ADD COLUMN runtime INTEGER;
ALTER TABLE filmsV2 ADD COLUMN category TEXT;
ALTER TABLE filmsV2 ADD COLUMN rating REAL;
ALTER TABLE filmsV2 ADD COLUMN box_office BIGINT;

UPDATE filmsV2
SET runtime = 150,
    category = 'sci-fi',
    rating = 8.7,
    box_office = 465300000
WHERE name = 'The Matrix';

UPDATE filmsV2
SET runtime = 92,
    category = 'animation',
    rating = 8,
    box_office = 5774000000
WHERE name = 'Monsters, Inc.';

UPDATE filmsV2
SET runtime = 132,
    category = 'drama',
    rating = 7.9,
    box_office = 41900000
WHERE name = 'Call Me By Your Name';

ALTER TABLE filmsV2
    ADD CONSTRAINT unique_name UNIQUE (name);


