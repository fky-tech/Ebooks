import Library from "../Models/libraryModel.js";

export const addLibrary = async (req, res, next) => {
    const { libraryName, image, numOfBooks, description, location, books } = req.body;
    const formattedBook = JSON.stringify(books, null, 2);

    try {
        const library = new Library(libraryName, image, numOfBooks, description, location, formattedBook);
        const libraryRes = await library.addLibraryToDb();
        if(!libraryRes)
            res.status(404).json({ success: false, message: "Error in adding the library" });
        res.status(200).json({ success: true, message: "Library added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const viewLibraries = async(req, res, next) => {
    try {
        const library = new Library();
        const libraryRes = await library.getLibraries();
        if (!libraryRes || libraryRes[0].length === 0)
            req.status(404).json({ success: false, message: "Library not found" });

        const libraryData = libraryRes[0][0];
        res.status(200).json({ success: true, message: "Library fetched successfully", data: libraryData });
    } catch (error) {
        console.log(error);
        res.status(200).json({ success: false, message: "Internal server error" });
    }
}

export const viewLibraryByID = async (req, res, next) => {
    const id = req.params.id;

    try {
        const library = new Library();
        const libraryRes = await library.getLibraryByID(id);
        if (!libraryRes || libraryRes[0].length === 0)
            res.status(404).json({ success: false, message: "Library not found" });

        const libraryData = libraryRes[0][0];
        res.status(200).json({ success: true, message: "Library fetched successfully", data: libraryData });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const updateLibrary = async (req, res, next) => {
    const { libraryName, image, numOfBooks, description, location, books, olderLibraryName } = req.body;
    const formattedBook = JSON.stringify(books, null, 2);

    try {
        const library = new Library(libraryName, image, numOfBooks, description, location, formattedBook);
        const updateRes = await library.putLibrary(olderLibraryName);
        if(!updateRes)
            res.status(404).json({ success: false, message: "error in updating the library" });
        res.status(200).json({ success: true, message: "Library Updated Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const deleteLibrary = async (req, res, next) => {
    const { libraryName } = req.body;

    try {
        const library = new Library();
        const deleteRes = await library.deleteLibraryFromDb(libraryName);
        if(!deleteRes)
            res.status(404).json({ success: false, message: "Error in deleting the library" });
        res.status(200).json({ success: true, message: "Library deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const searchLibraryByName = async (req, res, next) => {
    const { libraryName } = req.body;

    try {
        const library = new Library();
        const searchRes = await library.fetchLibraryByName(libraryName);
        if(!searchRes)
            res.status(404).json({ success: false, message: "Error in finding the library" });
        
        const searchData = searchRes[0][0]
        res.status(200).json({ success: true, message: "Library fetched successfully", data: searchData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

// export const addBookToLibrary = async (req, res, next) => {
//     const { books, libraryName } = req.body;
//     const formattedBook = JSON.stringify(books, null, 2);

//     try {
//         const library = new Library(formattedBook);
//         const libraryRes = await library.insertBookToLibrary(libraryName);
//         if(!libraryRes)
//             res.status(404).json({ success: false, message: "Error in adding books to library" });
//         res.status(200).json({ success: true, message: "Books added successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// }