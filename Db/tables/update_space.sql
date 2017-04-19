update ideas
	SET
	idea = COALESCE ($1, name)
	WHERE id = $1
	RETURNING *;
