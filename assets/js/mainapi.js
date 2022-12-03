//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
document.getElementById('surpriseMe').addEventListener('click', getRandom)
// document.getElementById('searchIngred').addEventListener('click', searchIngred)

function getDrink(){
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        
        document.getElementById('inner2').innerHTML = ''
            
        let j = 0
            while(data.drinks[j]){

                const inner = document.getElementById('inner2')



                const tile = document.createElement(`tile${j}`)
                    tile.className = 'tiles'
                    tile.id = `tile${j}`

                inner.appendChild(tile)

                const article1 = document.createElement('article')
                    article1.className = 'style1'

                const article2 = document.createElement('article')
                    article2.className = 'style2'

                const aName = document.createElement('a')

                const name = document.createElement('h2')
                    name.id = `name${j}`


                const imgSpan = document.createElement('span')
                    imgSpan.className = 'image'

                const image = document.createElement('img')
                    image.id = `thumbnail${j}`


                const ingUl = document.createElement('ul')
                    ingUl.id = `ingList${j}`
                    ingUl.className = 'ingList'


                const dirUl = document.createElement('ul')
                    dirUl.id = `instructions${j}`

                const divContent = document.createElement('div')
                    divContent.className = 'content'

                tile.appendChild(article1)
                    article1.appendChild(imgSpan)
                        imgSpan.appendChild(image)
                    article1.appendChild(aName)
                        aName.appendChild(name)
                    article1.appendChild(divContent)
                tile.appendChild(article2)
                    article2.appendChild(divContent)
                        divContent.appendChild(ingUl)
                        divContent.appendChild(dirUl)

        document.getElementById(`name${j}`).textContent = data.drinks[j].strDrink
        document.getElementById(`thumbnail${j}`).src = data.drinks[j].strDrinkThumb
        document.getElementById(`ingList${j}`).innerHTML = ''
        document.getElementById(`instructions${j}`).innerHTML = ''

            const drinkIng = data.drinks[j];
            let i = 1;
                while(drinkIng[`strIngredient${i}`]){
                    
                    const li = document.createElement('li');
                    const ul = document.getElementById(`ingList${j}`)
                    if(!drinkIng[`strMeasure${i}`]){
                        li.textContent = drinkIng[`strIngredient${i}`]
                    }else{
                        li.textContent = drinkIng[`strMeasure${i}`] + `: ` + drinkIng[`strIngredient${i}`];
                    }
                    
                    ul.appendChild(li)
                    i++
                }
            const instructionArr = drinkIng.strInstructions.split('.')
            // console.log(instructionArr)
            let n = 0
                while(instructionArr[n]){
                    const arrLi = document.createElement('li')
                    const arrUl = document.getElementById(`instructions${j}`)
                    arrLi.textContent = instructionArr[n] + '. '
                    arrUl.appendChild(arrLi)
                    n++
                }


        


        j++
        }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }


function getRandom(){
       
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.getElementById('ingList0').innerHTML = ''
        document.getElementById('instructions0').innerHTML = ''

            const drinkIng = data.drinks[0];
            let i = 1;
                while(drinkIng[`strIngredient${i}`]){
                    
                    const li = document.createElement('li');
                    const ul = document.getElementById('ingList0')
                    li.innerText = drinkIng[`strIngredient${i}`];
                    ul.appendChild(li)
                    i++
                }
            const instructionArr = drinkIng.strInstructions.split('.')
            console.log(instructionArr)
            let n = 0
                while(instructionArr[n]){
                    const arrLi = document.createElement('li')
                    const arrUl = document.getElementById('instructions0')
                    arrLi.innerText = instructionArr[n] + '. '
                    arrUl.appendChild(arrLi)
                    n++
                }
        
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

// function searchIngred(){
//     let ingredient = document.querySelector('input').value
    
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//         console.log(data)
//         document.querySelector('h2').innerText = data.drinks[0].strDrink
//         document.getElementById('thumbnailOne').src = data.drinks[0].strDrinkThumb
//         document.getElementById('ingList').innerHTML = ''
//         document.getElementById('instructions').innerHTML = ''

//             const drinkIng = data.drinks[0];
//             let i = 1;
//                 while(drinkIng[`strIngredient${i}`]){
                    
//                     const li = document.createElement('li');
//                     const ul = document.getElementById('ingList1')
//                     li.innerText = drinkIng[`strIngredient${i}`];
//                     ul.appendChild(li)
//                     i++
//                 }
//             const instructionArr = drinkIng.strInstructions.split('.')
//             console.log(instructionArr)
//             let n = 0
//                 while(instructionArr[n]){
//                     const arrLi = document.createElement('li')
//                     const arrUl = document.getElementById('instructions1')
//                     arrLi.innerText = instructionArr[n] + '. '
//                     arrUl.appendChild(arrLi)
//                     n++
//                 }
        
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });

// }
