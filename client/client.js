const collapsibles = document.querySelectorAll('.collapsible');
const requestForm = document.querySelectorAll('.requestForm');

const collapsibleEvents = () => {
    collapsibles.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            const content = requestForm[index];
        });
    });
};

const handleResponse = async (response) => {

};

const sendFetch = async (url) => {

};

const init = () => {

};

window.onload = init;