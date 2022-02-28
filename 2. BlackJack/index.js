//const emoji = String.fromCodePoint(0x1F600)
let cards = []
let message = document.getElementById("messageEl")
let sumEl  = document.querySelector("#sumEl")
let cardsEl = document.querySelector(".cardsEl")
let newCardEl = document.querySelector("#newCardEl")
let cashEl = document.querySelector("#cashEl")
let isalive = false
let blackjack = false
let player =
{
    cash:100, 
    name:"Elisha"
}

function randomCard()
{
    let rand = Math.floor(Math.random()*13) + 1
    if (rand === 1)
    {
        return 11
    }
    else if(rand > 10)
    {
        return 10
    }
    else 
    {
        return rand
    }
}
function renderGame()
{
    if(sum <= 20)
    { 
        message.innerText = "Do you want to draw another card?"  
        isalive = true
        blackjack = false
    }
    else if(sum === 21)
    {
        message.innerText = "You have got Blackjack!"
        blackjack = true 
        isalive = false
    }
    else
    {
        message.innerText = "You're out of the game"
        isalive = false
        blackjack = false
    }

    cardsEl.innerText = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.innerText += " " + cards[i]
    }
    sumEl.innerText = "Sum: "+ sum;
}
function StartGame()
{
    if(player.cash >= 5)
    {
        isalive = true
        cards = []
        sum = 0
        cardsEl.innerText= "Cards: "
        sumEl.innerText = "Sum: "
        let firstcard = randomCard()
        let secondcard = randomCard()
        sum = firstcard + secondcard
        cards.push(firstcard, secondcard)
        player.cash -= 5
        cashEl.innerText = player.name +" $: "+ player.cash
        renderGame()
    }
    else
    {
        message.innerText = "OOPS!! You ran out of cash!"
    }
}
    

function NewCard()
{
    if(isalive === true && blackjack === false)
    {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


