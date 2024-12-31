(async function() {
    const userData = await fetch('../data/users.json').then(res => res.json());
    
    document.getElementById('validationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const title = document.getElementById('titleSelect').value;
        const resultDiv = document.getElementById('result');

        const isValidUser = userData.users.some(user => 
            user.username === username && user.email === email
        );

        if (!isValidUser) {
            resultDiv.innerHTML = '<p class="error">Bye</p>';
            return;
        }

        const links = userData.links[title];
        let html = `<h3>${title}</h3><div class="links">`;
        links.forEach(link => {
            html += `<a href="${link}" target="_blank">${link}</a><br>`;
        });
        html += '</div>';
        resultDiv.innerHTML = html;
    });
})();