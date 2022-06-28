db.produtos.find(
  {
  nome: {
    $not: {
      $in: ["Big Mac", "McChicken"],
    },
  },
},
  {
    _id: 0,
    nome: 1,
    curtidas: 1,
    vendidos: 1,
  },
);
