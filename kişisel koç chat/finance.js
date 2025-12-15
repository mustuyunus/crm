// summary.js

function loadDailySummary(){
    const dailySummaryDiv = document.getElementById('dailySummary');
    dailySummaryDiv.innerHTML='';
    
    // Görevlerden günlük özet
    const today = new Date().getDay();
    const dayIndex = today===0?6:today-1;
    const todayTask = tasks[dayIndex];

    const taskSummary = document.createElement('div');
    taskSummary.innerHTML=`<h3>${todayTask.day} Görevleri</h3><ul>${todayTask.activities.map(a=>`<li>${a}</li>`).join('')}</ul>`;
    dailySummaryDiv.appendChild(taskSummary);

    // XP ve motivasyon mesajları
    const xpSummary = document.createElement('div');
    xpSummary.innerHTML=`<p>Kazanılan XP: ${xp}</p>`;
    dailySummaryDiv.appendChild(xpSummary);

    const msgSummary = document.createElement('div');
    msgSummary.classList.add('message');
    msgSummary.innerText = getRandomMessage(todayTask.messages);
    dailySummaryDiv.appendChild(msgSummary);

    // Finansal özet
    const totalIncome = finances.filter(f=>f.type==='income').reduce((a,b)=>a+b.amount,0);
    const totalExpense = finances.filter(f=>f.type==='expense').reduce((a,b)=>a+b.amount,0);
    const balance = totalIncome - totalExpense;

    const financeSummary = document.createElement('div');
    financeSummary.innerHTML=`<p>Bugünkü Gelir: ${totalIncome}₺ | Bugünkü Gider: ${totalExpense}₺ | Bakiye: ${balance}₺</p>`;
    dailySummaryDiv.appendChild(financeSummary);
}