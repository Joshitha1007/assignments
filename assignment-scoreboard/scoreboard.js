 var counter=0;
 var wickets=0;
    var runs=0;
function updatescore(event){
    
    var score=event.target.innerText;
    switch(score){
        case "DOT":{
            document.getElementById("line").innerText+=".";
            counter++;
            checkover();
        };break;
        case "1":{
            document.getElementById("line").innerText+="1";
            counter++;
            runs+=1
            document.getElementById("runs").innerText=runs;
            checkover();};
break;

        
        case "2":{
            document.getElementById("line").innerText+="2";
            counter++;
            runs+=2;
            document.getElementById("runs").innerText=runs;
checkover()
        };break;
        case "3":{
            document.getElementById("line").innerText+="3";
            counter++;
            runs+=3;
            document.getElementById("runs").innerText=runs;
            checkover()

        };break;
        case "4":{
            document.getElementById("line").innerText+="4";
            counter++;
            runs+=4;
            document.getElementById("runs").innerText=runs;
            checkover();


        }break;
        case "5":{
            document.getElementById("line").innerText+="5";
            counter++;
            runs+=5;
            document.getElementById("runs").innerText=runs;
            checkover();

        }break;
        case "6":{
            document.getElementById("line").innerText+="6";
            counter++;
            runs+=6;
            document.getElementById("runs").innerText=runs;
            checkover();

        }break;
        case "W":{
            document.getElementById("line").innerText+="W";
            counter++;
            wickets+=1;
            document.getElementById("wickets").innerText=wickets;
            checkover();

        }break;
        case "Wide":{
            document.getElementById("line").innerText+="1wd";
            runs+=1;
            document.getElementById("runs").innerText=runs;
            
            

        }break; 
        case "No Ball":{
            document.getElementById("line").innerText+="1nb";
            runs+=1;
            document.getElementById("runs").innerText=runs;
            
            

        }break;       
    }

}
function checkover(){
    if(counter===6){
        counter=0;
        document.getElementById("line").innerText+="|";

    }
}