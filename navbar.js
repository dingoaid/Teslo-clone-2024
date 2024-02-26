const stretchFooter = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('footer').className = 'active';
}

const closeFooter = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('footer').className = '';
}

document.getElementById('vehicles-btn').onmouseover = e => {
    e.preventDefault();
    stretchFooter();
}

document.querySelector('.backdrop').onmouseover = e => {
    closeFooter();
}