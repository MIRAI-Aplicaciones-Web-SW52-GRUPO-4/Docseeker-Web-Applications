import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const news = ref([
    {
                    id: 0,
                    image: "https://picsum.photos/id/230/600/300",
                    title: "titulo 1we",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 1,
                    image: "https://picsum.photos/id/231/600/300",
                    title: "titulo 2",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 2,
                    image: "https://picsum.photos/id/232/600/300",
                    title: "titulo 3",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 3,
                    image: "https://picsum.photos/id/233/600/300",
                    title: "titulo 4",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 4,
                    image: "https://picsum.photos/id/234/600/300",
                    title: "titulo 5",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 5,
                    image: "https://picsum.photos/id/235/600/300",
                    title: "titulo 6",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 6,
                    image: "https://picsum.photos/id/236/600/300",
                    title: "titulo 7",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 7,
                    image: "https://picsum.photos/id/237/600/300",
                    title: "titulo 8",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 8,
                    image: "https://picsum.photos/id/238/600/300",
                    title: "titulo 9",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 9,
                    image: "https://picsum.photos/id/239/600/300",
                    title: "titulo 10",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 10,
                    image: "https://picsum.photos/id/240/600/300",
                    title: "titulo 11",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                },
                {
                    id: 11,
                    image: "https://picsum.photos/id/241/600/300",
                    title: "titulo 12",
                    description: "jshkadjhk",
                    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sunt repellendus, veritatis libero perspiciatis vero nobis similique quos quasi sapiente, error magni exercitationem nulla temporibus ad asperiores, doloribus assumenda optio.",
                    views: 12742
                }
    ])
  const patients = ref([
    {
        id: 0,
        name: "Martin Vizcarra",
        DNI: "6723518",
        genre: "Male",
        birthday: "27/12/1999",
        email: "correo@gmail.com",
        cell1: "987654321",
        cell2: "917383464",
        password: "contrasupersecreta",
        photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
    },
    {
        id: 1,
        name: "Luis Sanchez Gomez",
        DNI: "125536",
        genre: "Male",
        birthday: "07/02/1959",
        email: "correo1@gmail.com",
        cell1: "334712124",
        cell2: "917383464",
        password: "contrasupersecreta123",
        photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
    },
    {
        id: 2,
        name: "Nancy Elliott",
        DNI: "6723518",
        genre: "Female",
        birthday: "20/11/1967",
        email: "email@gmail.com",
        cell1: "987654321",
        cell2: "917383464",
        password: "contr124asupersecreta",
        photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
    },
    {
        id: 3,
        name: "Martha Habla",
        DNI: "09182353",
        genre: "Female",
        birthday: "12/12/1912",
        email: "gmail@gmail.com",
        cell1: "345772341",
        cell2: "94562345",
        password: "contrahypersupersecreta",
        photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
    },
    {
        id: 4,
        name: "Loky Vizcarra",
        DNI: "67223488",
        genre: "Male",
        birthday: "31/05/2000",
        email: "mail@gmail.com",
        cell1: "345623453",
        cell2: "945671231",
        password: "passwordupersecreta",
        photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
    }
  ])
  const medicalInformation = ref([
    {
        id: 0,
        idPatient: 0,
        height: 1.72,
        weight: 70.2,
        bodyMass: 32,
        allergies: [
            {
                id: 0,
                allergie: "Penicillin and derivatives"
            },
            {
                id: 1,
                allergie: "Cats and other felines"
            },
            {
                id: 2,
                allergie: "Insulin"
            },
            {
                id: 3,
                allergie: "Peanut"
            }
        ],
        pathologicals: [
            {
                id: 0,
                pathological: "Arterial hypertension"
            },
            {
                id: 1,
                pathological: "Gonorrhea"
            },
            {
                id: 2,
                pathological: "Cancer"
            },
            {
                id: 3,
                pathological: "AIDS"
            }
        ]
    },
    {
        id: 1,
        idPatient: 1,
        height: 1.64,
        weight: 56.4,
        bodyMass: 29,
        allergies: [],
        pathologicals: [
            {
                id: 0,
                pathological: "Cancer"
            }
        ]
    },
    {
        id: 2,
        idPatient: 2,
        height: 1.52,
        weight: 70.2,
        bodyMass: 35,
        allergies: [
            {
                id: 0,
                allergie: "Penicillin and derivatives"
            },
            {
                id: 1,
                allergie: "Cats and other felines"
            },
            {
                id: 2,
                allergie: "Insulin"
            },
            {
                id: 3,
                allergie: "Peanut"
            },
            {
                id: 4,
                allergie: "Dogs"
            }
        ],
        pathologicals: [
            {
                id: 0,
                pathological: "Arterial hypertension"
            },
            {
                id: 1,
                pathological: "Gonorrhea"
            },
            {
                id: 2,
                pathological: "Cancer"
            }
        ]
    },
    {
        id: 3,
        idPatient: 3,
        height: 1.50,
        weight: 49.2,
        bodyMass: 22,
        allergies: [
            {
                id: 0,
                allergie: "Penicillin and derivatives"
            },
            {
                id: 1,
                allergie: "Cats and other felines"
            },
            {
                id: 2,
                allergie: "Insulin"
            },
            {
                id: 3,
                allergie: "Peanut"
            },
            {
                id: 4,
                allergie: "Insulin"
            },
            {
                id: 5,
                allergie: "Peanut"
            }
        ],
        pathologicals: [
            {
                id: 0,
                pathological: "Arterial hypertension"
            },
            {
                id: 1,
                pathological: "Gonorrhea"
            },
            {
                id: 2,
                pathological: "Milk"
            },
            {
                id: 3,
                pathological: "AIDS"
            }
        ]
    },
])
  const doctors = ref([{
    id: 0,
    name: "Jose Miguel",
    area: "Dentist",
    description: "A responsible doctor who always tries to help those who need it.",
    patients: 345,
    years: 25,
    age: 54,
    cost: 70.23,
      photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
    education: [
      {
      id: 0,
      name: "PUCP"
      },
      {
        id: 1,
        name: "UPC"
      }
    ],
    hoursAvailable: [
        {
            id: 0,
            hours: "9:00 AM - 10:00 AM"
        },
        {
            id: 1,
            hours: "12:00 PM - 14:00 PM"
        },
        {
            id: 2,
            hours: "15:30 PM - 17:00 PM"
        },
        {
            id: 3,
            hours: "17:00 PM - 18:30 PM"
        },
        {
            id: 4,
            hours: "20:00 PM - 21:00 PM"
        }
    ],

  },
  {
    id: 1,
    name: "Nancy Monica",
    area: "Ajkjksd",
    description: "Lorem asjkhksjadhkjashdkjhwkjdkdwajk",
    patients: 45,
    years: 15,
    age: 70,
      photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
    cost: 700.00,
    education: [
      {
      id: 0,
      name: "SAN MARCOS"
      },
      {
        id: 1,
        name: "ALAS PERUANAS"
      }
    ],
    hoursAvailable: [
        {
            id: 0,
            hours: "13:00 PM - 16:00 PM"
        },
        {
            id: 1,
            hours: "18:00 PM - 20:00 PM"
        }
    ]
  },
  {
    id: 2,
    name: "Jose Luis",
    area: "Dent3ista",
    description: "Lorem asjkhksjadhkjashdkjhwkjdkdwajk",
    patients: 5,
    years: 235,
      photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
    age: 64,
    cost: 21.11,
    education: [
      {
      id: 0,
      name: "LA CALLE"
      }
    ],
    hoursAvailable: [
        {
            id: 0,
            hours: "9:00 AM - 10:00 AM"
        },
        {
            id: 1,
            hours: "12:00 PM - 14:00 PM"
        },
        {
            id: 2,
            hours: "15:30 PM - 17:00 PM"
        },
        {
            id: 3,
            hours: "17:00 PM - 18:30 PM"
        },
        {
            id: 4,
            hours: "20:00 PM - 21:00 PM"
        },
        {
            id: 5,
            hours: "21:00 PM - 23:00 PM"
        }
    ]
  },
  {
    id: 3,
    name: "Miguel Luis",
    area: "Psicologo",
    description: "Loreesdfm asjkhksjadhkjashdkjhwkjdkdwajk",
    patients: 15,
    years: 295,
    age: 13,
      photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
    cost: 10.00,
    education: [
      {
      id: 0,
      name: "SENATI"
      },
      {
        id: 1,
        name: "waaaa"
      }
    ],
    hoursAvailable: [
        {
            id: 0,
            hours: "9:00 AM - 10:00 AM"
        },
        {
            id: 1,
            hours: "17:00 PM - 18:30 PM"
        },
        {
            id: 2,
            hours: "20:00 PM - 21:00 PM"
        }
    ] 
  },
  {
    id: 4,
    name: "Jonatan Mondragon",
    area: "Periodista",
    description: "Lshdkjhwkjdkdwajk",
    patients: 211,
    years: 15,
    age: 70,
      photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
    cost: 123.23,
    education: [
      {
      id: 0,
      name: "CSV"
      },
      {
        id: 1,
        name: "MALA"
      }
    ],
    hoursAvailable: [
        {
            id: 0,
            hours: "06:00 AM - 08:00 AM"
        },
        {
            id: 1,
            hours: "12:00 PM - 13:00 PM"
        },
        {
            id: 2,
            hours: "14:30 PM - 15:00 PM"
        },
        {
            id: 3,
            hours: "18:00 PM - 20:30 PM"
        }
    ] 
  }])
  const prescriptions = ref([
    {
        id: 0,
        idPatient: 0,
        dateIssue: "10/05/2018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a aaalot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["14:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 1,
        idPatient: 1,
        dateIssue: "14/02/2018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a loooooooooooooooot Rest your voice too.",
        drink: ". Liquids keasl, which can dehydrate you.",
        food: ". Muchas hamburguesa",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
            ,
            {
                id: 2,
                medicine: "Masds - 4 Sachets"
            }
        ],
        numberDose: 1,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 2,
        idPatient: 2,
        dateIssue: "01/05/2008",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Lsade and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honethroat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 3,
        idPatient: 0,
        dateIssue: "27/05/2020",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["Before Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 4,
        idPatient: 0,
        dateIssue: "20/05/2318",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 5,
        idPatient: 1,
        dateIssue: "13/05/1018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 6,
        idPatient: 2,
        dateIssue: "18/05/4018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 7,
        idPatient: 2,
        dateIssue: "11/05/2018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    }
])

const dates = ref([
    {
        id: 0,
        idPatient: 0,
        doctorId: 0,
        date: "2022-10-14",
        hourId: 0,
    },
    {
        id: 1,
        idPatient: 2,
        doctorId: 0,
        date: "2022-10-14",
        hourId: 1,
    },
    {
        id: 2,
        idPatient: 1,
        doctorId: 3,
        date: "2022-10-15",
        hourId: 1,
    },
    {
        id: 3,
        idPatient: 3,
        doctorId: 1,
        date: "2022-10-15",
        hourId: 1,
    }
])

const reviews = ref([
    {
        id: 0,
        profilePhotoUrl: "../../src/assets/images/Camila Hern??ndez image.jpg",
        customerName: "Camila Hern??ndez",
        customerReview: "Very good specialist. Help me with every question I had. I would definetely recommen it!!!",
        customerScore: 4,
        idPatient: 0,
        idDoctor: 2
      },
      {
        id: 1,
        profilePhotoUrl: "../../src/assets/images/Alessandro Ramirez image.jpg",
        customerName: "Alessandro Ramirez",
        customerReview: "Such a great doctor. She was very kind at all times and help me understand how I should correctly perform my daily routine to take care of myself.",
        customerScore: 4,
        idPatient: 1,
        idDoctor: 0
      },
      {
        id: 2,
        profilePhotoUrl: "../../src/assets/images/Alessandro Ramirez image.jpg",
        customerName: "Monica Sanchez",
        customerReview: "Such a great doctor. She was very kind at all times and help me understand how I should correctly perform my daily routine to take care of myself.",
        customerScore: 1,
        idPatient: 1,
        idDoctor: 0
      },
      {
        id: 3,
        profilePhotoUrl: "../../src/assets/images/Alessandro Ramirez image.jpg",
        customerName: "Ivet Martinez",
        customerReview: "Very good specialist. Help me with every question I had. I would definetely recommen it!!!",
        customerScore: 2,
        idPatient: 1,
        idDoctor: 0
      },
      {
        id: 4,
        profilePhotoUrl: "../../src/assets/images/Alessandro Ramirez image.jpg",
        customerName: "Alessandro Ramirez",
        customerReview: "Nice doc, totally recomended",
        customerScore: 3,
        idPatient: 1,
        idDoctor: 1
      },
      {
        id: 5,
        profilePhotoUrl: "../../src/assets/images/Alessandro Ramirez image.jpg",
        customerName: "Aquiles Brinco",
        customerReview: "Best doctor ever",
        customerScore: 2,
        idPatient: 1,
        idDoctor: 2
      }
])

const medicalHistory = ref([
    {
        id: 0,
        idPatient: 1,
        historial: [
            {
                id: 0,
                date: "20/10/2022",
                content: "Show evidence of headache"
            },
            {
                id: 1,
                date: "21/10/2022",
                content: "Show evidence of backache"
            },
            {
                id: 2,
                date: "22/10/2022",
                content: "Show evidence of stomache"
            }
            
        ]
    },
    {
        id: 1,
        idPatient: 0,
        historial: [
            {
                id: 0,
                date: "24/10/2022",
                content: "Show evidence of headache"
            }
        ]
    },
    {
        id: 2,
        idPatient: 2,
        historial: [
            {
                id: 0,
                date: "20/10/2022",
                content: "Show evidence of headache"
            },
            {
                id: 1,
                date: "21/10/2022",
                content: "Show evidence of backache"
            },
            {
                id: 2,
                date: "22/10/2022",
                content: "Show evidence of stomache"
            },
            {
                id: 3,
                date: "23/10/2022",
                content: "Show evidence of alzheimer"
            },
            {
                id: 4,
                date: "24/10/2022",
                content: "Show evidence of bad alimentation"
            }
            
        ]
    },
    {
        id: 3,
        idPatient: 3,
        historial: [
            {
                id: 0,
                date: "20/10/2022",
                content: "Show evidence of headache"
            },
            {
                id: 1,
                date: "21/10/2022",
                content: "Show evidence of bad alimentation"
            }
        ]
    },
    {
        id: 4,
        idPatient: 4,
        historial: [
            {
                id: 0,
                date: "20/10/2022",
                content: "Show evidence of alzheimer"
            },
            {
                id: 1,
                date: "24/10/2022",
                content: "Show evidence of backache"
            }
        ]
    }
])
  const doubleCount = computed(() => count.value * 2)
  function newViewed(x) {
    this.news[x].views++
  }

  return { news, patients, doctors, medicalInformation, prescriptions, dates, reviews, medicalHistory, doubleCount, newViewed }
})
