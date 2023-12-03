function mytime()
{
    let Time=new Date();
    let hr=Time.getHours();
    let min=Zero(Time.getMinutes());
    let sec=Zero(Time.getSeconds());
    let ampm=document.getElementById('ampm')
    if(hr>12)
    {
        hr=hr-12
        ampm.innerHTML='PM'

    }
    document.getElementById('hr').innerHTML=Zero(hr)
    document.getElementById('min').innerHTML=min
    document.getElementById('sec').innerHTML=sec
}
function Zero(time)
{
    return time<10?"0"+time:time
}
setInterval(mytime,500)

function mydate()
{
let d=new Date();
let dt=d.getDate();
let mt=d.getMonth()+1;
let ye=d.getFullYear();
document.getElementById('date').innerHTML=dt
document.getElementById('month').innerHTML=mt
document.getElementById('year').innerHTML=ye
}
setInterval(mydate,500)
function myday()
{
    let d=new Date();
    let day=d.getDay();
    if(day==0)
    {
        document.getElementById('day').innerHTML="Sunday";
    }
    if(day==1)
    {
        document.getElementById('day').innerHTML="Monday";
    }
    if(day==2)
    {
        document.getElementById('day').innerHTML="Tuesday";
    }
    if(day==3)
    {
        document.getElementById('day').innerHTML="Wednesday";
    }
    if(day==4)
    {
        document.getElementById('day').innerHTML="Thursday";
    }
    if(day==5)
    {
        document.getElementById('day').innerHTML="Friday";
    }
    if(day==6)
    {
        document.getElementById('day').innerHTML="Saturday";
    }
}
setInterval(myday,500)