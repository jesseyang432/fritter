# Fritter


## API routes

The following api routes have been implemented or are planning to be implemented:

#### `GET /`

This renders the `index.html` file that will be used to interact with the backend

#### `POST /api/users/session` - Sign in user

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with user's details (without password)

**Throws**

- `403` if the user is already logged in
- `400` if username or password is not in correct format format or missing in the req
- `401` if the user login credentials are invalid

#### `DELETE /api/users/session` - Sign out user

**Returns**

- A success message

**Throws**

- `403` if user is not logged in

#### `POST /api/users` - Create an new user account

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with the created user's details (without password)

**Throws**

- `403` if there is a user already logged in
- `400` if username or password is in the wrong format
- `409` if username is already in use

#### `PUT /api/users` - Update a user's profile

**Body** _(no need to add fields that are not being changed)_

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message
- An object with the update user details (without password)

**Throws**

- `403` if the user is not logged in
- `400` if username or password is in the wrong format
- `409` if the username is already in use

#### `DELETE /api/users` - Delete user

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in

#### `POST /api/communities` - Create a new community

**Body**

- name {string} - The name of the community

**Returns**

- A success message
- An object with the created community

**Throws**

- `403` if the user is not logged in
- `409` If the community name already exists

#### `GET /api/communities` - Get all the communities

**Returns**

- A success message
- An array of all communities

#### `PUT /api/communities/join/:communityId?` - Join a community

**Returns**

- A success message
- An object of the joined community

**Throws**

- `403` if the user is not logged in
- `404` if `communityId` is not a valid community
- `400` if user is already in the community

#### `PUT /api/communities/leave/:communityId?` - Leave a community

**Returns**

- A success message
- An object of the left community

**Throws**

- `403` if the user is not logged in
- `404` if `communityId` is not a valid community
- `400` if user isn’t in the community

#### `GET /api/communities/mine` - Get all communities user is part of

**Returns**

- A success message
- An array of all communities user is a part of

**Throws**

- `403` if the user is not logged in


#### `GET /api/freets` - Get all the freets

**Returns**

- An array of all freets sorted in descending order by date modified

#### `GET /api/freets?author=USERNAME` - Get freets by author

**Returns**

- An array of freets created by user with username `author`

**Throws**

- `400` if `author` is not given
- `404` if `author` is not a recognized username of any user

#### `GET /api/freets/community/:community` - Get freets by community

**Returns**

- An array of freets posted in community with name `community`

**Throws**

- `403` if user is not logged in
- `400` if `community` is not given
- `404` if `community` is not a recognized name of any community
- `403` if user is not a member of the community

#### `POST /api/freets` - Create a new freet

**Body**

- `content` _{string}_ - The content of the freet
- `community` _{string}_ - Optional name of community to post in
- `parent` _{string}_ - Optional id of freet this one is replying to
- `safety` _{string}_ - The safety level of the freet (SFW, NSFW, or anything else is nullified)

**Returns**

- A success message
- A object with the created freet

**Throws**

- `403` if the user is not logged in
- `404` if `community` is not a recognized name of any community
- `403` if user is not a member of the community
- `404` if `parent` is not a valid Freet id
- `409` if `parent` is not a Freet within community `community`
- `400` If the freet content is empty or a stream of empty spaces
- `413` If the freet content is more than 140 characters long

#### `DELETE /api/freets/:freetId?` - Delete an existing freet (and all replies)

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `403` if the user is not the author of the freet
- `404` if the freetId is invalid

#### `PUT /api/freets/:freetId?` - Update an existing freet

**Body**

- `content` _{string}_ - The new content of the freet

**Returns**

- A success message
- An object with the updated freet

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid
- `403` if the user is not the author of the freet
- `400` if the new freet content is empty or a stream of empty spaces
- `413` if the new freet content is more than 140 characters long

#### `POST /api/upvotes/:freetId?` - Upvote existing freet (and remove potential downvote)

**Returns**

- A success message
- An object with the upvote

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid
- `400` if the user has already upvoted the freet

#### `DELETE /api/upvotes/:freetId?` - Remove existing upvote on a freet

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid
- `400` if the user has not upvoted the freet

#### `GET /api/upvotes/:freetId?` - Get upvotes on existing freet

**Returns**

- A success message
- An array of upvotes on the freet

**Throws**

- `404` if the freetId is invalid

#### `POST /api/downvotes/:freetId?` - Downvote existing freet (and remove potential upvote)

**Returns**

- A success message
- An object with the downvote

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid
- `400` if the user has already downvoted the freet

#### `DELETE /api/downvotes/:freetId?` - Remove existing downvote on a freet

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid
- `400` if the user has not downvoted the freet

#### `GET /api/downvotes/:freetId?` - Get downvotes on existing freet

**Returns**

- A success message
- An array of downvotes on the freet

**Throws**

- `404` if the freetId is invalid

#### `GET /api/reputation?community=NAME&username=USERNAME` - Get reputation of user within a community

**Returns**

- A success message
- A reputation object

**Throws**

- `404` if `community` is not a valid community name
- `404` if `username` is not a valid username

#### `GET /api/safety/:freetId?` - Get safety of an existing freet

**Returns**

- A success message
- A safety object

**Throws**

- `404` if the freetId is invalid