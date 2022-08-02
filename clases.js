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
