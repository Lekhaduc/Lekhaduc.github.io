const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tab__item');
const pages = $$('.tab__page');
const tabActive = $('.tab__item.active')
const line = $('.tab__line');
console.log(line)
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
tabs.forEach((tab, index) => {
    const page = pages[index];
    tab.onclick = function() {
        $('.tab__item.active').classList.remove('active');
        $('.tab__page.active').classList.remove('active');
        this.classList.add('active');
        page.classList.add('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
});