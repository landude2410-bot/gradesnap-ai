const supabase = supabase.createClient(
  "https://YOUR_PROJECT_ID.supabase.co",
  "YOUR_PUBLIC_ANON_KEY"
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
