// let savedData = localStorage.getItem('sdiApr')

// if(savedData !== null){
//   showData.innerHTML = savedData
// }

// function storage(){
//   let randNum = Math.floor(Math.random()*100)

//   localStorage.setItem('sdiApr', randNum)

//   showData.innerHTML = randNum
// }

// storeBtn.addEventListener('click', storage)

let storeBtn = document.querySelector('#localStore')

let showData = document.querySelector('#storedData')

let pokeObj = {status: 'empty'};

// fetch('https://pokeapi.co/api/v2/pokemon/dragapult')
//   .then((x)=>x.json())
//   .then((data) => {
//     console.log(data.moves)
//     pokeObj = data
//     return data.moves
//   })
//   .then(moves => {
//     let moveNames = moves.map(move => move.move.name)
//     return moveNames
//   })
//   .then(names => {
//     // names.forEach(name => {
//     //   let tempLi = document.createElement('li')
//     //   tempLi.textContent = name
//     //   showData.appendChild(tempLi)
//     // });

//     for(let i =0; i < names.length; i++){
//       let tempLi = document.createElement('li')
//       tempLi.textContent = names[i]
//       showData.appendChild(tempLi)
//     }
//   })

let pokeData = []

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res=>res.json())
  .then(data=>{
    data.results.forEach(pokeman => {
      fetch(pokeman.url)
        .then(res=>res.json())
        .then(data=>{
          let tempLi = document.createElement('li')
          tempLi.textContent = data.name
          showData.appendChild(tempLi)
          pokeData.push(data.name)
        })
    });
  })
  .then(x=>console.log(pokeData))



showData.innerHTML='WAITING 654105646531563268541351.403626314635824163514638541365146841'