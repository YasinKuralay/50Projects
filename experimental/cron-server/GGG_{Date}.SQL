CREATE TABLE GGG_{Date}(
    id SERIAL PRIMARY KEY,
    Artikel_Nr VARCHAR(255) NOT NULL,
    EAN_NR VARCHAR(255) NOT NULL,
    Menge VARCHAR(255) NOT NULL
)

CREATE TABLE GGG_TABLES(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)