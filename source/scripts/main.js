const Hogan = require('hogan.js')
const library = localStorage.getItem('books')
const rowTemplate = Hogan.compile(`
<th scope="col">{{id}}</th>
<th scope="col">{{name}}</th>
<th scope="col">{{author}}</th>
<th scope="col">{{year}}</th>
<th scope="col">{{publisher}}</th>
<th scope="col">{{pages}}</th>
<th scope="col">{{count}}</th>
<th scope="col">{{edit}}</th>`)




AddBook = function (event)
{
    event.preventDefault()
    console.log(event)


}