import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo from '../img/logo.png';
import bag from '../img/bag.png';
import baggage from '../img/baggage.png';
import ellipse from '../img/Ellipse.png';
import line from '../img/Line.png';

export default function Info() {

  const location = useLocation();
  const cityTo = location.state.infoEnterOnCity;
  const cityFrom = location.state.infoEnterFromCity;
  const dateTo = location.state.infoEnterOnDate;
  const dateFrom = location.state.infoEnterFromDate;

  console.log(dateFrom)
  const [infoTime, setInfoTime] = useState(['09:20', '11:05']);
  const [btnTimeClass, setBtnTimeClass] = useState(['time__btn_active', 'time__btn', 'time__btn']);

  function handlerChouseTime0() {
    setInfoTime(['09:20', '11:05'])
  }

  function handlerChouseTime1() {
    setInfoTime(['10:20', '12:05'])
  }

  function handlerChouseTime2() {
    setInfoTime(['11:20', '13:05'])
  }

  useEffect(() => {
    handlerClickBtn();
  }, [btnTimeClass]);  

  function handlerClickBtn() {
    const buttonTime = document.querySelector<HTMLElement>('.info__time')! 
    buttonTime.addEventListener('click', (event) => {
        const idItem = +(event.target as HTMLElement).id   
        for (let index = 0; index < btnTimeClass.length; index++) {
          (index === idItem) ? btnTimeClass[index] = 'time__btn_active' : btnTimeClass[index] = 'time__btn';
        }
        setBtnTimeClass(btnTimeClass)     
    });
  }

  return (
    
    <div>
      {!dateFrom ? (
      <div className='info'>
      <div className='info__type'>
        <div className='type__non'>Невозвратный</div>
        <img src={logo} alt='logo' width='39px' height='39px'/>
        <p className='type__text'>S7 Airlines</p>
      </div>
      <div>
        <div className='trip__way'>
          <div className='way__info'>
            <p className='way__time'>{infoTime[0]}</p>
            <p className='way__to'>{cityTo}</p>
            <p className='way__to'>{dateTo}</p>
          </div>
          <div className='way'>
            <div className='way-line__text'>
              <p className='way__text'>SVO</p>
              <p className='way__text'>ROV</p>
            </div>
            <div className='way__line'>
              <img src={ellipse} alt='bag' width='8px' height='8px'/>
              <img className='line__img' src={line} alt='bag' width='265px' height='2px'/>
              <img src={ellipse} alt='bag' width='8px' height='8px'/>
            </div>
            <p className='way__text way__text_margin'>В пути 1 ч 55 мин</p>
          </div>
          <div className='way__info'>
            <p className='way__time'>{infoTime[1]}</p>
            <p className='way__to'>{cityFrom}</p>
            <p className='way__to'>{dateTo}</p>
          </div>
          <div className='info__img'>
            <img src={bag} alt='bag' width='20px' height='20px'/>
            <img src={baggage} alt='bag' width='20px' height='37px'/>
          </div>
        </div>
        <div className='info__time' onClick={handlerClickBtn}>
          <button id='0' className={btnTimeClass[0]} onClick={handlerChouseTime0}>
            09:20 <span className='btn__text_small'>- 11:05</span>
          </button>
          <button id='1' className={btnTimeClass[1]} onClick={handlerChouseTime1}>
            10:20 <span className='btn__text_small'>- 12:05</span>
          </button>
          <button id='2' className={btnTimeClass[2]}>
            11:20 <span className='btn__text_small' onClick={handlerChouseTime2}>- 13:05</span>
          </button>
        </div>
      </div>
      <div className='info__price'>
        <p>4 150 ₽</p>
      </div>
    </div> 
      ) : (
        <div className='info-big'>
          <div className='info info-big__block'>
            <div className='info__type'>
              <div className='type__non'>Невозвратный</div>
              <img src={logo} alt='logo' width='39px' height='39px'/>
              <p className='type__text'>S7 Airlines</p>
            </div>
            <div>
              <div className='trip__way'>
                <div className='way__info'>
                  <p className='way__time'>{infoTime[0]}</p>
                  <p className='way__to'>{cityTo}</p>
                  <p className='way__to'>{dateTo}</p>
                </div>
                <div className='way'>
                  <div className='way-line__text'>
                    <p className='way__text'>SVO</p>
                    <p className='way__text'>ROV</p>
                  </div>
                  <div className='way__line'>
                    <img src={ellipse} alt='bag' width='8px' height='8px'/>
                    <img className='line__img' src={line} alt='bag' width='265px' height='2px'/>
                    <img src={ellipse} alt='bag' width='8px' height='8px'/>
                  </div>
                  <p className='way__text way__text_margin'>В пути 1 ч 55 мин</p>
                </div>
                <div className='way__info'>
                  <p className='way__time'>{infoTime[1]}</p>
                  <p className='way__to'>{cityFrom}</p>
                  <p className='way__to'>{dateTo}</p>
                </div>
                <div className='info__img'>
                  <img src={bag} alt='bag' width='20px' height='20px'/>
                  <img src={baggage} alt='bag' width='20px' height='37px'/>
                </div>
              </div>
              <div className='info__time display' onClick={handlerClickBtn}>
                <button id='0' className={btnTimeClass[0]} onClick={handlerChouseTime0}>
                  09:20 <span className='btn__text_small'>- 11:05</span>
                </button>
                <button id='1' className={btnTimeClass[1]} onClick={handlerChouseTime1}>
                  10:20 <span className='btn__text_small'>- 12:05</span>
                </button>
                <button id='2' className={btnTimeClass[2]}>
                  11:20 <span className='btn__text_small' onClick={handlerChouseTime2}>- 13:05</span>
                </button>
              </div>
            </div>
            <div className='info__price info__price_none'>
            </div>
          </div>
          <div className='info info-big__block block_border'>
            <div className='info__type'>
              <div className='type__non'>Невозвратный</div>
              <img src={logo} alt='logo' width='39px' height='39px'/>
              <p className='type__text'>S7 Airlines</p>
            </div>
            <div className='block__trip'>
              <div className='trip__way'>
                <div className='way__info'>
                  <p className='way__time'>{infoTime[0]}</p>
                  <p className='way__to'>{cityFrom}</p>
                  <p className='way__to'>{dateFrom}</p>
                </div>
                <div className='way'>
                  <div className='way-line__text'>
                    <p className='way__text'>SVO</p>
                    <p className='way__text'>ROV</p>
                  </div>
                  <div className='way__line'>
                    <img src={ellipse} alt='bag' width='8px' height='8px'/>
                    <img className='line__img' src={line} alt='bag' width='265px' height='2px'/>
                    <img src={ellipse} alt='bag' width='8px' height='8px'/>
                  </div>
                  <p className='way__text way__text_margin'>В пути 1 ч 55 мин</p>
                </div>
                <div className='way__info'>
                  <p className='way__time'>{infoTime[1]}</p>
                  <p className='way__to'>{cityTo}</p>
                  <p className='way__to'>{dateFrom}</p>
                </div>
                <div className='info__img'>
                  <img src={bag} alt='bag' width='20px' height='20px'/>
                  <img src={baggage} alt='bag' width='20px' height='37px'/>
                </div>
              </div>
              <div className='info__time display' onClick={handlerClickBtn}>
                <button id='0' className={btnTimeClass[0]} onClick={handlerChouseTime0}>
                  09:20 <span className='btn__text_small'>- 11:05</span>
                </button>
                <button id='1' className={btnTimeClass[1]} onClick={handlerChouseTime1}>
                  10:20 <span className='btn__text_small'>- 12:05</span>
                </button>
                <button id='2' className={btnTimeClass[2]}>
                  11:20 <span className='btn__text_small' onClick={handlerChouseTime2}>- 13:05</span>
                </button>
              </div>
            </div>
            <div className='info__price info__price_big'>
              <p>9 300 ₽</p>
            </div>
            </div>
        </div>
    )}
    </div>
    
      
   
    
  );
}