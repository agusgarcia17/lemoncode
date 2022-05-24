//Read Books

const books: Array<{ title: string, isRead: boolean }> = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true}
];
    

function isBookRead(books:Array<{ title: string, isRead: boolean }>, titleToSearch: string) {
 
    let isRead : boolean = false;
    books.forEach(book => {
        if(book.title === titleToSearch) {
            isRead = book.isRead;
        }
    });
    return isRead;
}
     
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
     