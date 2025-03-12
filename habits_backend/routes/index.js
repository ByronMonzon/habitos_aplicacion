var express = require('express');
var router = express.Router();
const Habit = require('../models/Habit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habits', async (req, res) => {
  try {
      const habits = await Habit.find();
      res.json(habits);
  } catch (err) {
      res.status(500).json({ message: 'Error al obtener los hábitos' });
  }
});
router.post('/habits', async (req, res) => {
  try {
      const { title, description } = req.body;
      const habit = new Habit({ title, description });
      await habit.save();
      res.json(habit);
  } catch (err) {
      res.status(400).json({ message: 'Error al crear el hábito'});
  }
});

router.delete('/habits/:id', async (req, res) => {
  try {
      await Habit.findByIdAndDelete(req.params.id);
      res.json({ message: 'Hábito eliminado correctamente' });
  } catch (err) {
      res.status(500).json({ message: 'Error al eliminar el hábito'});
  }
});

router.put('/habits/:id', async (req, res) => {
  try {
      const habitAc = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(habitAc);
  } catch (err) {
      res.status(400).json({ message: 'Error al actualizar el hábito', error });
  }
});

module.exports = router;
