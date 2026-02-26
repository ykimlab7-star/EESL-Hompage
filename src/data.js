export const membersData = {
    professor: {
        name: "Youngjin Kim (김영진)",
        title: "Assistant Professor",
        department: "Department of Battery Convergence Engineering",
        university: "Kangwon National University",
        email: "ykim@kangwon.ac.kr",
        office: "Engineering Building 2, Room 218",
        phone: "033-250-6261",
        image: "/images/professor.png", // Changed to .png as per file existence
        experience: [
            "<strong>Assistant professor</strong>, Department of Battery Convergence Engineering, <strong>Kangwon National University</strong> (Sep. 2022 – current)",
            "<strong>Senior Researcher</strong>, <strong>Research Institute of Industrial Science and Technology (RIST)</strong> (Aug. 2021 – Aug. 2022)",
            "<strong>Post. Doc.</strong> in Mechanical Engineering, <strong>University of Texas at Austin</strong> (Jul. 2017 – Jun. 2021, Supervisor: Prof. Arumugam Manthiram)",
            "<strong>Post. Doc.</strong> in Chemical and Biological Engineering, <strong>Seoul National University</strong> (Mar. 2016 – Jun. 2017, Supervisor: Prof. Kyu Tae Lee)"
        ],
        education: [
            `<strong>Ph.D.</strong> in Chemical and Biological Engineering, <strong>Seoul National University</strong> (Sep. 2010 – Feb. 2016)<br/><span class="block mt-4 mb-3"><strong>Thesis:</strong> Phosphorus-based High-capacity Negative Electrode Materials for Sodium-ion Battery</span><span class="block"><strong>Supervisor:</strong> Prof. Seung Mo Oh</span>`,
            `<strong>B.S.</strong> in Chemical Engineering, <strong>Seoul National University of Science and Technology</strong> (Mar. 2003 - Feb. 2010)`
        ],
        awards: [
            "<strong>Technology Transfer</strong> (2017) to <strong>LG Chem. ($80k)</strong>",
            "<strong>ACS 2017 SciFinder Future Leaders in Chemistry</strong> (2017) from <strong>American Chemical Society (ACS)</strong>",
            "<strong>Post-doctoral Fellowship</strong> (2016-2017) from <strong>National Research Foundation of Korea</strong>",
            "<strong>Best Poster Award</strong> (2013) from <strong>Korea Electrochemical Society</strong>",
            "<strong>Minister’s Award</strong> (2009) in Green Energy Contest from <strong>Ministry of Education, Science and Technology, Korea</strong>"
        ]
    },
    graduateStudents: [
        {
            id: "g3",
            name: "Sangbeom Kim",
            degree: "Combined BS/MS student",
            research: "layered structure cathode material",
            email: "sangbum1127@naver.com",
            image: "/images/Sangbeom Kim.png"
        },
        {
            id: "g4",
            name: "Seonho Kim",
            degree: "Combined BS/MS student",
            research: "layered structure cathode material",
            email: "tjsgh0928@naver.com",
            image: "/images/Seonho Kim.png"
        },
        {
            id: "g5",
            name: "Sanghyeok Moon",
            degree: "Master student",
            research: "layered structure cathode material",
            email: "q7634407@naver.com",
            image: "/images/Sanghyeok Moon.png"
        },
        {
            id: "g6",
            name: "Seungjun Baek",
            degree: "Combined BS/MS student",
            research: "layered structure cathode material",
            email: "nanim0115@naver.com",
            image: "/images/Seungjun Baek.png"
        },
        {
            id: "g7",
            name: "Hajin Seo",
            degree: "Master student",
            research: "layered structure cathode material",
            email: "seohajin@naver.com",
            image: "/images/Hajin Seo.png"
        },
        {
            id: "g8",
            name: "Jungbeen Choi",
            degree: "Master student",
            research: "layered structure cathode material",
            email: "chlwjdqls13@naver.com",
            image: "/images/Jungbeen Choi.png"
        },
        {
            id: "g9",
            name: "Sanghyun Lee",
            degree: "Master student",
            research: "layered structure cathode material",
            email: "lapis0621@daum.net",
            image: "/images/Sanghyun Lee.png"
        },
    ],
    undergraduateStudents: [
        {
            id: "u1",
            name: "Seunghun Park",
            degree: "B.S. Course",
            email: "shth1502@naver.com",
            image: "/images/Seunghun Park.png"
        },
        {
            id: "u2",
            name: "Sunggyun Park",
            degree: "B.S. Course",
            email: "pyk606@kangwon.ac.kr",
            image: "/images/Sunggyun Park.jpg"
        },
        {
            id: "u3",
            name: "Yejin Eom",
            degree: "B.S. Course",
            email: "yejineom@kangwon.ac.kr",
            image: "/images/Yejin Eom.jpg"
        },
        {
            id: "u4",
            name: "Hyeonji Park",
            degree: "B.S. Course",
            email: "wjddkdnf@naver.com",
            image: "/images/Hyeonji Park.jpg"
        },
        {
            id: "u5",
            name: "Taeyeon Kim",
            degree: "B.S. Course",
            email: "rachel4369@naver.com",
            image: "/images/Taeyeon Kim.jpg"
        },
        {
            id: "u6",
            name: "Minsang Kim",
            degree: "B.S. Course",
            email: "tpok1158@naver.com",
            image: "/images/Minsang Kim.jpg"
        },
    ],
    alumni: [
        {
            id: "al 4",
            name: "Sieun Choi",
            degree: "Master's degree",
            "graduate date": "2026.02",
            image: "/images/Sieun Choi.png"
        },
        {
            id: "al 3",
            name: "Boseong Heo",
            degree: "Master's degree",
            "graduate date": "2026.02",
            image: "/images/Boseong Heo.png"
        },
        {
            id: "al 2",
            name: "Inhye Kim",
            degree: "Master's degree",
            "graduate date": "2025.02",
            Current: "Current : 엘앤에프",
            image: "/images/Inhye Kim.jpg"
        },
        {
            id: "al 1",
            name: "Junhee Cho",
            degree: "Bachelor's degree",
            "graduate date": "2025.02",
            Current: "Current : 더쎈 국제 특허법률사무소",
            image: "/images/Junhee Cho.png"
        },
        // Alumni data
    ]
};

