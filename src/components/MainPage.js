

import React from "react";

export const MainPage = () => {
    return (
        <div className='main-page'>
            <h1>
                <center>
                    System ogłaszania przetargów
                </center>
            </h1>
            <p className='description' style={{paddingLeft: 10}}>
                System pozwala na ogłoszenie przetargów (zakładka Dodaj przetarg) przez dowolną instytucję. <br/>
                W zakładce Lista przetargów znajdują się aktualnie trwające przetargi z możliwością zgłoszenia oferty wykonania, również przez dowolny podmiot. <br/>
                Zakładka Zakończone przetargi pozwala przejrzeć minione przetargi i ich wynik.
            </p>
        </div>
    );
}