export interface Avion {
  idAvion: string;
  numeroMatricule: string;
  dateDebut:string;
  nom:string;
  
}

const avions: Avion[]= [
  {
  idAvion: '1',
  numeroMatricule: '2514TBD',
  dateDebut:'2022-10-10',
  nom:'Boeing'
  },
  {
    idAvion: '2',
  numeroMatricule: '1427TAB',
  dateDebut:'2021-02-06',
  nom:'airbus'
  },
  {
    idAvion: '3',
    numeroMatricule: '10245WWT',
    dateDebut:'2022-03-04',
    nom:'Boeing'

  }
  
];
var data:Avion[];
const ajax = function (url:string, method:string) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
     data=(JSON.parse(this.responseText)).data;
  }
  xhttp.open(method, url, false);
  xhttp.send();
}
export const getVehicules = () => {
  ajax("https://avion-production-ba83.up.railway.app/avions","GET");
  return data;
};

export const getVehicule = (idavion: string) => avions.find(v => v.idAvion === idavion);
