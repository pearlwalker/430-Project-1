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
            requestForm.forEach((form) => {
                if(form !== content) {
                    form.style.display = 'none';
                };
            });
            if(content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            };
        });
    });
};

window.onload = init;