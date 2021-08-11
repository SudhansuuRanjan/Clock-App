      var num = document.querySelectorAll(".l1").length;
      for(var i = 0; i<num;i++){
          console.log(i)
          if(i===0){
            document.querySelectorAll(".l1")[i].addEventListener("click",function(){
            document.querySelectorAll(".area")[0].classList.remove("onclicked");
            document.querySelectorAll(".area")[1].classList.add("onclicked");
            document.querySelectorAll(".area")[2].classList.add("onclicked");
            document.querySelectorAll(".area")[3].classList.add("onclicked");
            document.querySelectorAll("input")[0].classList.add("unique");
            document.querySelectorAll("input")[1].classList.remove("unique");
            document.querySelectorAll("input")[2].classList.remove("unique");
            document.querySelectorAll("input")[3].classList.remove("unique");

           });
          }
          if(i===1){
                document.querySelectorAll(".l1")[i].addEventListener("click",function(){
                document.querySelectorAll(".area")[0].classList.add("onclicked");
                document.querySelectorAll(".area")[1].classList.remove("onclicked");
                document.querySelectorAll(".area")[2].classList.add("onclicked");
                document.querySelectorAll(".area")[3].classList.add("onclicked");
                document.querySelectorAll("input")[0].classList.remove("unique");
                document.querySelectorAll("input")[1].classList.add("unique");
                document.querySelectorAll("input")[2].classList.remove("unique");
                document.querySelectorAll("input")[3].classList.remove("unique");
               });
              }
         if(i===2){
                document.querySelectorAll(".l1")[i].addEventListener("click",function(){
                document.querySelectorAll(".area")[0].classList.add("onclicked");
                document.querySelectorAll(".area")[1].classList.add("onclicked");
                document.querySelectorAll(".area")[2].classList.remove("onclicked");
                document.querySelectorAll(".area")[3].classList.add("onclicked");
                document.querySelectorAll("input")[0].classList.remove("unique");
                document.querySelectorAll("input")[1].classList.remove("unique");
                document.querySelectorAll("input")[2].classList.add("unique");
                document.querySelectorAll("input")[3].classList.remove("unique");
               });
              }
              if(i===3){
                document.querySelectorAll(".l1")[i].addEventListener("click",function(){
                document.querySelectorAll(".area")[0].classList.add("onclicked");
                document.querySelectorAll(".area")[1].classList.add("onclicked");
                document.querySelectorAll(".area")[2].classList.add("onclicked");
                document.querySelectorAll(".area")[3].classList.remove("onclicked");
                document.querySelectorAll("input")[0].classList.remove("unique");
                document.querySelectorAll("input")[1].classList.remove("unique");
                document.querySelectorAll("input")[2].classList.remove("unique");
                document.querySelectorAll("input")[3].classList.add("unique");
               });
              }     
        }
   
setInterval(function(){
    var d = new Date();
    var h,m,s,date,month,year,day;
    var dday, ampm , dh , dm ,ds ;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    day = d.getDay();
    month = d.getMonth();
    year = d.getFullYear();
    date = d.getDate();
    month++;
    switch (day){
        case 0:
         dday="SUN";
         break;
         case 1:
            dday="MON";
            break;
            case 2:
           dday="TUE";
          break;
         case 3:
         dday="WED";
         break;
         case 4:
         dday="THU";
         break;
         case 5:
         dday="FRI";
         break;
         case 6:
         dday="SAT";
         break;
         default:
         dday="Error";
 }
 ampm = "a.m.";
 if(h>12){
     h = h-12;
     ampm = "p.m.";
 }
 if(h==0){
     h=12;
     ampm ="a.m.";
 }
 if(h<10){
     dh = "0"+ h;
 }
 else{
     dh =""+h;
 }
 if(m<10){
    dm = "0"+ m;
}
else{
    dm =""+m;
}
if(s<10){
    ds = "0"+ s;
}
else{
    ds =""+s;
}
document.querySelector(".time").innerHTML = dh +" : "+dm +" : "+ds+" : "+ampm;
document.querySelector(".date").innerHTML = date + "/"+month+"/"+year;
document.querySelector(".day").innerHTML = dday;


},1000)