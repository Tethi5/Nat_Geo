INSERT INTO images
(author,hashtags,comments,image_url)
VALUES ($1,$2,$3,$4)
returning *
