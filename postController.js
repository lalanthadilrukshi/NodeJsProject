const posts=[
    {id:1, title:"post one"},
    {id:2, title:"post two"},
];


//export const getPosts=() => posts; // arrow function that returns the posts
const getPosts=() => posts; // arrow function that returns the posts
export const getPostsLength = () => posts.length

export default getPosts