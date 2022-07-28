class Usuario{
        constructor(nombre,apellido){
            this.nombre = nombre;
            this.apellido= apellido;
            this.libros= [];
            this.mascotas= [];
        }
        getFullName = ()=>{
            console.log (`Mi nombre completo es ${this.nombre} ${this.apellido}`)
        }

        agregarMascota =(mascotas)=>{
          this.mascotas.push(mascotas);
          console.log(this.mascotas);
        }
        contarMascotas = () =>{
            console.log(Usuario1.agregarMascota.length);
            console.log(Usuario2.agregarMascota.length);
        }



}

let Usuario1 = new Usuario("Alejandro","kmet");
let Usuario2 = new Usuario("Marcos","Kmet"); 

Usuario1.getFullName();
Usuario2.getFullName();
Usuario1.agregarMascota("Pepin");
Usuario2.agregarMascota("Catita");
/*Usuario2.agregarMascota("Gary");*/
Usuario1.contarMascotas();
Usuario2.contarMascotas();


