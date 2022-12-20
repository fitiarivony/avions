class Tableau{
    constructor(data,content,id,colonnes=[]) {
        
        this.element=data;
        this.content=content;
        this.id=id;
        this.colonnes=colonnes;
    }

    getdata(){
        return this.element;
    }
    getcontent(){
        return this.content;
    }
    getid(){
        return this.id;
    }
    getcolonnes(){
        return this.colonnes;
    }
    addcolumn(tr,element){
        let td=document.createElement("td");
        td.append(element);
        tr.appendChild(td);
    }
    
    addcomponent(idtr,element="a",id="id",name="name",classe="",nom="lien"){
        let tr=document.getElementById(idtr);
        let td=document.createElement("td");
        let component=document.createElement(element);
        component.setAttribute("id",id);
        component.setAttribute("name",name);
        component.setAttribute("class",classe);
        component.append(nom);
        td.appendChild(component);
        tr.appendChild(td);
    }
    addHeader(table){
        let keys=null;
        if(Array.isArray(this.getdata())) keys=Object.keys(this.getdata()[0]);
        else  keys = Object.keys(this.getdata());
        if (this.getcolonnes().length!==0) {
            keys=this.getcolonnes();
        }
        keys.forEach(key => {
            let th=document.createElement("th");
            th.append(key);
            th.setAttribute('className','summarycell')
            table.appendChild(th);
        });
    }
    addbootstrap(table){
        table.setAttribute("class","table");
    }
    array(table){
        let keys=Object.keys(this.getdata()[0]);
        if (this.getcolonnes().length!==0) {
            keys=this.getcolonnes();
        }
        for (let i=0;i<this.getdata().length;i++) {
            
            let tr=document.createElement("tr");
            tr.setAttribute("id",i);
            keys.forEach(key => {
               this.addcolumn(tr,this.getdata()[i][key]);
            });
            table.appendChild(tr);
        }
    }
    object(table){
        let keys=Object.keys(this.getdata());
            let tr=document.createElement("tr");
            tr.setAttribute("id","object");
            keys.forEach(key => {
               this.addcolumn(tr,this.getdata()[key]);
            });
            table.appendChild(tr);
    }

    initialize(){
        let table = document.createElement("table");
        table.setAttribute("border",1);
        table.setAttribute("id",this.getid());
        this.addbootstrap(table);
        this.addHeader(table);
        if(Array.isArray(this.getdata()))this.array(table);
        else this.object(table);
        this.getcontent().innerHTML ="";
       this.getcontent().appendChild(table);
    }
}
export default Tableau;