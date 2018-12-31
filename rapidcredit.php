<?php
/*
Plugin Name: Rapidcredit
Plugin URI: http://localhost/wordpress
Description: Calculadora de impuestos de Rapidcredit
Version: 1.0
Author: Benny Reyes
*/

add_shortcode('calculadora', 'rcShortcode');

function rcShortcode($atts){
  $params = shortcode_atts(array(
    'nombre' => '',
    'id' => ''
  ), $atts);
  $html = contenidoHTML();
  return $html;
}

function contenidoHTML(){
  $html = '
  <div class="center-container">
  <form class="formulario-container">
    <div class="title-container">
      <h1>Calcula tu Rapidcredit</h1>
    </div>
    <div clas="white-container">
      <div class="input-container">
        <div class="money-container">
          <div class="text-container">
            <p>¿Cuánto dinero necesitas?</p>
            <span class="ceros">000</span><span id="display-money">110</span>
            <span class="currency">&#36</span>
          </div>
          <div class="input-container">
            <div class="minus" id="money-minus">-</div>
              <input id="money"  type="range" min="110" step="1" max="750" value="110">
            <div class="sum" id="money-sum">+</div>
            <div class="money-bar"><div id="money-bar" class="money-bar-color"></div></div>
          </div>
        </div>

        <div class="days-container">
          <div class="text-container">
            <p>¿Cuándo puedes pagarlo?</p>
            <span id="display-days">5</span>
          </div
          <div class="input-container">
            <div class="minus" id="days-minus">-</div>
              <input id="days"name="days" type="range"step="1" min="5" max="69" value="5">
            <div class="sum" id="days-sum" >+</div>
            <div class="days-bar"><div id="days-bar" class="days-bar-color"></div></div>
          </div>
        </div>

        <div class="data-display">
          <div class="left-container">
            <ul class="lista">
              <li> Monto solicitado </li>
              <li> Intereses </li>
              <li> Aval </li>
              <li> Plataforma </li>
              <li> IVA </li>
            </ul>
          </div>
          <div class="right-container">
            <ul class="lista">
              <li> <span>&#36;</span><span id="monto">110</span><span>.000</span> </li>
              <li> <span>&#36;</span><span id="intereses">1</span> </li>
              <li> <span>&#36;</span><span id="aval">5</span> </li>
              <li> <span>&#36;</span><span id="plataforma">8</span> </li>
              <li> <span>&#36;</span><span id="iva">1</span> </li>
            </ul>
          </div>
        </div>
        <div class="total-container">
          <h2>Total a pagar</h2><span id="total">20</span><span class="currency">&#36;</span>
        </div>
      </div>
    </div>
  </form>
</div>
  ';
  return $html;
}

add_action('wp_enqueue_scripts', 'add_scripts_rc');

function add_scripts_rc(){
  wp_register_style('rc-css', plugin_dir_url(__FILE__).'css/main.css', array());
  wp_enqueue_style('rc-css');
  wp_enqueue_script('rc-javascript', plugin_dir_url(__FILE__).'js/javascript.js', array());
  //wp_enqueue_script('rc-jquery', plugin_dir_url(__FILE__).'js/jquery.js', array('jquery'));
}

?>
