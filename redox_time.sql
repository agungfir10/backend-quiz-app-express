DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS articles_categories;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_categories;
DROP TABLE IF EXISTS question_subcategories;
DROP TABLE IF EXISTS question_reports;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role SMALLINT,
    avatar SMALLINT,
    verify SMALLINT,
    token_verify VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    video VARCHAR(255),
    category SMALLINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE articles_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    id_category INTEGER,
    id_subcategory INTEGER,
    question VARCHAR(255),
    answer SMALLINT,
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    option_e VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE question_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE question_subcategories (
    id SERIAL PRIMARY KEY,
    id_category INTEGER,
    name VARCHAR(255),
    duration INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);


CREATE TABLE question_reports (
    id SERIAL PRIMARY KEY,
    id_user INTEGER,
    id_question INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
