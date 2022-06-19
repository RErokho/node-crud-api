# CRUD API server

## PREVIEW

> _The Used Stack:_ **nodeJS**, **TS**,

> _Development Environment Deployment Tools:_ **nodemon**, **ts-node**

> _Project Building Tools:_ **Webpack**, **WebpackCli**, **ts-loader** _(Webpack loader)_

> _Testing Tools:_ **Mocha**, **Chai** _(Chai-http)_
>
> ### PORT AND LOCALHOST
>
> You can change their in _.env_ file
>
> ### BALANCER
>
> Clusters are created for each processor, and they listen on each individual port
>
> Clusters listen next ports: **\[your_port + cluster_id\]**
>
> > example: your server listen **localhost:8080**, and you have 2 CPU so all clusters listen **localhost:8081** and **localhost:8082**
>
> The balancer distributes the load across all available clusters.

## START

### Single

> _npm run build_ - build bundle using webpack
>
> _npm run start:dev_ - development environment (start server and auto reboot)

> _npm run start:prod_ - build bundle and run it (start server)

### Multi

> _npm run start:dev:multi_ - development environment for each CPU (start multi CPU server and auto reboot)

> _npm run start:prod:multi_ - build bundle for each CPU and run it (start multi CPU server)

### Multi

> _npm run test_ - start testing scenarios

## API

> #### GET
>
> **users/** - get all users
>
> _Return values:_ **Array\<USER\>** or empty **ARRAY**
>
> USER:
>
> - **id**: _string_ - **required**
> - **username**: _string_ - **required**
> - **age**: _number_ - **required**
> - **hobbies**: _Array\<string\>_ or empty Array - **required**
>
> **users/[number]** - get specific user
>
> _Return values:_ **USER**
>
> USER:
>
> - **id**: _string_ - **required**
> - **username**: _string_ - **required**
> - **age**: _number_ - **required**
> - **hobbies**: _Array\<string\>_ or empty Array - **required**

> #### POST
>
> **users/** - add new user
>
> _Request headers_
>
> - **content-type** : _application/json_ - **required**
>
> _Request body fields_
>
> - **username**: _string_ - **required**
> - **age**: _number_ - **required**
> - **hobbies**: _Array\<string\>_ or empty Array - **required**
>
> _Return values:_ **USER**
>
> USER:
>
> - **id**: _string_ - **required**
> - **username**: _string_ - **required**
> - **age**: _number_ - **required**
> - **hobbies**: _Array\<string\>_ or empty Array - **required**

> #### PUT
>
> **users/[number]** - update user
>
> _Request headers_
>
> - **content-type** : _application/json_ - **required**
>
> _Request body fields_
>
> - **username**: _string_ - **required**
> - **age**: _number_ - **required**
> - **hobbies**: _Array\<string\>_ or empty Array - **required**
>
> _Return values:_ **USER**
>
> USER:
>
> - **id**: _string_ - **required**
> - **username**: _string_ - **required**
> - **age**: _number_ - **required**
> - **hobbies**: _Array\<string\>_ or empty Array - **required**

> #### DELETE
>
> **users/[number]** - delete user

## TESTING

> Command **npm run start** starts all scenarios. Testing has 5 scenarios:
>
> 1. **CRUD** - _Test CRUD USERS API_
>
> 2. **GET** - _Test GET USER API_
>
> 3. **POST** - _Test POST USER API_
>
> 4. **PUT** - _Test PUT USER API_
>
> 5. **DELETE** -_Test DELETE USER API_
