
function arr(){

    let myColor = ["Red", "Green", "White", "Black"];
    let result = "";
    for (let i = 0; i < myColor.length; i++){
        result += myColor[i];
        if (i < myColor.length - 1){
            result += ",";
        }
    }
    alert(result)
}