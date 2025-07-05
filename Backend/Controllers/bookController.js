import Book from "../Models/bookModel.js";

export const addBook = async(req, res, next) => {
    const { bookTitle, authorName, description, publisher, publishedDate, language, numOfPages, price, fileType, bookRate, file } = req.body;

    try {
        const book = new Book(bookTitle, authorName, description, publisher, publishedDate, language, numOfPages, price, fileType, bookRate, file);
        const bookRes = await book.addBookToDb();
        if (!bookRes)
            res.status(404).json({ success: false, message: "Error in adding books" });
        res.status(200).json({ success: true, message: "Book added successfully" });
    } catch (error) {
        console.log("error");
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const viewBooks = async(req, res, next) => {
    try {
        const book = new Book();
        const bookRes = await book.getBooks();
        if (!bookRes || bookRes[0].length === 0)
            req.status(404).json({ success: false, message: "Books not found" });

        const bookData = bookRes[0][0];
        res.status(200).json({ success: true, message: "Books fetched successfully", data: bookData });
    } catch (error) {
        console.log(error);
        res.status(200).json({ success: false, message: "Internal server error" });
    }
}

export const updateBook = async (req, res, next) => {
    const { bookTitle, authorName, description, publisher, publishedDate, language, numOfPages, price, fileType, bookRate, file, olderAuthorName } = req.body;

    try {
        const book = new Book(bookTitle, authorName, description, publisher, publishedDate, language, numOfPages, price, fileType, bookRate, file);
        const updateRes = await book.putBook(olderAuthorName);
        if(!updateRes)
            res.status(404).json({ success: false, message: "error in updating the book" });
        res.status(200).json({ success: true, message: "Book Updated Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const deleteBook = async (req, res, next) => {
    const { authorName } = req.body;

    try {
        const book = new Book();
        const deleteRes = await book.deleteBookFromDb(authorName);
        if(!deleteRes)
            res.status(404).json({ success: false, message: "Error in deleting the book" });
        res.status(200).json({ success: true, message: "Book deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const searchBookByTitle = async (req, res, next) => {
    const { bookTitle } = req.body;

    try {
        const book = new Book();
        const searchRes = await book.fetchBookByTitle(bookTitle);
        const searchData = searchRes[0][0]
        if(!searchRes)
            res.status(404).json({ success: false, message: "Error in finding the book" });
        res.status(200).json({ success: true, message: "Book fetched successfully", data: searchData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}