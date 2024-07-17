

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            starships: [],
            character: [],
            planets: [],
            favorites: "",
            myFavorites: []
        },
        actions: {
            // Use getActions to call a function within a function
            changeFavorites: (titulo) => {
                setStore({ favorites: titulo });

                const store = getStore();

                if (store.myFavorites.includes(titulo)) {
                    setStore({
                        myFavorites: store.myFavorites.filter((favor) => favor !== titulo)
                    });
                } else {
                    setStore({ myFavorites: [...store.myFavorites, titulo] });
                }
            },
            deleteFavorite: (titulo) => {
                const store = getStore();
                setStore({
                    myFavorites: store.myFavorites.filter((favor) => favor !== titulo)
                });
            },
            loadSomeData: async () => {
                try {
                    
                    const [starshipsResponse, peopleResponse, planetsResponse] = await Promise.all([
                        fetch("https://www.swapi.tech/api/starships"),
                        fetch("https://www.swapi.tech/api/people"),
                        fetch("https://www.swapi.tech/api/planets")
                    ]);

                    const starshipsData = await starshipsResponse.json();
                    const peopleData = await peopleResponse.json();
                    const planetsData = await planetsResponse.json();

                    setStore({
                        starships: starshipsData.results,
                        character: peopleData.results,
                        planets: planetsData.results
                    });
                } catch (error) {
                    console.error('Error al cargar datos:', error);
                }
            }
        }
    };
};

export default getState;
