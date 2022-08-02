/*class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName = () => {
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }

    agregarMascota = (mascotas) => {
        this.mascotas.push(mascotas);
        console.log(this.mascotas);
    }
    contarMascotas = () => {
        console.log(Usuario1.agregarMascota.length);
        console.log(Usuario2.agregarMascota.length);
    }



}

let Usuario1 = new Usuario("Alejandro", "kmet");
let Usuario2 = new Usuario("Marcos", "Kmet");

Usuario1.getFullName();
Usuario2.getFullName();
Usuario1.agregarMascota("Pepin");
Usuario2.agregarMascota("Catita");
/*Usuario2.agregarMascota("Gary");
Usuario1.contarMascotas();
Usuario2.contarMascotas();
*/


class Usuario {

    constructor(nombre, apellido, mascotas, libros) {

        this.nombre = nombre;

        this.apellido = apellido;

        this.mascotas = mascotas;

        this.libros = libros;

    }



    getFullName() {

        return `${this.nombre} ${this.apellido}`;

    }





    addMascota(mascota) {

        this.mascotas.push(mascota);

    }



    countMascotas() {

        return this.mascotas.length;

    }



    addBook(nombre, autor) {

        this.libros.push({

            nombre,

            autor

        });

    }



    getBookNames() {

        const nombres = [];

        for (const libro of this.libros) {

            nombres.push(libro.nombre);

        }

        return nombres;

    }

}



const p = new Usuario('Alejandro', 'kmet', ['pepin'], []);



console.log(p);



console.log(p.getFullName());



console.log(p.countMascotas());



p.addMascota('catita');



console.log(p.countMascotas());



p.addBook('los exploradores del meloria', 'mark twain');



console.log(p.getBookNames());