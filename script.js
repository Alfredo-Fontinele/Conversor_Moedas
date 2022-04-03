function Converter_Dolar_Real(variavel) {
    let resultado = variavel.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    return resultado;
  }
  
  function Converter_Real_Dolar(variavel) {
    let resultado = variavel.toLocaleString("en-US", {
      style: "currency",
      currency: "USS"
    });
    return resultado;
  }
  
  function Converter() {
    let valor_minimo = 0;
    let number = document.getElementById("valor").value;
    if (number === "") {
      alert("Por favor, Insira um número");
    } else if (number === valor_minimo) {
      alert("Por favor, Insira um número maior que 0");
    } else {
      let realPraDolar = parseFloat(number);
      let dolar = realPraDolar * 5.09;
      let Real = Converter_Real_Dolar(realPraDolar);
      let Dolar = Converter_Dolar_Real(dolar);
      let valorConvertido = document.getElementById("valorConvertido");
      valorConvertido.style.visibility = "visible";
      valorConvertido.innerHTML = `Valor Informado: <br>${Real}<br><br>Valor em Reais: <br>${Dolar}`;
    }
    // alert(`Valor Informado: R$ ${realPraDolar}\nValor em Dólares: US$ ${dolar}`);
  }
  