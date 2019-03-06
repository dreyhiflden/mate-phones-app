import phones from '../../phones/phones.js';

class PhoneService {
    static getAll() {
        return phones;
    }

    static getFiltered(query) {
        return phones.filter(phone => {
            return phone.name.toLowerCase().includes(query.toLowerCase());
        });
    }

    static getSorted(value) {
        if (value === 'age') {
            return phones.sort((a, b) => a.age - b.age);
        }

        if (value === 'name') {
            return phones.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }

                if (a.name > b.name) {
                    return 1;
                }

                return 0;
            });
        }
    }

    static async getPhone(id) {
        return (await import(`../../phones/${id}.js`)).default;
    }
}

export default PhoneService;
