const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ['Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Lwandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score:'4.0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date:'Nov 9th, 2037',
    odds:{
        team1 :1.33,
        draw: 3.25,
        team2: 6.5,
    },
};


//1.
for(let i=0; i<game.scored.length; i++){
    idnum = i + 1
    //console.log(`Game ${idnum}: ${game.scored[i]}`)
 
}

//2.
const oddValue = Object.values(game.odds)
console.log(oddValue)

sum = 0
for(let j=0; j<oddValue.length; j++){
   sum = sum + oddValue[j]
}
console.log(sum/oddValue.length)
console.log(`Average is ${avg.toFixed(2)}`)
console.log(Object.values(game.odds))


//3.
console.log(game.team1)
for(let y=0; y<oddValue.length; y++){
    
    console.log(`Odd of victory ${oddValue[y]}`)
}
console.log(Object.entries(game.odds))

//4.