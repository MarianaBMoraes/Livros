let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.matricula != "" &&
    body.matricula != undefined &&
    body.curso != "" &&
    body.curso != undefined &&
    body.ano != undefined &&
    body.ano > 0
  ) {
    return {
      id,
      nome: body.nome,
      matricula: body.matricula,
      curso: body.curso,
      ano: body.ano,
    };
  }
};

module.exports = model;
