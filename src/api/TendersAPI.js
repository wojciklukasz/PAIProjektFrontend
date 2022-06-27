export const fetchActiveTenders = async() => {
    return fetch('http://localhost:3051/api/v1/tender/active')
        .then(response => response.json());
};

export const fetchPastTenders = async() => {
    return fetch('http://localhost:3051/api/v1/tender/past')
        .then(response => response.json());
};

export const fetchTender = async (id) => {
    return fetch('http://localhost:3051/api/v1/tender/' + id)
        .then(response => response.json());
};
