const mydata = [
    // {
    //   firstName: "Bettina",
    //   lastName: "Kemme",
    //   position: "Director of the School",
    //   field: "Databases, Networks, Parallel and Distributed Systems, Computer Games",
    //   office: "McConnell 109N/318 (Director)",
    //   phone:  "+1-514-398-8930",
    //   email: "kemme@cs.mcgill.ca"
    // },
    // {
    //   firstName: "Mathieu",
    //   lastName: "Blanchette",
    //   position: "Associate Director of Research",
    //   field: "Bioinformatics, Computational Biology",
    //   office: "Trottier 3107",
    //   phone:  "+1-514-398-5209",
    //   email: "blanchem@cs.mcgill.ca"
    // },
    // {
    //   firstName: "Oana",
    //   lastName: "Balmau",
    //   position: "Professor",
    //   field: "Computer Systems, Storage and Persistent Memory,  Storage Systems for Data Science, Data Management for IoT ",
    //   office: "website: oana.balmau@cs.mcgill.ca",
    //   phone:  "+1-514-398-8930",
    //   email: "oana.balmau@cs.mcgill.ca"
    // },
    // {
    //   firstName: "Jackie Chi Kit",
    //   lastName: "Cheung",
    //   position: "Professor",
    //   field: "Computational Linguistics, Natural Language Processing",
    //   office: "website: oana.balmau@cs.mcgill.ca",
    //   phone:  "+1-514-398-8930",
    //   email: "oana.balmau@cs.mcgill.ca"
    // },
    {
      firstName: "Bettina",
      lastName: "Kemme",
      position: "Director of the School",
      field: "Databases, Networks, Parallel and Distributed Systems, Computer Games",
      office: "McConnell 109N/318 (Director)",
      phone:  "+1-514-398-8930",
      email: "kemme@cs.mcgill.ca",
      picsource: '../pictures/kemme.jpg'
    },
    {
      firstName: "Mathieu",
      lastName: "Blanchette",
      position: "Associate Director of Research",
      field: "Bioinformatics, Computational Biology",
      office: "Trottier 3107",
      phone:  "+1-514-398-5209",
      email: "blanchem@cs.mcgill.ca"
    },
    {
      firstName: "Xiao-Wen",
      lastName: "Chang",
      position: "Professor",
      field: "Numerical Linear Algebra, Numerical Methods for Estimation, Optimization",
      office: "McConnell 302",
      phone:  "+1-514-398-8259",
      email: "chang@cs.mcgill.ca"
    },
    {
      firstName: "Jackie Chi Kit",
      lastName: "Cheung",
      position: "Professor",
      field: "Computational Linguistics, Natural Language Processing",
      office: "McConnell 108N",
      phone:  "+1-514-398-5491",
      email: "jcheung@cs.mcgill.ca"
    },
    {
        firstName: "Claude",
        lastName: "Crepeau",
        position: "Professor",
        field: "Cryptography, Quantum Computing",
        office: "McConnell 300N",
        phone:  "+1-514-398-3738",
        email: "lucdevroye@gmail.com"
      },
      {
        firstName: "Luc",
        lastName: "Devroye",
        position: "Professor",
        field: "Probabilistic Analysis of Algorithms",
        office: "Trottier 3107",
        phone:  "+1-514-398-5209",
        email: "blanchem@cs.mcgill.ca"
      },
      {
        firstName: "Christophe",
        lastName: "Dubach",
        position: "Professor",
        field: "Compilers and Programming Languages,Paralle Hardware, Machine Learning applied to Computing Systems",
        office: "McConnell 758",
        phone:  "+1-514-398-8720",
        email: "christophe.dubach@mcgill.ca"
      },
      {
        firstName: "Gregory",
        lastName: "Dudek",
        position: "Professor",
        field: "Internet Technologies, Swarm Robotics, Robotics",
        office: "website: oana.balmau@cs.mcgill.ca",
        phone:  "+1-514-398-8930",
        email: "oana.balmau@cs.mcgill.ca"
      },
      {
        firstName: "Jin",
        lastName: "Guo",
        position: "Professor",
        field: "Software Engineering",
        office: "McConnell 419",
        phone:  "+1-514-398-4325",
        email: "dudek@cs.mcgill.ca"
      },
      {
        firstName: "William L.",
        lastName: "Hamilton",
        position: "Professorh",
        field: "Marchine Learning, Natural Language Processing, Social and Information Networks",
        office: "McConnell 309",
        phone:  "+1-514-398-7073",
        email: "wlh@cs.mcgill.ca"
      },
      {
        firstName: "Hamed",
        lastName: "Hatami",
        position: "Professor",
        field: "Computational Complexity",
        office: "McConnell 308",
        phone:  "+1-514-398-3737",
        email: "hatami@cs.mcgill.ca"
      },
      {
        firstName: "Jory",
        lastName: "Kienzle",
        position: "Professor",
        field: "Software Engineering,Model-Driven Engineering, Software Composition and Reuse, Distributed Systems",
        office: "McConnell 327",
        phone:  "+1-514-398-2049",
        email: "joerg.kienzle@mcgill.ca"
      },
      {
        firstName: "Paul",
        lastName: "Kry",
        position: "Professor",
        field: "Computer Graphics, Robotics, Applied Machine Learning, Computer Games",
        office: "McConnell 423",
        phone:  "+1-514-398-2577",
        email: "kry@cs.mcgill.ca"
      },
      {
        firstName: "Michael",
        lastName: "Langer",
        position: "Professor",
        field: "Computer Graphics, Computer Vision",
        office: "McConnell 329",
        phone:  "+1-514-398-3740",
        email: "langer@cs.mcgill.ca"
      },
      {
        firstName: "Yue",
        lastName: "Li",
        position: "Professor",
        field: "Applied Machine Learning, Bioinformatics, Computational Biology ",
        office: "Trottier 3105",
        phone:  "+1-514-398-7082",
        email: "yueli@cs.mcgill.ca"
      },
      {
        firstName: "Hsiu-Chin",
        lastName: "Lin",
        position: "Professor",
        field: "Robotics, Machine Learning for Motor Control, Motion Control and Optimization, Legged Robotics",
        office: "website: oana.balmau@cs.mcgill.ca",
        phone:  "",
        email: "hsiu-chin.lin@cs.mcgill.ca"
      },
      {
        firstName: "Xue",
        lastName: "Liu",
        position: "Professor",
        field: "Big Data Applications, Applied Machine Learning, Computer Systems, Networks",
        office: "McConnell 326",
        phone:  "+1-514-398-6600",
        email: "xueliu@cs.mcgill.ca"
      },
      {
        firstName: "Muthucumaru",
        lastName: "Maheswaran",
        position: "Professor",
        field: "Internet Technologies, Networks, Parallel and Distributed Systems",
        office: "McConnell 754",
        phone:  " +1-514-398-1465",
        email: "maheswar@cs.mcgill.ca"
      },
      {
        firstName: "David",
        lastName: "Meger",
        position: "Professor",
        field: "Computer Vision, Machine Learning, Robotics ",
        office: "MC 112N",
        phone:  "+1-514-398-3743",
        email: "dmeger@cim.mcgill.ca"
      },
      {
        firstName: "Prakash",
        lastName: "Panangaden",
        position: "Professor",
        field: "Logic and Computation, Probabilistic Systems, Machine Learning ",
        office: "McConnell 105N",
        phone:  "+1-514-398-7074",
        email: "prakash@cs.mcgill.ca"
      },
      {
        firstName: "Brigitte",
        lastName: "Pientka",
        position: "Professor",
        field: "Logic and Computation, Programming Language, Theory",
        office: "McConnell 107N",
        phone:  "+1-514-398-2583",
        email: "bp@cs.mcgill.ca"
      },
      {
        firstName: "Joelle",
        lastName: "Pineau",
        position: "Professor",
        field: "Bioinformatics, Computational Biology, Machine Learning",
        office: "McConnell 113N",
        phone:  "+1-514-398-5432",
        email: "jpineau@cs.mcgill.ca"
      },
      {
        firstName: "Doina",
        lastName: "Precup",
        position: "Professor",
        field: "Machine Learning",
        office: "McConnell 111N",
        phone:  "+1-514-398-6443",
        email: "dprecup@cs.mcgill.ca"
      },
      {
        firstName: "Reihaneh",
        lastName: "Rabbany",
        position: "Professor",
        field: "Network science,Data Mining, Applied Machine Learning",
        office: "",
        phone:  "",
        email: "rrabba@cs.mcgill.ca"
      },
      {
        firstName: "Siamak",
        lastName: "Ravanbakhsh",
        position: "Professor",
        field: "Machine Learnings",
        office: "McConnell 325",
        phone:  "",
        email: "siamak@cs.mcgill.ca"
      },
      {
        firstName: "Siva",
        lastName: "Ravanbakhsh",
        position: "Professor",
        field: "Natural Language Processing, Machine Learning, Computational Linguistics",
        office: "",
        phone:  "",
        email: "siva@cs.mcgill.ca"
      },
      {
        firstName: "Bruce",
        lastName: "Reed",
        position: "Professor",
        field: "Algorithms, Discrete Mathematics",
        office: "McConnell 301",
        phone:  "+1-514-398-5913",
        email: "breed@cs.mcgill.ca"
      },
      {
        firstName: "Robert",
        lastName: "Robere",
        position: "Professor",
        field: "Computational Complexity, Discrete Mathematics, Logic and Computation, Proof Complexity",
        office: "",
        phone:  "",
        email: "robere@cs.mcgill.ca"
      },
      {
        firstName: "Martin",
        lastName: "Robillard",
        position: "Professor",
        field: "Software Engineering",
        office: "McConnell 114N",
        phone:  "+1-514-398-4258",
        email: "blanchem@cs.mcgill.ca"
      },
      {
        firstName: "David",
        lastName: "Rolnick",
        position: "Professor",
        field: "Machine Learning, Deep Learning Theory, Climate Change",
        office: "",
        phone:  "",
        email: "drolnick@cs.mcgill.ca"
      },
      {
        firstName: "Derek",
        lastName: "Ruths",
        position: "Professor",
        field: "Machine Learning, Data Science, Computational Social Science",
        office: "McConnell 106N",
        phone:  "+1-514-398-7079",
        email: "druths@cs.mcgill.ca"
      },
      {
        firstName: "Xujie",
        lastName: "Si",
        position: "Professor",
        field: "Programming Language Theor, Software Engineering, Machine learning ",
        office: "",
        phone:  "",
        email: "xsi@cs.mcgill.ca"
      },
      {
        firstName: "Kaleem",
        lastName: "Siddiqi",
        position: "Professor",
        field: "Computer Vision, Medical Image Analysis, Pattern Recognition",
        office: "McConnell 420",
        phone:  "+1-514-398-3371",
        email: "siddiqi@cim.mcgill.ca"
      },
      {
        firstName: "Clark",
        lastName: "Verbrugge",
        position: "Professor",
        field: "Copmuter Games, Compilers and Concurrency, Parallel and Distributed Systems",
        office: "McConnell 230",
        phone:  "+1-514-398-2411",
        email: "clump@cs.mcgill.ca"
      },
      {
        firstName: "Adrian",
        lastName: "Vetta",
        position: "Professor",
        field: "Algorithms, Discrete Mathematics",
        office: "Burnside 1118",
        phone:  "+1-514-398-3822",
        email: "vetta@cs.mcgill.ca"
      },
      {
        firstName: "Jerome",
        lastName: "Waldispuhl",
        position: "Professor",
        field: "Bioinformatics, Computational Biology",
        office: "Trottier 3106",
        phone:  "+1-514-398-5018",
        email: "jeromew@cs.mcgill.ca"
      },
      {
        firstName: "Giulia",
        lastName: "Alberini",
        position: "Faculty Lectuer",
        field: "",
        office: "MC233",
        phone:  "+1-514-398-8930",
        email: "giulia.alberini@mail.mcgill.ca"
      },
      {
        firstName: "David",
        lastName: "Becerra",
        position: "Faculty Lectuer",
        field: "Bioinformatics, Artificial Intelligence",
        office: "",
        phone:  "",
        email: "david.becerra@mail.mcgill.ca"
      },
      {
        firstName: "Joseph",
        lastName: "D'Silva",
        position: "Faculty Lectuer",
        field: "Data Science, Networks, Databases",
        office: "MC205N",
        phone:  "",
        email: "joseph.dsilva@mail.mcgill.ca"
      },
      {
        firstName: "Joseph",
        lastName: "Vybihal",
        position: "Faculty Lectuer",
        field: "Brained Inspired AI, Swarm Robotics, Internet Technologies, Computer Game",
        office: "MC323",
        phone:  "+1-514-398-7071 (ext 00092)",
        email: "jvybihal@cs.mcgill.ca"
      },
      {
        firstName: "Louigi",
        lastName: "Addario-Berry",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Guilaume",
        lastName: "Bourque",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Benjamin",
        lastName: "Fung",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Simon",
        lastName: "Gravel",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Derek",
        lastName: "Nowrouzezahrai",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Timothy",
        lastName: "O'Donnell",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Peter",
        lastName: "Savadjev",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Dirk",
        lastName: "Schlimm",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Thomas",
        lastName: "Shultz",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Morgan",
        lastName: "Sonderegger",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Yi",
        lastName: "Yang",
        position: "Associate Member",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Marc G.",
        lastName: "Bellemare",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Fernando",
        lastName: "Diaz",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Tristan.",
        lastName: "Glatard",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Geoferry",
        lastName: "Gordon",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Michael",
        lastName: "Hallett",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Wenbo",
        lastName: "He",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Annie",
        lastName: "Louis",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Loannis",
        lastName: "Rekleitis",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Adriana Romero",
        lastName: "Soriano",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Bruce",
        lastName: "Shepherd",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Danny",
        lastName: "Tarlow",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Adam",
        lastName: "Trischler",
        position: "Adjunct Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "David",
        lastName: "Avis",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Renato De",
        lastName: "Mori",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Tim",
        lastName: "Merrett",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Monty",
        lastName: "Newborn",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Chris",
        lastName: "Paige",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Gerald",
        lastName: "Ratzer",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Denis",
        lastName: "Therien",
        position: "Emeritus Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Natham",
        lastName: "Friedman",
        position: "Associate Professors Post-Retirement",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Cari",
        lastName: "Tropper",
        position: "Associate Professors Post-Retirement",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Yang",
        lastName: "Cai",
        position: "Former Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Patrick",
        lastName: "Hayden",
        position: "Former Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Hans",
        lastName: "Vangheluwe",
        position: "Former Professor",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Laurie",
        lastName: "Hendren",
        position: "In Memoriam",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
      {
        firstName: "Godfried",
        lastName: "Toussaint",
        position: "In Memoriam",
        field: "",
        office: "",
        phone:  "",
        email: ""
      },
  ];
  export default mydata;