export const publications = [
    {
        id: 50,
        title: "Concentration-optimized boron surface modification for single-crystal high-nickel cathode stabilization",
        authors: "Inhye Kim, Min Wook Pin, Ji Yeong Sung, Boseong Heo, Saerop Lee, Jeong-Mi Yeon, Beom Tak Na, Jong Sung Jin, Yongjo Jung, Joon Ha Chang, Youngjin Kim*",
        journal: "Mater Sci Eng B.",
        year: 2026,
        doi: "10.1016/j.mseb.2025.118935"
    },
    {
        id: 49,
        title: "Rational cathode design for efficient solid-state diffusion in solid-state batteries",
        authors: "Ye-Wan Yoo, Sang-Yeob Hwang, Inhye Kim, Promoda Behera, Lawrence R Msalilwa, Zubair A Chandio, Youngjin Kim*, Hyun-Kyung Kim, Seung-Hwan Lee, Jun Young Cheong",
        journal: "Mater Sci Eng B.",
        year: 2026,
        doi: "10.1016/j.mseb.2025.118936"
    },
    {
        id: 48,
        title: "Quantitative image-analysis framework for precise discrimination of cation mixing in high-nickel NCM cathodes",
        authors: "Jong Hyeok Han, Boseong Heo, Myeong Jin Ju, Youngjin Kim*, Joon Ha Chang, Hee-Jae Jeon",
        journal: "Mater Sci Eng B.",
        year: 2026,
        doi: "10.1016/j.mseb.2025.118801"
    },
    {
        id: 47,
        title: "Engineering matrix distribution in selenide-based conversion electrodes for sodium-ion batteries: from heterogeneous nanoparticle dispersion to homogeneous matrix-matrix architecture",
        authors: "Yongil Kim, Min Wook Pin, Saerop Lee, Sanghyeok Moon, Jeong-Mi Yeon, Beom Tak Na, Ben Cadman, Finlay Britton-Gray, Jun Young Cheong, Joon Ha Chang, Youngjin Kim*",
        journal: "Mater Sci Eng B.",
        year: 2025,
        doi: "10.1016/j.mseb.2025.118840"
    },
    {
        id: 46,
        title: "Interfacial stability Enhancement in Single-Crystal NCM cathodes through electronic structure optimization",
        authors: "Boseong Heo, M. Kim, C. Hwang, H.W. Kim, M. Pin, B.T. Na, J.B. Lee, C.-u Bak, J.Y. Cheong, S.-H. Yu, J.H. Chang, H-s Kim*, Youngjin Kim*",
        journal: "Mater. Today",
        year: 2025,
        doi: "10.1016/j.mattod.2025.10.006"
    },
    {
        id: 45,
        title: "Localized High-Concentration Electrolytes for Sodium Batteries: Fundamentals, Challenges, and Applications",
        authors: "Jiaqi Ke, Youngjin Kim*, Laisuo Su",
        journal: "ACS Appl. Energy Mater. 2025, 8, 13, 8850–8861",
        year: 2025,
        doi: ""
    },
    {
        id: 44,
        title: "The Paradoxical Role of Rock-Salt Phases in High-Nickel Cathode Stabilization: Engineering Detrimental to Beneficial",
        authors: "Seonho Kim, Jooeun Byun, Boseong Heo, Sangbeom Kim, Chae Rim Lee, Miseung Kim, Sieun Choi, Sanghyeok Moon, Seungjun Baek, Hajin Seo, Sanghyun Lee, Jungbeen Choi, Jeong-Mi Yeon, Jun Ho Song, Youngjin Kim*, Hyun-seung Kim",
        journal: "Chem.Commun.",
        year: 2025,
        doi: "10.1039/D5CC01386K"
    },
    {
        id: 43,
        title: "Transformative Effect of Li Salt for Proactively Mitigating Interfacial Side Reactions in Sodium-Ion Batteries",
        authors: "J. Byun, J. H. Chang, C. Hwang, C. R. Lee, M. Kim, J. H. Song, Boseong Heo, S. Choi, J. H. Han, H.-J. Jeon, B. T. Na, Youngjin Kim*, J.-S. Yu*, and H.-S. Kim*",
        journal: "Nanomicro Lett.",
        year: 2025,
        doi: "10.1007/s40820-025-01742-z"
    },
    {
        id: 42,
        title: "Critical Advances in Seawater Battery Technology: From System Architecture to Anode Materials",
        authors: "M. C. Choi, Hajin Seo, J.-M. Yeon, Boseong Heo, S.-Y. Choi, B. T. Na, S. Park, M. Ravichandran, F. Britton-Gray, J. Y. Cheong*, Y. Kim*, Youngjin Kim*",
        journal: "Korean J. Chem. Eng.",
        year: 2025,
        doi: "10.1007/s11814-025-00419-y"
    },
    {
        id: 41,
        title: "Edge-Plane-Selective Formation of Mn Vacancies in β-Na0.7MnO2",
        authors: "J. Y. Cheong, M. W. Pin, J. M. Choi, J. H. Chang, A. S. Schenk, J. H. Han, S. Wacławek, Youngjin Kim*, K. T. Lee*",
        journal: "ACS Materials Lett., 7, 1003-1011",
        year: 2025,
        doi: ""
    },
    {
        id: 40,
        title: "An ionic protector to proactively mitigate interfacial degradation induced by electrolyte decomposition in lithium-ion batteries",
        authors: "Wontak Kim, Joon Ha Chang, Miseung Kim, Chihyun Hwang, Boseong Heo, Jun Ho Song, Ji-Sang Yu, Youngjin Kim*, Hyun-seung Kim",
        journal: "J. Mater. Chem. A., 2025, 13, 18959-18965",
        year: 2025,
        doi: ""
    },
    {
        id: 39,
        title: "In situ X-ray based analysis of anode materials for lithium-ion batteries: Current status and future implications",
        authors: "M. W. Pin, J. M. Choi, J. H. Chang, A. S. Schenk, J. H. Han, S. Wacławek, Youngjin Kim*, J. Y. Cheong",
        journal: "Energy Storage Mater., 73 103798",
        year: 2024,
        doi: ""
    },
    {
        id: 38,
        title: "Water-soluble biowaste gum binders for natural graphite anode for lithium-ion batteries",
        authors: "Joon Ha Chang, Min Wook Pin, Lawrence Robert Msalilwa, Sung Ho Shin, Chulwoong Han, Hyunung Yu, Zubair Ahmed Chandio, Vinod VT Padil, Youngjin Kim*, Jun Young Cheong",
        journal: "J. Electroanal. Chem.",
        year: 2024,
        doi: "10.1016/j.jelechem.2024.118467"
    },
    {
        id: 37,
        title: "Understanding the capacity increase mechanism in MoO2/C anodes for Lithium-Ion batteries",
        authors: "Y. Kim, H.-s. Kim, Y. Jung, J. H. Chang, M. W. Pin, Boseong Heo, Sieun Choi, H.-J. Jeon, B. T. Na, J. Y. Cheong, T. Yoon, Youngjin Kim*",
        journal: "J. Electroanal. Chem., 962 118257",
        year: 2024,
        doi: ""
    },
    {
        id: 36,
        title: "Binder migration: Frequently observed yet overlooked phenomena in electrode processing for lithium-ion batteries",
        authors: "J. H. Chang, M. W. Pin, Inhye Kim, Sangbeom Kim, Seonho Kim, Sanghyeok Moon, Junhee Cho, Sieun Choi, Boseong Heo, Z. A. Chandio, Youngjin Kim*, J. Y. Cheong *, D. Zide, M. Madondo, B. J. Bladergroen, M.Eldessouki, M. M. Escandell, H.-J. Jeon",
        journal: "J. Energy Storage, 83 110729",
        year: 2024,
        doi: ""
    },
    {
        id: 35,
        title: "Vulnerable Solid Electrolyte Interphase Deposition in Sodium-Ion Batteries from Insufficient Overpotential Development during Formation",
        authors: "C. R. Lee, J. Byun, M. Kim, M. A Lee, C. Hwang, J. H. Song, H. Kim, Youngjin Kim*, J.-S. Yu*, and H.-s. Kim*",
        journal: "ACS Materials Lett., 6, 772–779",
        year: 2024,
        doi: ""
    },
    {
        id: 34,
        title: "Improved Performance of Lithium-Ion Batteries using a Multilayer Cathode of LiFePO4 and LiNi0.8Co0.1Mn0.1O2",
        authors: "Hyunchul Kang, Youngjin Kim*, Taeho Yoon, Junyoung Mun",
        journal: "J. Electrochem. Sci. Technol.",
        year: 2023,
        doi: "10.33961/jecst.2023.00290"
    },
    {
        id: 33,
        title: "Gum based functional binder for high-performance artificial graphite anode for lithium-ion batteries",
        authors: "Joon Ha Chang, Min Wook Pin, Jiman Choi, Jaewon Park, Gyeong Min Choi, Jeongsik Yun, Kie Yong Cho, Zubair Ahmed Chandio, Inhye Kim, Youngjin Kim*, Vinod VT Padil, Jun Young Cheong",
        journal: "Sustain. Chem. Environ.",
        year: 2023,
        doi: "10.1016/j.scenv.2023.100012"
    },
    {
        id: 32,
        title: "One-Step β-Li2SnO3 Coating on High-nickel Layered Oxides via Thermal Phase Segregation for Li-ion Batteries",
        authors: "Seongmin Kim, Hanseul Kim, Sung Wook Doo, Hee-Jae Jeon, In Hye Kim, Hyun-seung Kim, Youngjin Kim*",
        journal: "J. Electrochem. Sci. Technol.",
        year: 2023,
        doi: "10.33961/jecst.2023.00143"
    },
    {
        id: 31,
        title: "Insights into the Microstructural Engineering of Cobalt-free, High-nickel Cathodes based on Surface Energy for Lithium-ion Batteries",
        authors: "Youngjin Kim, H. Kim, W. Shin, E. Jo, and A. Manthiram*",
        journal: "Adv. Energy Mater., 13, 2204054",
        year: 2023,
        doi: ""
    },
    {
        id: 30,
        title: "A kinetic study on cobalt-free high-nickel layered oxide cathode materials for practical lithium-ion batteries",
        authors: "Youngjin Kim, H. Kim, A. Manthiram*",
        journal: "J. Power Sources, 558, 232633",
        year: 2023,
        doi: ""
    },
    {
        id: 29,
        title: "Rational Design of Coating Ions via Advantageous Surface Reconstruction in High‐Nickel Layered Oxide Cathodes for Lithium‐Ion Batteries",
        authors: "Youngjin Kim, H. Park, K. Shin, G. Henkelman, Jamie H. Warner, A. Manthiram*",
        journal: "Adv. Energy Mater., 11, 2101112",
        year: 2021,
        doi: ""
    },
    {
        id: 28,
        title: "Nonpolar Solvent‐based Electrolytes with a Quasi‐Solid‐State Redox Reaction for Lithium‐Sulfur Batteries",
        authors: "H.S. Yang, D.M. Kim, Youngjin Kim, Y. J. Lee, K. T. Lee*",
        journal: "ChemElectroChem., 8, 2321-2328",
        year: 2021,
        doi: ""
    },
    {
        id: 27,
        title: "Wet-CO2 Pretreatment Process for Reducing Residual Lithium in High-Nickel Layered Oxides for Lithium-Ion Batteries",
        authors: "Youngjin Kim, H. Park, A. Dolocan, J. H. Warner, A. Manthiram*",
        journal: "ACS Appl. Mater. Interfaces., 13, 27096",
        year: 2021,
        doi: ""
    },
    {
        id: 26,
        title: "Failure mode of thick cathodes for Li-ion batteries: variation of state-of-charge along the electrode thickness direction",
        authors: "H. Kim, S. K. Oh, J. Lee, S. W. Doo, Youngjin Kim, K. T. Lee*",
        journal: "Electrochim. Acta., 370, 137743",
        year: 2021,
        doi: ""
    },
    {
        id: 25,
        title: "Unraveling the Intricacies of Residual Lithium in High-Ni Cathodes for Lithium-Ion Batteries",
        authors: "Youngjin Kim, H. Park, Jamie H. Warner, A. Manthiram*",
        journal: "ACS Energy Lett., 6, 941",
        year: 2021,
        doi: ""
    },
    {
        id: 24,
        title: "Cobalt-free, High-nickel Layered Oxide Cathodes for Lithium-ion Batteries: Progress, Challenges, and Perspectives",
        authors: "Youngjin Kim, W. M. Seong, A. Manthiram*",
        journal: "Energy Storage Mater., 34, 250",
        year: 2021,
        doi: ""
    },
    {
        id: 23,
        title: "Impact of Residual Lithium on the Adoption of High-nickel Layered Oxide Cathodes for Lithium-ion Batteries",
        authors: "W. M. Seong, Youngjin Kim, A. Manthiram*",
        journal: "Chem. Mater., 32, 9479",
        year: 2020,
        doi: ""
    },
    {
        id: 22,
        title: "Scalable Solid-State Synthesis of Self-Assembled Si Nanoparticles in Spherical Carbons through Relative Miscibility for Li-Ion Batteries",
        authors: "Y. Park, J. Lim, D. Mok, Youngjin Kim, M. Kwon, K. T. Lee*",
        journal: "J. Electrochem. Soc., 166, A1127",
        year: 2019,
        doi: ""
    },
    {
        id: 21,
        title: "Two-Dimensional Phosphorene-Derived Protective Layers on a Lithium Metal Anode for Lithium-Oxygen Batteries",
        authors: "Youngjin Kim, D. Koo, S. Ha, S. C. Jung, T. Yim, H. Kim, S. K. Oh, D. Kim, A. Choi, Y. Kang, K. H. Ryu, M. Jang, Y.-K. Han*, S. M. Oh*, and K. T. Lee*",
        journal: "ACS Nano, 12, 4419",
        year: 2018,
        doi: ""
    },
    {
        id: 20,
        title: "Cointercalation of Mg2+ Ions into Graphite for Magnesium-Ion Batteries",
        authors: "D. Kim, S. C. Jung, S. Ha, Youngjin Kim, Y. Park, J. H. Ryu, Y. Han, K. T. Lee*",
        journal: "Chem. Mater., 30, 3199",
        year: 2018,
        doi: ""
    },
    {
        id: 19,
        title: "Bi-functional effects of lengthening aliphatic chain of phthalimide-based negative redox couple and its nonaqueous flow battery performance at stack cell",
        authors: "H.-s. Kim, S. Hwang, Youngjin Kim, J. H. Ryu, S. M. Oh*, K. J. Kim*",
        journal: "APL Mater., 6",
        year: 2018,
        doi: ""
    },
    {
        id: 18,
        title: "Environmentally Sustainable Aluminum-Coordinated Poly(tetrahydroxybenzoquinone) as a Promising Cathode for Sodium Ion Batteries",
        authors: "H. J. Kim,† Youngjin Kim,† J. Shim, K. H. Jung, K. T. Lee*, and J.-C. Lee*",
        journal: "ACS Appl. Mater. Interfaces., 10, 3479",
        year: 2018,
        doi: ""
    },
    {
        id: 17,
        title: "Hydrothermally synthesized tin (IV) sulfide as a negative electrode for sodium-ion batteries and its sodiation mechanism",
        authors: "H.-s. Kim, J. Kim, H. Kim, Youngjin Kim, J. H. Ryu, S. M. Oh*, S. Yoon*",
        journal: "J. Electroanal. Chem., 808, 137",
        year: 2018,
        doi: ""
    },
    {
        id: 16,
        title: "Role of Na+ in the Cation Disorder of [Li1-xNax]NiO2 as a Cathode for Lithium-Ion Batteries",
        authors: "H. Kim, A. Choi, S.W.Doo, J. Lim, Youngjin Kim, K. T. Lee*",
        journal: "J. Electrochem. Soc., 165, A201",
        year: 2018,
        doi: ""
    },
    {
        id: 15,
        title: "Investigation into the stability of Li metal anodes in Li–O2 batteries with a redox mediator",
        authors: "S. Ha, Youngjin Kim, D. Koo, K. -H. Ha, Y. Park, D.-M. Kim, S. Son, T. Yim and K. T. Lee*",
        journal: "J. Mater. Chem. A., 5, 10609",
        year: 2017,
        doi: ""
    },
    {
        id: 14,
        title: "Increase of Both Solubility and Working Voltage by Acetyl Substitution on Ferrocene for Non-Aqueous Flow Battery",
        authors: "H.-s. Kim, T. Yoon, Youngjin Kim, S. Hwang, J. H. Ryu, and S. M. Oh*",
        journal: "Electrochem. Commun., 69, 72",
        year: 2016,
        doi: ""
    },
    {
        id: 13,
        title: "Co-intercalation of Mg2+ and Na+ in Na0.69Fe2(CN)6 as a High Voltage Cathode for Magnesium Batteries",
        authors: "D. Kim, Youngjin Kim, D. Arumugam, S. W. Woo, Y. N. Jo, M.-S. Park, Y.-J. Kim, N.-S. Choi, and K. T. Lee*",
        journal: "ACS Appl. Mater. Interfaces., 8, 8554",
        year: 2016,
        doi: ""
    },
    {
        id: 12,
        title: "Electrode Performances of Amorphous Molybdenum Oxides of Different Molybdenum Valence for Lithium‐ion Batteries",
        authors: "J. Jang, S. Kim, Youngjin Kim, K. H. Park, J. H. Ku, J. H. Ryu, S. M. Oh",
        journal: "Isr. J. Chem., 55, 604",
        year: 2015,
        doi: ""
    },
    {
        id: 11,
        title: "Thermal Behavior of Solid Electrolyte Interphase Films Deposited on Graphite Electrodes with Different States-of-Charge",
        authors: "H. Park, T. Yoon, Youngjin Kim, J. G. Lee, J. Kim, H. Kim, J.H. Ryu, J.J. Kim, S.M. Oh*",
        journal: "J. Electrochem. Soc., 162, A892",
        year: 2015,
        doi: ""
    },
    {
        id: 10,
        title: "SnSe alloy as a Promising Anode Material for Na-ion Batteries",
        authors: "Youngjin Kim, Y. Kim, Y. Park, Y. N. Jo, Y. J. Kim, N. S. Choi, K. T. Lee*",
        journal: "Chem. Commun., 51, 50",
        year: 2015,
        doi: ""
    },
    {
        id: 9,
        title: "Interfacial Architectures based on a Binary Additive Combination for High-performance Sn4P3 Anodes in Sodium-ion Batteries",
        authors: "J. Y. Jang, Y. Lee, Youngjin Kim, J. Lee, S. Lee, K. T. Lee*, N. S. Choi*",
        journal: "J. Mater. Chem. A, 3, 8332",
        year: 2015,
        doi: ""
    },
    {
        id: 8,
        title: "A First-Cycle Coulombic Efficiency Higher than 100 % Observed for a Li2MO3 (M=Mo or Ru) Electrode",
        authors: "J. Jang, Youngjin Kim, O. B. Chae, T. Yoon, S. Kim, H. Kim, H. Park, J. H. Ryu, S. M. Oh *",
        journal: "Angew. Chem. Int. Ed., 53, 10654",
        year: 2014,
        doi: ""
    },
    {
        id: 7,
        title: "High-capacity Anode Materials for Sodium Ion Batteries",
        authors: "Youngjin Kim, K.H. Ha, S. M. Oh*, K. T. Lee*",
        journal: "Chem. Eur. J., 20, 11980",
        year: 2014,
        doi: ""
    },
    {
        id: 6,
        title: "Tin Phosphide as a Promising Anode Material for Na-ion Batteries",
        authors: "Youngjin Kim, Y. Kim, A. Choi, S. Woo, D. Mok, N. S. Choi, Y. S, Jung, J. H. Ryu, S. M. Oh*, K. T. Lee*",
        journal: "Adv. Mater., 26, 4139",
        year: 2014,
        doi: ""
    },
    {
        id: 5,
        title: "Inside Front Cover: An Amorphous Red Phosphorus/Carbon Composite as a Promising Anode Material for Sodium Ion Batteries",
        authors: "Kyu Tae Lee, Youngjin Kim*, Yuwon Park, Aram Choi, Nam‐Soon Choi, Jeongsoo Kim, Junesoo Lee, Ji Heon Ryu, Seung M Oh",
        journal: "Adv. Mater.",
        year: 2013,
        doi: "10.1002/adma.201204877"
    },
    {
        id: 4,
        title: "Composites: An Amorphous Red Phosphorus/Carbon Composite as a Promising Anode Material for Sodium Ion Batteries",
        authors: "Youngjin Kim*, Yuwon Park, Aram Choi, Nam‐Soon Choi, Jeongsoo Kim, Junesoo Lee, Ji Heon Ryu, Seung M Oh, Kyu Tae Lee",
        journal: "Adv.Mater.",
        year: 2013,
        doi: "10.1002/adma.201370143"
    },
    {
        id: 3,
        title: "An Amorphous Red Phosphorus/Carbon Composite as a Promising Anode Material for Sodium Ion Batteries",
        authors: "Youngjin Kim, Y. Park, A. Choi, N. S. Choi, J. Kim, J. Lee, J. H. Ryu, S. M. Oh*, K. T. Lee*",
        journal: "Adv. Mater., 25, 3045",
        year: 2013,
        doi: ""
    },
    {
        id: 2,
        title: "Charge Carrier in Rechargeable Batteries: Na ions vs. Li ions",
        authors: "S. Y. Hong, Youngjin Kim, Y. Park, A. Choi, N. S. Choi, K. T. Lee*",
        journal: "Energy Environ. Sci., 6, 2067",
        year: 2013,
        doi: ""
    },
    {
        id: 1,
        title: "Direct Synthesis of Self-Assembled Ferrite/Carbon Hybrid Nanosheets for High Performance Lithium-Ion Battery Anodes",
        authors: "B. Jang, M. Park, O. B. Chae, S. Park, Youngjin Kim, S. M. Oh, Y. Piao*, T. Hyeon*",
        journal: "J. Am. Chem. Soc., 134, 15010",
        year: 2012,
        doi: ""
    }
];



