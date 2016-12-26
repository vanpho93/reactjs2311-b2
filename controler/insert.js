var {insertNote} = require('../db.js');
module.exports = (req, res) => {
  var {note} = req.body;
  insertNote(note, (err, result) => {
    if(err){
      return res.send(err);
    }
    res.send('Thanh cong');
  });
};
