      alert("Alert! Currently this page is non responsive.\nFor best experience open in desktop mode in phone.");
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
     ampm ="p.m.";
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


},1000);



var hour = document.querySelector(".hour-hand");
var minute = document.querySelector(".minute-hand");
var seconds = document.querySelector(".second-hand");

var clock = setInterval(function clock(){
    var da = new Date();
    var hr = da.getHours();
    var min = da.getMinutes();
    var sec = da.getSeconds();

    var hr_setup = (hr * 30) + (min / 2);
    var min_setup = (min * 6) + (sec / 10);
    var sec_setup = sec*6;

    hour.style.transform = 'rotate(' + hr_setup + 'deg';
    minute.style.transform = 'rotate(' + min_setup + 'deg';
    seconds.style.transform = 'rotate(' + sec_setup + 'deg';
})

////stop



const timer = document.querySelector(".stop-watch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer(){
    if(stoptime == true){
        stoptime = false;
        timerCycle();
    }
}

function stopTimer(){
    if (stoptime == false){
        stoptime = true;
    }
}

function timerCycle(){
    if (stoptime == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if(sec<10 || sec == 0){
            sec = '0' + sec ;
        }
        if(min<10 || min == 0){
            min = '0' + min ;
        }
        if(hr<10 || hr == 0){
            hr = '0' + hr ;
        }

        timer.innerHTML = hr + " : " + min + " : " + sec ;
        setTimeout("timerCycle()",1000);
    }
}
function resetTimer(){
   hr = 0;
   min = 0;
   sec = 0;
   timer.innerHTML = "0"+hr + " : " + "0"+ min + " : " + "0"+sec ;
}
////ghgwhqhqd

var deadline = new Date( "jan 1 , 2022  00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime() ;
    var t = deadline - now ;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((t % (1000 * 60  )) / (1000));
    document.querySelector("#day_inp").value = days;
    document.querySelector("#hour_inp").value = hours;
    document.querySelector("#min_inp").value = minutes;
    document.querySelector("#sec_inp").value = seconds;
},1000);
