//Promise / async await

movePlayer(100, 'Left')
    .then(()=> movePlayer(400, 'Left'))
    .then(()=> movePlayer(10, 'Right'))
    .then(()=> movePlayer(330, 'Left'))

async function playerStart(){
    const firstMove = await movePlayer(100, 'Left'); //pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}