export const galleryData = [
    {
        id: 1,
        title: "EESL 첫 단체 사진",
        date: "2023.03",
        description: "EESL 연구실의 첫 번째 단체 사진입니다.",
        thumbnail: "/images/gallery-first-group-lab.jpg",
        images: [
            "/images/gallery-first-group-lab.jpg",
            "/images/gallery-first-group.jpg"
        ]
    },
    {
        id: 2,
        title: "EESL 회식",
        date: "2023.03",
        description: "",
        thumbnail: "/images/gallery-hoesik-1.jpg",
        images: [
            "/images/gallery-hoesik-1.jpg",
            "/images/gallery-hoesik-2.jpg",
            "/images/gallery-hoesik-3.jpg"
        ]
    },
    {
        id: 3,
        title: "EESL 산낙지 섭외 완료",
        date: "2023.05",
        description: "",
        thumbnail: "/images/gallery-nakji-1.jpg",
        images: [
            "/images/gallery-nakji-1.jpg"
        ]
    },
    {
        id: 4,
        title: "교수님과 함께하는 세미나",
        date: "2023.05",
        description: "",
        thumbnail: "/images/gallery-seminar-1.jpg",
        images: [
            "/images/gallery-seminar-1.jpg"
        ]
    },
    {
        id: 5,
        title: "2023 스승의 날",
        date: "2023.05",
        description: "",
        thumbnail: "/images/gallery-teachers-day-1.jpg",
        images: [
            "/images/gallery-teachers-day-1.jpg"
        ]
    },
    {
        id: 6,
        title: "EESL 단체 야구 경기 관람",
        date: "2023.07",
        description: "",
        thumbnail: "/images/gallery-baseball-1.jpg",
        images: [
            "/images/gallery-baseball-1.jpg",
            "/images/gallery-baseball-2.jpg"
        ]
    },
    {
        id: 7,
        title: "독일 잘 다녀와",
        date: "2023.07",
        description: "",
        thumbnail: "/images/gallery-germany-1.jpg",
        images: [
            "/images/gallery-germany-1.jpg"
        ]
    },
    {
        id: 8,
        title: "기업 연계 연구 프로젝트 참여 - 독일",
        date: "2023.07",
        description: "",
        thumbnail: "/images/gallery-germany-project-1.png",
        images: [
            "/images/gallery-germany-project-1.png"
        ]
    },
    {
        id: 9,
        title: "2023 하계 MT - 포항",
        date: "2023.08",
        description: "",
        thumbnail: "/images/gallery-2023-mt-1.jpg",
        images: [
            "/images/gallery-2023-mt-1.jpg",
            "/images/gallery-2023-mt-2.jpg",
            "/images/gallery-2023-mt-3.jpg",
            "/images/gallery-2023-mt-4.jpg",
            "/images/gallery-2023-mt-5.jpg",
            "/images/gallery-2023-mt-6.jpg",
            "/images/gallery-2023-mt-7.jpg",
            "/images/gallery-2023-mt-8.jpg"
        ]
    },
    {
        id: 10,
        title: "두근두근 coin cell 실험",
        date: "2023.08",
        description: "",
        thumbnail: "/images/gallery-coincell-1.png",
        images: [
            "/images/gallery-coincell-1.png",
            "/images/gallery-coincell-2.png",
            "/images/gallery-coincell-3.png"
        ]
    },
    {
        id: 11,
        title: "2023 백향제 축구 준우승 '문상혁'",
        date: "2023.10",
        description: "",
        thumbnail: "/images/gallery-soccer-1.png",
        images: [
            "/images/gallery-soccer-1.png"
        ]
    },
    {
        id: 12,
        title: "2023국가우수(이공계) 장학생 '김선호'",
        date: "2023.11",
        description: "",
        thumbnail: "/images/gallery-scholarship-1.jpg",
        images: [
            "/images/gallery-scholarship-1.jpg"
        ]
    },
    {
        id: 13,
        title: "2023 누들브리지 경연대회 금상 '김상범'",
        date: "2023.11",
        description: "",
        thumbnail: "/images/gallery-noodle-1.jpg",
        images: [
            "/images/gallery-noodle-1.jpg"
        ]
    },
    {
        id: 14,
        title: "화목한 EESL",
        date: "2023.12",
        description: "",
        thumbnail: "/images/gallery-eesl-2023-1.jpg",
        images: [
            "/images/gallery-eesl-2023-1.jpg"
        ]
    },
    {
        id: 15,
        title: "2023 EESL 송년회☺️",
        date: "2023.12",
        description: "",
        thumbnail: "/images/gallery-yearend-2023-1.jpg",
        images: [
            "/images/gallery-yearend-2023-1.jpg"
        ]
    },
    {
        id: 16,
        title: "The Future of Secondary Battery Technology",
        date: "2024.01",
        description: "Arumugam Manthiram & Ykim",
        thumbnail: "/images/gallery-battery-symposium-1.jpg",
        images: [
            "/images/gallery-battery-symposium-1.jpg"
        ]
    },
    {
        id: 17,
        title: "2024 New EESL Assemble",
        date: "2024.01",
        description: "",
        thumbnail: "/images/gallery-eesl-assemble-1.jpg",
        images: [
            "/images/gallery-eesl-assemble-1.jpg"
        ]
    },
    {
        id: 18,
        title: "2024 동계 MT - 양양 (2/5 ~ 2/7)",
        date: "2024.02",
        description: "",
        thumbnail: "/images/gallery-2024-mt-1.jpg",
        images: [
            "/images/gallery-2024-mt-1.jpg",
            "/images/gallery-2024-mt-2.jpg",
            "/images/gallery-2024-mt-3.jpg",
            "/images/gallery-2024-mt-4.jpg",
            "/images/gallery-2024-mt-5.jpg"
        ]
    },
    {
        id: 19,
        title: "학부 졸업 '최시은'",
        date: "2024.02",
        description: "",
        thumbnail: "/images/gallery-graduation-sieun-1.jpg",
        images: [
            "/images/gallery-graduation-sieun-1.jpg",
            "/images/gallery-graduation-sieun-2.jpg",
            "/images/gallery-graduation-sieun-3.jpg"
        ]
    },
    {
        id: 20,
        title: "행복한 EESL",
        date: "2024.04",
        description: "",
        thumbnail: "/images/gallery-happy-eesl-1.jpg",
        images: [
            "/images/gallery-happy-eesl-1.jpg"
        ]
    },
    {
        id: 21,
        title: "2024 춘계 전기화학회",
        date: "2024.04",
        description: "",
        thumbnail: "/images/gallery-electrochemistry-2024-1.jpg",
        images: [
            "/images/gallery-electrochemistry-2024-1.jpg",
            "/images/gallery-electrochemistry-2024-2.jpg"
        ]
    },
    {
        id: 22,
        title: "교수님 생신축하드려요 🥳😍🎉",
        date: "2024.04",
        description: "",
        thumbnailContain: true,
        thumbnail: "/images/gallery-birthday-prof-1.jpg",
        images: [
            "/images/gallery-birthday-prof-1.jpg"
        ]
    },
    {
        id: 23,
        title: "2024 하계 MT - 강릉 (08/12~08/14) 🏊",
        date: "2024.08",
        description: "",
        thumbnail: "/images/gallery-2024-summer-mt-1.png",
        images: [
            "/images/gallery-2024-summer-mt-1.png",
            "/images/gallery-2024-summer-mt-2.png",
            "/images/gallery-2024-summer-mt-3.png",
            "/images/gallery-2024-summer-mt-4.png",
            "/images/gallery-2024-summer-mt-5.png"
        ]
    },
    {
        id: 24,
        title: "2024 K-BATTERY SHOW (09/26)",
        date: "2024.09",
        description: "",
        thumbnail: "/images/gallery-kbattery-2024-1.png",
        images: [
            "/images/gallery-kbattery-2024-1.png",
            "/images/gallery-kbattery-2024-2.png",
            "/images/gallery-kbattery-2024-3.png"
        ]
    },
    {
        id: 25,
        title: "2024 연말 PARTY (11/22)",
        date: "2024.11",
        description: "",
        thumbnail: "/images/gallery-yearend-party-2024-1.png",
        images: [
            "/images/gallery-yearend-party-2024-1.png",
            "/images/gallery-yearend-party-2024-2.png",
            "/images/gallery-yearend-party-2024-3.png",
            "/images/gallery-yearend-party-2024-4.png"
        ]
    },
    {
        id: 26,
        title: "축 졸업🎉 '김인혜, 조준희'",
        date: "2025.02",
        description: "",
        thumbnail: "/images/gallery-graduation-2025-1.png",
        images: [
            "/images/gallery-graduation-2025-1.png",
            "/images/gallery-graduation-2025-2.png"
        ]
    },
    {
        id: 27,
        title: "2025 미래 세대의 리더, 용기의 사나이 '서하진'",
        date: "2025.02",
        description: "현대자동차 정몽구 재단 장학생",
        thumbnail: "/images/gallery-hyundai-scholarship-1.png",
        images: [
            "/images/gallery-hyundai-scholarship-1.png"
        ]
    },
    {
        id: 28,
        title: "EESL 1기 학부 졸업식",
        date: "2025.02",
        description: "",
        thumbnail: "/images/gallery-eesl-graduation-1st-1.png",
        images: [
            "/images/gallery-eesl-graduation-1st-1.png",
            "/images/gallery-eesl-graduation-1st-2.png"
        ]
    },
    {
        id: 29,
        title: "2025 Inter Battery (03/07)",
        date: "2025.03",
        description: "",
        thumbnail: "/images/gallery-interbattery-2025-1.png",
        images: [
            "/images/gallery-interbattery-2025-1.png",
            "/images/gallery-interbattery-2025-2.png",
            "/images/gallery-interbattery-2025-3.png"
        ]
    },
    {
        id: 30,
        title: "🎉교수님 생신🎉(04/23)",
        date: "2025.04",
        description: "",
        thumbnail: "/images/gallery-birthday-prof-2025-1.png",
        images: [
            "/images/gallery-birthday-prof-2025-1.png"
        ]
    },
    {
        id: 31,
        title: "2025 하계 워크숍 - 양양 (08/11 ~ 08/12)",
        date: "2025.08",
        description: "",
        thumbnail: "/images/gallery-2025-summer-workshop-1.png",
        images: [
            "/images/gallery-2025-summer-workshop-1.png",
            "/images/gallery-2025-summer-workshop-2.png",
            "/images/gallery-2025-summer-workshop-3.png"
        ]
    }
    // Add more gallery items
];

