import './sass/main.scss';

import apiServiceImages from './js/apiService'
import cardMarkup from './templates/imgcard.hbs'
import debounce from 'lodash.debounce'


const refs = {
    searchForm: document.querySelector('.search-form'),
    galeryList:document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
}

// refs.searchForm.addEventListener('submit', onSearch)
refs.searchForm.addEventListener('input', debounce(onSearch, 500)),
refs.loadMoreBtn.addEventListener('click', onLoadMore)

const search = new apiServiceImages

function onSearch(event){
    event.preventDefault();
    search.query = refs.searchForm.elements.query.value;
    search.resetPage()
    refs.galeryList.innerHTML = ''
    search.fetchImages().then(markUP)

}

function onLoadMore() {
    search.fetchImages().then(markUP)
}

function markUP(images) {
    refs.galeryList.insertAdjacentHTML('beforeend',cardMarkup(images))
}

const element = document.getElementById('.loadbtn');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});