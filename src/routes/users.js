const router = require('express-promise-router')();

const {user} = require('../controllers');

router.route('/').post(user.create);
router.route('/:id').put(user.update);
router.route('/:id').delete(user.delete);
router.route('/:id').get(user.get);
router.route('/').get(user.getAll);


module.exports = router;
