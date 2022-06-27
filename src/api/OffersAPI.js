export const fetchOffersForTender = async(id) => {
    return fetch('http://localhost:3051/api/v1/offer/' + id)
        .then(response => response.json());
};