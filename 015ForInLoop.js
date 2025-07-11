let alien = {
    name : 'Raodat',
    tech : 'js',
    laptop:{
        cpu : 'i5',
        ram : 4,
        brand : 'HP'
    }
}
for (let key in alien)
{
    console.log(key);
    console.log(key,alien.tech);
}