// dashboard.js

let xp = 0;

const tasks = [
  { day:'Pazartesi', activities:['Staj'], messages:['Stajı domine ettin!','Kodlar teslim oldu, beyin patladı!','Staj alanında rakipsizsin!'] },
  { day:'Salı', activities:['Spor'], messages:['Kaslar ve beyin aktif!','Spor sınırları zorladın!','Enerji seviyen zirvede!'] },
  { day:'Çarşamba', activities:['Staj','YKS'], messages:['Staj ve YKS ikisini yendin!','Matematik ve kodlar senin kontrolünde!','Beynin ateş gibi çalışıyor!'] },
  { day:'Perşembe', activities:['Okul','Spor'], messages:['Dersleri ve sporunu yönettin!','Okul ve spor dengesi tam!','Beyin ve beden tam formunda!'] },
  { day:'Cuma', activities:['Okul','YKS'], messages:['Matematik ve fen senin elinde!','YKS soruları sana teslim oldu!','Bilgi ve zeka birleşti!'] },
  { day:'Cumartesi', activities:['İş','Spor'], messages:['İşte hem çalıştın hem öğrendin!','Enerjin ve disiplin zirvede!','Hem iş hem spor, kontrol sende!'] },
  { day:'Pazar', activities:['Dinlenme'], messages:['Dinlenerek bile kazanıyorsun!','Zihnini tazeledin!','Rahatla ve kendine övgü ver!'] }
];

function getRandomMessage(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function loadTasks(){
    const container = document.getElementById('tasksContainer');
    container.innerHTML='';
    const today = new Date().getDay();
    const dayIndex = today===0?6:today-1;

    tasks.forEach((task,i)=>{
        const div = document.createElement('div');
        div.classList.add('day-task');
        if(i===dayIndex) div.style.borderColor='#00FF00';
        div.innerHTML=`<b>${task.day} - ${task.activities.join(', ')}</b>`;
        div.addEventListener('click',()=>{
            div.classList.add('completed');
            const msgDiv=document.createElement('div');
            msgDiv.classList.add('message');
            msgDiv.innerText=getRandomMessage(task.messages);
            div.appendChild(msgDiv);
            addXP(10);
        });
        container.appendChild(div);
    });
}

function addXP(amount){
    xp+=amount;
    const xpSpan = document.getElementById('xpCount');
    xpSpan.innerText=xp;
}

function toggleKralMode(){ document.body.classList.toggle('kral-mode'); }

// YKS Countdown
const yksDate = new Date('2026-06-15T10:00:00');
function updateCountdown(){
  const now = new Date();
  const diff = yksDate - now;
  if(diff<=0){ document.getElementById('countdown').innerText='Sınav Başladı!'; return;}
  const days = Math.floor(diff/(1000*60*60*24));
  const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((diff%(1000*60*60))/(1000*60));
  const secs = Math.floor((diff%(1000*60))/1000);
  document.getElementById('countdown').innerText=`${days} gün ${hours} saat ${mins} dk ${secs} sn`;
}
setInterval(updateCountdown,1000);

loadTasks();
