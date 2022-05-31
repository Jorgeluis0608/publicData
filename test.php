<?php

$data = "(310) 459-9148 - LandLine/Services";

function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}

$parsed = get_string_between($data, '(', ')');

echo '<li class="phone" area='. get_string_between($data, '(', ')') .'><a href=""><img src="/img/pssr/phone.png"><strong>Phones</strong>: ' . $data . '</a></li>';

?>