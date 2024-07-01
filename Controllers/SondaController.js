import Service from "../Services/Service.js";

class Controller {
  service = new Service();

  ingresarSonda = async (req, res) => {
    try {
      const { id, temp } = req.body;
      const data = await this.service.ingresarSondaService(id, temp);
      res.status(200).send({ Msg: data });
    } catch (error) {
      res.status(422).json({ errorMsg: error.message });
    }
  };

  listarSondas = async (req, res) => {
    try {
      const data = await this.service.listarSondasService();
      res.status(200).send({ Msg: data });
    } catch (error) {
      res.status(422).send({ errorMsg: "no valida" });
    }
  };

  listarSondaId = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.listarSondaIdService(id);
      res.status(200).send({ Msg: data });
    } catch (error) {
      res.status(422).send({ errorMsg: error.message });
    }
  };
}

export default Controller;