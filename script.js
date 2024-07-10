let time=0;
let c=0;
let d=1;
let m=document.getElementById('min');
let hr=document.getElementById('hr');
let e=1;
function start(){
    time+=1;
     document.getElementById('sec').innerHTML=padZero(time);
     if(c==0){
     startimer();
     c++;
     }
     if(time==60){
        m.innerHTML=padZero(time%60+d);
        d++;
        time=0;
     }
     if(d==60){
        hr.innerHTML=padZero(d%60+e);
        e++;
        d=1;
     }
}
function startimer(){
       a=setInterval(start,15);
    }
function stop(){
    c=0;
   clearInterval(a);
}
function reset(){
    clearInterval(a);
    document.getElementById('sec').innerHTML="00";
    m.innerHTML="00";
    hr.innerHTML="00"
    c=0;
    time=0;
    d=1;
    e=1;
}
function padZero(n){
    let b=0;
    if(n<10)
    return "0"+n;
    else if(n>=10 && n<=60)
    return n;
    else if(n>60){
        b++;
        return 0+"b : 00";
    }
}
