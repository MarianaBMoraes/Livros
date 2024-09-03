let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.titulo != undefined &&
    body.titulo != "" &&
    body.autor != "" &&
    body.autor != undefined &&
    body.ano != undefined &&
    body.ano > 0 &&
    body.ano == Number &&
    body.genero != "" &&
    body.genero != undefined
  ) {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      ano: body.ano,
      genero: body.genero,
    };
  }
};

module.exports = model;
