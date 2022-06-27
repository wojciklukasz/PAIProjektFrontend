import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {fetchTender} from "../api/TendersAPI";
import {fetchOffersForTender} from "../api/OffersAPI";

export const TenderFinishedDetails = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ tender, setTender ] = useState([]);
    const [ offers, setOffers ] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTender(params.id)
            .then((t) => {
                if(t.length === 0) {
                    setIsLoaded(true);
                    return;
                } else if(new Date(t[0].EndDate) > new Date()) {
                    navigate('/przetargi/' + t[0].Id);
                }
                setTender(t[0]);
                fetchOffersForTender(t[0].Id)
                    .then((o) => {
                        setOffers(o);
                        setIsLoaded(true);
                    });
            });
    }, [navigate, params.id]);

    if(!isLoaded) {
        return <>Ładowanie...</>;
    } else if(tender.length === 0) {
        return <div className='wrong-id-error'>Przetarg o danym id nie istnieje!</div>;
    } else if(offers.length === 0) {
        return (
            <div className='active-tender-details-page'>
                <h1 className='tender-name'>{tender.Name}</h1>
                <h3 className='owner-title'>Zgłaszający przetarg</h3>
                <p className='owner'>{tender.Owner}</p>
                <h3 className='description-title'>Opis</h3>
                <p className='description'>{tender.Description}</p>
                <h1 className='no-offers-error'>Przetarg nie został rozstrzygnięty</h1>
            </div>
        );
    } else {
        return (
            <div className='active-tender-details-page'>
                <h1 className='tender-name'>{tender.Name}</h1>
                <h3 className='owner-title'>Zgłaszający przetarg</h3>
                <p className='owner'>{tender.Owner}</p>
                <h3 className='description-title'>Opis</h3>
                <p className='description'>{tender.Description}</p>
                <table className='offers-table'>
                    <thead className='table-head'>
                    <tr className='table-titles'>
                        <th className='owner-title'>Wykonawca</th>
                        <th className='price-title'>Cena</th>
                    </tr>
                    </thead>
                    <tbody className='table-body'>
                    {offers.map((offer) => (
                        <tr className='offer' key={offer.Id}>
                            <th className='owner'>{offer.Owner}</th>
                            <th className='price'>{offer.Price}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
};