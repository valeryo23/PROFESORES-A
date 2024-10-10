class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, horasTrabajadas, pagoPorHora) {
        super(nombre, bono);
        this.horasTrabajadas = horasTrabajadas;
        this.pagoPorHora = pagoPorHora;
    }
    calcularIngreso() {
        return (this.horasTrabajadas * this.pagoPorHora) + this.bono;
    }
}