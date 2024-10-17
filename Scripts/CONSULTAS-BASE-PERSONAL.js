db.clientes.insertOne({  //consulta de registrar un nuevo cliente
  _id: ObjectId(),
  nombre: "Sofía Rodríguez",
  email: "sofia.rodriguez@example.com",
  telefono: "555-7890",
  tarjeta_lealtad: {
    numero: "33445",
    puntos: 80
  }
});  

db.clientes.find({}); //leer todos los clientes registrados

db.clientes.updateOne(  //actualizar el numero de puntos de la tarjeta de lealtad de un cliente
  { _id: ObjectId("64dce2d6f2f4e4f4d4bde6b9") }, 
  { $set: { "tarjeta_lealtad.puntos": 180 } }
);

db.menu.deleteOne({ _id: ObjectId("64dce4d6f2f4e4f4d4bde6d5") });  //eliminar un platillo del menu


db.clientes.find(  //Obtener la informacion de la tajeta de lealtad de un cliente especifico
  { _id: ObjectId("64dce2d6f2f4e4f4d4bde6b8") },
  { nombre: 1, "tarjeta_lealtad.numero": 1, "tarjeta_lealtad.puntos": 1 }
);

db.pedidos.aggregate([  //Obtener los pedidos realizados por un cliente especifico
  {
    $match: { cliente_id: ObjectId("64dce2d6f2f4e4f4d4bde6b8") }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente_info"
    }
  },
  {
    $unwind: "$cliente_info"
  },
  {
    $project: {
      _id: 0,
      pedido_id: "$_id",
      cliente: "$cliente_info.nombre",
      fecha: 1,
      total: 1
    }
  }
]);

db.pedidos.aggregate([   //Obtener los detalles de un platillos de un pedido en especifico
  {
    $match: { _id: ObjectId("67055db939defd301867f889") }
  },
  {
    $unwind: "$platillos"
  },
  {
    $lookup: {
      from: "menu",
      localField: "platillos.platillo_id",
      foreignField: "_id",
      as: "platillo_info"
    }
  },
  {
    $unwind: "$platillo_info"
  },
  {
    $project: {
      _id: 0,
      pedido_id: "$_id",
      platillo: "$platillo_info.nombre",
      cantidad: "$platillos.cantidad"
    }
  }
]);




