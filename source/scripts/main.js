const Hogan = require('hogan.js')
let storedLibrary = localStorage.getItem('books')
if(!storedLibrary)
{
    storedLibrary = new Array()
    localStorage.setItem('counter',0)
}
else
{
    storedLibrary = JSON.parse(storedLibrary)
}

console.log(storedLibrary)

const library = Array.from(storedLibrary)

const rowTemplate = Hogan.compile(`
<tr>
<td scope="col">{{id}}</td>
<td scope="col">{{name}}</td>
<td scope="col">{{author}}</td>
<td scope="col">{{year}}</td>
<td scope="col">{{publisher}}</td>
<td scope="col">{{pages}}</td>
<td scope="col">{{count}}</td>
<td scope="col"><button onmousedown="DeleteBook({{id}})"><i class="small material-icons">clear</i></button><button onmousedown="EditBook({{id}})"><i class="small material-icons">edit</i></button></td></tr>`)

RenderBooks = function()
{
    let display = ''
    library.forEach(i=>{
        display += rowTemplate.render(i)
    })
    document.querySelector('#books-list').innerHTML = display
}
RenderBooks()
let bookForEditId = -1
AddBook = function (event)
{
    event.preventDefault()
    let id 
    if(bookForEditId===-1)
    {
       id = localStorage.getItem('counter')
    }
    else
    {
        id = bookForEditId
    }
    
    let name = event.target['book-name'].value
    let author = event.target['book-author'].value
    let year = event.target['book-year'].value
    let publisher = event.target['book-publisher'].value
    let pages = event.target['book-pages'].value
    let count = event.target['book-count'].value
    let book = {id,name,author,year,publisher,pages,count}
    event.target.reset()
    console.log(book)
    
    //save
    if(bookForEditId!==-1)
    {
        library[library.indexOf(library.filter(i=>i.id == bookForEditId)[0])] = book
        bookForEditId =-1
    }
    else
    {
        library.push(book)
        localStorage.setItem('counter',++id)
    }

    localStorage.setItem('books',JSON.stringify(library))
    RenderBooks()
}

DeleteBook = function(bookId)
{
    library.splice(library.indexOf(library.filter(i=>i.id == bookId)[0]),1)
    localStorage.setItem('books',JSON.stringify(library))
    RenderBooks()
}
EditBook = function(bookId)
{
    bookForEditId = bookId
    let book = library.filter(i=>i.id == bookId)[0]
    let form = document.querySelector('#add-book-form')
    form['book-name'].value = book.name
    form['book-author'].value = book.author
    form['book-year'].value = book.year
    form['book-publisher'].value = book.count
    form['book-pages'].value = book.pages
    form['book-count'].value = book.count
    M.updateTextFields();
    localStorage.setItem('books',JSON.stringify(library))
    RenderBooks()
}
ClearLocalStorage = function()
{
    localStorage.clear()
}