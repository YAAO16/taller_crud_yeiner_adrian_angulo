db.LabItp01 .deleteOne( { name: "carlito" } )

db.grades.deleteOne( { student_id: 0 } )

db.grades.deleteMany( { student_id: 0 } )

db.grades.remove( { student_id: 1 }, {justOne: true} )

db.grades.remove( { student_id: 1 } )

db.grades.remove( { } )

db.grades.drop()"