import axios from "axios";

async function getData(userId) {
    //GetDatas
    let userDatas = (await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)).data
    let userPosts = (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).data
    //Filter Posts
    userPosts = userPosts.filter(post => post.id === 1)
    //Combine objects
    let combinedObject = Object.assign({}, userDatas, { posts: userPosts })

    console.log(combinedObject)
}
export default getData