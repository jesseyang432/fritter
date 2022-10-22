/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */
  
  function addUpvote(fields) {
    fetch(`/api/upvotes/${fields.id}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

  function viewUpvotesByFreet(fields) {
    fetch(`/api/upvotes/${fields.id}`)
      .then(showResponse)
      .catch(showResponse);
  }

  function removeUpvote(fields) {
    fetch(`/api/upvotes/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }