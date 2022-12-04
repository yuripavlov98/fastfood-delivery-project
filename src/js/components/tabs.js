import { navigationList, navigationListItems, catalogItem } from "./elements.js";


export const tabs = (cb) => {
    navigationList.addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active');
                catalogItem.textContent = item.textContent;
                cb(item.dataset.category);
            } else {
                item.classList.remove('navigation__button_active');
            }
        })
    })
};