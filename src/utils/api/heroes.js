const ACCESSTOKEN = 2066213396908082;
const getHeroes = async (amount) => {
    const responseList = []
    for (let i = 1; i <= amount; i++) {
        const response = await fetch(`https://www.superheroapi.com/api.php/${ACCESSTOKEN}/${i}`);
        const data = await response.json();
        responseList.push({
            id: data.id,
            name: data.name,
            image: data.image.url,
            fullName: data.biography['full-name'],
            intelligence: data.powerstats.intelligence,
            strength: data.powerstats.strength,
            speed: data.powerstats.speed,
            durability: data.powerstats.durability,
            power: data.powerstats.power,
            combat: data.powerstats.combat
        })
    }
    console.log(responseList)
    return responseList
}

export default getHeroes;