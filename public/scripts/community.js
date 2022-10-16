/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllCommunities(fields) {
    fetch('/api/communities')
        .then(showResponse)
        .catch(showResponse);
}

function createCommunity(fields) {
    fetch('/api/communities', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function joinCommunity(fields) {
    fetch(`/api/communities/join/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function leaveCommunity(fields) {
    fetch(`/api/communities/leave/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}