import './styles.css';

const modalContainer = document.getElementById('modal-container');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];


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

// Build Bookmars Form
function buildBookmarks(){
    bookmarks.forEach((bookmar)=>{
        const {name, url} = bookmar;
        
        const item = document.createElement('div');
        item.classList.add('item');
        
        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas','fa-times');
        closeIcon.setAttribute('title','Delete Bookmark');
        closeIcon.setAttribute('onclick',`deleteBookmark('${url}')`);

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

function deleteBookmark(url){
    bookmarks.forEach((bookmark,i)=>{
        if (bookmark.url ===url){
            bookmarks.splice(i,1);
        }
    })
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
        console.log(urlValue)
    }
    
    if (!validate(nameValue,urlValue)){
        return false;
    }

    const bookmark ={
        name: nameValue,
        url: urlValue,
    };

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    buildBookmarks();

    console.log(bookmarks);
    bookmarkForm.reset();
    websiteNameEl.focus();

}



// Event Listener
bookmarkForm.addEventListener('submit',storeBookmark);

fetchBookmarks();