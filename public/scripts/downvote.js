/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */
  
  function addDownvote(fields) {
    fetch(`/api/downvotes/${fields.id}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

  function viewDownvotesByFreet(fields) {
    fetch(`/api/downvotes/${fields.id}`)
      .then(showResponse)
      .catch(showResponse);
  }

  function removeDownvote(fields) {
    fetch(`/api/downvotes/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }