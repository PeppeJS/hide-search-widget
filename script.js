let searchs = document.querySelector('.search');
let inputSearch = document.getElementById('search');
let btns = document.querySelector('.btn');

btns.addEventListener('click', () => {
  searchs.classList.toggle('active');
  inputSearch.focus();
});
