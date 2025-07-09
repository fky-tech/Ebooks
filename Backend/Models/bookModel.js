import mySqlConnection from "../Config/db.js";

class Book {
    #bookTitle;
    #authorName;
    #img
    #description;
    #publisher;
    #publishedDate;
    #language;
    #genre;
    #numOfPages;
    #price;
    #fileType;
    #bookRate;
    #file;

    constructor(bookTitle, authorName, img, description, publisher, publishedDate, language, genre, numOfPages, price, fileType, bookRate, file) {
        this.#bookTitle = bookTitle;
        this.#authorName = authorName;
        this.#img = img;
        this.#description = description;
        this.#publisher = publisher;
        this.#publishedDate = publishedDate;
        this.#language = language;
        this.#genre = genre;
        this.#numOfPages = numOfPages;
        this.#price = price;
        this.#fileType = fileType;
        this.#bookRate = bookRate;
        this.#file = file;
    }

    async addBookToDb() {
        const addSqlQuery = `Insert into books (book_title, author_name, img, description, publisher, published_date, language, genre, num_of_pages, price, file_type, book_rate, file)
        values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        try {
            const addSqlResult = await mySqlConnection.query(addSqlQuery, [
                this.#bookTitle,
                this.#authorName,
                this.#img,
                this.#description,
                this.#publisher,
                this.#publishedDate,
                this.#language,
                this.#genre,
                this.#numOfPages,
                this.#price,
                this.#fileType,
                this.#bookRate,
                this.#file
            ]);

            if (!addSqlResult)
                console.log("Result not found");
            return addSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    async getBooks() {
        const getSqlQuery = "Select * from books";

        try {
            const getSqlData = await mySqlConnection.query(getSqlQuery);
            if (!getSqlData)
                console.log("Result not found");
            return [getSqlData];
        } catch (error) {
            console.log(error);
        }
    }

    async getBookByID(id) {
        const getSqlQuery = "Select * from books where book_id=?";

        try {
            const getSqlData = await mySqlConnection.query(getSqlQuery, id);
            if (!getSqlData)
                console.log("Result not found");
            return getSqlData;
        } catch (error) {
            console.log(error);
        }
    }

    async putBook(olderAuthorName) {
        // use author_id to update the book
        const updateSqlQuery = `Update books set book_title=?, author_name=?, img=?, description=?, publisher=?, published_date=?, language=?, genre=?, num_of_pages=?, 
        price=?, file_type=?, book_rate=?, file=? where author_name=?`;

        try {
            const updateSqlResult = await mySqlConnection.query(updateSqlQuery, [
                this.#bookTitle,
                this.#authorName,
                this.#img,
                this.#description,
                this.#publisher,
                this.#publishedDate,
                this.#language,
                this.#genre,
                this.#numOfPages,
                this.#price,
                this.#fileType,
                this.#bookRate,
                this.#file,
                olderAuthorName
            ])
            if(!updateSqlResult)
                console.log("Result not found");
            return updateSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteBookFromDb(authorName) {
        // use author_id to delete the book
        const deleteSqlQuery = "Delete from books where author_name=?";
        
        try {
            const deleteSqlResult = await mySqlConnection.query(deleteSqlQuery, authorName);
            if(!deleteSqlResult)
                console.log("Result not found");
            return deleteSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchBookByTitle(bookTitle) {
        const fetchSqlQuery = "Select * from books where book_title=?";
        
        try {
            const fetchSqlResult = await mySqlConnection.query(fetchSqlQuery, bookTitle);
            if(!fetchSqlResult)
                console.log("Result not found");
            return fetchSqlResult;
        } catch (error) {
            console.log(error);
        }
    }
}

export default Book;