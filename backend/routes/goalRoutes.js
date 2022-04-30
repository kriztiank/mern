const express = require('express')
const router = express.Router()
// const {
//   getGoals,
//   setGoal,
//   updateGoal,
//   deleteGoal,
// } = require('../controllers/goalController')

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get goals'})
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create goal'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

// const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
