
let count = 0
let count_val = document.getElementById("countV")
let save_val = document.getElementById("previous")
function increment()
{
    count += 1
    count_val.innerText = count

}
function save()
{
     let count_str = count + " - "
     save_val.textContent += count_str
     count = 0
     count_val.innerText = 0
     
}

//console.log("Hello")