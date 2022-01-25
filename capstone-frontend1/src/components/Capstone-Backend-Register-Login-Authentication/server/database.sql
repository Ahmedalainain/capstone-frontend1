CREATE DATABASE capstone;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE sub_detailed_list (
    sub_detailed_list_id SERIAL PRIMARY KEY,
    plan VARCHAR(255),
    price VARCHAR(255),
    due_date VARCHAR(255)
)

CREATE TABLE sub_list (
    sub_list_id SERIAL PRIMARY KEY,
    user_id_fk INTEGER REFERENCES users (user_id)
    sub_detailed_list_id INTEGER REFERENCES suh_detailed_list (sub_detailed_list_id)
);