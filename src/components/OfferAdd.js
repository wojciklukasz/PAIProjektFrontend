import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const OfferAdd = () => {
    const [ owner, setOwner ] = useState('');
    const [ price, setPrice ] = useState(1);
    const [ errorMessage, setErrorMessage ] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    const HandleSubmit = async(e) => {
        e.preventDefault();

        fetch('http://localhost:3051/api/v1/offer/' + params.id, {
            method: "POST",
            body: JSON.stringify({
                Owner: owner,
                Price: price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if(res.status !== 200) {
                    res.json().then((r) => {
                        setErrorMessage(r.message);
                    });
                } else {
                    navigate('/oferty/sukces');
                }
            });
    };

    return (
        <div className='add-offer-page'>
            <form className='offer-form' onSubmit={HandleSubmit}>
                <h3 className='owner-title'>Zgłaszający ofertę</h3>
                <input
                    className='owner'
                    type='text'
                    value={owner}
                    placeholder='Zgłaszający ofertę'
                    onChange={(v) => setOwner(v.target.value)}
                    required
                />
                <h3 className='owner-title'>Cena</h3>
                <input
                    className='price'
                    type='number'
                    value={price}
                    placeholder='Cena'
                    onChange={(v) => setPrice(parseInt(v.target.value))}
                    min='1'
                    required
                />
                <br/><br/>
                <input type="submit" value="Zgłoś ofertę" className='submit-button'/>
            </form>
            <div className={'error-message'}><h3>{errorMessage}</h3></div>
        </div>
    );
}