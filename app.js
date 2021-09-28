var button_primary_minion = document.querySelector("#btn-primary-banana")

var txt_input = document.querySelector("#translate-input")
var txt_output = document.querySelector("#translate-output")

var serverUrlMinion = "https://api.funtranslations.com/translate/minion.json"


function Translator(text){
    return serverUrlMinion + "?"+"text="+text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Something Went Wrong with server! Trey again after some time")
}

function clickEventHandler(){
    var Input_Text = txt_input.value

    fetch(Translator(Input_Text))
    .then(response => response.json())
    
    .then(json =>{
        var TranslateTextOutput = json.contents.translated
        txt_output.innerText = TranslateTextOutput;
    })
    .catch(errorHandler)
}

button_primary_minion.addEventListener("click",clickEventHandler)