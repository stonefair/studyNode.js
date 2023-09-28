module.exports = (req, resp) => {
    console.log(req.body);
    const {userId} = req.params;
    const newPost = 
    resp.sendStatus(201);
}

