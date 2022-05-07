const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// ANOTHER SYNTAX TO CLEAN UP THE ROUTES
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

// ROUTNG SYNTAX EXAMPLE
// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

// TESTING START - now imported from goalController.js
// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'Get goals' })
// })

// router.post('/', (req, res) => {
//   res.status(200).json({ message: 'Create goal' })
// })

// router.put('/:id', (req, res) => {
//   res.status(200).json({ message: `Update goal ${req.params.id}` })
// })

// router.delete('/:id', (req, res) => {
//   res.status(200).json({ message: `Delete goal ${req.params.id}` })
// })
// TESTING END

module.exports = router
