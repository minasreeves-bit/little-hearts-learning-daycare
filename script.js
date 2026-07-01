function toggleMenu(){document.getElementById('menu').classList.toggle('open')}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menu').classList.remove('open')));
