function Leer() {
    const city = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='e58b9a5ffd63c79ad3eb224e127a20b3';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    buscar1(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{  
            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML=
            `
             <dl>
                <dt><h1> Temperatura: ${resultado.main.temp} °C </h1></dt>
                <dt><h1> Sensación Termica: ${resultado.main.feels_like} °C </h1></dt>  
                <dt><h1> Temperatura Minima: ${resultado.main.temp_min} °C </h1></dt>  
                <dt><h1> Temperatura Maxima: ${resultado.main.temp_max} °C </h1></dt>  
                <dt><h1> Humedad: ${resultado.main.humidity} % </h1></dt    >   
             </dl>  
             `;
            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    