export const newsData = [
    {
        id: 3,
        date: "2025-10-28",
        title: `Research paper published in <em class="font-bold text-blue-900 not-italic">「Materials Today」</em>`,
        content: `Professor <span class="font-semibold text-gray-900">Young-Jin Kim</span> and student <span class="font-semibold text-gray-900">Bo-Seong Heo</span> have published their research paper in the prestigious international journal, <em class="font-bold text-blue-800">Materials Today</em>.

The study, titled "<span class="italic font-medium">Interfacial Stability Enhancement in Single-Crystal NCM Cathodes through Electronic Structure Optimization</span>," identifies the core mechanism for ensuring the stability of single-crystal mid-nickel cathode materials in lithium-ion batteries under high-voltage conditions.`,
        image: "/images/news 1.jpg" // 이미지 경로를 여기에 추가하세요!
    },
    {
        id: 2,
        date: "2025-09-10",
        title: `Awarded <span class="font-bold text-blue-900">"First Prize"</span> at 「KNU BATTERY DAY」`,
        content: `At the 「KNU BATTERY DAY」, a premier event bringing together the next generation of leaders in energy technology, <span class="font-bold text-gray-900">Si-eun Choi</span> was honored with the First Prize in recognition of her outstanding research achievements.In this study, <span class="font-bold text-gray-900">Choi</span> achieved a significant breakthrough by introducing a specialized primer coating layer onto the aluminum current collector. This innovation drastically improved both the electrical conductivity and electrochemical safety of NVP (Sodium Vanadium Phosphate), a material widely regarded as a promising candidate for next-generation cathodes.

While NVP cathodes are known for their high operating voltage and structural stability, their low electronic conductivity has long been a major hurdle for practical commercialization. By implementing a coating technology that lowers the interfacial resistance between the current collector and the cathode material, <span class="font-bold text-gray-900">Choi</span> successfully enhanced battery efficiency and demonstrated stable performance even under high-power conditions.`,
        image: "/images/news 3.jpg" // 사진이 없다면 이 줄을 지우시거나 비워두세요.
    },
    {
        id: 1,
        date: "2024-09-09",
        title: `<strong class="font-bold text-blue-900">Hyundai Motor Chung Mong-Koo Scholarship</strong> Selection`,
        content: `Student <span class="font-semibold text-gray-900">Ha-jin Seo</span> has been selected as a scholar in the <span class="font-medium text-blue-700">Climate Technology & Energy</span> track of the <strong class="text-blue-900">Hyundai Motor Chung Mong-Koo Scholarship</strong> (Future Industry Talent category).

The <strong class="text-blue-900">Hyundai Motor Chung Mong-Koo Scholarship</strong> is a flagship initiative of the <em class="font-semibold text-gray-900">Hyundai Motor Chung Mong-Koo Foundation</em>, providing comprehensive financial support and resources to nurture future leaders across various academic and industrial fields.`,
        image: "/images/news 2.png"
    }
];

