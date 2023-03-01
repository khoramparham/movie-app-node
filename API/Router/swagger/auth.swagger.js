/**
 * @swagger
 *  components:
 *      schemas:
 *          register:
 *              type: object
 *              required:
 *                  -   userName
 *                  -   password
 *                  -   email
 *                  -   mobile
 *              properties:
 *                  firstName:
 *                      type: string
 *                      description:
 *                  lastName:
 *                      type: string
 *                      description:
 *                  userName:
 *                      type: string
 *                      description:
 *                  password:
 *                      type: string
 *                      description:
 *                  email:
 *                      type: string
 *                      description:
 *                  mobile:
 *                      type: string
 *                      description: the user mobile for login/signin
 *          login:
 *              type: object
 *              required:
 *                  -   userName
 *                  -   password
 *              properties:
 *                  userName:
 *                      type: string
 *                      description:
 *                  password:
 *                      type: string
 *                      description:
 */
/**
 * @swagger
 *  tags:
 *      name: User-Authentication
 *      description: user authorization
 */
/**
 * @swagger
 *  /auth/register:
 *      post:
 *          tags: [User-Authentication]
 *          summary: register user in user panel
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/register'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/register'
 *          responses:
 *              201:
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
 *  /auth/login:
 *      post:
 *          tags: [User-Authentication]
 *          summary: login user in user panel
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/login'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/login'
 *          responses:
 *              201:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              401:
 *                  description: un authorization
 *              500:
 *                  description: Internal Server Error
 */
