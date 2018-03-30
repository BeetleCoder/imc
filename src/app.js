const {Button, TextView, ui} = require('tabris');
const {TextInput} = require('tabris');


let titulo = new TextView({
    top: 20,
    left: '20%', right: '20%',
    font: '24px',
    text: '¡Calcula tu IMC!\nEs Importante\n\n\n'
}).appendTo(ui.contentView);

let texto1 = new TextView({
    top: 110,
    left: '10%',
    font: '24px',
    text: 'Altura: '
}).appendTo(ui.contentView);

let texto2 = new TextView({
    top: texto1,
    left: '10%',
    font: '24px',
    text: 'Peso: '
}).appendTo(ui.contentView);

let altura = new TextInput({
    top: 105, left: texto1,
    message: 'Ingresa aquí tu altura',
    keyboard: 'decimal'
}).appendTo(ui.contentView);

let peso = new TextInput({
    top: 140, left: texto2,
    message: 'Ingresa aquí tu peso',
    keyboard: 'decimal'
}).appendTo(ui.contentView);

let boton = new Button({
    top: 200, 
    left: '30%', right: '30%',
    text: 'Calcular'
}).on('select',() => {
    resultado.set('text',"IMC: " + peso.text/(altura.text*altura.text));
}).appendTo(ui.contentView);

let resultado = new TextView({
    top: boton,
    left: '10%', right: '10%',
    font: '24px'
}).appendTo(ui.contentView);
