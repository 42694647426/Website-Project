DROP TABLE IF EXISTS users ;
CREATE TABLE users
(
    UserID INT NOT NULL,
    Username VARCHAR(100) NOT NULL,
    Name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    staff INT DEFAULT 0 NOT NULL,
    CONSTRAINT staff CHECK (staff IN (0,1)),
    changetext TEXT DEFAULT NULL,
    CustomPage LONGTEXT DEFAULT NULL,
    PRIMARY KEY(Username, UserID)
);

INSERT INTO users VALUES (1630081, 'student@mcgill.ca', 'John Watson', 'qwert1203asdfg',30, 1, "You can change this content!", NULL);
INSERT INTO users VALUES (1630082, 'student1@mcgill.ca', 'Jack Watson', 'asdfghj23456',10, 0, "You do not have right to change this content.", NULL);

SELECT * FROM users;