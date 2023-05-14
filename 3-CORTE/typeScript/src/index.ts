let mensaje: string = "hola mundo"
mensaje = "william quimbay"
mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

 /** 
  * tipos de js
  * number
  * STRING
  * boolean
  * null
  * undefined
  * function
  * object
  * 
  * tipos de TS
  * 
  * any = no usar
  * unknown
  * never
  * arrays
  * tuplas
  * enums
  * 
  * tipos inferidos
 **/


 let extincionDinosaurios: number = 76_000_000
 let dinosaurioFavorito: string = "T-rex"
 let extintos: boolean = true

 function config(config: any){
    return config
 }


 let animales: string[] =['odin', 'zeus', 'poseidon']
 let num: number[] = [1, 2, 3]
 let checks: boolean[] = []
 let num2:Array<number> = []


//  num.map(x => x.) // el auto completado sugieroe metodos del tipo de dato

//TUPLAS 

let tupla:[number, string[]] = [1, ["william", "odin"]]

//Enums
const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

//pascalCase
enum Talla{ Chica = "s", Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'} 
const variable1 = Talla.Grande
console.log(variable1)

const enum loadingState {Idle, Loading, Success, Error}

const estado = loadingState.Success
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}
type persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}
const object: persona = {
    id: 1, 
    nombre: 'hola mundo',
    talla: Talla.Chica,
    direccion: {
        numero: 5,
        calle: 'marcella',
        pais: 'colombia'

    }
}

const arr: persona[] =[]