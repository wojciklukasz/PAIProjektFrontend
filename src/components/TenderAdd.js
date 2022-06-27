import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const TenderAdd = () => {
    const [ name, setName ] = useState('');
    const [ owner, setOwner ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ budget, setBudget ] = useState(1);
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const navigate = useNavigate();

    const HandleSubmit = async(e) => {
        e.preventDefault();

        fetch('http://localhost:3051/api/v1/tender', {
            method: "POST",
            body: JSON.stringify({
                Name: name,
                Owner: owner,
                Description: description,
                Budget: budget,
                StartDate: startDate,
                EndDate: endDate
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
                    navigate('/przetargi/dodaj/sukces');
                }
            });
    };

    return (
        <div className='add-offer-page'>
            <form className='offer-form' onSubmit={HandleSubmit}>
                <h3 className='owner-title'>Przedmiot przetargu</h3>
                <input
                    className='name'
                    type='text'
                    value={name}
                    placeholder='Przedmiot przetargu'
                    onChange={(v) => setName(v.target.value)}
                    required
                />
                <h3 className='owner-title'>Zgłaszający przetarg</h3>
                <input
                    className='owner'
                    type='text'
                    value={owner}
                    placeholder='Zgłaszający przetarg'
                    onChange={(v) => setOwner(v.target.value)}
                    required
                />
                <h3 className='owner-title'>Opis</h3>
                <input
                    className='description'
                    type='text'
                    value={description}
                    placeholder='Opis'
                    onChange={(v) => setDescription(v.target.value)}
                    required
                />
                <h3 className='owner-title'>Budżet</h3>
                <input
                    className='price'
                    type='number'
                    value={budget}
                    placeholder='Budżet'
                    onChange={(v) => setBudget(parseInt(v.target.value))}
                    min='1'
                    required
                />
                <h3 className='owner-title'>Data rozpoczęcia</h3>
                <input
                    className='start-date'
                    type='datetime-local'
                    value={startDate}
                    placeholder='Data rozpoczęcia'
                    onChange={(v) => setStartDate(v.target.value)}
                    required
                />
                <h3 className='owner-title'>Data zakończenia</h3>
                <input
                    className='end-date'
                    type='datetime-local'
                    value={endDate}
                    placeholder='Data zakończenia'
                    onChange={(v) => setEndDate(v.target.value)}
                    required
                />
                <br/><br/>
                <input type="submit" value="Ogłoś przetarg" className='submit-button'/>
            </form>
            <div className={'error-message'}><h3>{errorMessage}</h3></div>
        </div>
    );
}