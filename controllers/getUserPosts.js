const userPosts = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 2,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 2,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 3,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 3,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }]

// тут переробив на асинхронну функцію, відповідно з index.js забрав функцію errorHandler

module.exports = async (request, response, next) => {
  try{
const {params, originalUrl} = request
const {userId} = params
console.log(userId)
console.log(originalUrl)


 if(!userId){
   response.json(userPosts)

}else if (originalUrl === '/posts/'){
  
} else if(userId < 0){
  throw new Error(`відємний ID: ${userId}`);

} else if(isNaN(parseInt(userId))){
  throw new Error(`${userId} має бути цифра`)

} else if(userPosts.filter((post) => userId > post.userId)){
  const err = new Error(`${userId} такого юзера не існує, мазафака`)

}else {
    response.json(userPosts.filter((post) => post.userId === parseInt(userId)))
}
  } catch(error){
    console.error('Помилка від Дениса', error.stack);
    response.status(500).send('Deniel, something gone wrong in posts')
  }
}

// **

