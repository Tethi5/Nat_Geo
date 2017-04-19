create table if not exists comments  (
	id SERIAL ,
	image_id INT,
	comment_text TEXT
);

CREATE TABLE if not exists images (
	id SERIAL,
	author VARCHAR(60) ,
	hashtags VARCHAR(101) ,
	date DATE,
	comments VARCHAR(450),
	image_url VARCHAR(10000)
	
);
-- INSERT INTO images(author,hashtags,date, likes,comments,image_url,image)
-- VALUES
-- ('Kemane Wright',' #herbLyfe','3/2/2016',5,1,'http://www.tubefilter.com/wp-content/uploads/2016/05/wild-life-nat-geo.jpg','testing');
