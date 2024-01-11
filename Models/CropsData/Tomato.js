const mongoose = require('mongoose');

const tomatoSchema = new mongoose.Schema({
    crop: 'Tomato',
    season: {
        summer: true,
        Fall: true,
        Winter: true,
        Monsoon: true,
    },
    pests: [
        {
            name: 'Whiteflies',
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: 'Hornworms',
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: 'Tomato psyllids',
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: 'Aphids',
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: 'Flea beetles',
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: 'Tomatoes russet mites',
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        }
    ],
    weed: [
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
    ],
    diseases: [
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
        {
            name: String,
            images: {
                image1: String,
                image2: String,
                image3: String,
                image4: String,
                image5: String,
            },
            description: String,
        },
    ],
    span: {
        min: 60,
        max: 80,
    },
    primary_nutrients: [
        {
            N: {
                min: 1,
                max: 3,
            },
        },
        {
            P: {
                min: 0.3,
                max: 0.5,
            },
        },
        {
            K: {
                min: 1.5,
                max: 3,
            },
        },
        {
            C: {
                min: 45,
                max: 50,
            }
        }
    ],
    secondary_nutrients: [
        {
           Ca: {
            min: 0.2,
            max: 0.5,
           },
        },
        {
            Mg: {
                min: 0.2,
                max: 0.5,
            },
        },
        {
            S: {
                min: 0.2,
                max: 0.5,
            }
        }
    ],
    micro_nutrients: {
        min: 0.12,
        max: 0.15,
    }
});

module.exports = mongoose.model('tomato', tomatoSchema);