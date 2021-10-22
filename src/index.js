import './sass/main.scss';

import apiServiceImages from './js/apiService'
import cardMarkup from './templates/imgcard.hbs'
import debounce from 'lodash.debounce'
import { openModal } from './js/lightbox';


const refs = {
    searchForm: document.querySelector('.search-form'),
    galeryList:document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
}

// refs.searchForm.addEventListener('submit', onSearch)
refs.searchForm.addEventListener('input', debounce(onSearch, 500)),
refs.loadMoreBtn.addEventListener('click', onLoadMore)
refs.galeryList.addEventListener('click',openModal)

const search = new apiServiceImages

function onSearch(event){
    event.preventDefault();
    search.query = refs.searchForm.elements.query.value;
    search.resetPage()
    refs.galeryList.innerHTML = ''
    search.fetchImages().then(markUP)
}

function onLoadMore() {
    search.fetchImages()
    .then(markUP)
    .then( refs.galeryList.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      }))

}

function markUP(images) {
    refs.galeryList.insertAdjacentHTML('beforeend',cardMarkup(images))
}

// const element = document.getElementById('loadbtn');
// element.scrollIntoView({
//     top: 0, 
//     left: 0,
//   behavior: 'smooth',
//   block: 'end',
// });








// function addMarkUp(images) {
//     return cardMarkup(images)
// }
// //             IntersectionObserver

// const options = {
//     rootMargin: '150px',
//     threshold: 0.5,
// }

// const onScroll = () => {
//     addMoreImages();
// }

// const observer= new IntersectionObserver(options)

// function addMoreImages() {
//     let imagesList =  search.fetchImages();
//     if (imagesList.length !== 0) {
//         const markUpAdd = addMarkUp(imagesList)
//         markUP(markUpAdd)
//     } else {
//         error({
//             text:`Not found`
//         })
//         observer.disconnect();
//     }
// }


