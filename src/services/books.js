export const getBooks = () => {
    return fetch("https://fakerapi.it/api/v1/books?_quantity=20")
        .then(async (res) => {
            return await res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}