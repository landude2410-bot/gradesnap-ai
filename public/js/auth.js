const supabase = supabase.createClient(
  "https://dgolsptrvlfxdanijnjr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnb2xzcHRydmxmeGRhbmlqbmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MDgwNzUsImV4cCI6MjA4NjA4NDA3NX0.YSqslDuCYJwzN2_yGgsPMox1uh8EYVGJ_wmZk4BPySE"
);

async function login(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabase.auth.signInWithPassword({
    email, password
  });

  if(error) alert(error.message);
  else window.location = 'dashboard.html';
}

async function signup(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabase.auth.signUp({
    email, password
  });

  if(error) alert(error.message);
  else alert('Check email to verify.');
}
