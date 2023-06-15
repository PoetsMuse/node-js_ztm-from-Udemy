// async function fetchUsers(){
// const resp = await fetch('https://jsonplaceholder.typicode.com/users');
// const data = await resp.json();
// console.log(data);
// }

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp=> resp.json())
// })).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }).catch('error')

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/todos'
]

// const getData = async function(){
//     try{
//         const [users, posts, todos] = await
// Promise.all(urls.map(url => 
//     fetch(url).then(resp => resp.json())
//     ))
//     console.log('users', users)
//     console.log('posts', posts)
//     console.log('todos', todos)
//     }catch(err){
//         console.log('error', err)
//     }    
// }
// getData()

//for await of
const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}
getData2();