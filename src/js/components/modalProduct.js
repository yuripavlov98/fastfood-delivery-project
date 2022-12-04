import {
    catalogList,
    modalContent 
} from './elements.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { tabs } from './tabs.js';
import { cartInit } from './cart.js';

catalogList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.product__detail')) {
        const id = target.closest('.product').dataset.idProduct;
        openModal(id);
    }
});


modalContent.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.modal__close') || target === modalContent) {
        modalContent.classList.remove('modal_open');
    }

});

const init = () => {
    renderListProduct();
    tabs(renderListProduct);
    cartInit();
};
init();
