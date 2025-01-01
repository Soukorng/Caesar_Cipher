

function date(){
    const d = new Date();
    let hour = d.getHours();
    if(hour < 12){
        alert("Good Morning");
    } else if(hour > 18){
        alert("Good Evening");
    } else{
        alert("Good Afternoon");
    }
}