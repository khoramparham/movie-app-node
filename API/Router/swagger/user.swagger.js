/**
 * @swagger
 *  components:
 *      schemas:
 *          updateUser:
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                      description:
 *                  lastName:
 *                      type: string
 *                      description:
 *          uploadProfileImage:
 *              type: object
 *              properties:
 *                  img:
 *                      type: string
 *                      format: binary
 */
/**
 * @swagger
 *  tags:
 *       name: UserManager
 *       description: user authorization
 */
/**
 * @swagger
 *  /user/profile:
 *      get:
 *          tags: [UserManager]
 *          summary: get own user profile
 *          responses:
 *                  200:
 *                      description: success
 *                  400:
 *                      description: bad Request
 *                  401:
 *                      description: un authorization
 *                  404:
 *                      description: not found
 *                  500:
 *                      description: Internal Server Error
 */
/**
 * @swagger
 *  /user/profileByID/{id}:
 *      get:
 *          tags: [UserManager]
 *          summary: get user by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: user id
 *          responses:
 *                  200:
 *                      description: success
 *                  400:
 *                      description: bad Request
 *                  401:
 *                      description: un authorization
 *                  404:
 *                      description: not found
 *                  500:
 *                      description: Internal Server Error
 */
/**
 * @swagger
 *  /user/update:
 *      put:
 *          tags: [UserManager]
 *          summary: update own user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/updateUser'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/updateUser'
 *          responses:
 *                  200:
 *                      description: success
 *                  400:
 *                      description: bad Request
 *                  401:
 *                      description: un authorization
 *                  404:
 *                      description: not found
 *                  500:
 *                      description: Internal Server Error
 */
/**
 * @swagger
 *  /user/delete/{id}:
 *      delete:
 *          tags: [UserManager]
 *          summary: delete user by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: user id
 *          responses:
 *                  200:
 *                      description: success
 *                  400:
 *                      description: bad Request
 *                  401:
 *                      description: un authorization
 *                  404:
 *                      description: not found
 *                  500:
 *                      description: Internal Server Error
 */
/**
 * @swagger
 *  /user/update:
 *      patch:
 *          tags: [UserManager]
 *          summary: upload own image user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/uploadProfileImage'
 *          responses:
 *                  200:
 *                      description: success
 *                  400:
 *                      description: bad Request
 *                  401:
 *                      description: un authorization
 *                  404:
 *                      description: not found
 *                  500:
 *                      description: Internal Server Error
 */
