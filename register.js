document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //   const res = await fetch('http://localhost:3000/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await res.json();
    //   document.getElementById('message').textContent = data.message;

    //   if (res.ok) {
    //     alert("Registration successful! You can now log in.");
    //     window.location.href = "login.html";
    //   }
    // });

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup hogya Login karo!");
        window.location.href = "login.html"; // redirect to login page
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  });
