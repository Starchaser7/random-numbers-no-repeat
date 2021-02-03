import React, { useState } from 'react';


function App() {
  const [number, setNumber] = useState('Gere um numero aleatorio clicando acima');

  //variáveis q armazenam o limite do array
  let [minimoArr, setMinimoArr] = useState(1);
  let [maximoArr, setMaximoArr] = useState(100);
  let [array, setArray] = useState('Array Vazio')

  //função para pegar numeros sem bugar tanto assim
  const getRandomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    setNumber(result);
  };
  
  //Aqui faz o handle dos inputs
  const handleInputOnChange = event => {
    console.log(event.target.value);
    setMinimoArr(parseInt(event.target.value));
  };

  //função que ao clicar coloca o valor máximo do array
  const handleMaxValue = (e) => {setMaximoArr(e)};


  //função para criar o array e colocar dentro do state, tá funfando bem =D
  function createArrayOfNumbers(start, end){
    let myArray = [];

    for(let i = start; i <= end; i++){
      myArray.push(i);
    }
    setArray(myArray);
};

//apenas uma função pra encurtar dentro do return
function callFuncArray() {
  createArrayOfNumbers(minimoArr, maximoArr);
  console.log('recriado o Array com os numeros');
  console.log(array);
}

  return (
    <>
      <div className="App">
        <input type="number" onChange={handleInputOnChange} />
        <button onClick={() => handleMaxValue(90)}>Submit Max value</button>
        <button onClick={() => getRandomNumber(minimoArr, maximoArr)}>Generate</button>
        <button onClick={() => callFuncArray()}>teste de array</button>
        <h1>{number}</h1>
      </div>
    </>
  );
}

export default App;