fetch('../layout/Header.html')
    .then(res => {
        if (!res.ok) throw new Error('Header not loading');{
            return res.text();
        }
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(err => console.error(err));

fetch('../layout/Footer.html')
    .then(res => {
        if (!res.ok)throw new Error('Footer not loading'); {
            return res.text();
        }
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error(err));