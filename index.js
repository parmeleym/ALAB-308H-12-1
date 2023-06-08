let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');
let topMenuEl = document.querySelector('nav#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
for(e in menuLinks){
    let createElA = document.createElement('a');
    createElA.setAttribute('href', menuLinks[e].href);
    createElA.innerText = menuLinks[e].text;
    topMenuEl.append(createElA);
}
