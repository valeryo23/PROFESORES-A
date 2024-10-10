 
import Cl_fijo from "./Cl_fijo.js"; 
import Cl_contratado from "./Cl_contratado.js";
import Cl_profesor from "./Cl_profesor.js"; 

const nombre = new Cl_fijo("Nombre del profesor fijo:");
const bono = new Cl_fijo("Monto del bono: $");
const sueldo = new Cl_fijo("Monto del sueldo: $");

const profesorFijo = new Cl_fijo(nombre, bono, sueldo);
const ingresoTotal = profesorFijo.ingresoTotal();

console.log(`Ingreso total del profesor ${profesorFijo.nombre}: $${ingresoTotal}`);