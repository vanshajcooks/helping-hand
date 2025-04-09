document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
    document.getElementById('message').textContent = data.message;
  
    if (res.ok) {
      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    }
  });
  