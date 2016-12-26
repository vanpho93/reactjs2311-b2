var {updateNote} = require('../db.js');
module.exports = (req, res) => {
  var {id, content} = req.body;
  updateNote(id, content, (err, result) => {
    if(err) return res.send(err);
    res.send('Thanh cong');
  });
};
