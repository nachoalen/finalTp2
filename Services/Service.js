import Sonda from "../Models/Sonda.js";
class Service {
  sondaModel = new Sonda();

  ingresarSondaService = async (id, temp) => {
    try {
      if(id < 1 || id > 5){
        throw Error("Id Invalido");
      }
      else if(temp < -20 || temp > 100){
        throw Error("Temperatura Invalida");
      }

      const data = await this.sondaModel.create(id, temp);
      console.log("🚀 ~ Service ~ ingresarSondaService= ~ data:", data)
      
      return data;
    } catch (error) {
      throw error;
    }
  };

  listarSondasService = async () => {
    try {
      const data = await this.sondaModel.getAll();
      return data;
    } catch (error) {
      throw error;
    }
  };

  listarSondaIdService = async (id) => {
    try {
      const data = await this.sondaModel.getById(id);
      return data;
    } catch (error) {
      throw Error("Número de sonda incorrecto");
    }
  };
}

export default Service;