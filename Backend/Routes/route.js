import adminLogin from "../Controllers/adminController.js";
import { addBook, deleteBook, searchBookByTitle, updateBook, viewBooks, viewBooksByID } from "../Controllers/bookController.js";
import { addLibrary, deleteLibrary, searchLibraryByName, updateLibrary, viewLibraries, viewLibraryByID } from "../Controllers/libraryController.js";
import { deleteProfile, registerUser, updateProfile, userLogin, viewProfile } from "../Controllers/userController.js";

import express from 'express'

const router = express.Router();

router.get('/adminLogin', adminLogin);
router.post('/userLogin', userLogin);
router.post('/registerUser', registerUser);
router.put('/updateProfile', updateProfile);
router.delete('/deleteProfile', deleteProfile);
router.get('/viewProfile', viewProfile);

router.post('/addBook', addBook);
router.get('/getBooks', viewBooks);
router.get('/getBookById/:id', viewBooksByID)
router.put('/updateBook', updateBook);
router.delete('/deleteBook', deleteBook);
router.get('/searchBookByTitle', searchBookByTitle);

router.post('/addLibrary', addLibrary);
router.get('/getlibraries', viewLibraries);
router.get('/getLibraryByID/:id', viewLibraryByID);
router.put('/updateLibrary', updateLibrary);
router.delete('/deleteLibrary', deleteLibrary);
router.get('/searchLibraryByName', searchLibraryByName);
// router.put('/addBookToLibrary', addBookToLibrary);

export default router;