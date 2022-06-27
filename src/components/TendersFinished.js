import React, {useEffect, useState} from "react";
import {fetchPastTenders} from "../api/TendersAPI";
import {NavLink} from "react-router-dom";

export const TendersFinished = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ tenders, setTenders ] = useState([]);

    useEffect(() => {
        fetchPastTenders()
            .then((t) => {
                setTenders(t);
                setIsLoaded(true);
            });
    }, []);

    if(!isLoaded) {
        return <>Ładowanie...</>;
    } else if(tenders.length === 0) {
        return <div className='no-finished-tenders-error'>Brak zakończonych przetargów</div>
    } else {
        return (
            <div className='finished-tenders-page'>
                <h1 className='title'>Zakończone przetargi</h1>
                <ul className='tenders-list'>
                    {tenders.map((tender) => (
                        <li key={tender.Id} className='tender'>
                            <NavLink to={`${tender.Id}`} className='tender-name'>{tender.Name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};