var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/v1/user/:id Request User information
 * @apiName GetUser
 * @apiGroup UserAPI
 *
 * @apiParam {Number} id Users unique ID.
 * @apiPermission Authorized users only
 *
 * @apiSuccess {Number} id Unique id of the User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {Object} address  Address of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       'id': 1234,
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'address': {'zipCode' : '00100'}
 *     }
 *
 * @apiError UserNotFound 404 The id of the User was not found.
 * @apiError InvalidAuthentication 403 Authentication failed.
 *
 * @apiErrorExample UserNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'error': 'UserNotFound'
 *     }
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       'error': 'Authorization failed'
 *     }
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/user/4711
 */
router.get('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

/**
 * @api {post} /api/v1/user/:id Update User information
 * @apiName UpdateUser
 * @apiGroup UserAPI
 *
 * @apiParam {Number} id Users unique ID.
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'address': {'zipCode' : '00100'}
 *     }
 * @apiHeader {String} Authorization Http basic auth.
 *
 * @apiSuccess {Number} id Unique id of the User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {Object} address  Address of the user.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       'id': 1234,
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'address': {'zipCode' : '00100'}
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'error': 'UserNotFound'
 *     }
 * @apiExample {curl} Example usage:
 *     curl -H "Content-Type: application/json" \
 *          -d "{'firstname' : 'John', 'lastname': 'Doe Foo'}" \
 *          -X POST http://localhost:3000/api/v1/user/1234
 */
router.post('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

module.exports = router;
