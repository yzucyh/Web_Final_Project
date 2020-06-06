$(document).ready(function(){
    $("input").click(function(){
        let day = ["今晚", "昨天","前天","大前天","大大前天","大大大前天"];
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        let store = $("#choices li").eq(randomChildNumber).text();
        store1.push(store);
        $("#random-pic").attr("src",pictures[randomChildNumber]);

        if(i === 0){
        $("table").append("Day1").append("<br>");
        $("table").append("<tr>").append(day[i]+"吃了" + store1[i]).append("</tr>").append("<br>").append("<br>");
        }
        if( i === 1){
            $("table").append("Day2").append("<br>");
            $("table").append("<tr>").append(day[i-1]+"吃了" + store1[i]).append("</tr>");
            $("table").append("<tr>").append(day[i]+"吃了" + store1[0]).append("</tr>").append("<br>").append("<br>");
        }
        if( i === 2){
            $("table").append("Day3").append("<br>");
            $("table").append("<tr>").append(day[i-2]+"吃了" + store1[i]).append("</tr>");
            $("table").append("<tr>").append(day[i-1]+"吃了" + store1[i-1]).append("</tr>");
            $("table").append("<tr>").append(day[i]+"吃了" + store1[0]).append("</tr>").append("<br>").append("<br>");

        }
        if( i === 3){
            $("table").append("Day4").append("<br>");
            $("table").append("<tr>").append(day[i-3]+"吃了" + store1[i]).append("</tr>");
            $("table").append("<tr>").append(day[i-2]+"吃了" + store1[i-2]).append("</tr>");
            $("table").append("<tr>").append(day[i-1]+"吃了" + store1[i-1]).append("</tr>");
            $("table").append("<tr>").append(day[i]+"吃了" + store1[0]).append("</tr>").append("<br>").append("<br>");
        }
        if( i === 4){
            $("table").append("Day5").append("<br>");
            $("table").append("<tr>").append(day[i-4]+"吃了" + store1[i]).append("</tr>");
            $("table").append("<tr>").append(day[i-3]+"吃了" + store1[i-3]).append("</tr>");
            $("table").append("<tr>").append(day[i-2]+"吃了" + store1[i-2]).append("</tr>");
            $("table").append("<tr>").append(day[i-1]+"吃了" + store1[i-1]).append("</tr>");
            $("table").append("<tr>").append(day[i]+"吃了" + store1[0]).append("</tr>").append("<br>").append("<br>");

        }
        i = i + 1;
    });
});
var i = 0;
var store1=[];