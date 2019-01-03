document.onreadystatechange = () =>{
  if(document.readyState === 'complete'){
    var money = document.getElementById('money');
    var days = document.getElementById('days');
    var moneyminus = document.getElementById('money-minus');
    var moneysum = document.getElementById('money-sum');
    var daysminus = document.getElementById('days-minus');
    var dayssum = document.getElementById('days-sum');

    money.addEventListener('input', function(){
      moneyEvent();
    });

    function moneyEvent(){
      var display = document.getElementById('display-money');
      var display2 = document.getElementById('monto');
      var valor = money.value;
      var css = ((valor-110)/750)*100;
      document.getElementById('money-bar').style.width = css+'%';
      while (display.firstChild) {
        display.removeChild(display.firstChild);
      }
      display.appendChild(document.createTextNode(valor));
      while (display2.firstChild) {
        display2.removeChild(display2.firstChild);
      }
      display2.appendChild(document.createTextNode(valor));
      dataDisplay(days.value, money.value);
    }

    days.addEventListener('input', function(){
      daysEvent();
    });

    function daysEvent(){
      var display = document.getElementById('display-days');
      var valor = days.value;
      var css = ((valor-5)/69)*100;
      document.getElementById('days-bar').style.width = css+'%';
      while (display.firstChild) {
        display.removeChild(display.firstChild);
      }
      display.appendChild(document.createTextNode(valor));
      dataDisplay(days.value, money.value);
    }

    moneyminus.addEventListener('click', function(){
      var valor = money.value;
      var step = money.getAttribute('step');
      if(step === ''){
        step = 1;
      }
      valor = valor - step;
      money.value = parseInt(valor);
      moneyEvent();
    });

    moneysum.addEventListener('click', function(){
      var valor = money.value;
      var step = money.getAttribute('step');
      if(step === ''){
        step = 1;
      }
      valor = parseInt(valor) + parseInt(step);
      money.value = parseInt(valor);
      moneyEvent();
    });

    daysminus.addEventListener('click', function(){
      var valor = days.value;
      var step = days.getAttribute('step');
      if(step === ''){
        step = 1;
      }
      valor = valor - step;
      days.value = parseInt(valor);
      daysEvent();
    });

    dayssum.addEventListener('click', function(){
      var valor = days.value;
      var step = days.getAttribute('step');
      if(step === ''){
        step = 1;
      }
      valor = parseInt(valor) + parseInt(step);
      days.value = parseInt(valor);
      daysEvent();
    });

    function dataDisplay(days, money){
      var intereses = Math.round(money*(0.05*days));
      var aval = Math.round(money*(0.2*days));
      var plataforma = Math.round(money*(0.02*days));
      var iva = Math.round(money*(0.15));
      //display
      var displayintereses = document.getElementById('intereses');
      var displayaval = document.getElementById('aval');
      var displayplataforma = document.getElementById('plataforma');
      var displayiva = document.getElementById('iva');
      //total
      var total = parseInt(intereses) + parseInt(aval) + parseInt(plataforma) + parseInt(iva);
      var displaytotal = document.getElementById('total');
      //Cambiar valores
      /*            INTERESES              */
      while (displayintereses.firstChild) {
        displayintereses.removeChild(displayintereses.firstChild);
      }
      displayintereses.appendChild(document.createTextNode(intereses));
      /*      aval      */
      while (displayaval.firstChild) {
        displayaval.removeChild(displayaval.firstChild);
      }
      displayaval.appendChild(document.createTextNode(aval));
      /*        plataforma        */
      while (displayplataforma.firstChild) {
        displayplataforma.removeChild(displayplataforma.firstChild);
      }
      displayplataforma.appendChild(document.createTextNode(plataforma));
      /*       iva           */
      while (displayiva.firstChild) {
        displayiva.removeChild(displayiva.firstChild);
      }
      displayiva.appendChild(document.createTextNode(iva));
      /*       total           */
      while (displaytotal.firstChild) {
        displaytotal.removeChild(displaytotal.firstChild);
      }
      displaytotal.appendChild(document.createTextNode(total));
    }

  }
}
