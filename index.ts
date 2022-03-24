// En este ejercicio debéis crear una clase "Person" con las propiedades privadas "name" y "age" y la propiedad pública "saySomething". Añadid también el método "myNameIs" para que saque por consola el valor de la propidad "name".
//En su constructor, debéis dar un valor a cada propiedad (sin contar "myNameIs") teniendo claro que sus tipos son cadena de texto, número y función que recibe cadena y no devuelve nada, respectivamente.

// Luego, cread una clase "Developer" que herede de "Person" y que tenga la propiedad pública "bestLanguage". El tipo de la propiedad "bestLanguage" es función que recibe cadena y no devuelve nada.

// En el constructor de "Developer", debéis añadir los parámetros al constructor de la clase padre (super) y setear la propiedad "bestLanguage" sabiendo que es de tipo función que recibe una cadena.
// Cuando acabéis, debéis descomentar las siguientes líneas de código y colocarlas despúes de todo lo que añadáis:

class Person {
  private name: string;
  private age: number;
  //public saySomething:(cadena: string) => void;  -- Sale error de que no es una funcion
  public saySomething(cadena: string) {
    return;
  }

  constructor(n: string, a: number, s: string) {
    this.name = n;
    this.age = a;
    this.saySomething(s);
  }

  public myNameIs() {
    console.log(this.name);
  }
}

class Developer extends Person {
  //public bestLanguage:(cadena: string) => void;  -- Sale error de que no es una funcion
  public bestLanguage(cadena: string) {
    return;
  }

  constructor(name: string, age: number, say: string, bl: string) {
    super(name, age, say);
    this.bestLanguage(bl);
  }

  public setBestLanguage(language: string) {
    this.bestLanguage(language);
  }
}

//Predeterminado de la actividad
//No se como solucionar el error que aparece con el something
const developer = new Developer(
  'pedro',
  35,
  (something) => console.log(something),
  (language) => console.log(language + ' is the best language')
);

developer.myNameIs();
developer.saySomething('algo');
developer.bestLanguage('Javascript');

//Personalizado 1
const developer2 = new Developer(
  'Juan',
  35,
  'No seras una cuenta del xocas?',
  'JS'
);

developer2.myNameIs();
developer2.saySomething('algo');
developer2.bestLanguage('Javascript');
