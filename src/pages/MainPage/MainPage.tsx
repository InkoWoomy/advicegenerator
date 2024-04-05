import React, { useState, useEffect } from 'react';
import { IAdviceInterface } from '../../interfaces/AdviceInterface';
import AdviceGenerator from '../../Services/AdviceService';
import { Button } from 'flowbite-react';
import DiceComponent from '../../components/DiceComponent';

const MainPage = () => {
  const [advice, setAdvice] = useState<IAdviceInterface>();

  const createAdvice = async () => {
    const fetchedData = await AdviceGenerator();
    setAdvice(fetchedData);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-slate-900">
        <div className="pt-16 pb-8 px-48 bg-gray-700 rounded-3xl shadow-2xl shadow-slate-900">
          <div className="max-w-96 text-center">
            {advice?.slip.id && (
              <h1 className="manrope-normal text-green-500 text-lg " style={{ letterSpacing: '0.2em' }}>ADVICE #{advice.slip.id}</h1>
            )}
            <h2 className="manrope-extrabold text-white text-3xl ">"{advice?.slip.advice || "Click the dice for some wonderful advice!"}"</h2>
            <div className="rounded-full p-0.5 opacity-10 my-10 bg-white" />
          </div>
        </div>
        <button className=" bg-green-400 rounded-full hover:shadow-lg hover:shadow-green-500" style={{ marginTop: '-2rem' }} onClick={createAdvice}>
          <DiceComponent />
        </button>
      </div>
    </>
  )
}

export default MainPage;
