# CRUD API server

## PREVIEW

> _The Used Stack:_ `nodeJS`, `TS`,

> _Development Environment Deployment Tools:_ `nodemon`, `ts-node`

> _Project Building Tools:_ `Webpack`, `WebpackCli`, `ts-loader (Webpack loader)`

> _Testing Tools:_ `Mocha`, `Chai (Chai-http)`
>
> ### PORT AND LOCALHOST
>
> You can change their in `.env` file
>
> ### BALANCER
>
> Clusters are created for each processor, and they listen on each individual port
>
> Clusters listen next ports: `[your_port + cluster_id\]`
>
> > example: your server listen `localhost:8080`, and you have 2 CPU so all clusters listen `localhost:8081` and `localhost:8082`
>
> The balancer distributes the load across all available clusters.

## START

### Single

> `npm run build` - build bundle using webpack
>
> `npm run start:dev` - development environment (start server and auto reboot)

> `npm run start:prod` - build bundle and run it (start server)

### Multi

> `npm run start:dev:multi` - development environment for each CPU (start multi CPU server and auto reboot)

> `npm run start:prod:multi` - build bundle for each CPU and run it (start multi CPU server)

### Multi

> `npm run test` - start testing scenarios

## TESTING

> USE TEST AFTER SERVER STARTING
>
> Command `npm run test` starts all scenarios. Testing has 5 scenarios:
>
> 1. `CRUD` - _Test CRUD USERS API_
>
> 2. `GET` - _Test GET USER API_
>
> 3. `POST` - _Test POST USER API_
>
> 4. `PUT` - _Test PUT USER API_
>
> 5. `DELETE` -_Test DELETE USER API_

## API

> #### GET
>
> `/users/` - get all users
>
> _Return values:_ `Array\<USER\>` or empty `ARRAY`
>
> USER:
>
> - id: `string` - **required**
> - username: `string` - **required**
> - age: `number` - **required**
> - hobbies: `Array<string>` or empty `Array` - **required**
>
> `/users/[number]` - get specific user
>
> _Return values:_ **USER**
>
> USER:
>
> - id: `string` - **required**
> - username: `string` - **required**
> - age: `number` - **required**
> - hobbies: `Array<string>` or empty `Array` - **required**

> #### POST
>
> `/users/` - add new user
>
> _Request headers_
>
> - `content-type : application/json` - **required**
>
> _Request body fields_
>
> - `username: string` - **required**
> - `age: _number` - **required**
> - `hobbies: Array\<string\>` or empty `Array` - **required**
>
> _Return values:_ **USER**
>
> USER:
>
> - id: `string` - **required**
> - username: `string` - **required**
> - age: `number` - **required**
> - hobbies: `Array<string>` or empty `Array` - **required**

> #### PUT
>
> `users/[number]` - update user
>
> _Request headers_
>
> - `content-type : application/json` - **required**
>
> _Request body fields_
>
> - `username: string` - **required**
> - `age: _number` - **required**
> - `hobbies: Array\<string\>` or empty `Array` - **required**
>
> _Return values:_ **USER**
>
> USER:
>
> - id: `string` - **required**
> - username: `string` - **required**
> - age: `number` - **required**
> - hobbies: `Array<string>` or empty `Array` - **required**

> #### DELETE
>
> `users/[number]` - delete user
