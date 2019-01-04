jQuery(document).ready(function($){
  var money = $('#money'),
  days = $('#days');
  moneyminus = $('#money-minus');
  moneysum = $('#money-sum');
  daysminus = $('#days-minus');
  dayssum = $('#days-sum');

  moneyminus.on('click', function(){
    var valor = $('#money').val();
    var step = $(this).attr('step');
    if( step === '' || step == null){
      step = 1;
    }
    $('#money').val(parseInt(valor - step));
    moneyEvent();
  });

  daysminus.on('click', function(){
    var valor = $('#days').val();
    var step = $(this).attr('step');
    if( step === '' || step == null){
      step = 1;
    }
    $('#days').val(parseInt(valor - step));
    daysEvent();
  });

  moneysum.on('click', function(){
    var valor = $('#money').val();
    var step = $(this).attr('step');
    if( step === '' || step == null){
      step = 1;
    }
    $('#money').val(parseInt(valor) + parseInt(step));
    moneyEvent();
  });

  dayssum.on('click', function(){
    var valor = $('#days').val();
    var step = $(this).attr('step');
    if( step === '' || step == null){
      step = 1;
    }
    $('#days').val(parseInt(valor) + parseInt(step));
    daysEvent();
  });

  money.on('input', function(){
    moneyEvent();
  });

  function moneyEvent(){
    var valor = money.val()
    $('#display-money').text(valor);
    $('#monto').text(valor);
    var css = ((valor-110)/750)*100;
    $('#money-bar').css('width', css+'%');
    dataDisplay(days.val(), valor);
  }

  days.on('input', function(){
    daysEvent();
  });

  function daysEvent(){
    var valor = days.val()
    $('#display-days').text(valor);
    var css = ((valor-5)/69)*100;
    $('#days-bar').css('width', css+'%');
    dataDisplay(valor, money.val());
  }

  function dataDisplay(days, money){
    var intereses = Math.round(money*(0.05*days));
    var aval = Math.round(money*(0.2*days));
    var plataforma = Math.round(money*(0.3*days));
    var iva = Math.round(money*(0.15));
    var total = parseInt(money) + parseInt(intereses) + parseInt(aval) + parseInt(plataforma) + parseInt(iva);
    $('#intereses').text(intereses);
    $('#aval').text(aval);
    $('#plataforma').text(plataforma);
    $('#iva').text(iva);
    $('#total').text(total);
  }

});
