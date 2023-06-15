const promise = new Promise((resolve,reject) => {
    if (true){
        resolve('Stuff worked');
    }else{
        reject('Error');
    }
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 100, 'Hello')
})
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, 'Smth')
})
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 3000, 'Blah')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(result => result + '!')
    .then(result => result2 + '?')
    .catch(() => console.log('error'))
    .then(result3 => {
        console.log(result3 + '!');
    })