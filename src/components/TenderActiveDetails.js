import React, {useEffect, useState} from "react";
import {useParams, useNavigate, NavLink} from "react-router-dom";
import {fetchTender} from "../api/TendersAPI";

export const TenderActiveDetails = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ tender, setTender ] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTender(params.id)
            .then((t) => {
                if(t.length === 0) {
                    setIsLoaded(true);
                    return;
                } else if(new Date(t[0].EndDate) < new Date()) {
                    navigate('/przetargi/zakonczone/' + t[0].Id);
                }
                setTender(t[0]);
                setIsLoaded(true);
            });
    }, [navigate, params.id]);

    if(!isLoaded) {
        return <>Ładowanie...</>;
    } else if(tender.length === 0) {
        return <div className='wrong-id-error'>Przetarg o danym id nie istnieje!</div>;
    } else {
        return (
            <div className='active-tender-details-page'>
                <h1 className='tender-name'>{tender.Name}</h1>
                <h3 className='owner-title'>Zgłaszający przetarg</h3>
                <p className='owner'>{tender.Owner}</p>
                <h3 className='description-title'>Opis</h3>
                <p className='description'>{tender.Description}</p>
                <h3 className='start-date-title'>Data rozpoczęcia przetargu</h3>
                <p className='start-date'>{tender.StartDate.slice(0, -5).replace('T', ' ')}</p>
                <h3 className='end-date-title'>Data zakończenia przetargu</h3>
                <p className='end-date'>{tender.EndDate.slice(0, -5).replace('T', ' ')}</p>
                <NavLink to={`/oferty/${tender.Id}`} className='add-offer'>Dodaj ofertę</NavLink>
            </div>
        );
    }
};