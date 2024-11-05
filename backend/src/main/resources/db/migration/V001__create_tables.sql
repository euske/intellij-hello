CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT
);

INSERT INTO Users (name) VALUES ('John');
INSERT INTO Users (name) VALUES ('Mary');
