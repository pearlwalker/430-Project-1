const collapsibles = document.querySelectorAll('.collapsible');
const requestForm = document.querySelectorAll('.requestForm');


const handleResponse = async (response) => {

};

const sendFetch = async (url) => {

};

const init = () => {
    collapsibles.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            const content = requestForm[index];
        });
    });
};

window.onload = init;