import React, { useState } from 'react';


function App() {
  const [number, setNumber] = useState('Gere um número aleatório colocando valor minimo e máximo acima,\n clique envie e gere os números');
  
  //variáveis q armazenam o limite do array
  let [minimoArr, setMinimoArr] = useState(0);
  let [maximoArr, setMaximoArr] = useState(0);
  let [array, setArray] = useState([]);
  let [randomIndex, setRandomIndex] = useState(0);
  let [inputMin, setInputMin] = useState(0);
  let [inputMax, setInputMax] = useState(0);

  //função para pegar numeros sem bugar tanto assim, 
  //essa função é usava para gerar qualquer numero aleatório
  const getRandomNumber = (min, max) => {
    if(minimoArr === 0 && maximoArr === 0){
      setNumber('Você precisa colocar valores antes de tentar gerar eles');
    } else {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    setNumber(result);
  }};
  //Index precisava de um gerador exclusivo para ele devido ao setNumber já estar na função acima
  //esta é usada apenas para gerar números não repetidos
  const getRandomNumberForIndex = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    setRandomIndex(result);
  };
  
  //Aqui faz o handle dos inputs
  const handleInputOnChangeMin = event => {
    setInputMin(parseInt(event.target.value))
  };
  const handleInputOnChangeMax = event => {
    setInputMax(parseInt(event.target.value));
  };

  //função para criar o array e colocar dentro do useState
  const createArrayOfNumbers = (start, end) => {
    let myArray = [];

    for(let i = start; i <= end; i++){
      myArray.push(i);
    }
    setArray(myArray);
};
  //função que ao clicar coloca o valor máximo e máximo do array
  const handleSubmit = (event) => {
    if (inputMax < inputMin){
      alert('O valor minimo não pode ser maior que o valor máximo');
    } else if(inputMax === inputMin){
      alert('Os valores não podem ser o mesmo');
    } else {
    setMinimoArr(inputMin);
    setMaximoArr(inputMax);
    createArrayOfNumbers(inputMin, inputMax);
    setRandomIndex(() => getRandomNumberForIndex(inputMin, inputMax));
    event.preventDefault();
  }};

  //Gerador de números sem repetição
  const gerarN = () => {
    if (minimoArr === 0 && maximoArr === 0){
      setNumber('Por favor, coloque os valores minimo e máximo para começar a gerar números :)')
    } else if (array.length === 0){
      setNumber('Acabou números que poderiam ser gerados sem repetir, coloque novamente caso queira novos números :)');
    } else {
    setRandomIndex(() => getRandomNumberForIndex(0, array.length-1));
    let numeroAleatorio = array[randomIndex];
    array.splice(randomIndex, 1);
    setNumber(numeroAleatorio);
    } 
  };




  return (
    <>
      <div className="App">
        <h1>O valor mínimo é {minimoArr}, e o valor máximo é {maximoArr}</h1>
        <div>
          <form onSubmit={handleSubmit}>
          <input type="number" onChange={handleInputOnChangeMin} placeholder="Número minimo" min="-1000000" max="1000000" />
          <input type="number" onChange={handleInputOnChangeMax} placeholder="Número máximo" min="-1000000" max="1000000" />
            <input type="submit" value="Enviar Valores" />
          </form>
        </div>
        <div>
        <button onClick={() => getRandomNumber(minimoArr, maximoArr)}>Gerar Aleatóriamente</button>
        <button onClick={() => gerarN()}>Gerar sem repetir o número</button>
        </div>
        <h1>{number}</h1>
      </div>
    </>
  );
}

export default App;