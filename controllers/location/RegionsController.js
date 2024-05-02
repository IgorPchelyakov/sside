import { City, Region } from "../../models/location/CountryRegionCity.js";


const RegionsController = {
    getAllRegions: async (req, res) => {
        try {
            const regions = await Region.findAll()

            return res.status(200).send({ message: 'Запит виконано успішно', regions: regions })
        } catch (error) {
            console.log('Помилка обробки запиту:', error)
            return res.status(500).send('Виникла помилка на сервері')
        }
    },
    getRegionsByCountryId: async (req, res) => {
        try {
            const { countryId } = req.params;

            const regions = await Region.findAll({ where: { countryId: countryId } });

            return res.status(200).send({ message: 'Запит виконано успішно', regions: regions })
        } catch (error) {
            console.log('Помилка обробки запиту:', error)
            return res.status(500).send('Виникла помилка на сервері')
        }
    },
    addRegion: async (req, res) => {
        try {
            const { name, countryId, administrativeStatus, regionCode, isActive } = req.body;

            const newRegion = await Region.create({
                name,
                countryId,
                administrativeStatus,
                regionCode,
                isActive,
            })
            return res.status(200).send({ message: 'Регіон успішно додано', region: newRegion })
        } catch (error) {
            console.log('Помилка обробки запиту:', error)
            return res.status(500).send('Виникла помилка на сервері')
        }
    },
    editRegion: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, administrativeStatus, regionCode, isActive } = req.body;

            const region = await Region.findByPk(id);
            if (!region) {
                return res.status(404).send({ message: 'Регіон не знайдено' });
            }

            region.name = name;
            region.regionCode = regionCode;
            region.administrativeStatus = administrativeStatus;
            region.isActive = isActive;

            await region.save();

            return res.status(200).send({ message: 'Регіон успішно оновлено', region });
        } catch (error) {
            console.log('Помилка обробки запиту:', error);
            return res.status(500).send('Виникла помилка на сервері');
        }
    },
    deleteRegion: async (req, res) => {
        try {
            const { id } = req.params;

            const region = await Region.findByPk(id);
            if (!region) {
                return res.status(404).send({ message: 'Регіон не знайдено' });
            }

            await City.destroy({ where: { regionId: id } });

            await region.destroy();

            return res.status(200).send({ message: 'Регіон та всі його города успішно видалено' });
        } catch (error) {
            console.log('Помилка обробки запиту:', error);
            return res.status(500).send('Виникла помилка на сервері');
        }
    },
};

export default RegionsController;