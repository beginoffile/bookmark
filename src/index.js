import './styles.css';
import './sw.js';

const modalContainer = document.getElementById('modal-container');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = {};


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

// deleteBookmark = deleteBookmark.bind(this);

// let thisdeleteBookmark = deleteBookmark.bind(this);
window.deleteBookmark = deleteBookmark;

// Build Bookmars Form
function buildBookmarks(){
    bookmarksContainer.textContent = '';
    
    Object.keys(bookmarks).forEach((id) => {
        
        const {name, url} = bookmarks[id];
        
        const item = document.createElement('div');
        item.classList.add('item');
        
        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas','fa-times');
        closeIcon.setAttribute('title','Delete Bookmark');

        closeIcon.setAttribute('onclick',`deleteBookmark('${id}')`);
        // closeIcon.addEventListener('click',()=>{
        //     deleteBookmark(url);
        // });

        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');

        const favicon = document.createElement('img');
        favicon.setAttribute('src',`https://s2.googleusercontent.com/s2/favicons?domain=${url}`);
        favicon.setAttribute('alt', 'Favicon');

        const link = document.createElement('a');
        link.setAttribute('href',`${url}`);
        link.setAttribute('target','_blank');
        link.textContent = name;

        linkInfo.append(favicon,link);
        item.append(closeIcon, linkInfo);
        bookmarksContainer.appendChild(item);


    })
}

function fetchBookmarks(e){
    if (localStorage.getItem('bookmarks')){
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    }
    buildBookmarks();
}

function deleteBookmark(id){

    if (bookmarks[id]) {
		delete bookmarks[id]
	}
    
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks();
}


// Handle Data from Form
function storeBookmark(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (urlValue && !urlValue.includes('http://') && !urlValue.includes('https://')){
        urlValue = `https://${urlValue}`;
        
    }
    
    if (!validate(nameValue,urlValue)){
        return false;
    }

    const bookmark ={
        name: nameValue,
        url: urlValue,
    };
    
    bookmarks[urlValue] = bookmark;
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    buildBookmarks();

    
    bookmarkForm.reset();
    websiteNameEl.focus();

}



// Event Listener
bookmarkForm.addEventListener('submit',storeBookmark);

document.addEventListener('DOMContentLoaded', function() {
    fetchBookmarks();
 }, false);
