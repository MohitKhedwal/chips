CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),

  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

INSERT INTO users ( user_email, user_password) VALUES ( 'henryly213@gmail.com', 'kthl8822');