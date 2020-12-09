
var clicks = 0;
var bpm = 0;
var firstClick = new Date();
var lastClick = new Date();
var BPMFlag = true;
var binary = 0;
var ternary = 0;
var quarternary = 0;

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
        bpm = 60000/(lastClick.getTime() - firstClick.getTime());
        binary = bpm/2;
        ternary = bpm/3;
        quarternary = bpm/4;
    }

    BPMFlag = !BPMFlag;
}

function clearNumbers(){
    clicks = 0;
    bpm = 0;
    firstClick = new Date();
    lastClick = new Date();
    BPMFlag = true;    
    binary = 0;
    ternary = 0;
    quarternary = 0;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("clicksGiven").innerHTML = "Taps: "+ clicks;
    document.getElementById("bpmText").innerHTML = Math.round(bpm, 0) + " BPM";
    document.getElementById("binary").innerHTML = Math.round(binary, 0);
    document.getElementById("ternary").innerHTML = Math.round(ternary, 0);
    document.getElementById("quarternary").innerHTML = Math.round(quarternary, 0);
    checkStyles();
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
    if (event.code === 'Space' || event.code === 'Enter') {      
      clickHandler();
    }
    else if (event.code === 'Escape'){
      clearNumbers()
    }
})