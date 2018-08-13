var storeData = [
    {
        'state': 'Oregon',
        'stores': [
            {
                'id': 40,
                'lat': 45.517487,
                'lng': -122.676361,
                'title': 'Microsoft Store - Pioneer Place',
                'description': '300 SW Yamhill St, Portland, OR 97204',
                'phone': '(503) 265-1400',
                'url': 'https://www.microsoft.com/en-us/store/locations/or/portland/pioneer-place/store-40'
            }
        ]
    },
    {
        'state': 'Washington',
        'stores': [
            {
                'id': 6,
                'lat': 47.616798,
                'lng': -122.205101,
                'title': 'Microsoft Store - Bellevue Square Mall',
                'description': '116 Bellevue Sq, Bellevue, WA 98004',
                'phone': '(425) 519-3580',
                'url': 'https://www.microsoft.com/en-us/store/locations/wa/bellevue/bellevue-square-mall/store-6'
            },
            {
                'id': 13,
                'lat': 47.663952,
                'lng': -122.299294,
                'title': 'Microsoft Store - University Village',
                'description': '2624 NE University Village St, Seattle, WA 98105',
                'phone': '(206) 834-0680',
                'url': 'https://www.microsoft.com/en-us/store/locations/wa/seattle/university-village/store-13'
            }
        ]
    },
    {
        'state': 'British Columbia',
        'stores': [
            {
                'id': 1016,
                'lat': 49.226479,
                'lng': -122.999802,
                'title': 'Microsoft Store - Metropolis at Metrotown',
                'description': '#230 -4800 Kingsway, Burnaby BC V5H 4J2',
                'phone': '(604) 639-3520',
                'url': 'https://www.microsoft.com/en-us/store/locations/bc/burnaby/metropolis-at-metrotown/store-1016'
            },
            {
                'id': 1091,
                'lat': 49.282673,
                'lng': -123.118187,
                'title': 'Microsoft Store - Pacific Centre',
                'description': '01 West Georgia Street Vancouver, BC V7Y 1G5',
                'phone': '(604) 629-4930',
                'url': 'https://www.microsoft.com/en-us/store/locations/bc/vancouver/pacific-centre/store-1091'
            }
        ]
    },
    {
        'state': 'New York',
        'stores': [
            {
                'id': 1024,
                'lat': 42.912384,
                'lng': -78.762802,
                'title': 'Microsoft Store - Walden Galleria',
                'description': '1 Walden Galleria Ste L108, Buffalo, NY 14225 - 5134',
                'phone': '(716) 706-2280',
                'url': 'https://www.microsoft.com/en-us/store/locations/ny/buffalo/walden-galleria/store-1024'
            },
            {
                'id': 1041,
                'lat': 40.738522,
                'lng': -73.613136,
                'title': 'Microsoft Store - Roosevelt Field',
                'description': '630 Old Country Road, Space #1140A, Garden City, NY 11530 - 3611',
                'phone': '(516) 368-0060',
                'url': 'https://www.microsoft.com/en-us/store/locations/ny/garden-city/roosevelt-field/store-1041'
            },
            {
                'id': 26,
                'lat': 40.822510,
                'lng': -73.410217,
                'title': 'Microsoft Store - Walt Whitman Shops',
                'description': '160 Walt Whitman Road, Suite 1006B, Huntington Station, NY 11746 - 4160',
                'phone': '(631) 760-2340',
                'url': 'https://www.microsoft.com/en-us/store/locations/ny/huntington-station/walt-whitman-shops/store-26'
            },
            {
                'id': 1087,
                'lat': 40.760563,
                'lng': -73.975334,
                'title': 'Microsoft Store - Fifth Avenue',
                'description': '677 Fifth Avenue, New York, NY 10022 - 4210',
                'phone': '(212) 824-3100',
                'url': 'https://www.microsoft.com/en-us/store/locations/ny/new-york/fifth-avenue-/store-1087'
            },
            {
                'id': 1064,
                'lat': 43.069214,
                'lng': -76.172974,
                'title': 'Microsoft Store - Destiny USA',
                'description': '10344 Destiny USA Drive, Space #B-207, Syracuse, NY 13204 - 9016',
                'phone': '(315) 233-1080',
                'url': 'https://www.microsoft.com/en-us/store/locations/ny/syracuse/destiny-usa/store-1064'
            },
            {
                'id': 24,
                'lat': 41.031628,
                'lng': -73.759979,
                'title': 'Microsoft Store - The Westchester',
                'description': '125 Westchester Avenue, White Plains, NY 10601 - 4522',
                'phone': '(914) 323-2150',
                'url': 'https://www.microsoft.com/en-us/store/locations/ny/white-plains/the-westchester/store-24'
            }
        ]
    }
];

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}

//function encode() {
//    var obj = document.getElementById('dencoder');
//    var unencoded = obj.value;
//    obj.value = encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
//}
//function decode(encoded) {
//    var obj = document.getElementById('dencoder');
//    var encoded = obj.value;
//    obj.value = decodeURIComponent(encoded.replace(/\+/g, " "));
//}
