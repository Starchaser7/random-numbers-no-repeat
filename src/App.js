import React, { useState } from 'react';


function App() {
  const [number, setNumber] = useState('Gere um numero aleatorio clicando acima');
  
  //variáveis q armazenam o limite do array
  let [minimoArr, setMinimoArr] = useState(1);
  let [maximoArr, setMaximoArr] = useState(10);
  let [array, setArray] = useState();
  let n = Math.floor(Math.random() * maximoArr); //variavel 'n' apenas para setar o 
  //valor inicial do index que será removido do RandomIndex para não bugar o array
  let [randomIndex, setRandomIndex] = useState(n);

  //função para pegar numeros sem bugar tanto assim
  const getRandomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    setNumber(result);
  };
  const getRandomNumberForIndex = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    setRandomIndex(result);
  };
  
  //Aqui faz o handle dos inputs
  const handleInputOnChangeMin = event => {
    console.log(event.target.value);
    setMinimoArr(parseInt(event.target.value));
  };
  const handleInputOnChangeMax = event => {
    console.log(event.target.value);
    setMaximoArr(parseInt(event.target.value));
  };

  //função que ao clicar coloca o valor máximo do array


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
  setNumber('Gere um numero aleatorio clicando acima');
}

//preciso fazer o splice funcionar agora
const gerarN = () => {
  
  setRandomIndex(() => getRandomNumberForIndex(0, array.length-1));
  console.log(randomIndex + ' = valor do random index');
  let numeroAleatorio = array[randomIndex];
  array.splice(randomIndex, 1);
  console.log(numeroAleatorio);
  console.log(array);
  setNumber(numeroAleatorio);
  if (array == 0){
    setNumber('Acabou os números aletórios dentro dos padrões que você declarou :)');
  }
};


  return (
    <>
      <div className="App">
        <input type="number" onChange={handleInputOnChangeMin} placeholder="Número minimo" />
        <input type="number" onChange={handleInputOnChangeMax} placeholder="Número máximo" />
        <div>
        <button onClick={() => getRandomNumber(minimoArr, maximoArr)}>Generate</button>
        <button onClick={() => gerarN()}>Generate with old function</button>
        <button onClick={() => callFuncArray()}>teste de array</button>
        </div>
        <h1>{number}</h1>
        <h2>Aqui está o Random Index: {randomIndex}</h2>
      </div>
    </>
  );
}

export default App;