import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'D652196841654',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 56.30,
                orderNumber: 'B438167529426',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '7568 North Main Street'
                }
            },
            {
                _id: 2,
                total: 75.10,
                orderNumber: 'Y423761824692',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Arron Gallegos',
                    shippingAddress: '6381 South Redwood Street'
                }
            },
            {
                _id: 3,
                total: 10.60,
                orderNumber: 'E824520370619',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Conner Gallegos',
                    shippingAddress: '4385 East Briar Street'
                }
            },
            {
                _id: 4,
                total: 46.80,
                orderNumber: 'U703405680912',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Isaac Gallegos',
                    shippingAddress: '4785 East Camino Street'
                }
            },
            {
                _id: 5,
                total: 76.43,
                orderNumber: 'R435012047984',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Hunter Green',
                    shippingAddress: '6350 North Clinton Street'
                }
            },
            {
                _id: 6,
                total: 80.46,
                orderNumber: 'K564123798520',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'June Johnson',
                    shippingAddress: '8604 West Jesus Street'
                }
            },
            {
                _id: 7,
                total: 60.12,
                orderNumber: 'A462035798612',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'William Green',
                    shippingAddress: '5601 North Aithest Street'
                }
            },
        ]
    })
}