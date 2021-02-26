const fetch = require('node-fetch');

const getAllUsers = async data => {
    const response = await fetch('http://185.129.2.58:8997/v2/getAllUsers.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const getInfo  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v2/requestData.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const userRegister = async data => {
    const response =  await fetch('http://185.129.2.58:8997/v2/userRegister.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const logIn = async data => {
    const response = await fetch('http://185.129.2.58:8997/v2/userLogin.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const getTasks = async data => {
    const response = await fetch('http://185.129.2.58:8997/v2/getMyNewTasksById.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

module.exports = {
    userRegister,
    getAllUsers,
    getTasks,
    getInfo,
    logIn,
}