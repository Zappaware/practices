-- New York Restaurants
-- We have put together a table of restaurants called nomnom and we need your help to answer some questions. Use the SQL commands you just learned and find the best dinner spots in the city.
--
-- The schema of this table is available here.
--
-- Let’s begin!

-- Instructions

-- Start by getting a feel for the nomnom table:

SELECT * FROM nomnom;

-- What are the distinct neighborhoods?

SELECT DISTINCT neighborhood FROM nomnom;


-- What are the distinct cuisine types?

SELECT DISTINCT cuisine FROM nomnom;

Suppose we would like some Chinese takeout.

-- What are our options?

SELECT * FROM nomnom
WHERE cuisine = 'Chinese';

-- Return all the restaurants with reviews of 4 and above.

SELECT * FROM nomnom
WHERE review >= 4;

Suppose Abbi and Ilana want to have a fancy dinner date.

-- Return all the restaurants that are Italian and $$$.

SELECT * FROM nomnom
WHERE cuisine = 'Italian'