export const contactData = {
    addressKo: "강원도 춘천시 강원대학길 1 강원대학교 공과대학 2호관 218호",
    addressEn: "Engineering Building 2, Room 218, Kangwon National University, Chuncheon, Korea",
    email: "ykim@kangwon.ac.kr",
    phone: "033-250-6261"
};

export const researchData = [
    {
        id: 1,
        title: "Mechanism study on NCM, NCA, LMR and Co-free cathodes",
        description: "Engineering the interface between electrode and electrolyte to suppress side reactions and enhance stability.",
        content: `
            <p class="mb-4">Detailed research description about the mechanism study on NCM, NCA, LMR, and Co-free cathodes goes here.</p>
            <p class="mb-4">You can add paragraphs, bullet points, and more in this section to elaborate on the specific methodologies, experiments, and results.</p>
            <ul class="list-disc list-inside mb-4 space-y-2">
                <li>Key mechanism 1</li>
                <li>Key mechanism 2</li>
                <li>Key findings and conclusions</li>
            </ul>
        `,
        color: "bg-gray-50",
        image: "/images/research-1.png"
    },
    {
        id: 2,
        title: "High-energy-density electrode materials for Na-ion batteries",
        description: "Developing stable interfaces for solid-state electrolytes to enable safer high-energy density batteries.",
        content: `
            <p class="mb-4">Detailed information regarding the development of high-energy-density electrode materials for Na-ion batteries.</p>
            <p class="mb-4">Highlighting the advantages of Na-ion technology and the specific material innovations being researched in the lab.</p>
        `,
        color: "bg-white",
        image: "/images/research-2.png"
    },
    {
        id: 3,
        title: "2D protection layers for Li metal anode",
        description: "Optimizing high-nickel layered oxide cathodes (NCM) for superior electrochemical performance.",
        content: `
            <p class="mb-4">In-depth exploration of 2D protection layers specifically designed for Lithium metal anodes.</p>
            <p class="mb-4">Discussing how these layers prevent dendrite formation and improve the overall lifecycle of the battery.</p>
        `,
        color: "bg-gray-50",
        image: "/images/research-3.png"
    }
];
