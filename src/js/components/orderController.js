import { modalDeliveryContainer, modalDeliveryForm } from "./elements.js"
import { clearCart } from "./cart.js";
export const orderController = (getCart) => {
    const checkDelivery = () => {
        if (modalDeliveryForm.format.value === 'pickup') {
            modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input_hide');
        }
        if (modalDeliveryForm.format.value === 'delivery') {
            modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input_hide');
        }
    };
    
    modalDeliveryForm.addEventListener('change', checkDelivery);
    // отправка формы
    modalDeliveryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(modalDeliveryForm);
        const data = Object.fromEntries(formData);
        data.order = getCart();

        fetch('https://reqres.in/api/users', {
            method: 'post',
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(response => {
                clearCart()

                modalDeliveryContainer.innerHTML = `
                    <br><br><br><br><br>
                    <h2>Спасибо за заказ!</h2>
                    <h3>Ваш номер заказа ${response.id}</h3>
                    <h3>Менеджер свяжется с Вами в ближайшее время :)</h3>
                    <p>Ваш заказ:</p>
                `;

                const ul = document.createElement('ul');
                data.order.forEach(item => {
                    ul.insertAdjacentHTML('beforeend', `
                        <li>${item.id}</li>
                    `);
                });
                modalDeliveryContainer.insertAdjacentElement('beforeend', ul);
                // modalDeliveryForm.reset();
                // checkDelivery();
            });
    });
}