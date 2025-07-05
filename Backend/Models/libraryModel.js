import mySqlConnection from "../Config/db.js";

class Library {
    #libraryName;
    #image;
    #numOfBooks;
    #description;
    #location;
    #books;

    constructor(libraryName, image, numOfBooks, description, location, books) {
        this.#libraryName = libraryName;
        this.#image = image;
        this.#numOfBooks = numOfBooks;
        this.#description = description;
        this.#location = location;
        this.#books = books;
    }

    async addLibraryToDb() {
        const addSqlQuery = `Insert into libraries (library_name, img, num_of_books, description, location, books)
        values(?, ?, ?, ?, ?, ?)`;

        try {
            const addSqlResult = await mySqlConnection.query(addSqlQuery, [
                this.#libraryName,
                this.#image,
                this.#numOfBooks,
                this.#description,
                this.#location,
                this.#books
            ]);

            if (!addSqlResult)
                console.log("Result not found");
            return addSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    async getLibraries() {
        const getSqlQuery = "Select * from libraries";

        try {
            const getSqlData = await mySqlConnection.query(getSqlQuery);
            if (!getSqlData)
                console.log("Result not found");
            return getSqlData;
        } catch (error) {
            console.log(error);
        }
    }

    async putLibrary(olderLibraryName) {
        // use library_id to update the library
        const updateSqlQuery = `Update libraries set library_name=?, img=?, num_of_books=?, description=?, location=?, books=?
        where library_name=?`;

        try {
            const updateSqlResult = await mySqlConnection.query(updateSqlQuery, [
                this.#libraryName,
                this.#image,
                this.#numOfBooks,
                this.#description,
                this.#location,
                this.#books,
                olderLibraryName
            ]);

            if (!updateSqlResult)
                console.log("Result not found");
            return updateSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteLibraryFromDb(libraryName) {
        // use library_id to delete the library
        const deleteSqlQuery = "Delete from libraries where library_name=?";
        
        try {
            const deleteSqlResult = await mySqlConnection.query(deleteSqlQuery, libraryName);
            if(!deleteSqlResult)
                console.log("Result not found");
            return deleteSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchLibraryByName(libraryName) {
        const searchSqlQuery = "Select * from libraries where library_name=?"

        try {
            const searchSqlResult = await mySqlConnection.query(searchSqlQuery, libraryName);
            if(!searchSqlResult)
                console.log("Result not found");
            console.log(searchSqlResult);
            return searchSqlResult;
        } catch (error) {
            console.log(error);
        }
    }

    // async insertBookToLibrary(libraryName) {
    //     const insertSqlQuery = "Update libraries set books=? where library_name=?";
    //     try {
    //         const insertSqlResult = await mySqlConnection.query(insertSqlQuery, [ this.#books, libraryName]);
    //         if(!insertSqlResult)
    //             console.log("Result not found");
    //         return insertSqlResult;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export default Library;