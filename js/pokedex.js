//PRIMERO DEFINIMOS LA FUNCI'ION DE FETCH
/*
UN FETCH ES LA FORMA EN LA QUE HACEMOS UNA CONSULTA, UNA PETICION A UNA API
*/

const fetchPokemon = () => {
  /*document.getElementById
    Su trabajo es leer el documento de HTML y va a buscar
    algo que tenga el ID que sea el que buscamos*/
  const pokeName = document.getElementById("pokeName");
  //El value es lo que tiene el INPUT
  let pokeInput = pokeName.value.toLowerCase();
  //DECLARO UNA URL DE CONSULTA, EJEMPLO PARTICULAR PARA UN POKEMON
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokeInput;
  //fetch es para realizar la consulta a la API
  /*VA A IR AL SERVIDOR Y PREGUNTARA SI SE LE PUEDE DAR EL RESULTADO DE X PETICI'ON
    EN EL MOMENTO QUE TENEMOS LO SOLICITADO, VAMOS A RECIBIR UNA PROMESA
    QUE ES UNA PROMESA?
    LA PROGRAMACI'ON ASINCRONA TRATA DE SEGUIR LA RUTA NORMAL DE UN PROGRAMA, PERO EN
    EL MOMENTO DE ENCONTRAR UN INICIO ASINCRONO EN Y PARTE DEL PROGRAMA, SE CREA UNA SECCI'ON
    PARALELA AL PROGRAMA ORIGINAL QUE NO AFECTA A LA RAMA PRINCIPAL DE EJECUCI'ON
    A LAS DIFERENTES PARTES QUE ESTAN EJECUTANDO EL CODIGO SE LE LLAMA "STACK DE PROGRAMACION"
    LOS STACKS TIENEN DIFERENTES NIVELES
    EJEMPLO
    SI VAMOS RECORRIENDO DIFERENTES NIVELES, DE ARRIBA PARA ABAJO POR EJEMPLO Y DE REPENTE
    LLEGA ALGO "ASINCRONO" COMO LA CONSULTA A UN SERVIDOR
    POR QU'E LA CONSULTA A UN SERVIDOR ES ASINCRONA?
    ESTO ES DEBIDO A QUE LA CONSULTA SE EJECUTA EN OTRO HILO O ESPACIO SIN AFECTAR EL RECORRIDO DEL
    PROGRWAMA PRINCIPAL
    UNA CONSULTA A UN SERVIDOR, UNA CONSULTA A UNA API ES ASINCRONO, ESTO ES DEBIDO A QUE SE TIENE QUE 
    ESPERAR  A QUE UN SERVIDOR LE CONTESTE PARA AS'I PODER SEGUIR AVANZANDO, PARA ESTO ES QUE SE NECESITAN 
    LAS PROMESAS
    LAS PROMESAS ES DECIRLE AL PROGRAMA
    "OYE, ESPERAME TANTITO, TE VOY A MANDAR LA RESPUESTA/RESULTADO PERO ESPERA A QUE SE TERMINE DE 
    PROCESAR "
    
    PARA TENER ESA PROMESA, USAMOS ".then"
    DENTRO DE .then VOY A RECIBIR UNA FUNCI'ON
    POR QUE UNA FUNCI'ON?
    AQUI VAMOS A RECIBIR ALGO, PARA PODER PONERLO EN UNA RESPUESTA Y ESTO VA A SER OTRA FUNCI'ON
     */
  /*AQUI LE DECIMOS:
    VE Y PASAMA LA INFORMACI'ON QUE TENGAS EN EL SERVIDOR, ESO LO METES EN LA RESPUESTA*/
  fetch(url)
    .then((res) => {
      //Para asegurar un mejor funcionamiento, manejamos un caso de excepciones
      //Una consulta exitosa tiene un status = 200, de otra manera, tiene un error.
      if (res.status != "200") {
        console.log(res);
        pokeImage("img/sadPokemon.jpg");
        namePokemon("Sin resultados");
      } else {

        return res.json();
      }
      //ESTA ES LA RESPUESTA

      //HASTA ESTA PARTE TODAV'IA ES UNA PROMESA, HAY QUE SACARLA
      //PARA ESO USAMOS OTRO .then
      /*USANDO ESTE 'ULTIMO THEN OBTENEMOS LAS HABILIDADES*/
    })
    .then((data) => {
      //CABE RECORDAR QUE ESTO ES UN OBJETO
      console.log(data);
      /*PARA OBTENER UN ATRIBUTO EN ESPECIFICO,DEBEMOS 
        LOCALIZARLO Y EXTRAERLO*/
      let pokeImg = data.sprites.front_default;
      let namePokemon = data.name;
      console.log(pokeImg);
      console.log(namePokemon);
      //infoPokemon(pokeName);
      pokeImage(pokeImg);
      namePokemon(namePokemon);
    });
};

//Con esto vamos y buscamos
//fetchPokemon();


//fetchPokemon();
//Funci'on para cambiar la imag'en
//Recibe una URL, ya que en ella podremos cambiar el src
const pokeImage = (url) => {
    
    const pokeImg = document.getElementById("pokeImg");
   
    pokeImg.src = url;


      /*document.getElementById
    Su trabajo es leer el documento de HTML y va a buscar
    algo que tenga el ID que sea el que buscamos*/
  const pokeName = document.getElementById("pokeName");
  //El value es lo que tiene el INPUT
  let pokeInput = pokeName.value;
  console.log("Hola " + pokeInput);
  namePokemon.innerHTML = pokeInput;
    
  };
  //pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png");
  
  /*const namePokemon = (url) => {
    
    
    const namePokemon = document.getElementById("namePokemon");
    namePokemon.innerHTML = url;
  };
/*AHORA SE VA A VER LO RELACIONADO CON DOM
DOM = DOCIUMET OBJECT MODEL
EL DOM NOS VA AIDENTIFICAR LO QUE TENEMOS DENTRO DE NUESTRA
PAGINA DE HTML, PARA POSTERIOR MANDARLE LAS MODIFICACIONES
LAS FUNCIONES, HACER QUE CUANDO SE INTERACTUE CON ALGO DE
HTML, SE EJECUTE ALGO DENTRO DE JAVASCRIPT */

const imprimir = () => {
  /*document.getElementById
    Su trabajo es leer el documento de HTML y va a buscar
    algo que tenga el ID que sea el que buscamos*/
  const pokeName = document.getElementById("pokeName");
  //El value es lo que tiene el INPUT
  let pokeInput = pokeName.value;
  console.log("Hola " + pokeInput);
};
