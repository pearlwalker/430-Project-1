const handleResponse = async (response) => {

};

const sendFetch = async (url) => {

};

const init = () => {
    const collapsibles = document.querySelectorAll('.collapsible');
const requestForm = document.querySelectorAll('.requestForm');
    collapsibles.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log(`Clicked ${button} at ${index}`)
            const content = requestForm[index];
            console.log(`${content}`);
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