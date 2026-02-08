const supabase = supabase.createClient(
  "https://dgolsptrvlfxdanijnjr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnb2xzcHRydmxmeGRhbmlqbmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MDgwNzUsImV4cCI6MjA4NjA4NDA3NX0.YSqslDuCYJwzN2_yGgsPMox1uh8EYVGJ_wmZk4BPySE"
);

async function logout(){
  await supabase.auth.signOut();
  window.location = 'login.html';
}

async function analyzeEssay(){
  const text = document.getElementById('essay').value;

  const res = await fetch('/api/analyze',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({text})
  });

  const data = await res.json();

  document.getElementById('results').innerHTML = `
    <h3>Results</h3>
    <p><b>Grammar:</b> ${data.grammar}</p>
    <p><b>Argument Score:</b> ${data.argument}/10</p>
    <p><b>Predicted Grade:</b> ${data.grade}</p>
    <p><b>Checklist:</b><br>${data.checklist}</p>
  `;

  loadHistory();
}

async function loadHistory(){
  const { data } = await supabase
    .from('essays')
    .select('*')
    .order('created_at',{ascending:false});

  let html='';

  data.forEach(e=>{
    html+=`<div><b>${e.grade}</b> - ${e.created_at}</div>`;
  });

  document.getElementById('history').innerHTML = html;
}

loadHistory();
