/**
 * @swagger
 *  components:
 *      schemas:
 *          storeMovie:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                      type: string
 *                      description:
 *                  description:
 *                      type: string
 *                      description:
 *                  rate:
 *                      type: number
 *                      description:
 *                  director:
 *                      type: string
 *                      description:
 *                  category:
 *                      type: array
 *                      description:
 *          editMovie:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description:
 *                  description:
 *                      type: string
 *                      description:
 *                  rate:
 *                      type: number
 *                      description:
 *                  director:
 *                      type: string
 *                      description:
 *                  category:
 *                      type: array
 *                      description:
 */
/**
 * @swagger
 *  tags:
 *       name: MovieManager
 *       description: user authorization
 */
/**
 * @swagger
 *  /movie/storeMovie:
 *      post:
 *          tags: [MovieManager]
 *          summary: add movie
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/storeMovie'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/storeMovie'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              401:
 *                  description: un authorization
 *              500:
 *                  description: Internal Server Error
 */
/**
 * @swagger
 *  /movie/get/{id}:
 *      get:
 *          tags: [MovieManager]
 *          summary: get movie by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: movie id
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
 * /movie/getAllMovie:
 *      get:
 *          tags: [MovieManager]
 *          summary: get All movies
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
 *  /movie/edit/{id}:
 *      patch:
 *          tags: [MovieManager]
 *          summary: get movie by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: movie id
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/editMovie'
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
 *  /movie/delete/{id}:
 *      delete:
 *          tags: [MovieManager]
 *          summary: delete movie by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *                  description: movie id
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
