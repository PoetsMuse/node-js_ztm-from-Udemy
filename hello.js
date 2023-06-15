const mission = process.argv[2];

if (mission === 'LEARN'){
    console.log('Time to write some node');
}else{
    console.log(`Is ${mission} more fun?`);
}