import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BOOK_LIST_URL } from "../constants";

const BookDetailsPage = () => {
    const params = useParams();
    const [bookDetails, updateBookDetails] = useState();

    useEffect(() => {
        async function fetchData() {
            const bookDetailsResponse = await fetch(BOOK_LIST_URL + '/' + params.id)
            const bookDetailsJsonData = bookDetailsResponse.json();
            updateBookDetails(bookDetailsJsonData);
        }

        fetchData();
    }, [params])

    return <div>{bookDetails &&
    <div>
        <img src={bookDetails.cover} alt ={bookDetails.title} />
        <div> 
            <button onClick={() => window.open(bookDetails.website)} >Open website</button>
        </div>
        </div>
    }
    </div>
}

export default BookDetailsPage;
