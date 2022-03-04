import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BOOK_LIST_URL } from "../constants";

const BookListPage = () => {


    const [bookList, updateBookList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const bookListResponse = await fetch(BOOK_LIST_URL);
            const bookListJsonData = await bookListResponse.json();
            console.log("Printing bookListJsonData", bookListJsonData);
            updateBookList(bookListJsonData);
        }

        fetchData();

    }, [])

    return <ul className="list-book">
        {bookList.map(book => {
            return <li className="book">
                <h2 className="book-title">{"Title: "+ book.title}</h2>
                <p className="book-author">{"Author: "+ book.author}</p>
                <img src={book.cover} className="book-thumb" title={book.title} onClick ={() =>history.push(`/bookdetails/${book.id}`)}></img>
                <p className="book-desc">{book.description}</p>
                </li>
        }
        )}</ul>

};

export default BookListPage;