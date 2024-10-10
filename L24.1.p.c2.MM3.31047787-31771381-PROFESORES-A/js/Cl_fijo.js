class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }
    calcularIngreso() {
        return this.sueldo + this.bono;
    }
}


