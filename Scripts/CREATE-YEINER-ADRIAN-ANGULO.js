db.createCollection("LabItp01")

db.LabItp01.insert( { _id:1, name: "pepe", phone: 123456, class: [ 20, 22, 25 ] } )

db.LabItp01.insertOne({_id:2, name: "juanito", phone: 654789, class: [ 10, 12, 15 ] })

db.LabItp01.insertMany( [ { _id:3, name: "carlito", phone: 639852, class: [ 11, 10] }, {
_id:4, name: "camilito", phone: 741258, class: [ 15] }, { _id:5, name: "anita", phone:
852741, class: [ 10] }, { _id:5, name: "joselito", phone: 1254896, class: [ 55, 458, 236,
20, 22, 10, 15] } ] )
db.LabItp01.find( { class: 10 } )

db.LabItp02.insertOne( { name: "carolita" } )

db.LabItp02.insertOne( { name: "carolita", information: { classroom:
"room_01", locker: 12 }, age: 25 } )

db.LabItp02.find()
