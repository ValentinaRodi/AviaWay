import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Avia() {
    const navigate = useNavigate();

    const [infoEnterOnCity, setInfoEnterOnCity] = useState('');
    const [infoEnterFromCity, setInfoEnterFromCity] = useState('');
    const [infoEnterOnDate, setInfoEnterOnDate] = useState('');
    const [infoEnterFromDate, setInfoEnterFromDate] = useState('');

    function handleUserChangeOnCity(event: React.FormEvent<HTMLInputElement>) {
        const value = (event.target as HTMLTextAreaElement).value;
        setInfoEnterOnCity(value);
    }

    function handleUserChangeFromCity(event: React.FormEvent<HTMLInputElement>) {       
        const value = (event.target as HTMLTextAreaElement).value;
        setInfoEnterFromCity(value);
    }

    function handleUserChangeOnDate(event: React.FormEvent<HTMLInputElement>) {       
        const value = (event.target as HTMLTextAreaElement).value;
        setInfoEnterOnDate(value);
    }

    function handleUserChangeFromDate(event: React.FormEvent<HTMLInputElement>) {        
        const value = (event.target as HTMLTextAreaElement).value;
        setInfoEnterFromDate(value);
    }
   
    function handlerSubmitAvia(event: { preventDefault: () => void; }) {
           
        if (infoEnterOnCity !== '' && infoEnterFromCity !== '' && infoEnterOnDate !== '') {
            navigate('./info', 
            {state:{
                infoEnterOnCity: infoEnterOnCity, 
                infoEnterFromCity: infoEnterFromCity,
                infoEnterOnDate: infoEnterOnDate,
                infoEnterFromDate: infoEnterFromDate,
            }})  
        } else {
            event.preventDefault(); 
        };
    }

    if((infoEnterOnCity !== '' && infoEnterFromCity !== '' && infoEnterOnDate !== '')) {
        const aviaBtn = document.querySelector('.avia__btn');
        aviaBtn?.classList.add('avia__btn_active')
    }
   
    return (
        <form className="avia">
            <div className="avia__info">
                <div className="info__block">
                    <label className="avia__text">????????????</label>
                    <input name='onCity' type="text" required placeholder="?????????? ????????????" className="avia__input" onChange={handleUserChangeOnCity}/>
                </div>
                <div className="info__block">
                    <label className="avia__text">????????</label>
                    <input id='fromCity' type="text" required placeholder="?????????? ??????????????" className="avia__input" onChange={handleUserChangeFromCity}/>
                </div>
                <div>
                    <label className="avia__text">????????</label>
                    <input id="onDate" type="date" required placeholder="????.????.????" className="avia__input avia__input_light" onChange={handleUserChangeOnDate}/>
                </div>
                <div className="avia__line"></div>
                <div>
                    <label className="avia__text">??????????????</label>
                    <input id="fromDate" type="date" placeholder="????.????.????" className="avia__input avia__input_light" onChange={handleUserChangeFromDate}/>
                </div>
            </div>
            <div className="avia__submit">
                <button type="button" className="avia__btn" onClick={handlerSubmitAvia}>?????????? ????????????</button>
            </div>
        </form>
    )
}