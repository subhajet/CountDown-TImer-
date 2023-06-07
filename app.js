// CountDown Project YT


const endDate = "7 Jun 2023 9:29 PM";
document.getElementById("end_date").innerText = endDate 
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    console.log(end,)
    console.log(now)
    const diff = (end - now)/1000 ; 
    console.log(diff)
    if(diff<0) return;
    // Convert into days
    inputs[0].value=Math.floor(diff/3600 / 24);
    inputs[1].value=Math.floor(diff/3600 % 24);
    inputs[2].value = Math.floor(diff/60 % 60);
    inputs[3].value = Math.floor(diff % 60);


    // conver into days 

}

clock() 


// 1 day  24 hour
// 1hr 60 mints
// 60 mits 3600 hour

setInterval(() =>{
    clock()
},1000)