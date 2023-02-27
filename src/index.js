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


// Handle Data from Form
function storeBookmark(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    const urlValue = websiteUrlEl.value;
    console.log(nameValue,urlValue);
}



// Event Listener
bookmarkForm.addEventListener('submit',storeBookmark);