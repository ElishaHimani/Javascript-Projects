let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn =  document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delbtn = document.getElementById("del-btn")
const tabbtn = document.getElementById("tab-btn")
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadFromLocalStorage)
{
    myLeads = leadFromLocalStorage
    render(myLeads)
}
inputbtn.addEventListener("click", saveInput)
function saveInput()
{
   //inputbtn.textContent = "Button Clicked"
   myLeads.push(inputEl.value)
   inputEl.value = " "
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)
   
}
tabbtn.addEventListener("click", function()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    })
})
delbtn.addEventListener("dblclick", function()
{
    localStorage.clear()
    myLeads= []
    render(myLeads)
})

function render(leads)
{
    let listitems =  ""
    for(let i = 0; i < leads.length; i++)
    {
        listitems += `
        <li>
            <a target = '_blank' href='${leads[i]}'> ${leads[i]}</a>
        </li>
        `

        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listitems
}

