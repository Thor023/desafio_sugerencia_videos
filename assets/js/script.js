//IIFE no construida aun, falta para construir la URL y cambiar el atributo
const construyeUrl = (() => {
    let funcionPrivada = (url,id)=>{
        elemento =document.getElementById(id)
        elemento.setAttribute('src',url)
    }
    return {
        funcionPublica: (url,id) => funcionPrivada(url,id)

        }
    })();


//Establecer clase multimedia
class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () =>{
            return _url;
        };
        this.setUrl = (nuevo_url)=>{
            _url = nuevo_url;
        };
    }
    get url(){
        return this.getUrl();
    }
    set url(nuevo_url){
        this.setUrl(nuevo_url);
    }
    setInicio(){
        return `este metodo es para realizar un cambio en la url del video`
    } 
}
//Clase reproductor
class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        let_id = id;
        this.getId = () => {
            return _id;
        };
        this.setId = (nuevo_id) =>{
            _id = nuevo_id;
        };
    }
    get id(){
        return this.getId();
    }
    set id(nuevo_id){
        this.setId(nuevo_id);
    }
    playMultimedia(){
        videos.publico(this.url, this.id);
    }
    setInicio(segundos){
        document.getElementById(this.id).setAttribute("src",url`?start=${segundos}`);
    }
}
//instanciar clases hijas
let pelicula = new Reproductor("https://www.youtube.com/watch?v=B57W1IX86Ck", "peliculas");
let musica = new Reproductor("https://www.youtube.com/watch?v=bKuNVYdTPrg", "musica");
let serie = new Reproductor("https://www.youtube.com/watch?v=gNHP9RmL27U", "series");
//Llamar a playMultimedia
pelicula.playMultimedia();
musica.playMultimedia();
serie.playMultimedia();