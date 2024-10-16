db.grades.find( { student_id: 2 } )

db.grades.find( { "scores.0.score": { $lte: 10 } } )

db.grades.find( { "scores.4.score": { $lte: 10 } } )

db.grades.find( { "scores.5.score": { $lte: 10 } } )

db.grades.find( { "scores.6.score": { $lte: 10 } } )

db.grades.find( { "scores.0.score": { $gte: 60, $lte: 61 } } )

db.grades.find( { "scores.0.score": { $gte: 60, $lte: 61 } } ).sort( { student_id: 1} )

db.grades.find( { student_id: 2, class_id: 24 } )

db.grades.find( { class_id: 20, $and: [ {"scores.0.score": { $gte: 15 } }, {"scores.0.score": { $lte: 30 } } ] } )

db.grades.find( { scores: { $elemMatch: { type: 'quiz', score: { $gte: 50 } } } } )

db.grades.find( { scores: { $elemMatch: { type: 'exam', score: { $gte: 50 } } } } )

db.Narcos.find( { runtime: { $gte: 55 } }, { _id:0, name:1, season:1, number:1 } )

db.Narcos.find( { runtime: { $gte: 15 } }, { _id:0, season:1, number:1 } ).sort( {season:1, number:-1 } )

db.Narcos.find( { season: { $type: 'number' } } )

db.Narcos.find( { rating: { $exists: 1 } } )

db.Narcos.find( { rating: { $exists: 1 }, rating: { $type: "string" } } )

db.grades.distinct("student_id")

db.grades.countDocuments()
