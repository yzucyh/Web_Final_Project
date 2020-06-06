$(document).ready(function(){
    setTable();
 
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-");
        console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
 
});

function setTable(){
    $("#courseTable").empty();
 
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );
    let topicCount = topicsArray.length;
    let oneDayMilliseconds = 24*60*60*1000;
 
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        let trSpecial = "<tr>";
        if(topicsArray[x]=="連假不上課"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }else if(topicsArray[x]=="遠端上課"){
            trSpecial = "<tr style='background-color:lightblue'>";
        }else if(topicsArray[x]=="畢業"){
            trSpecial = "<tr style='background-color:lightgreen'>";
        }else if(topicsArray[x]=="國定假日"){
            trSpecial = "<tr style='background-color:red'>";
        }
        if(thisDate.toLocaleDateString().slice(7) == "15")
        {
            trSpecial = "<tr style='background-color:red'>";
        }
        //國定和15號都會放假
        $("#courseTable").append(
            trSpecial +
            "<td>"+ (x+1) +"</td>"+
            "<td>"+ thisDate.toLocaleDateString().slice(5) +"</td>"+
            "<td>" + topicsArray[x]+"</td>"+
            "</tr>"
        ); 
    }
}
 
function showAlert(){
    let myVar = setInterval(() => {
        let currentTime = new Date(); 
        document.getElementById("showTime").innerHTML=currentTime.toLocaleTimeString();
        },1000 );  
    }
