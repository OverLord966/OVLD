document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.getElementById("auth-container");
    const leaderboardEl = document.getElementById("leaderboard");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleAuth = document.getElementById("toggle-auth");
    const userDisplay = document.getElementById("userDisplay");
  
    let currentUser = localStorage.getItem("currentUser");
  
    // Mostrar nome se já estiver logado
    if (currentUser) {
      showLoggedInUser(currentUser);
    }
  
    toggleAuth.addEventListener("click", () => {
      loginForm.classList.toggle("hidden");
      registerForm.classList.toggle("hidden");
    });
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
  
      const users = JSON.parse(localStorage.getItem("users")) || {};
  
      if (users[username]) {
        alert("Utilizador já existe!");
      } else {
        users[username] = { password, score: 0 };
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registo com sucesso! Agora pode entrar.");
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
      }
  
      e.target.reset();
    });
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
  
      const users = JSON.parse(localStorage.getItem("users")) || {};
  
      if (users[username] && users[username].password === password) {
        currentUser = username;
        localStorage.setItem("currentUser", currentUser);
        showLoggedInUser(currentUser);
      } else {
        alert("Credenciais inválidas");
      }
  
      e.target.reset();
    });
  
    function showLoggedInUser(username) {
      authContainer.style.display = "none";
      leaderboardEl && (leaderboardEl.style.display = "block");
  
      userDisplay.innerHTML = `
        <span>Olá, ${username}</span>
        <button id="logoutBtn">Sair</button>
      `;
  
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        currentUser = null;
        userDisplay.innerHTML = `<a href="#">Entrar</a>`;
        authContainer.style.display = "block";
        leaderboardEl && (leaderboardEl.style.display = "none");
      });
    }
  
    // Exportar para o quiz usar
    window.getCurrentUser = () => currentUser;
    window.addScoreToUser = (points) => {
      const users = JSON.parse(localStorage.getItem("users")) || {};
      if (currentUser && users[currentUser]) {
        users[currentUser].score += points;
        localStorage.setItem("users", JSON.stringify(users));
      }
    };
  });
  function toggleForm(form) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (form === 'register') {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    } else {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    }
  }

  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
      // Aqui você faria a verificação do login
      alert(`Login realizado com sucesso! Bem-vindo, ${username}!`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
      // Aqui você faria o processo de registo
      alert(`Conta criada com sucesso! Bem-vindo, ${username}!`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  // Alternar entre o formulário de login e registo
    function toggleForm(form) {
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');

      if (form === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
      } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
      }
    }

    // Função para realizar o login
    function login() {
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      if (username && password) {
        localStorage.setItem('username', username); // Armazenar o nome de utilizador
        alert(`Login realizado com sucesso! Bem-vindo, ${username}!`);
        updateNavbar(); // Atualiza a navbar após login
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }

    // Função para registar o utilizador
    function register() {
      const username = document.getElementById('register-username').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;

      if (username && email && password) {
        localStorage.setItem('username', username); // Armazenar o nome de utilizador
        alert(`Conta criada com sucesso! Bem-vindo, ${username}!`);
        updateNavbar(); // Atualiza a navbar após registo
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }

    // Função para atualizar a navbar
    function updateNavbar() {
      const userDisplay = document.getElementById('userDisplay');
      const username = localStorage.getItem('username');
      
      if (username) {
        userDisplay.innerHTML = `<a href="profile.html">Olá, ${username}</a>`; // Exibe o nome do utilizador
      }
    }

    // Atualizar a navbar ao carregar a página
    window.onload = function() {
      updateNavbar();
    }