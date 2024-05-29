let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 85,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ingeniera en sistemas computacionales')/*Cambio el texto que tiene: Desarrollo sitios web y escribo artículos sobre programación. */
  .pauseFor(200)
  .deleteChars(10)
  .start();
