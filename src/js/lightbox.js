import * as basicLightbox from 'basiclightbox'

export function openModal(el) {
    if (el.target.nodeName !== 'IMG') {
      return;
    }
    const instance = basicLightbox.create(`
        <img src="${el.target.dataset.source}" alt="" width="1280" >
    `)
instance.show()
}
