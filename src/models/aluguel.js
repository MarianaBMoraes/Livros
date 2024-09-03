const livro_controller = require("../controllers/livro.js");
const estudante_controller = require("../controllers/estudante.js");

let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    livro_controller.show(body.livro_id) &&
    estudante_controller.show(body.estudante_id) &&
    body.data_aluguel != undefined &&
    body.data_aluguel != "" &&
    body.data_devolucao != undefined &&
    body.data_aluguel != ""
  ) {
    return {
      id,
      livro_id: body.livro_id,
      estudante_id: body.estudante_id,
      data_aluguel: body.data_aluguel,
      data_devolucao: body.data_devolucao,
    };
  }
};

module.exports = model;
