const gridContents = document.querySelector('.content');
const size = document.querySelector('.size');

const options = document.querySelectorAll('.option');

function clearClassList(){
    gridContents.classList.remove('auto','max-content','min-content','fifty','hundred','thirty');
}

options.forEach((e)=>{
    e.addEventListener('click',()=>{
        let value = e.nextElementSibling.textContent;
        if (value === 'auto'){
            clearClassList();
            gridContents.classList.toggle(value); 
            size.textContent = value;
        }
        else if (value === 'max-content'){
            clearClassList();
            gridContents.classList.toggle(value); 
            size.textContent = value;
        }
        else if (value === 'min-content'){
            clearClassList();
            gridContents.classList.toggle(value); 
            size.textContent = value;
        }
        else if (value === '50px'){
            clearClassList();
            gridContents.classList.toggle('fifty'); 
            size.textContent = value;
        }
        else if (value === '100px'){
            clearClassList();
            gridContents.classList.toggle('hundred'); 
            size.textContent = value;
        }
        else if (value === '30%'){
            clearClassList();
            gridContents.classList.toggle('thirty'); 
            size.textContent = value;

        }
    });
});


