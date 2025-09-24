const express= require('express')
const router = express.Router();
const auth = require('../middlewares/authHandler')

const {createNote, getNotes,updateNote,deleteNote} = require('../controllers/notesController')

router.use(auth);

router.post('/', createNote);
router.get('/',getNotes)
router.delete('/:id', deleteNote)
router.put('/:id', updateNote)

module.exports = router;