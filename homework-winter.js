
function tick()
{
var year,month,day,hours,minutes,seconds,ap;
var intYear,intMonth,intDate,intDay,intHours,intMinutes,intSeconds;
var week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
var today;
today=new Date();
intYear=today.getFullYear();
intMonth=today.getMonth()+1;
intDate=today.getDate();
intDay=today.getDay();
intHours=today.getHours();
intMinutes=today.getMinutes();
intSeconds=today.getSeconds();

if(intHours==0)
{
hours=intHours+":";
ap="凌晨了，还不睡觉？";
}
else if(intHours>0,intHours<12)
{
hours=intHours+":";
ap="早上好";
}
else if(intHours==12)
{
hours=intHours+":";
ap="中午好";
}
else if(intHours>12,intHours<18)
{
intHours=intHours;
hours=intHours+":";
ap="下午好";
}
else
{
intHours=intHours;
hours=intHours+":";
ap="晚上好";
}

if(intMinutes<10)
{
minutes="0"+intMinutes+":";
}
else
{
minutes=intMinutes+":";
}

if(intSeconds<10)
{
seconds="0"+intSeconds+" ";
}
else
{
seconds=intSeconds+" ";
}
timeString1=intYear+'年'+intMonth+'月'+intDate+'日'+week[intDay];
timeString2=hours+minutes+seconds+ap;
Clock1.innerHTML=timeString1;
Clock2.innerHTML=timeString2;

window.setTimeout("tick()",10);
}
window.onload=tick;

