import './styles.css';

const modalContainer = document.getElementById('modal-container');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');


function ShowModal(){
    modalContainer.classList.add('show-modal');
    websiteNameEl.focus();
}

modalShow.addEventListener('click',ShowModal);
modalClose.addEventListener('click',()=> modalContainer.classList.remove('show-modal'));
window.addEventListener('click',(e)=>(e.target === modalContainer ? modalContainer.classList.remove('show-modal'):false));

// Validate form
function validate(nameValue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;    
    const regex = new RegExp(expression);
    console.log(regex);
    // if (urlValue.match(regex)){
    //     alert('match');
    // }


    if (!nameValue){
        alert('Please submit Name field');
        return false;
    }

    if (!urlValue){
        alert('Please submit Url field');
        return false;
    }

    
    if (!urlValue.match(regex)){
        alert('Please provide a valid web address');
        return false;
    }

    return true;
}


// Handle Data from Form
function storeBookmark(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (urlValue && !urlValue.includes('http://') && !urlValue.includes('https://')){
        urlValue = `https://${urlValue}`;
        console.log(urlValue)
    }
    console.log(nameValue,urlValue);
    if (!validate(nameValue,urlValue)){
        return false;
    }
}



// Event Listener
bookmarkForm.addEventListener('submit',storeBookmark);