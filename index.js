const gridContents = document.querySelector('.content');
const size = document.querySelector('.size');
// console.log(size);

const options = document.querySelectorAll('.option');

options.forEach((e)=>{
    e.addEventListener('click',()=>{
        let value = e.nextElementSibling.textContent;
        if (value === 'auto'){
            gridContents.classList.remove('max-content');
            gridContents.classList.remove('min-content');
            gridContents.classList.remove('fifty');
            gridContents.classList.remove('hundred');
            gridContents.classList.remove('thirty');
            gridContents.classList.toggle(value); 
            size.textContent = value;
        }
        else if (value === 'max-content'){
            gridContents.classList.remove('auto');
            gridContents.classList.remove('min-content');
            gridContents.classList.remove('fifty');
            gridContents.classList.remove('hundred');
            gridContents.classList.remove('thirty');
            gridContents.classList.toggle(value); 
            size.textContent = value;
        }
        else if (value === 'min-content'){
            gridContents.classList.remove('auto');
            gridContents.classList.remove('max-content');
            gridContents.classList.remove('fifty');
            gridContents.classList.remove('hundred');
            gridContents.classList.remove('thirty');
            gridContents.classList.toggle(value); 
            size.textContent = value;
        }
        else if (value === '50px'){
            gridContents.classList.remove('max-content');
            gridContents.classList.remove('min-content');
            gridContents.classList.remove('fifty');
            gridContents.classList.remove('hundred');
            gridContents.classList.remove('thirty');
            gridContents.classList.toggle('fifty'); 
            size.textContent = value;
        }
        else if (value === '100px'){
            gridContents.classList.remove('auto');
            gridContents.classList.remove('max-content');
            gridContents.classList.remove('min-content');
            gridContents.classList.remove('fifty');
            gridContents.classList.remove('thirty');
            gridContents.classList.toggle('hundred'); 
            size.textContent = value;
        }
        else if (value === '30%'){
            gridContents.classList.remove('auto');
            gridContents.classList.remove('max-content');
            gridContents.classList.remove('min-content');
            gridContents.classList.remove('fifty');
            gridContents.classList.remove('hundred');
            gridContents.classList.toggle('thirty'); 
            size.textContent = value;

        }
    });
});
