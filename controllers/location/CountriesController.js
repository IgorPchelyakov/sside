import { Country, Region, City } from "../../models/location/CountryRegionCity.js";


const CountriesController = {
    getAllCountries: async (req, res) => {
        try {
            const countries = await Country.findAll()

            return res.status(200).send({ message: 'Запит виконано успішно', countries: countries })
        } catch (error) {
            console.log('Помилка обробки запиту:', error)
            return res.status(500).send('Виникла помилка на сервері')
        }
    },
    addCountry: async (req, res) => {
        try {
            const { name, countryCode, capital, timeZone, isActive } = req.body;

            const newCountry = await Country.create({
                name,
                countryCode,
                capital,
                timeZone,
                isActive,
            })
            return res.status(200).send({ message: 'Країна успішно додана', country: newCountry })
        } catch (error) {
            console.log('Помилка обробки запиту:', error)
            return res.status(500).send('Виникла помилка на сервері')
        }
    },
    editCountry: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, countryCode, capital, timeZone, isActive } = req.body;

            const country = await Country.findByPk(id);
            if (!country) {
                return res.status(404).send({ message: 'Країна не знайдена' });
            }

            country.name = name;
            country.countryCode = countryCode;
            country.capital = capital;
            country.timeZone = timeZone;
            country.isActive = isActive;

            await country.save();

            return res.status(200).send({ message: 'Країна успішно оновлена', country });
        } catch (error) {
            console.log('Помилка обробки запиту:', error);
            return res.status(500).send('Виникла помилка на сервері');
        }
    },
    deleteCountry: async (req, res) => {
        try {
            const { id } = req.params;

            const country = await Country.findByPk(id, {
                include: {
                    model: Region,
                    include: City
                }
            });

            if (!country) {
                return res.status(404).send({ message: 'Країна не знайдена' });
            }

            await City.destroy({ where: { countryId: country.id } });


            await country.destroy();

            return res.status(200).send({ message: 'Країна та пов\'язані з нею регіони та міста успішно видалені' });
        } catch (error) {
            console.log('Помилка обробки запиту:', error);
            return res.status(500).send('Виникла помилка на сервері');
        }
    },
};

export default CountriesController;