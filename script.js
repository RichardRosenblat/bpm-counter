var clicks = 0;
var bpm = 0;
var firstClick = new Date();
var lastClick = new Date();
var elapsedTime = 0; 
var BPMFlag = true;
var binary = 0;
var ternary = 0;
var quarternary = 0;
var recordedBpms = [];
var mostClickedBpm = 0;
var averageBpm = 0;

function clickHandler() {
    clicks++;
    updateBPM();
    updateDisplay();
}

function updateBPM() {
    if (BPMFlag) {
        firstClick = new Date();
    }
    else {
        lastClick = new Date();
        elapsedTime = lastClick.getTime()-firstClick.getTime()       
        if (elapsedTime < 60000 * 4 && elapsedTime > 0){
            bpm = Math.round(60000/elapsedTime);
            recordBpm();

           binary = Math.round(averageBpm/2, 0);
           ternary = Math.round(averageBpm/3, 0);
           quarternary = Math.round(averageBpm/4, 0);

        }
    }

    BPMFlag = !BPMFlag;
}

function recordBpm(){
    if (recordedBpms[bpm] === undefined){
        recordedBpms[bpm] = 1;
    }
    else {
        recordedBpms[bpm] = recordedBpms[bpm] + 1;
    }

    mostClickedBpm = recordedBpms.indexOf(max(recordedBpms));

    averageBpm = bpmAverage(recordedBpms, mostClickedBpm, 5);

}

function clearNumbers(){
    clicks = 0;
    bpm = 0;
    firstClick = new Date();
    lastClick = new Date();
    elapsedTime = 0; 
    BPMFlag = true;
    binary = 0;
    ternary = 0;
    quarternary = 0;
    recordedBpms = [];
    mostClickedBpm = 0;
    averageBpm = 0;
    document.getElementById("tapButton").focus();
    console.clear();
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("clicksGiven").innerHTML = "Taps: "+ clicks;
    document.getElementById("bpmText").innerHTML = averageBpm + " BPM";
    document.getElementById("binary").innerHTML = binary;
    document.getElementById("ternary").innerHTML = ternary;
    document.getElementById("quarternary").innerHTML = quarternary;
    checkStyles();   
    
    /*
    //DEBUG ONLY    
    console.log("===================================================");
    console.log(" update display ");
    console.log(!document.activeElement === document.getElementById("tapButton"))
    console.log(document.activeElement === document.getElementById("tapButton"))
    console.log("clicks: " + clicks);
    console.log("bpm: " + bpm);
    console.log("firstClick: " + firstClick);
    console.log("lastClick: " + lastClick);
    console.log("firstClick.getTime(): " + firstClick.getTime())
    console.log("lastClick.getTime(): " + lastClick.getTime())
    console.log("elapsedTime: " + elapsedTime);
    console.log("BPMFlag: " + BPMFlag);
    console.log("binary: " + binary);
    console.log("ternary: " + ternary);
    console.log("quarternary: " + quarternary);
    console.log("mostClickedBpm: " + mostClickedBpm);
    console.log("averageBpm: " + averageBpm);
    console.log("recordedBpms: " + recordedBpms);
    console.log("===================================================");
    */
}

function checkStyles(){
    // Adiciona success
    //Binários
    if (binary >= 31 && binary <= 33){
        document.getElementById("Tango").classList.add('table-success');        
    }    
    else if (binary >= 50 && binary <= 52){
        document.getElementById("Samba").classList.add('table-success');        

    }
    else if (binary >= 60 && binary <= 62){
        document.getElementById("Paso_Double").classList.add('table-success');        
    }
    //Ternários
    if (ternary >= 28 && ternary <= 30){
        document.getElementById("Waltz").classList.add('table-success');        
    }    
    else if (ternary >= 58 && ternary <= 60){
        document.getElementById("Viennese_Waltz").classList.add('table-success');        

    }
    //Quarternários
    if (quarternary >= 25 && quarternary <= 27){
        document.getElementById("Rumba").classList.add('table-success');        
    }    
    else if (quarternary >= 28 && quarternary <= 30){
        document.getElementById("Slow_Fox").classList.add('table-success');        

    }
    else if (quarternary >= 30 && quarternary <= 32){
        document.getElementById("Cha_Cha_Cha").classList.add('table-success');        

    }
    else if (quarternary >= 42 && quarternary <= 44){
        document.getElementById("Jive").classList.add('table-success');        

    }
    else if (quarternary >= 50 && quarternary <= 52){
        document.getElementById("QuickStep").classList.add('table-success');        

    }

    //Remove success
    //Binários
    if (binary < 31 || binary > 33){
        document.getElementById("Tango").classList.remove('table-success');        
    }    
    if (binary < 50 || binary > 52){
        document.getElementById("Samba").classList.remove('table-success');        

    }
    if (binary < 60 || binary > 62){
        document.getElementById("Paso_Double").classList.remove('table-success');        
    }
    //Ternários
    if (ternary < 28 || ternary > 30){
        document.getElementById("Waltz").classList.remove('table-success');        
    }    
    if (ternary < 58 || ternary > 60){
        document.getElementById("Viennese_Waltz").classList.remove('table-success');        

    }
    //Quarternários
    if (quarternary < 25 || quarternary > 27){
        document.getElementById("Rumba").classList.remove('table-success');        
    }    
    if (quarternary < 28 || quarternary > 30){
        document.getElementById("Slow_Fox").classList.remove('table-success');        

    }
    if (quarternary < 30 || quarternary > 32){
        document.getElementById("Cha_Cha_Cha").classList.remove('table-success');        

    }
    if (quarternary < 42 || quarternary > 44){
        document.getElementById("Jive").classList.remove('table-success');        

    }
    if (quarternary < 50 || quarternary > 52){
        document.getElementById("QuickStep").classList.remove('table-success');        

    }
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {      
        if(!document.activeElement === document.getElementById("tapButton")){
           clickHandler();
        }
    }
    else if (event.code === 'Escape'){
      clearNumbers()
    }
})

function max(arguments) {
    var par = []
    for (var i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            par.push(arguments[i]);
        }
    }
    return Math.max.apply(Math, par);
}

function bpmAverage(arr, idx, a){
    var sum = 0;
    var totalElements = 0;
    for(var i = idx - a; i <= idx + a; i++){
        if(!isNaN(arr[i])) {
           sum+=i;
           totalElements++;
        }
    }
    return Math.round(sum/totalElements,0);
}

