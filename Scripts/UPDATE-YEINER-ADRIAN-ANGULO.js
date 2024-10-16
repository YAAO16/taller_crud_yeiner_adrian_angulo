db.LabItp01 .updateOne( { _id: 7 }, { $set: { virtues: ['cheerful', 'funny',
'comprehensive', 'sociable', 'respectful'] } } )

db.LabItp01 .updateOne( { _id: 7 }, { $set: { information: { classroom:
"room_A", locker: 15 }, age: 18 } } )
db.LabItp01 .updateOne( { _id: 7 }, { $set: { virtues: ['cheerful', 'funny',
'comprehensive', 'sociable', 'respectful'] },
$currentDate: { lastModified: true } } )

db.LabItp01 .updateOne( { _id: 7 }, { $set: { information: { classroom:
"room_A", locker: 15 }, age: 18 },
 $currentDate: { lastModified: true } } )
 
db.LabItp01 .updateOne( { _id: 10 }, { $set: { name: "Joan", age: 19, virtues:
[], information: {} }, $currentDate: { lastModified: true } }, { upsert: true } )

db.LabItp01.updateMany({ _id: { $in: [1, 2, 3, 4, 5, 6] } }, { $set: { virtues: ['cheerful'] } })

db.LabItp01.updateMany({}, { $set: { status: 'A' } })

db.LabItp01.updateMany({ name: { $in: ['pepe', 'camilito'] } }, { $set: { role: 'student' } })


