class Sonda {
    sondas = [];
  
    create = async (id, temp) => {
        let tiempoCreacion = Date.now()
        let sonda = {id, temp, tiempoCreacion}
        this.sondas.push(sonda)
        return sonda
    };

    getAll = async () => {
        return Array.from(this.sondas.values());
    };

    getById = async (id) => {
        return this.sondas[id - 1];
    };
}

export default Sonda;