// =====================================================
// DONNÉES HISTORIQUES DE L'ÉGLISE
// Enrichies avec les Apôtres, Pères, Docteurs et Saints
// =====================================================

const churchHistory = {
    periods: [
        {
            id: "ancient",
            name: "L'Église Primitive",
            years: "30 - 313",
            description: "Des origines à l'Édit de Milan"
        },
        {
            id: "imperial",
            name: "L'Église Impériale",
            years: "313 - 476",
            description: "De Constantin à la chute de Rome"
        },
        {
            id: "medieval",
            name: "Le Moyen Âge",
            years: "476 - 1054",
            description: "Construction de la chrétienté"
        },
        {
            id: "schism",
            name: "Schismes & Réforme",
            years: "1054 - 1648",
            description: "Divisions et renouveau"
        },
        {
            id: "modern",
            name: "Époque Moderne",
            years: "1648 - 1962",
            description: "L'Église face au monde moderne"
        },
        {
            id: "contemporary",
            name: "Époque Contemporaine",
            years: "1962 - aujourd'hui",
            description: "Vatican II et l'Église d'aujourd'hui"
        }
    ],
    
    events: [
        // ==================== ÉGLISE PRIMITIVE ====================
        {
            id: 1,
            year: "~30",
            date: "vers 30",
            title: "Pentecôte",
            summary: "Descente de l'Esprit Saint sur les apôtres, naissance de l'Église.",
            description: "Cinquante jours après la résurrection de Jésus-Christ, le Saint-Esprit descend sur les apôtres réunis au Cénacle à Jérusalem. Pierre prononce son premier discours et environ 3000 personnes sont baptisées. Cet événement marque la naissance officielle de l'Église chrétienne.",
            period: "ancient",
            type: "major",
            icon: "fa-fire",
            details: [
                "Événement relaté dans les Actes des Apôtres (chapitre 2)",
                "Les apôtres parlent en langues (glossolalie)",
                "Premier discours missionnaire de saint Pierre",
                "Début de l'évangélisation du monde"
            ]
        },
        {
            id: 2,
            year: "~35",
            date: "vers 35",
            title: "Conversion de Saint Paul",
            summary: "Sur le chemin de Damas, Saul de Tarse rencontre le Christ ressuscité.",
            description: "Saul, pharisien zélé persécuteur des chrétiens, est terrassé par une lumière divine sur le chemin de Damas. Il entend la voix de Jésus et devient l'apôtre Paul, le plus grand missionnaire de l'histoire chrétienne, fondateur de nombreuses communautés et auteur de treize épîtres du Nouveau Testament.",
            period: "ancient",
            type: "apostle",
            icon: "fa-bolt",
            details: [
                "Ancien persécuteur des chrétiens",
                "Auteur de 13 épîtres du Nouveau Testament",
                "Trois grands voyages missionnaires",
                "« Ce n'est plus moi qui vis, c'est le Christ qui vit en moi » (Ga 2,20)"
            ]
        },
        
        // ==================== MORT DES APÔTRES ====================
        {
            id: 101,
            year: "~44",
            date: "vers 44",
            title: "⚔️ Martyre de Saint Jacques le Majeur",
            summary: "Premier apôtre martyr, décapité à Jérusalem sur ordre d'Hérode Agrippa.",
            description: "Jacques, fils de Zébédée et frère de Jean, est le premier des Douze à verser son sang pour le Christ. Le roi Hérode Agrippa Ier le fait décapiter à Jérusalem. Selon la tradition, son corps fut transporté en Espagne, à Compostelle, qui devient un grand lieu de pèlerinage.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Premier apôtre martyr",
                "Frère de saint Jean l'évangéliste",
                "Décapité par Hérode Agrippa (Actes 12,2)",
                "Patron de l'Espagne, pèlerinage de Compostelle"
            ]
        },
        {
            id: 102,
            year: "~62",
            date: "vers 62",
            title: "⚔️ Martyre de Saint Jacques le Mineur",
            summary: "« Frère du Seigneur », premier évêque de Jérusalem, précipité du Temple.",
            description: "Jacques le Mineur, appelé « frère du Seigneur », dirigeait l'Église de Jérusalem. Il était réputé pour sa grande piété et sa prière constante au Temple. Il fut précipité du pinacle du Temple puis achevé à coups de bâton, priant pour ses bourreaux comme le Christ.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Premier évêque de Jérusalem",
                "Auteur de l'Épître de Jacques",
                "Surnommé « le Juste » pour sa sainteté",
                "« La foi sans les œuvres est morte » (Jc 2,26)"
            ]
        },
        {
            id: 103,
            year: "~64",
            date: "vers 64",
            title: "⚔️ Martyre de Saint Philippe",
            summary: "L'apôtre de Hiérapolis crucifié la tête en bas.",
            description: "Philippe évangélisa la Phrygie (actuelle Turquie) et mourut martyr à Hiérapolis. Selon la tradition, il fut crucifié la tête en bas sous l'empereur Domitien après avoir converti la femme du proconsul romain.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Originaire de Bethsaïde comme Pierre et André",
                "Conduisit Nathanaël (Barthélemy) à Jésus",
                "Évangélisa la Phrygie (Turquie actuelle)",
                "« Seigneur, montre-nous le Père » (Jn 14,8)"
            ]
        },
        {
            id: 104,
            year: "~64",
            date: "vers 64",
            title: "⚔️ Martyre de Saint Pierre",
            summary: "Le Prince des Apôtres crucifié la tête en bas à Rome sous Néron.",
            description: "Pierre, la « pierre » sur laquelle le Christ a bâti son Église, meurt martyr à Rome durant la persécution de Néron. Selon la tradition, il demanda à être crucifié la tête en bas, se jugeant indigne de mourir comme son Maître. Sa tombe se trouve sous la basilique Saint-Pierre du Vatican.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Premier pape, chef des apôtres",
                "Crucifié la tête en bas au Vatican",
                "« Tu es Pierre, et sur cette pierre je bâtirai mon Église » (Mt 16,18)",
                "Tombe sous la basilique Saint-Pierre"
            ]
        },
        {
            id: 105,
            year: "~67",
            date: "vers 67",
            title: "⚔️ Martyre de Saint Paul",
            summary: "L'Apôtre des Gentils décapité à Rome sur la voie d'Ostie.",
            description: "Paul, citoyen romain, ne pouvait être crucifié. Il fut décapité sur la voie d'Ostie, à l'endroit appelé « Tre Fontane » (trois fontaines). Sa tête, selon la légende, rebondit trois fois, faisant jaillir trois sources. La basilique Saint-Paul-hors-les-Murs marque le lieu de sa sépulture.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Décapité car citoyen romain",
                "Basilique Saint-Paul-hors-les-Murs",
                "« J'ai combattu le bon combat, j'ai achevé ma course, j'ai gardé la foi » (2 Tm 4,7)",
                "Fêté avec saint Pierre le 29 juin"
            ]
        },
        {
            id: 106,
            year: "~65",
            date: "vers 65",
            title: "⚔️ Martyre de Saint Barthélemy",
            summary: "L'apôtre écorché vif en Arménie pour avoir converti le roi.",
            description: "Barthélemy (Nathanaël) évangélisa l'Inde et l'Arménie. Il convertit le roi Polymius, ce qui provoqua la colère du frère du roi. Il fut condamné à être écorché vif puis décapité. Il est souvent représenté tenant sa propre peau.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Évangélisa l'Inde et l'Arménie",
                "Écorché vif puis décapité",
                "Identifié à Nathanaël (Jn 1,45-51)",
                "« Voici vraiment un Israélite en qui il n'y a pas de ruse » (Jn 1,47)"
            ]
        },
        {
            id: 107,
            year: "~72",
            date: "vers 72",
            title: "⚔️ Martyre de Saint Thomas",
            summary: "L'apôtre de l'Inde transpercé d'une lance près de Madras.",
            description: "Thomas, l'apôtre qui douta de la Résurrection, évangélisa la Perse et l'Inde. Il fonda des communautés chrétiennes qui existent encore aujourd'hui (chrétiens de saint Thomas au Kerala). Il mourut martyr, transpercé d'une lance près de Madras (Chennai).",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Apôtre de l'Inde",
                "Fonda les chrétiens de saint Thomas (Kerala)",
                "Transpercé d'une lance à Mylapore",
                "« Mon Seigneur et mon Dieu ! » (Jn 20,28)"
            ]
        },
        {
            id: 108,
            year: "~80",
            date: "vers 80",
            title: "⚔️ Martyre de Saint Matthieu",
            summary: "L'évangéliste ancien publicain, martyrisé en Éthiopie.",
            description: "Matthieu (Lévi), l'ancien collecteur d'impôts appelé par Jésus, écrivit le premier Évangile. Il évangélisa l'Éthiopie et la Perse. Selon diverses traditions, il mourut martyr en Éthiopie, soit décapité, soit brûlé.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Ancien publicain (collecteur d'impôts)",
                "Auteur du premier Évangile",
                "Évangélisa l'Éthiopie",
                "Symbolisé par l'homme ailé (ange)"
            ]
        },
        {
            id: 109,
            year: "~80",
            date: "vers 80",
            title: "⚔️ Martyre de Saint Simon le Zélote",
            summary: "L'apôtre zélote scié en deux en Perse.",
            description: "Simon, surnommé le Zélote ou le Cananéen, était peut-être membre du mouvement nationaliste juif avant de suivre Jésus. Il évangélisa l'Égypte et la Perse avec Jude Thaddée. Selon la tradition, il fut martyrisé en Perse, scié en deux.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Surnommé « le Zélote » ou « le Cananéen »",
                "Évangélisa l'Égypte puis la Perse",
                "Martyrisé avec saint Jude",
                "Scié en deux selon la tradition"
            ]
        },
        {
            id: 110,
            year: "~80",
            date: "vers 80",
            title: "⚔️ Martyre de Saint Jude Thaddée",
            summary: "L'apôtre des causes désespérées, martyrisé à coups de massue en Perse.",
            description: "Jude Thaddée, « frère » de Jacques le Mineur et auteur d'une épître, évangélisa la Mésopotamie et la Perse. Il mourut martyr à coups de massue. Il est invoqué comme patron des causes désespérées.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Auteur de l'Épître de Jude",
                "Évangélisa la Mésopotamie et la Perse",
                "Patron des causes désespérées",
                "Tué à coups de massue"
            ]
        },
        {
            id: 111,
            year: "~62",
            date: "vers 62",
            title: "⚔️ Mort de Saint André",
            summary: "Le premier appelé, crucifié sur une croix en X à Patras.",
            description: "André, frère de Pierre et premier disciple appelé par Jésus, évangélisa la Grèce et la mer Noire. Il fut crucifié à Patras sur une croix en forme de X (croix de Saint-André). Il prêcha pendant deux jours depuis sa croix avant d'expirer.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Frère de saint Pierre",
                "Premier disciple appelé par Jésus",
                "Crucifié sur une croix en X",
                "Patron de l'Écosse, de la Russie et de la Grèce"
            ]
        },
        {
            id: 112,
            year: "~100",
            date: "vers 100",
            title: "⚔️ Mort de Saint Jean l'Évangéliste",
            summary: "Le disciple bien-aimé, seul apôtre mort de vieillesse à Éphèse.",
            description: "Jean, le disciple bien-aimé qui reposa sur le cœur de Jésus lors de la Cène, est le seul apôtre à ne pas avoir subi le martyre. Après avoir survécu miraculeusement à une immersion dans l'huile bouillante, il fut exilé à Patmos où il écrivit l'Apocalypse, puis mourut paisiblement à Éphèse.",
            period: "ancient",
            type: "apostle",
            icon: "fa-feather",
            details: [
                "Seul apôtre mort de vieillesse",
                "Auteur de l'Évangile, 3 épîtres et l'Apocalypse",
                "Gardien de la Vierge Marie",
                "« Dieu est amour » (1 Jn 4,8)"
            ]
        },
        {
            id: 113,
            year: "~80",
            date: "vers 80",
            title: "⚔️ Mort de Saint Matthias",
            summary: "L'apôtre choisi pour remplacer Judas, lapidé puis décapité.",
            description: "Matthias fut élu par le sort pour remplacer Judas parmi les Douze (Actes 1). Il évangélisa l'Éthiopie ou la Colchide (Géorgie actuelle). Selon la tradition, il fut lapidé puis décapité. Ses reliques sont vénérées à Trèves.",
            period: "ancient",
            type: "apostle",
            icon: "fa-cross",
            details: [
                "Élu pour remplacer Judas (Actes 1,26)",
                "Avait suivi Jésus depuis le baptême de Jean",
                "Lapidé puis décapité",
                "Reliques à Trèves (Allemagne)"
            ]
        },

        // ==================== PÈRES APOSTOLIQUES ====================
        {
            id: 3,
            year: "49",
            date: "49",
            title: "Concile de Jérusalem",
            summary: "Premier concile de l'Église : les païens peuvent devenir chrétiens sans passer par le judaïsme.",
            description: "Face à la question cruciale de l'admission des païens dans l'Église, les apôtres se réunissent à Jérusalem. Pierre et Paul défendent l'universalité du salut. Jacques propose un compromis. Cette décision capitale ouvre l'Église aux non-juifs et marque l'émancipation du christianisme par rapport au judaïsme.",
            period: "ancient",
            type: "council",
            icon: "fa-users",
            details: [
                "Premier concile de l'histoire de l'Église",
                "Présidé par saint Jacques",
                "Dispense les païens de la circoncision",
                "Établit les bases de l'universalité chrétienne"
            ]
        },
        {
            id: 4,
            year: "64",
            date: "64-68",
            title: "Persécution de Néron",
            summary: "Première grande persécution des chrétiens à Rome après l'incendie de la ville.",
            description: "Après le grand incendie de Rome, l'empereur Néron accuse les chrétiens d'en être responsables. Une terrible persécution s'ensuit : les chrétiens sont livrés aux bêtes, crucifiés ou transformés en torches vivantes. Saints Pierre et Paul sont martyrisés durant cette période.",
            period: "ancient",
            type: "major",
            icon: "fa-skull",
            details: [
                "Premiers martyrs romains",
                "Martyre de saint Pierre (crucifié la tête en bas)",
                "Martyre de saint Paul (décapité)",
                "Les chrétiens accusés d'être des 'ennemis du genre humain'"
            ]
        },
        {
            id: 5,
            year: "70",
            date: "70",
            title: "Destruction du Temple de Jérusalem",
            summary: "Les légions romaines de Titus détruisent le Temple, séparation définitive entre judaïsme et christianisme.",
            description: "La révolte juive contre Rome aboutit à la destruction totale de Jérusalem et de son Temple par Titus. Cet événement tragique accélère la séparation entre le judaïsme rabbinique et le christianisme naissant. Les chrétiens avaient quitté la ville avant le siège, y voyant l'accomplissement des prophéties de Jésus.",
            period: "ancient",
            type: "major",
            icon: "fa-fire-flame-curved",
            details: [
                "Fin du culte sacrificiel juif",
                "Diaspora juive définitive",
                "Les chrétiens fuient à Pella avant le siège",
                "Séparation définitive synagogue/Église"
            ]
        },
        
        // ==================== PÈRES APOSTOLIQUES ====================
        {
            id: 114,
            year: "~96",
            date: "vers 96",
            title: "📜 Saint Clément de Rome - Père Apostolique",
            summary: "Troisième successeur de Pierre, sa lettre aux Corinthiens est le plus ancien écrit chrétien hors du NT.",
            description: "Clément, quatrième évêque de Rome, écrit aux Corinthiens pour rétablir l'ordre dans leur communauté. Cette lettre, la plus ancienne après le Nouveau Testament, affirme déjà l'autorité de l'Église de Rome sur les autres Églises.",
            period: "ancient",
            type: "father",
            icon: "fa-scroll",
            quote: "« C'est par le Christ que nous fixons nos regards sur les hauteurs des cieux ; par lui nous contemplons comme dans un miroir le visage immaculé et sublime de Dieu. »",
            details: [
                "Quatrième évêque de Rome (88-99)",
                "Lettre aux Corinthiens (~96)",
                "Affirme l'autorité de Rome",
                "Martyr, jeté à la mer avec une ancre"
            ]
        },
        {
            id: 7,
            year: "107",
            date: "~107",
            title: "📜 Saint Ignace d'Antioche - Père Apostolique",
            summary: "L'évêque d'Antioche est livré aux bêtes à Rome, ses lettres fondent la théologie de l'épiscopat.",
            description: "Ignace, troisième évêque d'Antioche, est arrêté et condamné aux bêtes. Durant son voyage vers Rome, il écrit sept lettres aux communautés chrétiennes. Ces épîtres sont capitales pour la théologie de l'Église primitive, notamment sur l'épiscopat, l'Eucharistie et l'unité ecclésiale.",
            period: "ancient",
            type: "father",
            icon: "fa-envelope",
            quote: "« Là où est l'évêque, là est la communauté, de même que là où est le Christ Jésus, là est l'Église catholique. »",
            details: [
                "Premier à utiliser le terme 'Église catholique'",
                "Défenseur de l'autorité épiscopale",
                "« L'Eucharistie est la chair de notre Sauveur Jésus-Christ »",
                "« Je suis le froment de Dieu, moulu par les dents des bêtes »"
            ]
        },
        {
            id: 8,
            year: "155",
            date: "~155",
            title: "📜 Saint Polycarpe de Smyrne - Père Apostolique",
            summary: "L'évêque de Smyrne, disciple de Jean, est brûlé vif à 86 ans.",
            description: "Polycarpe, évêque de Smyrne et dernier témoin direct de l'ère apostolique (disciple de saint Jean), est arrêté et condamné au bûcher. Son martyre, relaté dans le plus ancien récit hagiographique conservé, inspire la vénération des martyrs et le culte des reliques.",
            period: "ancient",
            type: "father",
            icon: "fa-fire",
            quote: "« Voilà 86 ans que je le sers, et il ne m'a fait aucun mal. Comment pourrais-je blasphémer mon Roi qui m'a sauvé ? »",
            details: [
                "Disciple direct de saint Jean",
                "Plus ancien récit de martyre conservé",
                "Brûlé vif à 86 ans",
                "Les flammes formèrent une voûte autour de lui"
            ]
        },
        {
            id: 115,
            year: "~130",
            date: "vers 130",
            title: "📜 Épître de Barnabé - Père Apostolique",
            summary: "Écrit anonyme interprétant l'Ancien Testament à la lumière du Christ.",
            description: "L'Épître de Barnabé, longtemps attribuée au compagnon de Paul, propose une lecture typologique de l'Ancien Testament. Elle fut considérée comme canonique par certaines Églises anciennes. Elle témoigne de la rupture croissante entre christianisme et judaïsme.",
            period: "ancient",
            type: "father",
            icon: "fa-book",
            quote: "« Veillez sur vous-mêmes et soyez semblables à ceux qui cherchent Dieu. »",
            details: [
                "Écrit alexandrin anonyme",
                "Interprétation allégorique de l'AT",
                "Considéré canonique par certaines Églises",
                "Polémique anti-juive"
            ]
        },
        {
            id: 116,
            year: "~150",
            date: "vers 150",
            title: "📜 Le Pasteur d'Hermas - Père Apostolique",
            summary: "Visions apocalyptiques sur la pénitence et l'Église.",
            description: "Le Pasteur d'Hermas, écrit à Rome, contient des visions, des préceptes et des paraboles. Il fut très lu dans l'Église primitive et presque inclus dans le canon. Il traite notamment de la possibilité d'une seconde pénitence après le baptême.",
            period: "ancient",
            type: "father",
            icon: "fa-book",
            quote: "« L'Église fut créée avant toutes choses ; c'est pour elle que le monde fut formé. »",
            details: [
                "Écrit à Rome, très populaire",
                "Question de la pénitence post-baptismale",
                "Vision de l'Église comme vieille femme",
                "Presque inclus dans le canon biblique"
            ]
        },
        {
            id: 117,
            year: "~130",
            date: "vers 130",
            title: "📜 La Didachè - Père Apostolique",
            summary: "« Doctrine des Douze Apôtres », plus ancien manuel de catéchèse et de liturgie.",
            description: "La Didachè (« Enseignement ») est le plus ancien document sur la vie des premières communautés chrétiennes hors du Nouveau Testament. Il décrit les deux voies (vie et mort), les rites du baptême et de l'Eucharistie, l'organisation ecclésiale.",
            period: "ancient",
            type: "father",
            icon: "fa-book-open",
            quote: "« Il y a deux voies, l'une de la vie, l'autre de la mort ; mais il y a une grande différence entre les deux voies. »",
            details: [
                "Plus ancien manuel catéchétique",
                "Liturgie eucharistique primitive",
                "Règles sur le baptême et le jeûne",
                "Redécouvert en 1873"
            ]
        },

        // ==================== PÈRES APOLOGISTES ====================
        {
            id: 118,
            year: "~165",
            date: "vers 165",
            title: "📜 Saint Justin Martyr - Père Apologiste",
            summary: "Philosophe converti, premier grand apologiste, martyr à Rome.",
            description: "Justin, philosophe païen converti, ouvre une école chrétienne à Rome. Ses Apologies défendent la foi chrétienne devant les empereurs. Son Dialogue avec Tryphon est le premier écrit apologétique face au judaïsme. Décapité à Rome avec ses disciples.",
            period: "ancient",
            type: "father",
            icon: "fa-feather-pointed",
            quote: "« Tout ce qui a été dit de vrai par les philosophes nous appartient, à nous chrétiens. »",
            details: [
                "Premier grand apologiste chrétien",
                "Philosophe platonicien converti",
                "Théorie du Logos spermatikos",
                "Décapité à Rome (~165)"
            ]
        },
        {
            id: 119,
            year: "~180",
            date: "vers 180",
            title: "📜 Saint Irénée de Lyon - Père de l'Église",
            summary: "Évêque de Lyon, disciple de Polycarpe, premier grand théologien contre les hérésies.",
            description: "Irénée, originaire d'Asie Mineure et disciple de Polycarpe, devient évêque de Lyon. Son traité « Contre les hérésies » réfute le gnosticisme et établit les fondements de la théologie catholique : Tradition, succession apostolique, autorité de Rome.",
            period: "ancient",
            type: "father",
            icon: "fa-book",
            quote: "« La gloire de Dieu, c'est l'homme vivant, et la vie de l'homme, c'est la vision de Dieu. »",
            details: [
                "Disciple de Polycarpe, qui fut disciple de Jean",
                "Évêque de Lyon (177-202)",
                "« Contre les hérésies » (Adversus Haereses)",
                "Récapitulation : Christ nouvel Adam"
            ]
        },
        {
            id: 120,
            year: "~220",
            date: "vers 220",
            title: "📜 Tertullien - Père de l'Église latine",
            summary: "« Père de la théologie latine », créateur du vocabulaire théologique occidental.",
            description: "Tertullien, avocat carthaginois converti, est le premier grand écrivain chrétien de langue latine. Il forge le vocabulaire théologique : Trinitas, persona, substantia. Son génie polémique combat les hérésies. Malheureusement, il finit par rejoindre le montanisme rigoriste.",
            period: "ancient",
            type: "father",
            icon: "fa-pen",
            quote: "« Le sang des martyrs est semence de chrétiens. »",
            details: [
                "Premier théologien latin",
                "Créa le terme « Trinité »",
                "« Credo quia absurdum » (formule apocryphe)",
                "Finit montaniste (vers 207)"
            ]
        },
        {
            id: 121,
            year: "~254",
            date: "vers 254",
            title: "📜 Origène - Père de l'Église grecque",
            summary: "Génie de l'exégèse, père de la théologie spéculative, figure controversée.",
            description: "Origène, alexandrin, est peut-être le plus grand érudit de l'Antiquité chrétienne. Ses Hexaples comparent six versions de la Bible. Son exégèse allégorique et sa théologie audacieuse influencent toute la pensée chrétienne. Certaines thèses seront condamnées après sa mort.",
            period: "ancient",
            type: "father",
            icon: "fa-book-open",
            quote: "« Les Écritures divines sont comme les vêtements dont le Verbe s'est revêtu pour se manifester aux hommes. »",
            details: [
                "Hexaples : Bible en six colonnes",
                "Exégèse allégorique",
                "« De Principiis » : premier traité systématique",
                "Torturé sous Dèce, mort des suites (~254)"
            ]
        },
        {
            id: 122,
            year: "~258",
            date: "258",
            title: "📜 Saint Cyprien de Carthage - Père de l'Église",
            summary: "Évêque de Carthage, théologien de l'unité de l'Église, martyr.",
            description: "Cyprien, riche rhéteur converti, devient évêque de Carthage. Face aux schismes et à la question des lapsi, il défend l'unité de l'Église autour de l'évêque. Il meurt décapité sous la persécution de Valérien.",
            period: "ancient",
            type: "father",
            icon: "fa-church",
            quote: "« On ne peut avoir Dieu pour Père si l'on n'a pas l'Église pour Mère. »",
            details: [
                "« De l'unité de l'Église catholique »",
                "Théologien de l'épiscopat",
                "« Hors de l'Église, point de salut »",
                "Premier évêque africain martyr"
            ]
        },
        {
            id: 9,
            year: "250",
            date: "250-251",
            title: "Persécution de Dèce",
            summary: "Première persécution systématique dans tout l'Empire, tous doivent sacrifier aux dieux.",
            description: "L'empereur Dèce ordonne à tous les citoyens de sacrifier aux dieux romains et d'obtenir un certificat (libellus). Cette première persécution à l'échelle de l'Empire provoque de nombreuses apostasies et pose la question du pardon des 'lapsi' (chrétiens ayant failli).",
            period: "ancient",
            type: "major",
            icon: "fa-scroll",
            details: [
                "Première persécution systématique",
                "Système des certificats de sacrifice (libelli)",
                "Nombreuses apostasies",
                "Question des 'lapsi' : schisme de Novatien"
            ]
        },
        {
            id: 10,
            year: "303",
            date: "303-311",
            title: "Grande Persécution de Dioclétien",
            summary: "Dernière et plus violente persécution, des milliers de martyrs dans tout l'Empire.",
            description: "Dioclétien lance la plus grande persécution de l'histoire : destruction des églises et des Écritures, interdiction des assemblées, perte des droits civiques, emprisonnement et exécution en masse. L'ère des martyrs culmine mais l'Église en sort renforcée.",
            period: "ancient",
            type: "major",
            icon: "fa-skull",
            details: [
                "Destruction des livres saints",
                "Églises rasées",
                "Milliers de martyrs",
                "L'Église copte date son calendrier de cette persécution"
            ]
        },
        {
            id: 11,
            year: "313",
            date: "313",
            title: "Édit de Milan",
            summary: "Constantin et Licinius accordent la liberté religieuse aux chrétiens.",
            description: "Les empereurs Constantin et Licinius promulguent l'Édit de Milan qui accorde la liberté de culte aux chrétiens et restitue les biens confisqués à l'Église. C'est la fin des persécutions et le début d'une nouvelle ère : le christianisme devient religion licite puis dominante.",
            period: "ancient",
            type: "major",
            icon: "fa-scroll",
            details: [
                "Fin des persécutions",
                "Restitution des biens de l'Église",
                "Liberté de culte pour tous",
                "Début du christianisme impérial"
            ]
        },
        
        // ==================== ÉGLISE IMPÉRIALE ====================
        // ==================== PÈRES DE L'ÉGLISE - ÂGE D'OR ====================
        {
            id: 12,
            year: "325",
            date: "325",
            title: "Concile de Nicée I",
            summary: "Premier concile œcuménique : condamnation de l'arianisme, Credo de Nicée.",
            description: "Constantin convoque le premier concile œcuménique à Nicée pour résoudre la crise arienne. Arius enseignait que le Fils était une créature. Le concile proclame la divinité du Christ (« consubstantiel au Père ») et établit le Credo de Nicée, fondement de la foi chrétienne.",
            period: "imperial",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Le Fils est « consubstantiel (homoousios) au Père » - divinité pleine du Christ",
                "Condamnation d'Arius et de sa doctrine (le Fils serait une créature)",
                "Rédaction du Symbole de Nicée (Credo) - profession de foi universelle",
                "Fixation de la date de Pâques (1er dimanche après la pleine lune de printemps)",
                "Canon 6 : Primauté de Rome, Alexandrie et Antioche sur les provinces",
                "Canon 4 : Un évêque doit être consacré par tous les évêques de la province",
                "Canon 13 : Les mourants doivent recevoir le viatique (dernière communion)",
                "Canon 19 : Les paulianistes (disciples de Paul de Samosate) doivent être rebaptisés",
                "Réglementation sur les lapsi (chrétiens ayant failli pendant les persécutions)",
                "20 canons disciplinaires au total"
            ],
            details: [
                "Premier concile œcuménique (environ 300 évêques)",
                "Condamnation de l'arianisme",
                "Rédaction du Symbole de Nicée",
                "Fixation de la date de Pâques"
            ]
        },
        {
            id: 13,
            year: "330",
            date: "330",
            title: "Fondation de Constantinople",
            summary: "Constantin fonde la nouvelle capitale de l'Empire sur le site de Byzance.",
            description: "Constantin inaugure Constantinople, la « Nouvelle Rome », sur le site de l'ancienne Byzance. Cette ville chrétienne, sans temples païens, devient le siège d'un patriarcat majeur et le centre de l'Empire d'Orient pour plus de mille ans.",
            period: "imperial",
            type: "major",
            icon: "fa-city",
            details: [
                "Nouvelle capitale chrétienne",
                "Siège du patriarcat d'Orient",
                "Centre de l'Empire byzantin",
                "Chute en 1453 face aux Ottomans"
            ]
        },
        {
            id: 123,
            year: "~373",
            date: "373",
            title: "📜 Saint Athanase d'Alexandrie - Père & Docteur",
            summary: "« Pilier de l'Église », champion de Nicée contre l'arianisme, exilé 5 fois.",
            description: "Athanase, patriarche d'Alexandrie, est le grand défenseur de la divinité du Christ contre l'arianisme. Exilé cinq fois par les empereurs ariens, il reste inébranlable. Son traité « Sur l'Incarnation » est un chef-d'œuvre de la théologie.",
            period: "imperial",
            type: "doctor",
            icon: "fa-shield-halved",
            quote: "« Dieu s'est fait homme pour que l'homme devienne Dieu. »",
            details: [
                "Patriarche d'Alexandrie (328-373)",
                "Exilé 5 fois pour la foi de Nicée",
                "« Contra Arianos », « De Incarnatione »",
                "Fixa le canon du Nouveau Testament (367)"
            ]
        },
        {
            id: 124,
            year: "~379",
            date: "379",
            title: "📜 Saint Basile de Césarée - Père & Docteur",
            summary: "« Père du monachisme oriental », un des trois Cappadociens, organisateur de l'Église.",
            description: "Basile le Grand réforme le monachisme oriental par sa Règle, toujours suivie par les moines orthodoxes. Il combat l'arianisme, organise l'assistance aux pauvres (Basiliade), codifie la liturgie. Avec Grégoire de Nazianze et Grégoire de Nysse, il forme les « Cappadociens ».",
            period: "imperial",
            type: "doctor",
            icon: "fa-hands-praying",
            quote: "« Si tu es riche, donne. Si tu es pauvre, sers. Mais toujours, prie. »",
            details: [
                "Un des trois Cappadociens",
                "Règle monastique de saint Basile",
                "Créateur de la « Basiliade » (hôpital)",
                "Liturgie de saint Basile (orthodoxie)"
            ]
        },
        {
            id: 125,
            year: "~390",
            date: "390",
            title: "📜 Saint Grégoire de Nazianze - Père & Docteur",
            summary: "« Le Théologien », poète et orateur, défenseur de la Trinité.",
            description: "Grégoire de Nazianze, ami de Basile, est surnommé « le Théologien » pour ses cinq discours sur la Trinité. Brièvement patriarche de Constantinople, il préfère la contemplation. Ses poèmes et discours sont des sommets de la littérature patristique.",
            period: "imperial",
            type: "doctor",
            icon: "fa-feather",
            quote: "« Si je savais que Dieu m'était ennemi, je ne pourrais pas ne pas l'aimer. »",
            details: [
                "« Le Théologien » par excellence",
                "Discours théologiques sur la Trinité",
                "Patriarche de Constantinople (379-381)",
                "Grand poète chrétien"
            ]
        },
        {
            id: 126,
            year: "~394",
            date: "394",
            title: "📜 Saint Grégoire de Nysse - Père de l'Église",
            summary: "Frère de Basile, mystique et philosophe, penseur de l'infini de Dieu.",
            description: "Grégoire de Nysse, frère cadet de Basile, est le plus philosophe des Cappadociens. Sa théologie mystique de l'infini divin influence toute la mystique chrétienne. Il développe l'apocatastase (salut universel) et la progression infinie vers Dieu.",
            period: "imperial",
            type: "father",
            icon: "fa-infinity",
            quote: "« Trouver Dieu, c'est le chercher sans cesse ; car chercher et trouver ne font qu'un. »",
            details: [
                "Frère cadet de saint Basile",
                "Mystique de l'infini divin",
                "« Vie de Moïse », « Cantique des cantiques »",
                "Théorie de l'épectase (progrès infini)"
            ]
        },
        {
            id: 14,
            year: "381",
            date: "381",
            title: "Concile de Constantinople I",
            summary: "Deuxième concile œcuménique : divinité du Saint-Esprit, Credo de Nicée-Constantinople.",
            description: "Le concile condamne le macédonianisme (négation de la divinité de l'Esprit Saint) et complète le Credo de Nicée. Le Symbole de Nicée-Constantinople, toujours récité aujourd'hui, proclame l'Esprit Saint « Seigneur et qui donne la vie », complétant la doctrine trinitaire.",
            period: "imperial",
            type: "council",
            icon: "fa-dove",
            canons: [
                "L'Esprit Saint est « Seigneur et donne la vie, procède du Père » - pleine divinité",
                "Symbole de Nicée-Constantinople - Credo définitif encore récité aujourd'hui",
                "Canon 1 : Confirmation de la foi de Nicée, condamnation des hérésies",
                "Canon 2 : Les évêques ne doivent pas intervenir hors de leur diocèse",
                "Canon 3 : Constantinople a la primauté d'honneur après Rome (« Nouvelle Rome »)",
                "Canon 4 : Condamnation de Maxime le Cynique (intrus sur le siège de Constantinople)",
                "Condamnation du macédonianisme (négation de la divinité de l'Esprit)",
                "Condamnation de l'apollinarisme (négation de l'âme humaine du Christ)",
                "7 canons disciplinaires au total"
            ],
            details: [
                "Deuxième concile œcuménique (150 évêques)",
                "Divinité du Saint-Esprit affirmée",
                "Symbole de Nicée-Constantinople",
                "Constantinople : deuxième siège après Rome"
            ]
        },
        {
            id: 15,
            year: "380",
            date: "380",
            title: "Édit de Thessalonique",
            summary: "L'empereur Théodose fait du christianisme nicéen la religion officielle de l'Empire.",
            description: "L'empereur Théodose Ier proclame le christianisme nicéen seule religion de l'Empire romain. Le paganisme est progressivement interdit. L'Église passe du statut de religion persécutée à celui de religion d'État, transformation majeure aux conséquences durables.",
            period: "imperial",
            type: "major",
            icon: "fa-crown",
            details: [
                "Christianisme nicéen religion d'État",
                "Interdiction progressive du paganisme",
                "Fermeture des temples païens",
                "Fin des Jeux olympiques antiques (393)"
            ]
        },
        {
            id: 127,
            year: "~397",
            date: "397",
            title: "📜 Saint Ambroise de Milan - Père & Docteur",
            summary: "Évêque de Milan, défenseur de l'Église face à l'Empire, baptisa Augustin.",
            description: "Ambroise, gouverneur romain élu évêque par acclamation, devient le modèle de l'évêque face au pouvoir politique. Il interdit l'entrée de l'église à l'empereur Théodose après le massacre de Thessalonique. Il baptise Augustin et compose des hymnes.",
            period: "imperial",
            type: "doctor",
            icon: "fa-church",
            quote: "« L'empereur est dans l'Église, non au-dessus de l'Église. »",
            details: [
                "Gouverneur devenu évêque (374)",
                "Tint tête à l'empereur Théodose",
                "Baptisa saint Augustin (387)",
                "Créateur de l'hymnodie latine"
            ]
        },
        {
            id: 16,
            year: "387",
            date: "387",
            title: "Conversion de Saint Augustin",
            summary: "Le rhéteur de Milan se convertit, baptisé par saint Ambroise.",
            description: "Après une jeunesse dissolue et des années de recherche philosophique (manichéisme, néoplatonisme), Augustin se convertit à Milan sous l'influence de sa mère Monique et de l'évêque Ambroise. Il devient le plus grand théologien de l'Occident chrétien.",
            period: "imperial",
            type: "major",
            icon: "fa-book",
            details: [
                "Baptisé par saint Ambroise",
                "Évêque d'Hippone (395-430)",
                "Les Confessions, La Cité de Dieu",
                "Docteur de la grâce"
            ]
        },
        {
            id: 128,
            year: "~420",
            date: "420",
            title: "📜 Saint Jérôme - Père & Docteur",
            summary: "Traducteur de la Vulgate, père de l'exégèse latine, ermite à Bethléem.",
            description: "Jérôme, érudit irascible, traduit la Bible en latin (Vulgate), texte officiel de l'Église pendant 1500 ans. Installé à Bethléem, il commente l'Écriture avec une science immense. Son caractère difficile ne diminue pas sa sainteté.",
            period: "imperial",
            type: "doctor",
            icon: "fa-book-bible",
            quote: "« Ignorer les Écritures, c'est ignorer le Christ. »",
            details: [
                "Traducteur de la Vulgate",
                "Ermite à Bethléem (386-420)",
                "Commentaires bibliques majeurs",
                "Correspondance avec tout l'Empire"
            ]
        },
        {
            id: 129,
            year: "~430",
            date: "430",
            title: "📜 Saint Augustin d'Hippone - Père & Docteur",
            summary: "« Docteur de la grâce », le plus grand Père latin, philosophe et mystique.",
            description: "Augustin est le penseur le plus influent du christianisme occidental. Ses Confessions inventent l'autobiographie spirituelle. La Cité de Dieu fonde la philosophie de l'histoire. Sa théologie de la grâce et du péché originel façonne le catholicisme et le protestantisme.",
            period: "imperial",
            type: "doctor",
            icon: "fa-heart",
            quote: "« Tu nous as faits pour toi, Seigneur, et notre cœur est sans repos tant qu'il ne repose en toi. »",
            details: [
                "« Les Confessions » : autobiographie spirituelle",
                "« La Cité de Dieu » : philosophie de l'histoire",
                "Théologie de la grâce et du péché originel",
                "« Aime et fais ce que tu veux »"
            ]
        },
        {
            id: 17,
            year: "431",
            date: "431",
            title: "Concile d'Éphèse",
            summary: "Troisième concile œcuménique : Marie proclamée Theotokos (Mère de Dieu).",
            description: "Le concile condamne Nestorius qui refusait d'appeler Marie « Mère de Dieu ». Saint Cyrille d'Alexandrie fait proclamer le titre de Theotokos, affirmant l'unité de la personne du Christ : celui qui est né de Marie est véritablement Dieu.",
            period: "imperial",
            type: "council",
            icon: "fa-star",
            canons: [
                "Marie est Theotokos (Mère de Dieu) - elle a enfanté le Verbe incarné",
                "Condamnation de Nestorius et de sa doctrine (deux personnes dans le Christ)",
                "Approbation des 12 anathèmes de Cyrille d'Alexandrie contre Nestorius",
                "Canon 1 : Déposition des évêques qui adhèrent à l'hérésie de Nestorius",
                "Canon 4 : Les clercs qui suivent Nestorius sont déposés",
                "Canon 6 : Excommunication de quiconque ne se soumet pas au concile",
                "Canon 7 : Interdiction de modifier le Symbole de Nicée-Constantinople",
                "Canon 8 : Chypre conserve son autonomie ecclésiale (autocéphalie)",
                "Unité de la personne du Christ (une seule hypostase)",
                "8 canons disciplinaires au total"
            ],
            details: [
                "Troisième concile œcuménique (~200 évêques)",
                "Marie proclamée Theotokos (Mère de Dieu)",
                "Condamnation de Nestorius",
                "Schisme de l'Église d'Orient (nestorienne)"
            ]
        },
        {
            id: 130,
            year: "~444",
            date: "444",
            title: "📜 Saint Cyrille d'Alexandrie - Père & Docteur",
            summary: "Défenseur de Marie Theotokos contre Nestorius, théologien de l'Incarnation.",
            description: "Cyrille, patriarche d'Alexandrie, est le champion du concile d'Éphèse (431). Il combat Nestorius et fait proclamer Marie « Mère de Dieu ». Sa christologie de l'union hypostatique devient normative pour l'Église.",
            period: "imperial",
            type: "doctor",
            icon: "fa-star",
            quote: "« Celui que la Vierge a enfanté n'est pas un simple homme, mais le Fils de Dieu fait chair. »",
            details: [
                "Patriarche d'Alexandrie (412-444)",
                "Triomphe au concile d'Éphèse (431)",
                "Christologie de l'union hypostatique",
                "Docteur de l'Église (1882)"
            ]
        },
        {
            id: 18,
            year: "451",
            date: "451",
            title: "Concile de Chalcédoine",
            summary: "Quatrième concile œcuménique : deux natures (divine et humaine) dans l'unique personne du Christ.",
            description: "Face au monophysisme (une seule nature dans le Christ), le concile définit le dogme christologique : le Christ est vrai Dieu et vrai homme, en deux natures sans confusion ni division, unies en une seule personne (hypostase). Certaines Églises orientales refusent cette définition.",
            period: "imperial",
            type: "council",
            icon: "fa-balance-scale",
            canons: [
                "Définition christologique : le Christ en deux natures (divine et humaine)",
                "Les deux natures sont 'sans confusion, sans changement, sans division, sans séparation'",
                "Condamnation d'Eutychès et du monophysisme (une seule nature)",
                "Approbation du Tome de Léon ('Pierre a parlé par Léon')",
                "Canon 28 : Constantinople égale à Rome en privilèges (refusé par Rome)",
                "Canon 3 : Condamnation de la simonie dans les ordinations",
                "Canon 4 : Les moines soumis à l'autorité de l'évêque",
                "Canon 6 : Interdiction des ordinations 'absolues' (sans affectation)",
                "Canon 15 : Âge minimum de 40 ans pour les diaconesses",
                "Canon 27 : Interdiction du rapt pour mariage",
                "30 canons disciplinaires au total"
            ],
            details: [
                "Quatrième concile œcuménique (~600 évêques)",
                "Définition des deux natures du Christ",
                "Condamnation du monophysisme",
                "Schisme des Églises orientales (copte, arménienne...)"
            ]
        },
        {
            id: 200,
            year: "553",
            date: "553",
            title: "Concile de Constantinople II",
            summary: "Cinquième concile œcuménique : condamnation des « Trois Chapitres », christologie.",
            description: "L'empereur Justinien convoque ce concile pour condamner les « Trois Chapitres » (écrits de théologiens nestorianisants) afin de réconcilier les monophysites. Le pape Vigile, d'abord réticent, finit par approuver les décisions. Le concile précise la christologie de Chalcédoine.",
            period: "medieval",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Anathème 1 : Condamnation de Théodore de Mopsueste et de ses écrits nestoriens",
                "Anathème 2 : Condamnation des écrits de Théodoret de Cyr contre Cyrille",
                "Anathème 3 : Condamnation de la lettre d'Ibas d'Édesse à Maris",
                "Anathème 4 : Défense de Marie comme Theotokos contre Nestorius",
                "Anathème 5 : Affirmation de l'unique hypostase du Verbe incarné",
                "Anathème 6 : Marie est mère de Dieu au sens propre (non métaphorique)",
                "Anathème 7 : L'union des deux natures est 'selon l'hypostase'",
                "Anathème 8 : Les deux natures sont adorées d'une seule adoration",
                "Anathème 9 : Le Christ a souffert dans la chair selon sa nature humaine",
                "Anathème 10 : Condamnation de qui divise les titres du Christ entre deux personnes",
                "Anathème 11 : Condamnation de quiconque n'anathématise pas Arius, Eunomius, Macédonius, Apollinaire, Nestorius et Eutychès",
                "Anathème 12-14 : Condamnation de Théodore, Théodoret et Ibas nommément",
                "14 anathèmes christologiques au total (les 'Trois Chapitres')"
            ],
            details: [
                "Cinquième concile œcuménique",
                "Condamnation des Trois Chapitres",
                "Tentative de réconciliation avec les monophysites",
                "Affirmation de la christologie chalcédonienne"
            ]
        },
        {
            id: 201,
            year: "680",
            date: "680-681",
            title: "Concile de Constantinople III",
            summary: "Sixième concile œcuménique : condamnation du monothélisme, deux volontés dans le Christ.",
            description: "Ce concile condamne le monothélisme, doctrine qui attribuait une seule volonté (divine) au Christ. Il définit que le Christ possède deux volontés naturelles (divine et humaine) et deux opérations, conformément à ses deux natures. Le pape Honorius I est condamné pour son ambiguïté.",
            period: "medieval",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Définition dogmatique : Le Christ possède deux volontés naturelles (divine et humaine)",
                "Les deux volontés ne sont pas contraires mais harmonieuses",
                "La volonté humaine se soumet à la volonté divine sans résistance",
                "Le Christ possède deux opérations naturelles (théandrique)",
                "Condamnation du monothélisme (une seule volonté)",
                "Condamnation du monoénergisme (une seule opération)",
                "Anathème contre Sergius de Constantinople (initiateur du monothélisme)",
                "Anathème contre Cyrus d'Alexandrie (promoteur de l'Ekthésis)",
                "Anathème contre Pyrrhus et Paul de Constantinople",
                "Anathème contre le pape Honorius I pour négligence doctrinale",
                "Anathème contre Macaire d'Antioche et ses disciples",
                "Confirmation du Tome de Léon et de Chalcédoine",
                "Réaffirmation des cinq conciles œcuméniques précédents"
            ],
            details: [
                "Sixième concile œcuménique",
                "Condamnation du monothélisme",
                "Deux volontés dans le Christ",
                "Pape Honorius I condamné post mortem"
            ]
        },
        {
            id: 202,
            year: "787",
            date: "787",
            title: "Concile de Nicée II",
            summary: "Septième concile œcuménique : légitimité du culte des images (icônes).",
            description: "Face à la crise iconoclaste, ce concile définit la légitimité du culte des images. Il distingue la « vénération » (proskynèsis) rendue aux icônes de l'« adoration » (latreia) due à Dieu seul. Les icônes sont honorées car elles représentent le Christ incarné et les saints.",
            period: "medieval",
            type: "council",
            icon: "fa-image",
            canons: [
                "Définition dogmatique : Légitimité du culte des images saintes (icônes)",
                "Distinction entre proskynèsis (vénération) pour les images et latreia (adoration) pour Dieu seul",
                "L'honneur rendu à l'image passe à son prototype (le saint représenté)",
                "Les icônes du Christ justifiées par l'Incarnation (Dieu s'est rendu visible)",
                "Canon 1 : Maintien des canons des conciles précédents",
                "Canon 2 : Les évêques doivent connaître les Écritures et les canons",
                "Canon 3 : L'élection des évêques ne doit pas être faite par des laïcs",
                "Canon 4 : Condamnation de la simonie",
                "Canon 5 : Anathème contre ceux qui méprisent la tradition apostolique",
                "Canon 6 : Réunions synodales annuelles obligatoires",
                "Canon 7 : Les églises doivent posséder des reliques pour leur consécration",
                "Canon 9 : Obligation de remettre les livres iconoclastes à Constantinople",
                "Canon 10 : Un clerc ne peut quitter sa paroisse sans permission",
                "Canon 12 : Évêques et abbés ne peuvent aliéner les biens de l'Église",
                "Canon 13 : Les églises transformées en maisons doivent être restituées",
                "Canon 16 : Interdiction des vêtements somptueux pour les clercs",
                "Canon 18 : Les femmes ne peuvent demeurer dans les évêchés ou monastères d'hommes",
                "Canon 20 : Interdiction des monastères doubles (hommes et femmes)",
                "Canon 22 : La nourriture doit être prise avec modération et action de grâces",
                "22 canons disciplinaires au total"
            ],
            details: [
                "Septième et dernier concile œcuménique commun",
                "Fin de la crise iconoclaste",
                "Distinction vénération/adoration",
                "Justification théologique des icônes"
            ]
        },
        {
            id: 203,
            year: "869",
            date: "869-870",
            title: "Concile de Constantinople IV",
            summary: "Huitième concile œcuménique (catholique) : condamnation de Photius, primauté romaine.",
            description: "Ce concile condamne le patriarche Photius et rétablit Ignace sur le siège de Constantinople. Il affirme la primauté romaine. Les orthodoxes ne le reconnaissent pas comme œcuménique et considèrent comme tel le concile de 879-880 qui réhabilita Photius.",
            period: "medieval",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Canon 1 : Réception des sept conciles œcuméniques précédents",
                "Canon 2 : Les images du Christ et des saints doivent être vénérées",
                "Canon 3 : Condamnation de Photius et annulation de ses ordinations",
                "Canon 4 : Photius ne pourra jamais être réhabilité ou recevoir une charge",
                "Canon 5 : Anathème contre les partisans de Photius qui refusent de se soumettre",
                "Canon 10 : Les laïcs ne peuvent élever d'accusations contre les évêques",
                "Canon 11 : Interdiction d'élever un laïc directement à l'épiscopat",
                "Canon 12 : Condamnation de ceux qui n'acceptent pas les canons des conciles",
                "Canon 17 : Le patriarche ne peut être jugé que par un concile",
                "Canon 21 : Affirmation de la primauté romaine et des cinq patriarcats",
                "Canon 22 : Un laïc ne peut s'emparer d'un siège épiscopal par la force séculière",
                "Canon 26 : Interdiction d'exclure les légats romains des synodes orientaux",
                "Canon 27 : Reconnaissance des droits traditionnels des patriarches orientaux",
                "Restauration d'Ignace comme patriarche légitime de Constantinople",
                "27 canons disciplinaires au total"
            ],
            details: [
                "Huitième concile (catholique seulement)",
                "Condamnation de Photius",
                "Non reconnu par les orthodoxes",
                "Tensions Rome-Constantinople"
            ]
        },
        {
            id: 131,
            year: "~461",
            date: "461",
            title: "📜 Saint Léon le Grand - Père & Docteur",
            summary: "Pape théologien, son « Tome à Flavien » définit la foi de Chalcédoine, arrêta Attila.",
            description: "Léon Ier, pape (440-461), est le premier à être surnommé « le Grand ». Son Tome à Flavien définit la foi christologique adoptée à Chalcédoine. Il persuade Attila de ne pas envahir Rome et négocie avec Genséric. Il affirme la primauté romaine.",
            period: "imperial",
            type: "doctor",
            icon: "fa-crown",
            quote: "« Pierre a parlé par la bouche de Léon. »",
            details: [
                "Premier pape « le Grand »",
                "Tome à Flavien : christologie de Chalcédoine",
                "Arrêta Attila aux portes de Rome (452)",
                "Affirma la primauté romaine"
            ]
        },
        {
            id: 19,
            year: "476",
            date: "476",
            title: "Chute de l'Empire Romain d'Occident",
            summary: "Romulus Augustule est déposé, l'Église devient le principal facteur d'unité en Occident.",
            description: "La déposition du dernier empereur d'Occident par Odoacre marque la fin d'une ère. Dans le chaos des invasions barbares, l'Église romaine reste le seul facteur de continuité et d'unité. Les évêques assument des responsabilités civiles, préparant le rôle médiéval de la papauté.",
            period: "imperial",
            type: "major",
            icon: "fa-monument",
            details: [
                "Fin de l'Empire romain d'Occident",
                "L'Église préserve la culture romaine",
                "Les évêques prennent des responsabilités civiles",
                "Début de l'évangélisation des barbares"
            ]
        },
        
        // ==================== MOYEN ÂGE ====================
        {
            id: 20,
            year: "480",
            date: "~480",
            title: "⭐ Saint Benoît de Nursie",
            summary: "Le père du monachisme occidental établit sa règle à Monte Cassino.",
            description: "Benoît de Nursie fonde le monastère du Mont-Cassin et rédige sa Règle, base de la vie monastique occidentale. « Ora et labora » (prie et travaille) : les monastères bénédictins deviennent des centres de civilisation, préservant le savoir antique durant les siècles obscurs.",
            period: "medieval",
            type: "saint",
            icon: "fa-cross",
            quote: "« Ne rien préférer à l'amour du Christ. »",
            details: [
                "Règle de saint Benoît (~540)",
                "Fondation de Monte Cassino (529)",
                "« Ora et labora » (prie et travaille)",
                "Patron de l'Europe (proclamé en 1964)"
            ]
        },
        {
            id: 21,
            year: "496",
            date: "496",
            title: "Baptême de Clovis",
            summary: "Le roi des Francs est baptisé par saint Rémi, naissance de la France chrétienne.",
            description: "Clovis, roi des Francs, est baptisé à Reims avec 3000 de ses guerriers par l'évêque Rémi. Premier roi barbare à se convertir directement au catholicisme (et non à l'arianisme), il lie le destin des Francs à l'Église romaine. La France devient « fille aînée de l'Église ».",
            period: "medieval",
            type: "major",
            icon: "fa-crown",
            details: [
                "Premier roi barbare catholique",
                "Baptême à Reims par saint Rémi",
                "Alliance entre les Francs et Rome",
                "La France \"fille aînée de l'Église\""
            ]
        },
        {
            id: 22,
            year: "590",
            date: "590-604",
            title: "📜 Saint Grégoire le Grand - Père & Docteur",
            summary: "Le pape Grégoire organise l'Église, évangélise l'Angleterre, développe le chant grégorien.",
            description: "Grégoire Ier, moine bénédictin devenu pape, réforme profondément l'Église. Il envoie Augustin évangéliser l'Angleterre, codifie la liturgie (chant grégorien), écrit des œuvres théologiques majeures et affirme l'autorité pontificale. Il est le dernier des quatre grands docteurs de l'Église latine.",
            period: "medieval",
            type: "doctor",
            icon: "fa-music",
            quote: "« Serviteur des serviteurs de Dieu. »",
            details: [
                "Mission de saint Augustin en Angleterre (597)",
                "Réforme liturgique (chant grégorien)",
                "Pastoral Rule, Dialogues, Morales sur Job",
                "Dernier des 4 grands Docteurs latins"
            ]
        },
        {
            id: 132,
            year: "~636",
            date: "636",
            title: "📜 Saint Isidore de Séville - Père & Docteur",
            summary: "« Dernier Père de l'Église », encyclopédiste, préserva le savoir antique.",
            description: "Isidore, archevêque de Séville, est le dernier des Pères latins. Ses Étymologies, encyclopédie du savoir antique, sont le livre le plus copié au Moyen Âge après la Bible. Il préside les conciles de Tolède et organise l'Église d'Espagne.",
            period: "medieval",
            type: "doctor",
            icon: "fa-book",
            quote: "« La prière purifie, la lecture instruit. Si tu veux toujours être avec Dieu, prie souvent et lis souvent. »",
            details: [
                "« Étymologies » : encyclopédie médiévale",
                "Dernier Père de l'Église latine",
                "Archevêque de Séville (600-636)",
                "Patron d'Internet (proposé en 1997)"
            ]
        },
        {
            id: 133,
            year: "~749",
            date: "749",
            title: "📜 Saint Jean Damascène - Père & Docteur",
            summary: "Dernier Père grec, défenseur des icônes, synthèse de la théologie orientale.",
            description: "Jean Damascène, moine près de Jérusalem sous domination musulmane, est le dernier des Pères grecs. Sa « Source de la connaissance » synthétise la théologie orientale. Il défend le culte des icônes contre les iconoclastes et compose des hymnes liturgiques.",
            period: "medieval",
            type: "doctor",
            icon: "fa-image",
            quote: "« Je ne vénère pas la matière, mais le Créateur de la matière qui s'est fait matière pour moi. »",
            details: [
                "Dernier Père de l'Église grecque",
                "« Source de la connaissance »",
                "Défenseur des saintes icônes",
                "Hymnographe (Canon pascal)"
            ]
        },
        {
            id: 23,
            year: "622",
            date: "622",
            title: "Hégire - Naissance de l'Islam",
            summary: "Mahomet fuit La Mecque pour Médine, début de l'expansion musulmane.",
            description: "La fuite de Mahomet à Médine marque le début de l'ère musulmane. En un siècle, l'Islam conquiert le Moyen-Orient, l'Afrique du Nord et l'Espagne, territoires autrefois chrétiens. Cette expansion transforme radicalement la carte religieuse du monde méditerranéen.",
            period: "medieval",
            type: "major",
            icon: "fa-moon",
            details: [
                "Naissance d'une nouvelle religion mondiale",
                "Perte des territoires chrétiens orientaux",
                "Conquête de l'Afrique du Nord",
                "Invasion de l'Espagne (711)"
            ]
        },
        {
            id: 24,
            year: "732",
            date: "732",
            title: "Bataille de Poitiers",
            summary: "Charles Martel arrête l'expansion arabe en Gaule.",
            description: "Charles Martel, maire du palais franc, défait l'armée d'Abd al-Rahman à Poitiers (ou Tours). Cette victoire arrête l'expansion musulmane en Europe occidentale et renforce le prestige des Carolingiens, futurs défenseurs de la chrétienté.",
            period: "medieval",
            type: "major",
            icon: "fa-shield",
            details: [
                "Arrêt de l'expansion musulmane en Occident",
                "Charles Martel \"Marteau\"",
                "Prestige des Carolingiens",
                "Alliance future avec la papauté"
            ]
        },
        {
            id: 134,
            year: "~735",
            date: "735",
            title: "📜 Saint Bède le Vénérable - Docteur",
            summary: "« Père de l'histoire anglaise », moine érudit, datation ère chrétienne.",
            description: "Bède, moine de Jarrow en Angleterre, est le plus grand érudit du haut Moyen Âge. Son « Histoire ecclésiastique du peuple anglais » est un modèle d'historiographie. Il popularise la datation « avant/après Jésus-Christ » et commente toute la Bible.",
            period: "medieval",
            type: "doctor",
            icon: "fa-book",
            quote: "« Que ceux qui liront ce livre prient pour moi, afin que je reçoive la récompense de mon labeur. »",
            details: [
                "Moine de Jarrow (Angleterre)",
                "« Histoire ecclésiastique » des Anglo-Saxons",
                "Popularisa la datation ère chrétienne (AD)",
                "Docteur de l'Église (1899)"
            ]
        },
        {
            id: 25,
            year: "800",
            date: "800",
            title: "Couronnement de Charlemagne",
            summary: "Le pape Léon III couronne Charlemagne empereur à Rome.",
            description: "Le jour de Noël 800, le pape Léon III couronne Charlemagne empereur des Romains à Saint-Pierre de Rome. Cet événement restaure symboliquement l'Empire d'Occident et scelle l'alliance entre la papauté et les Carolingiens, fondement de la chrétienté médiévale.",
            period: "medieval",
            type: "major",
            icon: "fa-crown",
            details: [
                "Restauration de l'Empire d'Occident",
                "Alliance papauté-Empire",
                "Renaissance carolingienne",
                "Charlemagne protecteur de l'Église"
            ]
        },
        {
            id: 26,
            year: "863",
            date: "863",
            title: "⭐ Mission de Cyrille et Méthode",
            summary: "Les frères slaves évangélisent les peuples slaves et créent l'alphabet cyrillique.",
            description: "Les frères Cyrille et Méthode, envoyés par Constantinople, évangélisent la Grande-Moravie. Ils créent l'alphabet glagolitique (ancêtre du cyrillique) pour traduire la Bible en slavon. Leur mission façonne l'identité culturelle et religieuse du monde slave.",
            period: "medieval",
            type: "saint",
            icon: "fa-language",
            quote: "« Tous les peuples ont le droit de louer Dieu dans leur propre langue. »",
            details: [
                "Création de l'alphabet glagolitique/cyrillique",
                "Traduction de la Bible en slavon",
                "Évangélisation des Slaves",
                "Co-patrons de l'Europe (1980)"
            ]
        },
        {
            id: 27,
            year: "910",
            date: "910",
            title: "Fondation de Cluny",
            summary: "Guillaume d'Aquitaine fonde l'abbaye de Cluny, début d'une grande réforme monastique.",
            description: "L'abbaye de Cluny, fondée en Bourgogne, inaugure un vaste mouvement de réforme monastique. Directement soumise à Rome, elle développe un réseau de monastères à travers l'Europe. La liturgie clunisienne, somptueuse, influence toute la chrétienté médiévale.",
            period: "medieval",
            type: "movement",
            icon: "fa-church",
            details: [
                "Réforme monastique majeure",
                "Indépendance par rapport aux seigneurs locaux",
                "Réseau de plus de 1000 monastères",
                "Influence sur la réforme grégorienne"
            ]
        },
        {
            id: 28,
            year: "988",
            date: "988",
            title: "Baptême de la Russie",
            summary: "Le prince Vladimir de Kiev se fait baptiser, christianisation de la Russie.",
            description: "Le prince Vladimir Ier de Kiev se convertit au christianisme byzantin et fait baptiser son peuple dans le Dniepr. La Russie entre dans l'orbite culturelle et religieuse de Constantinople, fondant l'identité de l'orthodoxie russe.",
            period: "medieval",
            type: "major",
            icon: "fa-water",
            details: [
                "Christianisation de la Rus' de Kiev",
                "Adoption du rite byzantin",
                "Fondement de l'orthodoxie russe",
                "Vladimir canonisé comme saint"
            ]
        },
        {
            id: 29,
            year: "1054",
            date: "1054",
            title: "Grand Schisme d'Orient",
            summary: "Rupture entre Rome et Constantinople, séparation des Églises catholique et orthodoxe.",
            description: "Le légat du pape Humbert de Silva Candida et le patriarche Michel Cérulaire s'excommunient mutuellement à Constantinople. Cette rupture, fruit de siècles de divergences (Filioque, autorité du pape, rites), sépare définitivement la chrétienté en Église catholique romaine et Églises orthodoxes.",
            period: "medieval",
            type: "schism",
            icon: "fa-divide",
            details: [
                "Excommunications mutuelles",
                "Querelle du Filioque",
                "Question de la primauté romaine",
                "Excommunications levées en 1964"
            ]
        },
        
        // ==================== SCHISMES & RÉFORME ====================
        {
            id: 30,
            year: "1095",
            date: "1095",
            title: "Appel à la Première Croisade",
            summary: "Le pape Urbain II appelle la chrétienté à libérer Jérusalem.",
            description: "Au concile de Clermont, le pape Urbain II lance un appel à la croisade pour libérer les Lieux saints. « Dieu le veut ! » Cet appel déclenche deux siècles de croisades, transformant les relations entre l'Occident chrétien, Byzance et le monde musulman.",
            period: "schism",
            type: "major",
            icon: "fa-cross",
            details: [
                "Concile de Clermont",
                "\"Dieu le veut!\" (Deus vult)",
                "Prise de Jérusalem (1099)",
                "Création des États latins d'Orient"
            ]
        },
        {
            id: 204,
            year: "1123",
            date: "1123",
            title: "Concile de Latran I",
            summary: "Neuvième concile œcuménique : premier concile en Occident, réforme grégorienne.",
            description: "Premier concile œcuménique tenu en Occident, dans la basilique Saint-Jean-de-Latran à Rome. Il confirme le concordat de Worms (fin de la querelle des Investitures), renouvelle la condamnation des investitures laïques et confirme l'obligation du célibat ecclésiastique.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Canon 1 : Confirmation du Concordat de Worms (fin de la querelle des Investitures)",
                "Canon 2 : Interdiction de l'investiture des évêques et abbés par des laïcs",
                "Canon 3 : Les ordinations simoniaques sont nulles",
                "Canon 4 : Les clercs en concubinage ne peuvent célébrer la messe",
                "Canon 7 : Le mariage des clercs majeurs (sous-diacres et au-dessus) est interdit",
                "Canon 8 : Interdiction aux moines de quitter leur monastère pour devenir curés",
                "Canon 9 : Les biens d'Église ne peuvent être donnés en fief aux laïcs",
                "Canon 10 : Protection des pèlerins et des croisés",
                "Canon 11 : Trêve de Dieu : interdiction des combats certains jours",
                "Canon 12 : Confirmation des possessions des croisés pendant leur absence",
                "Canon 14 : Interdiction du pillage des naufragés",
                "Canon 16 : Condamnation de l'usure",
                "Canon 17 : Les abbés ne doivent pas s'occuper des affaires séculières",
                "Canon 18 : Les doyens ne doivent pas empiéter sur les droits de l'évêque",
                "Canon 19 : Les évêques peuvent absoudre les péchés réservés aux prêtres absents",
                "Canon 21-22 : Règles sur la succession épiscopale et les prébendes",
                "22 canons disciplinaires au total"
            ],
            details: [
                "Premier concile œcuménique occidental",
                "Fin de la querelle des Investitures",
                "Concordat de Worms (1122) confirmé",
                "Réforme grégorienne"
            ]
        },
        {
            id: 205,
            year: "1139",
            date: "1139",
            title: "Concile de Latran II",
            summary: "Dixième concile œcuménique : fin du schisme d'Anaclet II, discipline ecclésiastique.",
            description: "Convoqué pour mettre fin au schisme de l'antipape Anaclet II, ce concile invalide ses ordinations. Il légifère sur la discipline ecclésiastique : interdiction du mariage des clercs majeurs, condamnation de la simonie, des tournois et de l'usure.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Canon 1 : Annulation de toutes les ordinations faites par l'antipape Anaclet II",
                "Canon 2 : Les ordinations simoniaques sont invalides",
                "Canon 3 : Interdiction du cumul des bénéfices ecclésiastiques",
                "Canon 4 : Les clercs ne doivent pas porter de vêtements luxueux ou colorés",
                "Canon 5 : Les évêques doivent avoir des portiers pour protéger les églises",
                "Canon 6 : Nullité du mariage des clercs majeurs (sous-diacres et au-dessus)",
                "Canon 7 : Les mariages contractés après vœux solennels sont nuls",
                "Canon 8 : Les religieuses ne peuvent chanter l'office avec les chanoines",
                "Canon 9 : Interdiction des tournois sous peine d'excommunication",
                "Canon 10 : Protection des clercs, moines, pèlerins, marchands contre la violence",
                "Canon 11 : Les incendiaires sont excommuniqués",
                "Canon 12 : Trêve de Dieu renouvelée",
                "Canon 13 : Interdiction de l'usure",
                "Canon 14 : Interdiction des études de droit civil et de médecine pour les moines",
                "Canon 15 : Condamnation du nicolaisme (concubinage des prêtres)",
                "Canon 18 : Les hérétiques (Pétrobrusiens, Henriciens) sont anathématisés",
                "Canon 20 : Règles sur les ordinations et les dîmes",
                "Canon 25 : Condamnation de l'arbalète contre les chrétiens",
                "Canon 27 : Interdiction aux religieuses de vivre dans des maisons privées",
                "Canon 28 : Les élections épiscopales doivent se faire par le chapitre",
                "30 canons disciplinaires au total"
            ],
            details: [
                "Dixième concile œcuménique",
                "Fin du schisme d'Anaclet II",
                "Célibat ecclésiastique obligatoire",
                "Condamnation des tournois"
            ]
        },
        {
            id: 206,
            year: "1179",
            date: "1179",
            title: "Concile de Latran III",
            summary: "Onzième concile œcuménique : élection papale aux 2/3, condamnation des Cathares.",
            description: "Ce concile établit que l'élection du pape requiert une majorité des deux tiers des cardinaux, règle toujours en vigueur. Il condamne les Cathares et les Vaudois, interdit l'usure et fixe l'âge minimum pour l'épiscopat à 30 ans.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Canon 1 : L'élection du pape requiert les 2/3 des voix des cardinaux (toujours en vigueur)",
                "Canon 2 : Les élections faites par moins de 2/3 sont nulles",
                "Canon 3 : Âge minimum de 30 ans pour les évêques, 25 ans pour les curés",
                "Canon 4 : Les clercs ne doivent pas cumuler les bénéfices avec charge d'âmes",
                "Canon 5 : Les ordinations sans titre (beneficium) sont interdites",
                "Canon 7 : Interdiction de percevoir des honoraires pour les sacrements",
                "Canon 8 : Les chanoines ne doivent pas confier leurs églises à des vicaires",
                "Canon 9 : Les prélats ne peuvent voyager avec trop de faste",
                "Canon 10 : Interdiction aux religieux de posséder des biens propres",
                "Canon 11 : Les clercs ne doivent pas loger des femmes suspectes",
                "Canon 12 : Un chapitre ne peut empêcher l'évêque de réformer un abus",
                "Canon 14 : Condamnation de la simonie",
                "Canon 18 : Chaque cathédrale doit avoir un maître pour instruire gratuitement les pauvres",
                "Canon 19 : Trêve de Dieu : du mercredi soir au lundi matin",
                "Canon 20 : Interdiction aux Juifs d'avoir des serviteurs chrétiens",
                "Canon 22 : Protection des lépreux et de leurs chapelles",
                "Canon 24 : Condamnation des marchands d'armes aux Sarrasins",
                "Canon 25 : Interdiction de l'usure",
                "Canon 26 : Les Juifs et Sarrasins ne doivent pas être contraints au baptême",
                "Canon 27 : Condamnation des hérétiques (Cathares, Patarins, Vaudois)",
                "27 canons disciplinaires au total"
            ],
            details: [
                "Onzième concile œcuménique",
                "Élection papale aux 2/3",
                "Condamnation des Cathares et Vaudois",
                "Âge minimum pour les évêques : 30 ans"
            ]
        },
        {
            id: 207,
            year: "1215",
            date: "1215",
            title: "Concile de Latran IV",
            summary: "Douzième concile œcuménique : transsubstantiation, confession annuelle, croisade.",
            description: "Le plus important concile médiéval, convoqué par Innocent III. Il définit la transsubstantiation eucharistique, impose la confession et communion annuelles (« précepte pascal »), organise la cinquième croisade et légifère contre les hérésies.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Constitution 1 : Profession de foi définissant la TRANSSUBSTANTIATION eucharistique",
                "Constitution 1 : Un seul Dieu en trois personnes : Père, Fils, Saint-Esprit",
                "Constitution 1 : Le Christ vrai Dieu et vrai homme, présent dans l'Eucharistie",
                "Constitution 2 : Condamnation des erreurs de Joachim de Flore sur la Trinité",
                "Constitution 3 : Procédure contre les hérétiques (origine de l'Inquisition)",
                "Canon 21 : CONFESSION ANNUELLE obligatoire et communion à Pâques (précepte pascal)",
                "Canon 22 : Le médecin doit exhorter le malade à appeler un confesseur",
                "Canon 23 : Les cathédrales et paroisses vacantes doivent être pourvues dans 3 mois",
                "Canon 24 : Les élections ecclésiastiques doivent se faire par scrutin ou compromis",
                "Canon 27 : Les candidats aux ordres doivent être instruits",
                "Canon 29 : Interdiction du cumul des bénéfices",
                "Canon 50 : Les empechements de mariage réduits au 4e degré (au lieu du 7e)",
                "Canon 51 : Les mariages clandestins sont interdits (publication des bans)",
                "Canon 62 : Réglementation des reliques et indulgences",
                "Canon 63 : Condamnation de la simonie",
                "Canon 67 : Interdiction de l'usure, spécialement pour les Juifs",
                "Canon 68 : Les Juifs et Sarrasins doivent porter un habit distinctif",
                "Canon 69 : Les Juifs ne peuvent exercer de fonctions publiques",
                "Canon 70 : Les Juifs convertis ne doivent pas garder leurs anciens rites",
                "Canon 71 : Organisation de la cinquième croisade",
                "71 canons (constitutions) au total - le plus grand nombre"
            ],
            details: [
                "Plus grand concile médiéval (1200 participants)",
                "Dogme de la transsubstantiation",
                "Confession annuelle obligatoire",
                "Organisation de la cinquième croisade"
            ]
        },
        {
            id: 208,
            year: "1245",
            date: "1245",
            title: "Concile de Lyon I",
            summary: "Treizième concile œcuménique : déposition de Frédéric II, secours à la Terre Sainte.",
            description: "Le pape Innocent IV, réfugié à Lyon, convoque ce concile pour déposer l'empereur Frédéric II, excommunié pour ses conflits avec la papauté. Le concile organise aussi une nouvelle croisade et traite de la réforme de l'Église.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Constitution 1 : DÉPOSITION de l'empereur Frédéric II du Saint-Empire",
                "Frédéric II déclaré parjure, hérétique et sacrilège",
                "Ses sujets sont déliés de leur serment de fidélité",
                "Constitution 2 : Organisation de la septième croisade (Saint Louis)",
                "Subsides pour la Terre Sainte : vingtième des revenus ecclésiastiques",
                "Constitution 3 : Aide à l'Empire latin de Constantinople",
                "Constitution 4 : Défense contre les invasions tartares (Mongols)",
                "Appel à la croisade contre les Mongols",
                "Règles sur la procédure judiciaire ecclésiastique",
                "Protection des prélats contre les spoliations des princes",
                "Interdiction des élections épiscopales simoniaque ou par pression laïque",
                "Règles sur les excommunications et interdits",
                "Protection des biens ecclésiastiques",
                "17 constitutions au total"
            ],
            details: [
                "Treizième concile œcuménique",
                "Déposition de l'empereur Frédéric II",
                "Organisation d'une croisade",
                "Pape réfugié à Lyon"
            ]
        },
        {
            id: 209,
            year: "1274",
            date: "1274",
            title: "Concile de Lyon II",
            summary: "Quatorzième concile œcuménique : union éphémère avec les Grecs, élection papale.",
            description: "Ce concile réalise une union (éphémère) avec l'Église byzantine, les Grecs acceptant le Filioque et la primauté romaine. Il fixe aussi les règles du conclave (enfermement des cardinaux). Saint Thomas d'Aquin meurt en route vers le concile.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Constitution 1 : UNION avec l'Église grecque (byzantins acceptent le Filioque)",
                "Les Grecs reconnaissent la primauté du pape sur l'Église universelle",
                "Le Saint-Esprit procède du Père ET du Fils (Filioque)",
                "Récitation du Credo avec le Filioque par les légats grecs",
                "Constitution 2 : RÈGLES DU CONCLAVE pour l'élection papale (Ubi periculum)",
                "Les cardinaux doivent s'enfermer 10 jours après la mort du pape",
                "Nourriture réduite progressivement pour accélérer l'élection",
                "Constitution 3 : Secours à la Terre Sainte, dîmes pour la croisade",
                "Constitution 4 : Réforme des ordres mendiants (suppression de certains)",
                "Seuls les Franciscains, Dominicains, Carmes et Augustins sont maintenus",
                "Les autres ordres mendiants sont supprimés",
                "Canons sur la procédure judiciaire (appels, délais)",
                "Règles sur les élections épiscopales et le cumul des bénéfices",
                "Interdiction de l'usure",
                "Protection des croisés et de leurs biens",
                "31 constitutions au total"
            ],
            details: [
                "Quatorzième concile œcuménique",
                "Union (éphémère) avec les Grecs",
                "Règles du conclave établies",
                "Thomas d'Aquin mort en chemin"
            ]
        },
        {
            id: 210,
            year: "1311",
            date: "1311-1312",
            title: "Concile de Vienne",
            summary: "Quinzième concile œcuménique : suppression des Templiers, réformes.",
            description: "Convoqué par Clément V sous la pression de Philippe le Bel, ce concile supprime l'Ordre du Temple (Templiers), accusé d'hérésie. Il légifère aussi sur la réforme de l'Église et condamne certaines erreurs des béguines et béghards.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Bulle 'Vox in excelso' : SUPPRESSION DE L'ORDRE DU TEMPLE (Templiers)",
                "L'Ordre n'est pas condamné pour hérésie mais supprimé par mesure administrative",
                "Bulle 'Ad providam' : Biens des Templiers transférés aux Hospitaliers",
                "Exception : en Espagne, biens donnés aux ordres militaires locaux",
                "Décret 'Fidei catholicae' : Définition de l'âme comme forme du corps",
                "L'âme rationnelle est la forme substantielle du corps humain",
                "Décret 'Ad nostrum' : Condamnation des erreurs des Béghards et Béguines",
                "Condamnation de 8 erreurs sur la perfection, l'âme et les sacrements",
                "Décret sur la Trinité : le Saint-Esprit procède du Père et du Fils",
                "Canons sur la réforme du clergé et des ordres religieux",
                "Création de chaires de langues orientales (hébreu, arabe, chaldéen) dans les universités",
                "Règles sur l'Inquisition et la procédure contre les hérétiques",
                "Subside pour une nouvelle croisade",
                "Canons sur les exemptions et privilèges ecclésiastiques",
                "38 décrets et constitutions au total"
            ],
            details: [
                "Quinzième concile œcuménique",
                "Suppression de l'Ordre du Temple",
                "Pression du roi de France",
                "Biens des Templiers aux Hospitaliers"
            ]
        },
        {
            id: 211,
            year: "1414",
            date: "1414-1418",
            title: "Concile de Constance",
            summary: "Seizième concile œcuménique : fin du Grand Schisme, condamnation de Jan Hus.",
            description: "Ce concile met fin au Grand Schisme d'Occident en déposant ou obtenant la démission des trois papes rivaux et en élisant Martin V. Il condamne Jan Hus et Jérôme de Prague au bûcher. Il affirme la supériorité du concile sur le pape (conciliarisme).",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Décret 'Haec sancta' : Le concile tient son pouvoir directement du Christ",
                "Le concile est supérieur au pape en matière de foi et de réforme (conciliarisme)",
                "Tout chrétien, y compris le pape, doit obéir au concile",
                "Décret 'Frequens' : Les conciles doivent se réunir régulièrement",
                "Prochain concile dans 5 ans, puis 7 ans, puis tous les 10 ans",
                "FIN DU GRAND SCHISME : Déposition de Jean XXIII (Pise)",
                "Abdication de Grégoire XII (Rome), déposition de Benoît XIII (Avignon)",
                "ÉLECTION DE MARTIN V : Fin du schisme (11 novembre 1417)",
                "CONDAMNATION DE JAN HUS : 30 articles hérétiques (6 juillet 1415)",
                "Jan Hus brûlé vif pour avoir nié la transsubstantiation",
                "Condamnation de Jérôme de Prague (30 mai 1416)",
                "Condamnation des erreurs de John Wyclif (45 articles)",
                "Exhumation et crémation des restes de Wyclif ordonnées",
                "Décret sur la communion sous une seule espèce pour les laïcs",
                "Condamnation de la communion sous les deux espèces (utraquisme)",
                "Rèformes disciplinaires sur les annates et les provisions",
                "45 sessions et nombreux décrets au total"
            ],
            details: [
                "Fin du Grand Schisme d'Occident",
                "Élection du pape Martin V",
                "Condamnation de Jan Hus (bûcher)",
                "Décrets conciliaristes"
            ]
        },
        {
            id: 212,
            year: "1431",
            date: "1431-1449",
            title: "Concile de Bâle-Ferrare-Florence",
            summary: "Dix-septième concile œcuménique : union avec les Grecs, Arméniens, Coptes.",
            description: "Commencé à Bâle (conflit avec le pape), transféré à Ferrare puis Florence. Il réalise l'union (éphémère) avec l'Église grecque (1439), les Arméniens et les Coptes. L'union échoue après la chute de Constantinople (1453). Le concile condamne le conciliarisme.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Bulle 'LAETENTUR CAELI' (6 juillet 1439) : UNION AVEC LES GRECS",
                "Définition du Filioque : le Saint-Esprit procède du Père ET du Fils",
                "Reconnaissance de la primauté du pape sur toute l'Église",
                "Pain azyme ou fermenté : les deux sont valides pour l'Eucharistie",
                "Le purgatoire existe et les prières pour les défunts sont efficaces",
                "Décret 'EXULTATE DEO' (22 novembre 1439) : Union avec les ARMÉNIENS",
                "Définition des SEPT SACREMENTS avec leur matière et forme",
                "Baptême : ablution d'eau avec formule trinitaire",
                "Confirmation : onction du chrême avec imposition des mains",
                "Eucharistie : transsubstantiation du pain et du vin",
                "Pénitence : contrition, confession, satisfaction et absolution",
                "Extrême-onction : onction des malades avec l'huile",
                "Ordre : imposition des mains et formule d'ordination",
                "Mariage : consentement mutuel des époux",
                "Décret 'CANTATE DOMINO' (4 février 1442) : Union avec les COPTES (Jacobites)",
                "Condamnation du monoénergisme, monothélisme et monophysisme",
                "Décret d'union avec les SYRIENS (30 novembre 1444)",
                "Décret d'union avec les CHALDÉENS de Chypre (7 août 1445)",
                "Décret d'union avec les MARONITES (7 août 1445)",
                "Condamnation du conciliarisme : le pape est supérieur au concile"
            ],
            details: [
                "Dix-septième concile œcuménique",
                "Union avec les Grecs (1439)",
                "Décret d'union \"Laetentur Caeli\"",
                "Union éphémère (chute de Constantinople)"
            ]
        },
        {
            id: 31,
            year: "1098",
            date: "1098",
            title: "Fondation de Cîteaux",
            summary: "Robert de Molesme fonde l'ordre cistercien, retour à la pureté de la Règle bénédictine.",
            description: "En réaction aux richesses de Cluny, Robert de Molesme fonde Cîteaux pour revenir à l'observance stricte de la Règle de saint Benoît. Saint Bernard de Clairvaux (1090-1153) donne à l'ordre son essor spirituel et politique considérable.",
            period: "schism",
            type: "movement",
            icon: "fa-leaf",
            details: [
                "Retour à la Règle stricte de saint Benoît",
                "Saint Bernard de Clairvaux",
                "Architecture cistercienne dépouillée",
                "Plus de 700 monastères au XIIe siècle"
            ]
        },
        {
            id: 135,
            year: "~1153",
            date: "1153",
            title: "📜 Saint Bernard de Clairvaux - Docteur",
            summary: "« Docteur melliflu », mystique cistercien, prédicateur de la 2e croisade.",
            description: "Bernard, abbé de Clairvaux, est la figure dominante du XIIe siècle. Ses sermons sur le Cantique des cantiques sont des sommets de la mystique. Il prêche la deuxième croisade, combat Abélard, conseille les papes. Fondateur de 68 monastères.",
            period: "schism",
            type: "doctor",
            icon: "fa-heart",
            quote: "« Aimer Dieu : la mesure, c'est de l'aimer sans mesure. »",
            details: [
                "Abbé de Clairvaux (1115-1153)",
                "Fonda 68 monastères cisterciens",
                "Sermons sur le Cantique des cantiques",
                "« Docteur melliflu » (1830)"
            ]
        },
        {
            id: 136,
            year: "~1179",
            date: "1179",
            title: "⭐ Sainte Hildegarde de Bingen - Docteur",
            summary: "Abbesse visionnaire, mystique, compositrice, naturaliste, « Sibylle du Rhin ».",
            description: "Hildegarde, abbesse bénédictine, est une personnalité unique du Moyen Âge. Visionnaire depuis l'enfance, elle écrit des traités de théologie, de médecine, de musique. Ses compositions sont les premières signées de l'histoire. Déclarée Docteur de l'Église en 2012.",
            period: "schism",
            type: "doctor",
            icon: "fa-music",
            quote: "« L'âme est une symphonie. »",
            details: [
                "Abbesse visionnaire (1098-1179)",
                "« Scivias » : ses visions",
                "Compositrice (77 chants conservés)",
                "Docteur de l'Église (2012)"
            ]
        },
        {
            id: 32,
            year: "1209",
            date: "1209",
            title: "⭐ Saint François d'Assise - Fondation des Franciscains",
            summary: "Saint François d'Assise fonde l'ordre des Frères mineurs, renouveau de la pauvreté évangélique.",
            description: "François d'Assise, fils de marchand, renonce à tout pour vivre l'Évangile dans la pauvreté radicale. Son ordre mendiant révolutionne la vie religieuse : les frères vivent dans le monde, prêchent au peuple, refusent toute propriété. François reçoit les stigmates en 1224.",
            period: "schism",
            type: "saint",
            icon: "fa-dove",
            quote: "« Seigneur, fais de moi un instrument de ta paix. »",
            details: [
                "Pauvreté radicale et joie",
                "Stigmatisation (1224)",
                "Première crèche de Noël (1223)",
                "« Cantique des créatures »"
            ]
        },
        {
            id: 33,
            year: "1216",
            date: "1216",
            title: "⭐ Saint Dominique - Fondation des Dominicains",
            summary: "Saint Dominique fonde l'Ordre des Prêcheurs, dédié à l'enseignement et la prédication.",
            description: "Dominique de Guzmán fonde l'Ordre des Prêcheurs (Dominicains) pour combattre l'hérésie cathare par la prédication et l'exemple. Ordre mendiant voué à l'étude, il produit de grands théologiens (Albert le Grand, Thomas d'Aquin) et organise l'Inquisition.",
            period: "schism",
            type: "saint",
            icon: "fa-book-open",
            quote: "« Que ceux qui nous haïssent sachent que nous les aimons. »",
            details: [
                "\"Chiens du Seigneur\" (Domini canes)",
                "Saint Thomas d'Aquin, Saint Albert le Grand",
                "Prédication et enseignement",
                "Direction de l'Inquisition"
            ]
        },
        {
            id: 137,
            year: "~1280",
            date: "1280",
            title: "📜 Saint Albert le Grand - Docteur",
            summary: "« Docteur universel », maître de Thomas d'Aquin, saint patron des scientifiques.",
            description: "Albert le Grand, dominicain, est le plus grand savant du XIIIe siècle. Philosophe, théologien, naturaliste, il introduit Aristote en Occident. Il forme Thomas d'Aquin et défend sa mémoire. Il est le patron des scientifiques.",
            period: "schism",
            type: "doctor",
            icon: "fa-flask",
            quote: "« L'observation est le premier degré de la sagesse. »",
            details: [
                "« Docteur universel »",
                "Maître de saint Thomas d'Aquin",
                "Introduisit Aristote en Occident",
                "Patron des scientifiques"
            ]
        },
        {
            id: 34,
            year: "1274",
            date: "1274",
            title: "📜 Saint Thomas d'Aquin - Docteur",
            summary: "Le plus grand théologien médiéval meurt, laissant la Somme théologique inachevée.",
            description: "Thomas d'Aquin, dominicain, réalise la synthèse entre la foi chrétienne et la philosophie d'Aristote. Sa Somme théologique devient l'œuvre de référence de la théologie catholique. Docteur de l'Église, il est proclamé « Docteur commun » en 1567.",
            period: "schism",
            type: "doctor",
            icon: "fa-graduation-cap",
            quote: "« L'amour de Dieu est cause de la bonté des choses. »",
            details: [
                "Somme théologique",
                "Synthèse foi-raison",
                "\"Docteur angélique\"",
                "Philosophie officielle de l'Église (1879)"
            ]
        },
        {
            id: 138,
            year: "~1231",
            date: "1231",
            title: "⭐ Saint Antoine de Padoue - Docteur",
            summary: "Franciscain portugais, prédicateur extraordinaire, « Docteur évangélique ».",
            description: "Antoine, franciscain portugais, est le plus grand prédicateur de son temps. Ses sermons attirent des foules immenses. Il meurt à 36 ans près de Padoue. Canonisé en moins d'un an, il est invoqué pour retrouver les objets perdus.",
            period: "schism",
            type: "doctor",
            icon: "fa-book-bible",
            quote: "« Les actions parlent plus fort que les paroles ; qu'elles soient votre prédication. »",
            details: [
                "Franciscain portugais (1195-1231)",
                "Prédicateur extraordinaire",
                "Canonisé en moins d'un an",
                "Docteur de l'Église (1946)"
            ]
        },
        {
            id: 139,
            year: "~1380",
            date: "1380",
            title: "⭐ Sainte Catherine de Sienne - Docteur",
            summary: "Mystique dominicaine, ramena le pape d'Avignon à Rome, « Docteur de l'Église ».",
            description: "Catherine, tertiaire dominicaine illettrée, devient conseillère des papes et des princes. Ses lettres et son « Dialogue » sont des chefs-d'œuvre mystiques. Elle persuade Grégoire XI de quitter Avignon pour Rome. Docteur de l'Église en 1970.",
            period: "schism",
            type: "doctor",
            icon: "fa-heart",
            quote: "« Sois qui tu es, et tu embraseras le monde. »",
            details: [
                "Mystique dominicaine (1347-1380)",
                "Ramena le pape à Rome",
                "« Le Dialogue » : traité mystique",
                "Docteur de l'Église (1970)"
            ]
        },
        {
            id: 35,
            year: "1309",
            date: "1309-1377",
            title: "Papauté d'Avignon",
            summary: "Les papes s'installent à Avignon, affaiblissement du prestige pontifical.",
            description: "Sous la pression du roi de France Philippe le Bel, le pape Clément V s'installe à Avignon. Sept papes français y résident, construisant le Palais des Papes. Cette « captivité babylonienne » affaiblit le prestige de la papauté et prépare le Grand Schisme.",
            period: "schism",
            type: "schism",
            icon: "fa-building-columns",
            details: [
                "Sept papes à Avignon",
                "Construction du Palais des Papes",
                "Influence française sur la papauté",
                "Retour à Rome par Grégoire XI (1377)"
            ]
        },
        {
            id: 36,
            year: "1378",
            date: "1378-1417",
            title: "Grand Schisme d'Occident",
            summary: "Deux puis trois papes rivaux, crise majeure de l'autorité pontificale.",
            description: "L'élection contestée d'Urbain VI provoque l'élection d'un antipape à Avignon. La chrétienté se divise : chaque pays obéit à « son » pape. Le concile de Pise (1409) aggrave la crise en élisant un troisième pape. Seul le concile de Constance résoudra le schisme.",
            period: "schism",
            type: "schism",
            icon: "fa-users-slash",
            details: [
                "Deux puis trois papes simultanés",
                "Division de la chrétienté occidentale",
                "Concile de Constance (1414-1418)",
                "Élection de Martin V (1417)"
            ]
        },
        {
            id: 37,
            year: "1453",
            date: "1453",
            title: "Chute de Constantinople",
            summary: "Les Ottomans conquièrent Constantinople, fin de l'Empire byzantin.",
            description: "Mehmet II conquiert Constantinople après un siège de deux mois. La chute de la « Nouvelle Rome » met fin à l'Empire byzantin millénaire. Sainte-Sophie devient mosquée. Cet événement traumatise la chrétienté et renforce le sentiment d'être assiégée par l'Islam.",
            period: "schism",
            type: "major",
            icon: "fa-mosque",
            details: [
                "Fin de l'Empire byzantin",
                "Sainte-Sophie transformée en mosquée",
                "Fuite des savants grecs vers l'Occident",
                "Moscou \"Troisième Rome\""
            ]
        },
        {
            id: 213,
            year: "1512",
            date: "1512-1517",
            title: "Concile de Latran V",
            summary: "Dix-huitième concile œcuménique : réforme de l'Église, immortalité de l'âme.",
            description: "Dernier concile avant la Réforme protestante, convoqué par Jules II puis poursuivi par Léon X. Il condamne le concile schismatique de Pise, définit l'immortalité de l'âme individuelle, tente des réformes mais échoue à prévenir la tempête protestante qui éclate l'année même de sa clôture.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "Bulle 'Pastor aeternus' : Condamnation de la Pragmatique Sanction de Bourges",
                "Rejet du gallicanisme et des libertés de l'Église de France",
                "Bulle 'Apostolici regiminis' : DÉFINITION DE L'IMMORTALITÉ DE L'ÂME INDIVIDUELLE",
                "Contre les philosophes averroïstes qui niaient l'immortalité personnelle",
                "L'âme est immortelle et individuelle (non une âme universelle)",
                "Condamnation du concile schismatique de Pise (1511)",
                "Annulation de tous les actes du conciliabule de Pise",
                "Bulle 'Supernae dispositionis' : Réforme de la Curie romaine",
                "Limitation du nombre et des pouvoirs des cardinaux",
                "Bulle 'Inter multiplices' : Réforme des Monts-de-piété (taux d'intérêt modéré autorisé)",
                "Décret sur la prédication : censure des prédicateurs",
                "Décret sur l'imprimerie : censure préalable des livres",
                "Règles sur la résidence des évêques et la formation du clergé",
                "Décret sur les relations avec les Juifs",
                "Réformes restées lettre morte (insuffisantes face à la Réforme)",
                "12 sessions et nombreuses bulles au total"
            ],
            details: [
                "Dix-huitième concile œcuménique",
                "Immortalité de l'âme individuelle définie",
                "Tentatives de réforme insuffisantes",
                "Clôturé quelques mois avant les 95 thèses"
            ]
        },
        {
            id: 38,
            year: "1517",
            date: "31 octobre 1517",
            title: "95 Thèses de Luther",
            summary: "Martin Luther affiche ses thèses contre les indulgences, début de la Réforme protestante.",
            description: "Le moine augustin Martin Luther affiche (ou envoie) ses 95 thèses contre le commerce des indulgences à Wittenberg. Ce geste déclenche la Réforme protestante. Luther développe la doctrine de la justification par la foi seule (sola fide) et rejette l'autorité du pape.",
            period: "schism",
            type: "schism",
            icon: "fa-scroll",
            details: [
                "Critique des indulgences",
                "Sola fide, sola scriptura, sola gratia",
                "Excommunication de Luther (1521)",
                "Traduction de la Bible en allemand"
            ]
        },
        {
            id: 39,
            year: "1534",
            date: "1534",
            title: "Acte de Suprématie",
            summary: "Henri VIII se proclame chef de l'Église d'Angleterre, schisme anglican.",
            description: "Le roi Henri VIII, voulant divorcer de Catherine d'Aragon, rompt avec Rome et se proclame « Chef suprême de l'Église d'Angleterre ». Ce schisme politique donne naissance à l'anglicanisme, via media entre catholicisme et protestantisme.",
            period: "schism",
            type: "schism",
            icon: "fa-crown",
            details: [
                "Rupture avec Rome pour raisons matrimoniales",
                "Henri VIII chef de l'Église d'Angleterre",
                "Dissolution des monastères (1536-1541)",
                "Via media anglicane sous Élisabeth I"
            ]
        },
        {
            id: 40,
            year: "1540",
            date: "1540",
            title: "⭐ Saint Ignace de Loyola - Fondation des Jésuites",
            summary: "Ignace de Loyola fonde les Jésuites, fer de lance de la Contre-Réforme.",
            description: "Ignace de Loyola, ancien soldat basque, fonde la Compagnie de Jésus, approuvée par Paul III. Cet ordre nouveau, caractérisé par sa discipline quasi-militaire, son obéissance au pape et ses Exercices spirituels, devient le fer de lance de la Réforme catholique et des missions mondiales.",
            period: "schism",
            type: "saint",
            icon: "fa-users",
            quote: "« Agis comme si tout dépendait de toi, sachant que tout dépend de Dieu. »",
            details: [
                "Exercices spirituels d'Ignace",
                "Obéissance spéciale au pape",
                "Éducation (collèges jésuites)",
                "Missions mondiales (François Xavier en Asie)"
            ]
        },
        {
            id: 140,
            year: "~1552",
            date: "1552",
            title: "⭐ Saint François Xavier",
            summary: "« Apôtre des Indes », évangélisa l'Inde, l'Indonésie, le Japon.",
            description: "François Xavier, compagnon d'Ignace, est le plus grand missionnaire depuis saint Paul. En dix ans, il évangélise l'Inde, Ceylan, les Moluques et le Japon. Il meurt aux portes de la Chine. Il aurait baptisé plus de 30 000 personnes.",
            period: "schism",
            type: "saint",
            icon: "fa-globe",
            quote: "« Il y a tant d'âmes à sauver et si peu de temps ! »",
            details: [
                "Co-fondateur de la Compagnie de Jésus",
                "Évangélisa l'Asie (1541-1552)",
                "Patron des missions",
                "Mort aux portes de la Chine"
            ]
        },
        {
            id: 41,
            year: "1545",
            date: "1545-1563",
            title: "Concile de Trente",
            summary: "Grand concile de la Réforme catholique, réponse aux protestants et réforme interne.",
            description: "Le concile de Trente définit la doctrine catholique face au protestantisme (Tradition et Écriture, sept sacrements, transsubstantiation, justification) et entreprend une profonde réforme disciplinaire : séminaires, résidence des évêques, catéchisme. Il façonne le catholicisme jusqu'à Vatican II.",
            period: "schism",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "=== DOCTRINE (contre le protestantisme) ===",
                "Session 4 : ÉCRITURE ET TRADITION sont deux sources égales de la Révélation",
                "Canon des Écritures : 73 livres (dont les deutérocanoniques)",
                "La Vulgate est la version authentique de la Bible",
                "Session 5 : Décret sur le PÉCHÉ ORIGINEL",
                "Le baptême efface le péché originel mais laisse la concupiscence",
                "Session 6 : Décret sur la JUSTIFICATION (contre sola fide)",
                "La justification requiert foi ET œuvres (contre Luther)",
                "La grâce peut se perdre par le péché mortel",
                "Session 7 : Décret sur les SEPT SACREMENTS",
                "Les 7 sacrements ont été institués par le Christ",
                "Session 13 : Décret sur l'EUCHARISTIE - TRANSSUBSTANTIATION",
                "Présence réelle du Christ (corps, sang, âme et divinité)",
                "Session 14 : Décret sur la PÉNITENCE et l'EXTRÊME-ONCTION",
                "Nécessité de la confession auriculaire",
                "Session 21 : Communion sous UNE SEULE ESPÈCE suffisante pour les laïcs",
                "Session 22 : Décret sur le SACRIFICE DE LA MESSE",
                "La messe est un vrai sacrifice propitiatoire (non symbolique)",
                "Session 23 : Décret sur l'ORDRE - hiérarchie sacrée",
                "Session 24 : Décret sur le MARIAGE - indissolubilité",
                "Session 25 : PURGATOIRE, invocation des saints, reliques, images",
                "=== RÉFORMES DISCIPLINAIRES ===",
                "Session 23 : Création des SÉMINAIRES pour la formation des prêtres",
                "Session 24 : RÉSIDENCE OBLIGATOIRE des évêques dans leur diocèse",
                "Visites pastorales et synodes annuels obligatoires",
                "Index des livres interdits",
                "Publication du Catéchisme du Concile de Trente (1566)",
                "Missel romain unifié (1570) - Messe tridentine",
                "Bréviaire romain réformé (1568)",
                "25 sessions, des centaines de canons et décrets"
            ],
            details: [
                "Réponse doctrinale au protestantisme",
                "Réforme disciplinaire de l'Église",
                "Création des séminaires",
                "Messe tridentine normée"
            ]
        },
        {
            id: 141,
            year: "~1582",
            date: "1582",
            title: "⭐ Sainte Thérèse d'Ávila - Docteur",
            summary: "Réformatrice du Carmel, mystique, « Docteur de l'Église ».",
            description: "Thérèse de Jésus réforme le Carmel avec Jean de la Croix. Grande mystique, elle décrit les demeures de l'âme jusqu'à l'union transformante. Femme d'action autant que contemplative, elle fonde 17 monastères. Première femme Docteur de l'Église (1970).",
            period: "schism",
            type: "doctor",
            icon: "fa-heart",
            quote: "« Dieu seul suffit. »",
            details: [
                "Réformatrice du Carmel (1515-1582)",
                "« Le Château intérieur », « Chemin de perfection »",
                "Fonda 17 monastères",
                "Première femme Docteur de l'Église (1970)"
            ]
        },
        {
            id: 142,
            year: "~1591",
            date: "1591",
            title: "📜 Saint Jean de la Croix - Docteur",
            summary: "Mystique carme, poète de la nuit obscure, « Docteur mystique ».",
            description: "Jean de la Croix, compagnon de Thérèse d'Ávila dans la réforme du Carmel, est le plus grand poète mystique espagnol. La « Nuit obscure », la « Montée du Carmel », le « Cantique spirituel » décrivent l'union de l'âme avec Dieu.",
            period: "schism",
            type: "doctor",
            icon: "fa-moon",
            quote: "« Pour arriver à ce que tu ne sais pas, tu dois passer par où tu ne sais pas. »",
            details: [
                "Co-réformateur du Carmel (1542-1591)",
                "« La Nuit obscure », « Cantique spirituel »",
                "Plus grand poète mystique espagnol",
                "Docteur de l'Église (1926)"
            ]
        },
        {
            id: 42,
            year: "1582",
            date: "1582",
            title: "Réforme du calendrier grégorien",
            summary: "Le pape Grégoire XIII réforme le calendrier, adopté progressivement dans le monde.",
            description: "Le pape Grégoire XIII promulgue le calendrier grégorien pour corriger le décalage du calendrier julien avec l'année solaire. Le passage du 4 au 15 octobre 1582 provoque des révoltes. Les pays protestants et orthodoxes l'adopteront tardivement.",
            period: "schism",
            type: "major",
            icon: "fa-calendar",
            details: [
                "Correction du calendrier julien",
                "Suppression de 10 jours",
                "Adoption progressive (Angleterre en 1752)",
                "Russie en 1918, Grèce en 1923"
            ]
        },
        {
            id: 143,
            year: "~1622",
            date: "1622",
            title: "⭐ Saint François de Sales - Docteur",
            summary: "Évêque de Genève, « Docteur de l'amour », auteur spirituel pour tous.",
            description: "François de Sales, évêque de Genève exilé à Annecy, reconvertit le Chablais au catholicisme par la douceur. Son « Introduction à la vie dévote » montre que la sainteté est accessible à tous les états de vie. Il fonde l'Ordre de la Visitation avec Jeanne de Chantal.",
            period: "schism",
            type: "doctor",
            icon: "fa-heart",
            quote: "« On prend plus de mouches avec une cuillerée de miel qu'avec cent barils de vinaigre. »",
            details: [
                "Évêque de Genève (1567-1622)",
                "« Introduction à la vie dévote »",
                "Fondateur de la Visitation",
                "Patron des journalistes"
            ]
        },
        {
            id: 43,
            year: "1618",
            date: "1618-1648",
            title: "Guerre de Trente Ans",
            summary: "Terrible guerre de religion en Europe, conclue par les traités de Westphalie.",
            description: "Ce conflit dévaste l'Europe centrale, mêlant guerres de religion et rivalités politiques. Les traités de Westphalie (1648) mettent fin aux guerres de religion en consacrant le principe « cujus regio, ejus religio » et l'équilibre européen. L'ère des guerres de religion s'achève.",
            period: "schism",
            type: "major",
            icon: "fa-shield-halved",
            details: [
                "Guerre dévastatrice en Europe centrale",
                "8 millions de morts",
                "Traités de Westphalie (1648)",
                "Fin des guerres de religion"
            ]
        },
        
        // ==================== ÉPOQUE MODERNE ====================
        {
            id: 144,
            year: "~1660",
            date: "1660",
            title: "⭐ Saint Vincent de Paul",
            summary: "« Apôtre de la charité », fondateur des Lazaristes et des Filles de la Charité.",
            description: "Vincent de Paul, prêtre gascon, révolutionne la charité chrétienne. Il fonde les Lazaristes (prêtres de la Mission) pour évangéliser les campagnes, et les Filles de la Charité avec Louise de Marillac. Son action caritative inspire encore aujourd'hui.",
            period: "modern",
            type: "saint",
            icon: "fa-hands-helping",
            quote: "« Les pauvres sont nos seigneurs et maîtres. »",
            details: [
                "Fondateur des Lazaristes (1625)",
                "Filles de la Charité (1633)",
                "Aumônier des galères",
                "Patron des œuvres de charité"
            ]
        },
        {
            id: 145,
            year: "~1680",
            date: "1680",
            title: "⭐ Sainte Marguerite-Marie Alacoque",
            summary: "Visionnaire du Sacré-Cœur, révélations à Paray-le-Monial.",
            description: "Marguerite-Marie, visitandine à Paray-le-Monial, reçoit des révélations du Christ sur la dévotion au Sacré-Cœur. Malgré les oppositions, cette dévotion se répand grâce au jésuite Claude La Colombière. Elle sera universellement reconnue.",
            period: "modern",
            type: "saint",
            icon: "fa-heart",
            quote: "« Voilà ce Cœur qui a tant aimé les hommes. »",
            details: [
                "Apparitions du Sacré-Cœur (1673-1675)",
                "Soutenue par saint Claude La Colombière",
                "Dévotion au Sacré-Cœur",
                "Fête du Sacré-Cœur instituée (1856)"
            ]
        },
        {
            id: 146,
            year: "~1787",
            date: "1787",
            title: "📜 Saint Alphonse de Liguori - Docteur",
            summary: "Fondateur des Rédemptoristes, moraliste, « Docteur de la prière ».",
            description: "Alphonse de Liguori, avocat napolitain devenu prêtre, fonde les Rédemptoristes pour évangéliser les campagnes pauvres. Sa théologie morale, équilibrée entre rigorisme et laxisme, devient référence. Il est « Docteur de la prière » et patron des confesseurs.",
            period: "modern",
            type: "doctor",
            icon: "fa-pray",
            quote: "« Qui prie se sauve certainement ; qui ne prie pas se damne certainement. »",
            details: [
                "Fondateur des Rédemptoristes (1732)",
                "Théologie morale équilibrée",
                "« Les Gloires de Marie »",
                "Patron des confesseurs et moralistes"
            ]
        },
        {
            id: 44,
            year: "1789",
            date: "1789",
            title: "Révolution française",
            summary: "La Révolution bouleverse l'Église de France : Constitution civile du clergé, déchristianisation.",
            description: "La Révolution française nationalise les biens du clergé et impose la Constitution civile du clergé (1790), provoquant un schisme. La Terreur persécute les prêtres réfractaires, tente une déchristianisation forcée. Le Concordat de 1801 rétablira partiellement les relations avec Rome.",
            period: "modern",
            type: "major",
            icon: "fa-flag",
            details: [
                "Nationalisation des biens du clergé",
                "Constitution civile du clergé (1790)",
                "Persécution et martyrs",
                "Concordat de 1801"
            ]
        },
        {
            id: 147,
            year: "~1806",
            date: "1806",
            title: "⭐ Bienheureuses Martyres de Compiègne",
            summary: "16 carmélites guillotinées pour leur foi, inspirèrent le « Dialogue des Carmélites ».",
            description: "Seize carmélites de Compiègne sont guillotinées pendant la Terreur pour avoir refusé de quitter la vie religieuse. Montant à l'échafaud, elles chantent le Veni Creator. Leur martyre inspire l'opéra de Poulenc « Dialogue des Carmélites ».",
            period: "modern",
            type: "saint",
            icon: "fa-cross",
            details: [
                "Guillotinées le 17 juillet 1794",
                "Refusèrent de quitter le Carmel",
                "Chantèrent le Veni Creator",
                "Béatifiées en 1906"
            ]
        },
        {
            id: 148,
            year: "~1859",
            date: "1859",
            title: "⭐ Saint Jean-Marie Vianney - Curé d'Ars",
            summary: "Humble curé de village, confesseur extraordinaire, patron des prêtres.",
            description: "Jean-Marie Vianney, curé d'un petit village de l'Ain, devient par sa sainteté un pôle d'attraction pour toute la France. Il passe jusqu'à 16 heures par jour au confessionnal. Son combat contre le démon et ses miracles sont célèbres. Patron des curés.",
            period: "modern",
            type: "saint",
            icon: "fa-church",
            quote: "« Le prêtre continue l'œuvre de rédemption sur la terre. »",
            details: [
                "Curé d'Ars (1818-1859)",
                "Jusqu'à 16h au confessionnal",
                "20 000 pèlerins par an",
                "Patron des curés (1929)"
            ]
        },
        {
            id: 45,
            year: "1854",
            date: "1854",
            title: "Dogme de l'Immaculée Conception",
            summary: "Pie IX proclame le dogme de l'Immaculée Conception de Marie.",
            description: "Par la bulle Ineffabilis Deus, le pape Pie IX définit le dogme de l'Immaculée Conception : Marie a été préservée du péché originel dès le premier instant de sa conception. Ce dogme sera confirmé par les apparitions de Lourdes (1858).",
            period: "modern",
            type: "major",
            icon: "fa-star",
            details: [
                "Premier dogme défini sans concile",
                "Marie préservée du péché originel",
                "Confirmé par les apparitions de Lourdes (1858)",
                "Fête le 8 décembre"
            ]
        },
        {
            id: 46,
            year: "1858",
            date: "1858",
            title: "⭐ Apparitions de Lourdes - Sainte Bernadette",
            summary: "La Vierge Marie apparaît à Bernadette Soubirous, Lourdes devient un grand pèlerinage.",
            description: "À la grotte de Massabielle, la Vierge Marie apparaît 18 fois à Bernadette Soubirous, lui révélant : « Je suis l'Immaculée Conception ». Une source miraculeuse jaillit. Lourdes devient le plus grand pèlerinage marial du monde, avec des millions de pèlerins et de nombreuses guérisons.",
            period: "modern",
            type: "saint",
            icon: "fa-water",
            quote: "« Je ne vous promets pas de vous rendre heureuse en ce monde, mais dans l'autre. »",
            details: [
                "18 apparitions à Bernadette",
                "\"Je suis l'Immaculée Conception\"",
                "Source miraculeuse",
                "6 millions de pèlerins par an"
            ]
        },
        {
            id: 47,
            year: "1870",
            date: "1869-1870",
            title: "Concile Vatican I",
            summary: "Vingtième concile œcuménique : infaillibilité pontificale, foi et raison.",
            description: "Le premier concile du Vatican (vingtième œcuménique) définit l'infaillibilité pontificale : le pape, quand il définit solennellement une doctrine de foi ou de morale (ex cathedra), est préservé de l'erreur. La constitution Dei Filius traite des rapports foi-raison. Le concile est interrompu par la guerre franco-prussienne et ne sera jamais clôturé.",
            period: "modern",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "=== CONSTITUTION 'DEI FILIUS' (24 avril 1870) ===",
                "Sur la foi catholique et les rapports entre foi et raison",
                "Chapitre 1 : Dieu créateur - Dieu a créé le monde librement, de rien",
                "Condamnation du panthéisme et du matérialisme",
                "Chapitre 2 : La Révélation - Dieu peut être connu par la raison naturelle",
                "La Révélation surnaturelle est nécessaire pour le salut",
                "Chapitre 3 : La foi - La foi est un assentiment libre à la Révélation",
                "Les miracles et prophéties sont des preuves de la Révélation",
                "Chapitre 4 : Foi et raison - Harmonie entre foi et raison",
                "La foi et la raison ne peuvent se contredire (même source : Dieu)",
                "La raison peut comprendre les mystères par analogie",
                "=== CONSTITUTION 'PASTOR AETERNUS' (18 juillet 1870) ===",
                "Sur l'Église du Christ et le ministère de Pierre",
                "Chapitre 1 : PRIMAUTÉ DE PIERRE - Pierre est le chef des apôtres",
                "Jésus a donné à Pierre une vraie primauté de juridiction",
                "Chapitre 2 : Perpétuité de la primauté dans les successeurs de Pierre",
                "Les papes sont les successeurs de Pierre dans la primauté",
                "Chapitre 3 : Nature de la primauté pontificale",
                "Le pape a une juridiction pleine, suprême et universelle",
                "Il peut juger tous les fidèles, nul ne peut le juger",
                "Chapitre 4 : INFAILLIBILITÉ PONTIFICALE (dogme)",
                "'Le Pontife romain, quand il parle EX CATHEDRA...'",
                "'...c'est-à-dire quand il définit une doctrine de foi ou de morale...'",
                "'...comme pasteur et docteur de tous les chrétiens...'",
                "'...jouit de l'infaillibilité promise à l'Église.'",
                "Ces définitions sont irréformables PAR ELLES-MÊMES (non par le consentement de l'Église)",
                "Le concile fut interrompu par la prise de Rome (20 septembre 1870)",
                "Seules 2 des 4 constitutions prévues furent promulguées"
            ],
            details: [
                "Vingtième concile œcuménique",
                "Dogme de l'infaillibilité pontificale",
                "Constitution Dei Filius (foi et raison)",
                "Interrompu par la prise de Rome (1870)"
            ]
        },
        {
            id: 48,
            year: "1891",
            date: "1891",
            title: "Encyclique Rerum Novarum",
            summary: "Léon XIII publie la première grande encyclique sociale, sur la condition des ouvriers.",
            description: "Face à la « question sociale » et au marxisme naissant, Léon XIII publie Rerum Novarum, fondement de la doctrine sociale de l'Église. L'encyclique défend la dignité du travailleur, le juste salaire, le droit d'association, tout en rejetant le socialisme et le libéralisme excessif.",
            period: "modern",
            type: "major",
            icon: "fa-handshake",
            details: [
                "Naissance de la doctrine sociale de l'Église",
                "Défense des ouvriers",
                "Rejet du socialisme et du libéralisme extrême",
                "Droit de propriété et destination universelle des biens"
            ]
        },
        {
            id: 149,
            year: "~1897",
            date: "1897",
            title: "📜 Sainte Thérèse de Lisieux - Docteur",
            summary: "« Petite Thérèse », docteur de la petite voie, patronne des missions.",
            description: "Thérèse de l'Enfant-Jésus, carmélite morte à 24 ans, révolutionne la spiritualité par sa « petite voie » de confiance et d'abandon. Son autobiographie « Histoire d'une âme » devient un best-seller mondial. Docteur de l'Église en 1997, patronne des missions.",
            period: "modern",
            type: "doctor",
            icon: "fa-flower",
            quote: "« Ma vocation, c'est l'Amour ! »",
            details: [
                "Carmélite de Lisieux (1873-1897)",
                "« Histoire d'une âme »",
                "« Petite voie » de l'enfance spirituelle",
                "Docteur de l'Église (1997)"
            ]
        },
        {
            id: 49,
            year: "1917",
            date: "1917",
            title: "Apparitions de Fatima",
            summary: "La Vierge apparaît à trois bergers au Portugal, message de prière et de conversion.",
            description: "À Fatima (Portugal), la Vierge apparaît six fois à trois enfants : Lucie, François et Jacinthe. Elle demande la récitation du rosaire, la dévotion à son Cœur Immaculé et la conversion. Le « secret de Fatima » et le miracle du soleil (70 000 témoins) marquent le XXe siècle.",
            period: "modern",
            type: "major",
            icon: "fa-sun",
            details: [
                "Six apparitions aux trois pastoureaux",
                "Miracle du soleil (13 octobre 1917)",
                "Trois secrets de Fatima",
                "Consécration de la Russie"
            ]
        },
        {
            id: 50,
            year: "1929",
            date: "1929",
            title: "Accords du Latran",
            summary: "Création de l'État de la Cité du Vatican, résolution de la \"Question romaine\".",
            description: "Les accords du Latran entre Pie XI et Mussolini règlent la « Question romaine » ouverte depuis 1870. L'État de la Cité du Vatican est créé, garantissant l'indépendance du Saint-Siège. Le catholicisme devient religion d'État en Italie (jusqu'en 1984).",
            period: "modern",
            type: "major",
            icon: "fa-handshake",
            details: [
                "Création de l'État du Vatican",
                "Indépendance garantie du Saint-Siège",
                "Fin de la \"Question romaine\"",
                "44 hectares de territoire souverain"
            ]
        },
        {
            id: 150,
            year: "~1941",
            date: "1941",
            title: "⭐ Saint Maximilien Kolbe",
            summary: "Franciscain polonais, mort à Auschwitz à la place d'un père de famille.",
            description: "Maximilien Kolbe, franciscain polonais, apôtre de Marie, est déporté à Auschwitz. Quand un prisonnier est condamné au bunker de la faim, il prend sa place. Il meurt en consolant ses compagnons. Jean-Paul II le canonise comme « martyr de la charité ».",
            period: "modern",
            type: "saint",
            icon: "fa-cross",
            quote: "« La haine n'est pas une force créatrice. Seul l'amour est créateur. »",
            details: [
                "Franciscain, apôtre de Marie",
                "Mort à Auschwitz (14 août 1941)",
                "À la place d'un père de famille",
                "\"Martyr de la charité\" (canonisé 1982)"
            ]
        },
        {
            id: 51,
            year: "1950",
            date: "1950",
            title: "Dogme de l'Assomption",
            summary: "Pie XII définit le dogme de l'Assomption de la Vierge Marie.",
            description: "Par la constitution apostolique Munificentissimus Deus, Pie XII proclame le dogme de l'Assomption : Marie, à la fin de sa vie terrestre, a été élevée corps et âme à la gloire céleste. C'est le seul dogme proclamé en vertu de l'infaillibilité pontificale depuis 1870.",
            period: "modern",
            type: "major",
            icon: "fa-cloud",
            details: [
                "Marie élevée corps et âme au ciel",
                "Unique usage de l'infaillibilité depuis 1870",
                "Fête le 15 août",
                "Croyance ancienne (VIe siècle)"
            ]
        },
        
        // ==================== ÉPOQUE CONTEMPORAINE ====================
        {
            id: 52,
            year: "1962",
            date: "1962-1965",
            title: "Concile Vatican II",
            summary: "Vingt-et-unième concile œcuménique : aggiornamento, réforme liturgique, œcuménisme.",
            description: "Le concile Vatican II (vingt-et-unième œcuménique), convoqué par Jean XXIII, réalise un « aggiornamento » (mise à jour) de l'Église. Il réforme la liturgie (messe en langues vernaculaires), promeut l'œcuménisme et le dialogue interreligieux, définit l'Église comme « Peuple de Dieu » et reconnaît la liberté religieuse.",
            period: "contemporary",
            type: "council",
            icon: "fa-landmark",
            canons: [
                "=== 4 CONSTITUTIONS (documents majeurs) ===",
                "'SACROSANCTUM CONCILIUM' (4 déc. 1963) : RÉFORME LITURGIQUE",
                "La liturgie en LANGUES VERNACULAIRES (non plus en latin seul)",
                "Participation active des fidèles à la liturgie",
                "Réforme du missel, du bréviaire et des sacrements",
                "Restauration de la conclébration et du diaconat permanent",
                "'LUMEN GENTIUM' (21 nov. 1964) : L'ÉGLISE",
                "L'Église est le 'Peuple de Dieu' (non seulement la hiérarchie)",
                "Collégialité épiscopale : les évêques gouvernent avec le pape",
                "Appel universel à la sainteté pour tous les baptisés",
                "Place des laïcs dans l'Église",
                "La Vierge Marie dans le mystère du Christ et de l'Église",
                "'DEI VERBUM' (18 nov. 1965) : LA RÉVÉLATION DIVINE",
                "Écriture et Tradition forment un dépôt unique de la Parole de Dieu",
                "Accès facilité à l'Écriture Sainte pour tous les fidèles",
                "Encouragement des études bibliques et des traductions",
                "'GAUDIUM ET SPES' (7 déc. 1965) : L'ÉGLISE DANS LE MONDE",
                "'Les joies et les espoirs, les tristesses et les angoisses des hommes...'",
                "Dignité de la personne humaine et droits de l'homme",
                "Mariage et famille, culture, vie économique et sociale",
                "Paix et communauté des nations",
                "=== 9 DÉCRETS ===",
                "'UNITATIS REDINTEGRATIO' (1964) : ŒCUMÉNISME",
                "Reconnaissance des 'éléments de sanctification' hors de l'Église catholique",
                "'ORIENTALIUM ECCLESIARUM' (1964) : Églises catholiques orientales",
                "'CHRISTUS DOMINUS' (1965) : Charge pastorale des évêques",
                "'PRESBYTERORUM ORDINIS' (1965) : Ministère et vie des prêtres",
                "'OPTATAM TOTIUS' (1965) : Formation sacerdotale",
                "'PERFECTAE CARITATIS' (1965) : Rénovation de la vie religieuse",
                "'APOSTOLICAM ACTUOSITATEM' (1965) : Apostolat des laïcs",
                "'AD GENTES' (1965) : Activité missionnaire de l'Église",
                "'INTER MIRIFICA' (1963) : Moyens de communication sociale",
                "=== 3 DÉCLARATIONS ===",
                "'DIGNITATIS HUMANAE' (1965) : LIBERTÉ RELIGIEUSE",
                "La dignité de la personne fonde le droit à la liberté religieuse",
                "L'État ne doit pas imposer de religion",
                "'NOSTRA AETATE' (1965) : RELATIONS AVEC LES RELIGIONS NON CHRÉTIENNES",
                "Déclaration sur les Juifs : rejet de l'accusation de déicide",
                "Respect pour l'Islam, l'Hindouisme, le Bouddhisme",
                "'GRAVISSIMUM EDUCATIONIS' (1965) : Éducation chrétienne",
                "16 documents au total (4 constitutions, 9 décrets, 3 déclarations)"
            ],
            details: [
                "Vingt-et-unième concile œcuménique",
                "Réforme liturgique (messe en langue vernaculaire)",
                "Œcuménisme et dialogue interreligieux",
                "Liberté religieuse (Dignitatis Humanae)"
            ]
        },
        {
            id: 151,
            year: "~1963",
            date: "1963",
            title: "⭐ Saint Jean XXIII - le « Bon Pape »",
            summary: "Pape du Concile Vatican II, « le bon pape Jean », pape de la paix.",
            description: "Angelo Roncalli, élu pape à 77 ans, surprend le monde en convoquant Vatican II. Sa bonhomie et son humanité lui valent le surnom de « bon pape Jean ». Son encyclique Pacem in Terris (1963), au cœur de la crise de Cuba, est un appel universel à la paix.",
            period: "contemporary",
            type: "saint",
            icon: "fa-dove",
            quote: "« Cherchons ce qui nous unit et laissons de côté ce qui nous divise. »",
            details: [
                "Pape 1958-1963",
                "Convoqua Vatican II",
                "Encyclique Pacem in Terris",
                "Canonisé en 2014"
            ]
        },
        {
            id: 152,
            year: "~1979",
            date: "1979",
            title: "⭐ Sainte Teresa de Calcutta",
            summary: "« Sainte des pauvres », Nobel de la Paix, fondatrice des Missionnaires de la Charité.",
            description: "Mère Teresa, religieuse albanaise, quitte son couvent pour servir « les plus pauvres des pauvres » dans les rues de Calcutta. Elle fonde les Missionnaires de la Charité. Prix Nobel de la Paix en 1979, elle devient une icône mondiale de la charité chrétienne.",
            period: "contemporary",
            type: "saint",
            icon: "fa-hands-helping",
            quote: "« Si vous ne pouvez nourrir cent personnes, nourrissez-en une seule. »",
            details: [
                "Fondatrice des Missionnaires de la Charité (1950)",
                "Prix Nobel de la Paix (1979)",
                "Servit les mourants de Calcutta",
                "Canonisée en 2016"
            ]
        },
        {
            id: 53,
            year: "1978",
            date: "1978-2005",
            title: "⭐ Saint Jean-Paul II",
            summary: "Premier pape polonais, pontificat voyageur et engagé, contribution à la chute du communisme.",
            description: "Karol Wojtyła devient le premier pape non-italien depuis 455 ans et le premier pape slave. Son pontificat de 27 ans est marqué par ses voyages (129 pays), son rôle dans la chute du communisme, ses JMJ, et son enseignement abondant. Canonisé en 2014.",
            period: "contemporary",
            type: "saint",
            icon: "fa-plane",
            quote: "« N'ayez pas peur ! Ouvrez grandes les portes au Christ ! »",
            details: [
                "Premier pape polonais",
                "104 voyages apostoliques",
                "Création des JMJ (1985)",
                "Canonisé le 27 avril 2014"
            ]
        },
        {
            id: 54,
            year: "1986",
            date: "1986",
            title: "Rencontre d'Assise",
            summary: "Jean-Paul II réunit les chefs religieux du monde pour prier pour la paix.",
            description: "Jean-Paul II invite à Assise les représentants des grandes religions mondiales pour une journée de prière pour la paix. Cette initiative historique, répétée en 2002 et 2011, symbolise l'engagement de l'Église pour le dialogue interreligieux et la paix mondiale.",
            period: "contemporary",
            type: "major",
            icon: "fa-hands-praying",
            details: [
                "Première réunion interreligieuse pour la paix",
                "Leaders de 47 traditions religieuses",
                "Lieu symbolique de saint François",
                "Renouvelée en 2002 et 2011"
            ]
        },
        {
            id: 55,
            year: "1992",
            date: "1992",
            title: "Catéchisme de l'Église Catholique",
            summary: "Publication du nouveau catéchisme universel, synthèse de la foi catholique.",
            description: "Jean-Paul II promulgue le Catéchisme de l'Église Catholique, première synthèse complète de la doctrine depuis le Catéchisme du Concile de Trente (1566). Structuré autour du Credo, des sacrements, des commandements et du Notre Père, il devient la référence doctrinale.",
            period: "contemporary",
            type: "major",
            icon: "fa-book",
            details: [
                "Premier catéchisme universel depuis 1566",
                "2865 paragraphes",
                "Structuré en 4 parties",
                "Traduit en plus de 50 langues"
            ]
        },
        {
            id: 56,
            year: "2005",
            date: "2005-2013",
            title: "Pontificat de Benoît XVI",
            summary: "Le théologien Joseph Ratzinger élu pape, pontificat marqué par la renonciation historique.",
            description: "Le cardinal Ratzinger, théologien éminent et ancien préfet de la Congrégation pour la Doctrine de la Foi, devient pape. Son pontificat est marqué par un enseignement profond (encycliques sur l'amour et l'espérance), le motu proprio Summorum Pontificum, et sa renonciation historique en 2013.",
            period: "contemporary",
            type: "major",
            icon: "fa-book-bible",
            details: [
                "Grand théologien",
                "Trois encycliques majeures",
                "Summorum Pontificum (messe traditionnelle)",
                "Première renonciation depuis 1415"
            ]
        },
        {
            id: 57,
            year: "2013",
            date: "2013-",
            title: "Pontificat du Pape François",
            summary: "Premier pape jésuite et américain, pontificat de réforme et de miséricorde.",
            description: "Jorge Mario Bergoglio, archevêque de Buenos Aires, devient le premier pape jésuite, le premier pape américain, et le premier à prendre le nom de François. Son pontificat est marqué par l'attention aux pauvres, la réforme de la Curie, le synode sur la famille et l'encyclique Laudato Si' sur l'écologie.",
            period: "contemporary",
            type: "major",
            icon: "fa-leaf",
            details: [
                "Premier pape jésuite",
                "Premier pape américain",
                "Jubilé de la Miséricorde (2015-2016)",
                "Encyclique Laudato Si' sur l'écologie"
            ]
        },
        {
            id: 58,
            year: "2015",
            date: "2015",
            title: "Encyclique Laudato Si'",
            summary: "Le pape François publie une encyclique sur l'écologie intégrale et la sauvegarde de la création.",
            description: "Laudato Si' est la première encyclique entièrement consacrée à l'écologie. Le pape François y développe le concept d'« écologie intégrale », liant protection de l'environnement et justice sociale. L'encyclique a un impact mondial sur le débat climatique.",
            period: "contemporary",
            type: "major",
            icon: "fa-globe",
            details: [
                "Première encyclique sur l'écologie",
                "\"Écologie intégrale\"",
                "Critique de la \"culture du déchet\"",
                "Impact mondial sur le débat climatique"
            ]
        },
        {
            id: 153,
            year: "~2023",
            date: "2023",
            title: "Mort de Benoît XVI - Pape émérite",
            summary: "Le premier pape émérite de l'histoire s'éteint au Vatican.",
            description: "Joseph Ratzinger, Benoît XVI, premier pape à renoncer depuis 600 ans, meurt au monastère Mater Ecclesiae au Vatican. Ses funérailles sont présidées par le pape François. Figure majeure de la théologie du XXe siècle, il laisse une œuvre immense.",
            period: "contemporary",
            type: "major",
            icon: "fa-cross",
            details: [
                "Premier pape émérite de l'histoire",
                "Mort le 31 décembre 2022",
                "Grand théologien du XXe siècle",
                "Funérailles présidées par François"
            ]
        },
        {
            id: 59,
            year: "2025",
            date: "2025",
            title: "Jubilé 2025",
            summary: "Année Sainte ordinaire : \"Pèlerins d'espérance\" avec ouverture de la Porte Sainte.",
            description: "L'Année Sainte 2025 a pour thème « Pèlerins d'espérance ». Le pape François a ouvert la Porte Sainte de la basilique Saint-Pierre la veille de Noël 2024. Ce jubilé appelle à l'espérance, à la réconciliation et au renouveau spirituel après les épreuves de la pandémie.",
            period: "contemporary",
            type: "major",
            icon: "fa-door-open",
            details: [
                "Thème : \"Pèlerins d'espérance\"",
                "Ouverture de la Porte Sainte (24 décembre 2024)",
                "Indulgence plénière",
                "Appel à l'espérance et à la réconciliation"
            ]
        },

        // =====================================================
        // COMMUNAUTÉS ECCLÉSIALES CATHOLIQUES
        // Les grandes familles spirituelles de l'Église
        // =====================================================
        
        {
            id: 500,
            year: "~1100",
            date: "XIe-XXIe siècle",
            title: "🏛️ Les Communautés Ecclésiales Catholiques",
            summary: "Panorama des grandes familles spirituelles : ordres, congrégations, instituts et fraternités.",
            description: "L'Église catholique compte une grande diversité de communautés ecclésiales : ordres religieux anciens (bénédictins, franciscains, dominicains), congrégations modernes, instituts séculiers, sociétés de vie apostolique, et mouvements traditionalistes. Chacune possède son charisme propre, sa spiritualité, sa liturgie et son rapport à l'autorité romaine. Cette diversité reflète la richesse de la vie spirituelle catholique.",
            period: "contemporary",
            type: "community",
            icon: "fa-church",
            details: [
                "Ordres monastiques contemplatifs (Bénédictins, Cisterciens, Chartreux)",
                "Ordres mendiants (Franciscains, Dominicains, Carmes, Augustins)",
                "Clercs réguliers (Jésuites, Théatins, Barnabites)",
                "Congrégations apostoliques modernes",
                "Instituts séculiers et sociétés de vie apostolique",
                "Communautés traditionalistes (FSSP, FSSPX, IBP)"
            ]
        },

        // ==================== ORDRES MONASTIQUES CONTEMPLATIFS ====================
        {
            id: 501,
            year: "529",
            date: "529",
            title: "🏛️ Ordre de Saint-Benoît (OSB) - Bénédictins",
            summary: "Le plus ancien ordre monastique occidental, fondé sur la Règle de saint Benoît.",
            description: "Les Bénédictins suivent la Règle de saint Benoît (« Ora et labora ») établie au Mont-Cassin. Moines contemplatifs vivant en communauté stable, ils ont préservé la culture antique et évangélisé l'Europe. Chaque abbaye est autonome sous la direction d'un abbé élu à vie. La liturgie des Heures structure leur journée.",
            period: "medieval",
            type: "community",
            icon: "fa-cross",
            details: [
                "Fondateur : Saint Benoît de Nursie (~480-547)",
                "Charisme : « Ora et labora » (Prie et travaille)",
                "Spiritualité : Lectio divina, Office divin (7 heures liturgiques)",
                "Structure : Abbayes autonomes, fédérées en congrégations",
                "Liturgie : Forme ordinaire ou extraordinaire selon les abbayes",
                "Habit : Coule noire sur habit blanc/noir",
                "Grandes abbayes : Solesmes, Fontgombault, Le Barroux, Maria Laach"
            ],
            communityInfo: {
                type: "Ordre monastique contemplatif",
                founded: "529 (Mont-Cassin)",
                founder: "Saint Benoît de Nursie",
                rule: "Règle de saint Benoît",
                spirituality: "Contemplative, liturgique, centrée sur l'Office divin",
                liturgy: "Forme ordinaire ou extraordinaire selon les abbayes",
                governance: "Abbé élu à vie, abbayes autonomes",
                vows: "Stabilité, conversion des mœurs, obéissance",
                habit: "Coule noire sur habit blanc ou noir",
                members: "~7 500 moines (Confédération bénédictine)",
                status: "Pleine communion avec Rome",
                differences: [
                    "vs Cisterciens : Moins austères, abbatiales souvent ornées, Office moins long",
                    "vs Chartreux : Vie cénobitique (communautaire), pas érémitique",
                    "vs Franciscains : Contemplatifs stables, pas mendiants itinérants",
                    "vs Jésuites : Ordre monastique ancien vs clercs réguliers modernes"
                ]
            }
        },
        {
            id: 502,
            year: "1098",
            date: "1098",
            title: "🏛️ Ordre Cistercien (O.Cist / OCSO) - Cisterciens",
            summary: "Réforme bénédictine de stricte observance, fondée à Cîteaux par saint Robert.",
            description: "Les Cisterciens (« moines blancs ») sont nés d'une réforme visant à revenir à la pureté de la Règle bénédictine. Saint Bernard de Clairvaux leur donne un essor considérable. Les Trappistes (OCSO) sont une branche de stricte observance. Vie très austère, silence, travail manuel, architecture dépouillée.",
            period: "schism",
            type: "community",
            icon: "fa-leaf",
            details: [
                "Fondateurs : Saints Robert, Albéric et Étienne (Cîteaux)",
                "Figure majeure : Saint Bernard de Clairvaux",
                "Charisme : Retour à la pureté de la Règle de saint Benoît",
                "Spiritualité : Austérité, silence, travail manuel",
                "Branches : O.Cist (commune observance), OCSO (Trappistes)",
                "Liturgie : Forme ordinaire, parfois grégorienne",
                "Habit : Coule blanche, scapulaire noir (Trappistes : brun)",
                "Grandes abbayes : Cîteaux, Sept-Fons, Aiguebelle, Tamié"
            ],
            communityInfo: {
                type: "Ordre monastique contemplatif",
                founded: "1098 (Cîteaux, Bourgogne)",
                founder: "Saints Robert de Molesme, Albéric et Étienne Harding",
                rule: "Règle de saint Benoît (interprétation stricte)",
                spirituality: "Austère, silencieuse, centrée sur le travail et la prière",
                liturgy: "Forme ordinaire, chant grégorien fréquent",
                governance: "Abbé élu, Chapitre général, Ordre centralisé",
                vows: "Stabilité, conversion des mœurs, obéissance",
                habit: "Coule blanche (d'où 'moines blancs')",
                members: "~3 000 moines et moniales (OCSO)",
                status: "Pleine communion avec Rome",
                differences: [
                    "vs Bénédictins : Plus austères, architecture dépouillée, horaire plus strict",
                    "vs Chartreux : Vie communautaire, pas de cellules individuelles",
                    "vs Dominicains : Purement contemplatifs, pas de prédication",
                    "Trappistes vs O.Cist : Observance encore plus stricte, silence absolu"
                ]
            }
        },
        {
            id: 503,
            year: "1084",
            date: "1084",
            title: "🏛️ Ordre des Chartreux (O.Cart)",
            summary: "Ordre semi-érémitique de stricte contemplation, fondé par saint Bruno.",
            description: "Les Chartreux combinent vie érémitique et cénobitique : chaque moine vit seul dans sa « cellule » (petite maison avec jardin) mais participe à certains offices en commun. Silence quasi-absolu, jeûne strict, jamais réformés car « jamais déformés ». La Grande Chartreuse, près de Grenoble, est la maison-mère.",
            period: "schism",
            type: "community",
            icon: "fa-mountain",
            details: [
                "Fondateur : Saint Bruno (~1030-1101)",
                "Charisme : « Stat crux dum volvitur orbis »",
                "Spiritualité : Solitude contemplative, silence quasi-absolu",
                "Mode de vie : Semi-érémitique (cellules individuelles)",
                "Austérité : Jamais de viande, jeûne fréquent, peu de sorties",
                "Devise : « Nunquam reformata quia nunquam deformata »",
                "Liturgie : Rite cartusien propre, forme extraordinaire",
                "Maison-mère : Grande Chartreuse (Isère, France)"
            ],
            communityInfo: {
                type: "Ordre semi-érémitique contemplatif",
                founded: "1084 (Grande Chartreuse)",
                founder: "Saint Bruno de Cologne",
                rule: "Statuts de Guigues (coutumier propre)",
                spirituality: "Érémitique, silence, solitude absolue avec Dieu",
                liturgy: "Rite cartusien propre (latin), matines à minuit",
                governance: "Prieur (pas abbé), Chapitre général",
                vows: "Stabilité, obéissance, conversion",
                habit: "Robe blanche, scapulaire avec bande (cuculle)",
                members: "~370 moines, ~75 moniales",
                status: "Pleine communion avec Rome",
                differences: [
                    "vs Bénédictins/Cisterciens : Semi-érémitiques, pas cénobitiques",
                    "vs Carmes : Plus solitaires, pas d'apostolat du tout",
                    "vs Tous : Jamais réformés (« nunquam deformata »)",
                    "Seul ordre avec rite liturgique propre encore en usage"
                ]
            }
        },

        // ==================== ORDRES MENDIANTS ====================
        {
            id: 504,
            year: "1209",
            date: "1209",
            title: "🏛️ Ordre des Frères Mineurs (OFM) - Franciscains",
            summary: "Ordre mendiant fondé par saint François d'Assise, voué à la pauvreté évangélique.",
            description: "Les Franciscains (Frères Mineurs) vivent la pauvreté radicale selon l'exemple de saint François. Ordre mendiant itinérant, ils prêchent, servent les pauvres et témoignent de la joie évangélique. L'ordre s'est divisé en trois branches : OFM (Observants), OFM Conv (Conventuels) et OFM Cap (Capucins), selon l'interprétation de la pauvreté.",
            period: "schism",
            type: "community",
            icon: "fa-dove",
            details: [
                "Fondateur : Saint François d'Assise (1181/82-1226)",
                "Charisme : Pauvreté évangélique, joie, fraternité",
                "Spiritualité : Simplicité, pauvreté, amour de la création",
                "Branches : OFM (Observants), OFM Conv, OFM Cap (Capucins)",
                "Apostolat : Prédication, missions, service des pauvres",
                "Liturgie : Forme ordinaire (Capucins parfois forme extraordinaire)",
                "Habit : Bure brune (OFM/Cap) ou grise (Conv), cordon à 3 nœuds",
                "Saints célèbres : Antoine de Padoue, Bonaventure, Padre Pio"
            ],
            communityInfo: {
                type: "Ordre mendiant",
                founded: "1209 (Assise, Italie)",
                founder: "Saint François d'Assise",
                rule: "Règle de saint François (1223)",
                spirituality: "Pauvreté radicale, joie évangélique, amour de la création",
                liturgy: "Forme ordinaire du rite romain",
                governance: "Ministre général, chapitres, fraternités",
                vows: "Pauvreté, chasteté, obéissance",
                habit: "Bure brune avec capuce et corde à 3 nœuds",
                members: "~33 000 frères (toutes branches confondues)",
                status: "Pleine communion avec Rome",
                differences: [
                    "vs Dominicains : Pauvreté plus radicale, moins intellectuels, plus affectifs",
                    "vs Bénédictins : Itinérants et mendiants, pas de stabilité monastique",
                    "vs Jésuites : Plus simples, moins structurés, spiritualité du cœur",
                    "OFM vs Capucins : Capucins plus austères, barbe obligatoire, retrait du monde"
                ]
            }
        },
        {
            id: 505,
            year: "1216",
            date: "1216",
            title: "🏛️ Ordre des Prêcheurs (OP) - Dominicains",
            summary: "Ordre mendiant fondé par saint Dominique, voué à la prédication et à l'étude.",
            description: "Les Dominicains (« chiens du Seigneur », Domini canes) combinent vie contemplative et prédication savante. Fondés pour combattre l'hérésie cathare par l'enseignement, ils ont donné à l'Église de grands théologiens (Thomas d'Aquin, Albert le Grand). Étude intellectuelle rigoureuse et prédication sont au cœur de leur charisme.",
            period: "schism",
            type: "community",
            icon: "fa-book-open",
            details: [
                "Fondateur : Saint Dominique de Guzmán (1170-1221)",
                "Charisme : « Contemplare et contemplata aliis tradere »",
                "Spiritualité : Étude, contemplation, prédication",
                "Apostolat : Enseignement, prédication, Inquisition (historique)",
                "Liturgie : Rite dominicain propre (rare), forme ordinaire",
                "Habit : Robe blanche, scapulaire et chape noirs",
                "Saints célèbres : Thomas d'Aquin, Catherine de Sienne, Martin de Porrès",
                "Grandes figures : Meister Eckhart, Lacordaire, Congar"
            ],
            communityInfo: {
                type: "Ordre mendiant",
                founded: "1216 (Toulouse, France)",
                founder: "Saint Dominique de Guzmán",
                rule: "Règle de saint Augustin + Constitutions propres",
                spirituality: "Contemplative et apostolique, centrée sur la Vérité",
                liturgy: "Forme ordinaire (rite dominicain presque disparu)",
                governance: "Maître de l'Ordre élu, chapitres, provinces",
                vows: "Pauvreté, chasteté, obéissance",
                habit: "Robe blanche, scapulaire noir, chape noire",
                members: "~5 700 frères",
                status: "Pleine communion avec Rome",
                differences: [
                    "vs Franciscains : Plus intellectuels, étude systématique, moins affectifs",
                    "vs Jésuites : Vie communautaire structurée, Office divin en commun",
                    "vs Bénédictins : Apostolat actif, pas de stabilité monastique",
                    "vs Carmes : Moins mystiques, plus scolastiques et prédicateurs"
                ]
            }
        },
        {
            id: 506,
            year: "1247",
            date: "1247",
            title: "🏛️ Ordre du Carmel (O.Carm / OCD) - Carmes",
            summary: "Ordre mendiant contemplatif, réformé par sainte Thérèse d'Ávila.",
            description: "Les Carmes, nés sur le Mont Carmel en Terre Sainte, sont un ordre mendiant à forte dimension contemplative. Sainte Thérèse d'Ávila et saint Jean de la Croix ont fondé les Carmes Déchaux (OCD) comme réforme de stricte observance. Leur spiritualité mystique (« nuit obscure », « château intérieur ») a profondément marqué l'Église.",
            period: "schism",
            type: "community",
            icon: "fa-fire",
            details: [
                "Origine : Ermites du Mont Carmel (XIIe siècle)",
                "Réformateurs : Sainte Thérèse d'Ávila, Saint Jean de la Croix",
                "Charisme : Contemplation, vie d'oraison, spiritualité mariale",
                "Branches : O.Carm (Grands Carmes), OCD (Carmes Déchaux)",
                "Spiritualité : Mystique (Nuit obscure, Château intérieur)",
                "Liturgie : Forme ordinaire",
                "Habit : Brun (O.Carm) ou brun avec manteau blanc (OCD)",
                "Saints célèbres : Thérèse d'Ávila, Jean de la Croix, Thérèse de Lisieux"
            ],
            communityInfo: {
                type: "Ordre mendiant contemplatif",
                founded: "~1155 (Mont Carmel) / 1562 (réforme thérésienne)",
                founder: "Ermites du Carmel / Saints Thérèse et Jean de la Croix",
                rule: "Règle de saint Albert de Jérusalem",
                spirituality: "Mystique, oraison silencieuse, dévotion mariale",
                liturgy: "Forme ordinaire du rite romain",
                governance: "Préposé général, provinces",
                vows: "Pauvreté, chasteté, obéissance",
                habit: "Brun avec scapulaire et manteau blanc (OCD)",
                members: "~4 000 frères (OCD), ~12 000 moniales",
                status: "Pleine communion avec Rome",
                differences: [
                    "vs Dominicains : Plus mystiques, moins scolastiques, oraison silencieuse",
                    "vs Franciscains : Plus contemplatifs, moins de service direct aux pauvres",
                    "vs Chartreux : Ordre mendiant, pas érémitique strict",
                    "O.Carm vs OCD : Déchaux plus austères, pieds nus, clôture stricte"
                ]
            }
        },

        // ==================== CLERCS RÉGULIERS ====================
        {
            id: 507,
            year: "1540",
            date: "1540",
            title: "🏛️ Compagnie de Jésus (SJ) - Jésuites",
            summary: "Ordre fondé par saint Ignace de Loyola, fer de lance de la Contre-Réforme.",
            description: "Les Jésuites sont un ordre de clercs réguliers fondé pour la défense de la foi et l'éducation. Leur spiritualité (Exercices spirituels), leur obéissance spéciale au pape (4e vœu), leurs collèges et leurs missions mondiales en font l'ordre le plus influent de l'époque moderne. Supprimés en 1773, rétablis en 1814, ils restent controversés et admirés.",
            period: "schism",
            type: "community",
            icon: "fa-graduation-cap",
            details: [
                "Fondateur : Saint Ignace de Loyola (1491-1556)",
                "Charisme : « Ad maiorem Dei gloriam » (AMDG)",
                "Spiritualité : Exercices spirituels, discernement ignatien",
                "Apostolat : Éducation, missions, retraites, intellectuels",
                "Vœu spécial : 4e vœu d'obéissance au pape pour les missions",
                "Liturgie : Forme ordinaire",
                "Habit : Soutane noire (pas d'habit distinctif)",
                "Figures célèbres : François Xavier, Matteo Ricci, Teilhard de Chardin"
            ],
            communityInfo: {
                type: "Clercs réguliers (société de vie apostolique)",
                founded: "1540 (Rome)",
                founder: "Saint Ignace de Loyola",
                rule: "Constitutions de la Compagnie de Jésus",
                spirituality: "Ignatienne : Exercices spirituels, discernement, consolation/désolation",
                liturgy: "Forme ordinaire, pas d'Office divin en commun obligatoire",
                governance: "Préposé général (« pape noir »), très hiérarchisé",
                vows: "Pauvreté, chasteté, obéissance + 4e vœu au pape (profès)",
                habit: "Soutane noire simple (souvent costume civil)",
                members: "~14 500 membres (plus grand ordre masculin)",
                status: "Pleine communion avec Rome (pape François est jésuite)",
                differences: [
                    "vs Dominicains/Franciscains : Pas d'Office divin en commun, plus souple",
                    "vs Bénédictins : Pas de stabilité, mobilité totale pour les missions",
                    "vs Tous les ordres : 4e vœu spécial au pape, formation très longue (10-15 ans)",
                    "vs Traditionalistes : Généralement progressistes, liturgie moderne exclusive"
                ]
            }
        },

        // ==================== COMMUNAUTÉS TRADITIONALISTES ====================
        {
            id: 508,
            year: "1970",
            date: "1970",
            title: "🏛️ Fraternité Saint-Pie X (FSSPX)",
            summary: "Fraternité sacerdotale traditionaliste fondée par Mgr Lefebvre, en situation canonique irrégulière.",
            description: "La FSSPX, fondée par Mgr Marcel Lefebvre, rejette certaines réformes de Vatican II (liberté religieuse, œcuménisme) et célèbre exclusivement la messe tridentine. Les sacres épiscopaux de 1988 sans mandat romain ont entraîné une excommunication (levée en 2009). Des discussions doctrinales continuent avec Rome pour une régularisation canonique complète.",
            period: "contemporary",
            type: "community",
            icon: "fa-cross",
            details: [
                "Fondateur : Mgr Marcel Lefebvre (1905-1991)",
                "Fondation : 1970 (Écône, Suisse)",
                "Position : Rejet de Vatican II (liberté religieuse, œcuménisme)",
                "Liturgie : Messe tridentine exclusive (Missel de 1962)",
                "Situation canonique : Irrégulière (pas d'excommunication depuis 2009)",
                "Supérieur actuel : Abbé Davide Pagliarani",
                "Implantation : ~700 prêtres, 6 séminaires, présence mondiale",
                "Relations avec Rome : Dialogue en cours, pas de reconnaissance pleine"
            ],
            communityInfo: {
                type: "Fraternité sacerdotale traditionaliste",
                founded: "1970 (Écône, Suisse)",
                founder: "Mgr Marcel Lefebvre",
                rule: "Constitutions propres inspirées des Spiritains",
                spirituality: "Traditionaliste, anti-moderniste, sacerdotale",
                liturgy: "Messe tridentine EXCLUSIVE (Missel 1962)",
                governance: "Supérieur général, districts",
                vows: "Pas de vœux religieux (fraternité sacerdotale)",
                habit: "Soutane noire avec rabat",
                members: "~700 prêtres, ~200 séminaristes",
                status: "IRRÉGULIER - Dialogue avec Rome, pas de pleine communion",
                differences: [
                    "vs FSSP/IBP : Pas en pleine communion avec Rome, critique Vatican II",
                    "vs Ordres classiques : Rejette les réformes conciliaires",
                    "vs Église conciliaire : Refuse liberté religieuse et œcuménisme de Vatican II",
                    "Sacres de 1988 : Excommunication levée en 2009, situation régularisée partiellement"
                ]
            }
        },
        {
            id: 509,
            year: "1988",
            date: "1988",
            title: "🏛️ Fraternité Saint-Pierre (FSSP)",
            summary: "Fraternité sacerdotale traditionaliste en pleine communion avec Rome.",
            description: "La FSSP a été fondée par d'anciens membres de la FSSPX qui ont refusé les sacres de 1988 et souhaitaient rester en communion avec Rome. Érigée par le pape Jean-Paul II, elle célèbre exclusivement la liturgie traditionnelle (messe tridentine) dans le plein respect de l'autorité romaine.",
            period: "contemporary",
            type: "community",
            icon: "fa-key",
            details: [
                "Fondation : 18 juillet 1988 (après les sacres de Mgr Lefebvre)",
                "Érection : Commission Ecclesia Dei (Jean-Paul II)",
                "Position : Attachement à la tradition DANS la communion romaine",
                "Liturgie : Messe tridentine exclusive (Missel de 1962)",
                "Situation canonique : Pleine communion avec Rome",
                "Implantation : ~350 prêtres, 2 séminaires (USA, Allemagne)",
                "Apostolat : Paroisses, aumôneries, formation sacerdotale",
                "Charisme : Liturgie traditionnelle au service de l'Église"
            ],
            communityInfo: {
                type: "Société de vie apostolique de droit pontifical",
                founded: "1988 (Hauterive, Suisse)",
                founder: "12 prêtres issus de la FSSPX",
                rule: "Constitutions approuvées par Rome",
                spirituality: "Traditionaliste, thomiste, liturgique",
                liturgy: "Messe tridentine EXCLUSIVE (Missel 1962)",
                governance: "Supérieur général élu, chapitres",
                vows: "Promesses (pas vœux religieux)",
                habit: "Soutane noire",
                members: "~350 prêtres, ~180 séminaristes",
                status: "PLEINE COMMUNION avec Rome",
                differences: [
                    "vs FSSPX : En communion avec Rome, accepte Vatican II (interprété traditionnellement)",
                    "vs Diocésains : Liturgie exclusivement traditionnelle",
                    "vs IBP : Similaires, mais fondations et spiritualités légèrement différentes",
                    "Motu proprio Traditionis Custodes (2021) : Impact limité grâce au statut pontifical"
                ]
            }
        },
        {
            id: 510,
            year: "1990",
            date: "1990",
            title: "🏛️ Institut du Bon Pasteur (IBP)",
            summary: "Institut traditionaliste issu de la FSSPX, réconcilié avec Rome en 2006.",
            description: "L'IBP a été fondé par des prêtres de la FSSPX souhaitant une réconciliation avec Rome. Érigé canoniquement en 2006 par Benoît XVI, il célèbre exclusivement la messe tridentine et peut exprimer des « critiques constructives » de Vatican II selon ses statuts. Il se distingue par son approche intellectuelle et son travail d'édition.",
            period: "contemporary",
            type: "community",
            icon: "fa-book",
            details: [
                "Fondation officielle : 2006 (réconciliation avec Rome)",
                "Origine : Prêtres issus de la FSSPX",
                "Érection : Motu proprio de Benoît XVI",
                "Liturgie : Messe tridentine exclusive",
                "Particularité : Peut émettre des « critiques constructives » de Vatican II",
                "Apostolat : Paroisses, formation, éditions (Via Romana)",
                "Implantation : France principalement, ~50 prêtres",
                "Maison-mère : Courtalain (Eure-et-Loir)"
            ],
            communityInfo: {
                type: "Société de vie apostolique de droit pontifical",
                founded: "2006 (érection canonique)",
                founder: "Abbé Philippe Laguérie et prêtres ex-FSSPX",
                rule: "Statuts approuvés par Rome",
                spirituality: "Traditionaliste, intellectuelle, sacerdotale",
                liturgy: "Messe tridentine EXCLUSIVE",
                governance: "Supérieur général, conseil",
                vows: "Promesses sacerdotales",
                habit: "Soutane noire",
                members: "~50 prêtres",
                status: "PLEINE COMMUNION avec Rome",
                differences: [
                    "vs FSSPX : Réconcilié avec Rome depuis 2006",
                    "vs FSSP : Peut critiquer constructivement Vatican II (statuts)",
                    "vs Diocésains : Liturgie traditionnelle exclusive, approche intégriste assumée",
                    "Travail intellectuel : Éditions Via Romana, revue Sedes Sapientiæ"
                ]
            }
        },
        {
            id: 511,
            year: "2003",
            date: "2003",
            title: "🏛️ Institut du Christ Roi Souverain Prêtre (ICRSP)",
            summary: "Institut traditionaliste de spiritualité française, célébrant la messe tridentine.",
            description: "L'ICRSP, fondé par le chanoine Gilles Wach, est un institut de vie canoniale. De spiritualité française et romaine, il célèbre exclusivement la messe tridentine avec un soin particulier pour la beauté liturgique (chasubles, chant grégorien). Présent surtout aux États-Unis et en Europe, il gère des sanctuaires et des écoles.",
            period: "contemporary",
            type: "community",
            icon: "fa-crown",
            details: [
                "Fondateur : Chanoine Gilles Wach (1991, érection 2003)",
                "Charisme : Royauté du Christ, beauté liturgique",
                "Spiritualité : Française, salésienne, romaine",
                "Liturgie : Messe tridentine exclusive avec grande solennité",
                "Particularité : Chanoines (pas prêtres réguliers)",
                "Habit : Soutane amarante (rouge-violet), camail",
                "Implantation : USA, Europe, ~100 prêtres",
                "Maison-mère : Gricigliano (Florence, Italie)"
            ],
            communityInfo: {
                type: "Société de vie apostolique de droit pontifical",
                founded: "1990 (fondation) / 2003 (érection pontificale)",
                founder: "Chanoine Gilles Wach",
                rule: "Constitutions propres, inspiration canoniale",
                spirituality: "Salésienne, royauté du Christ, beauté liturgique",
                liturgy: "Messe tridentine EXCLUSIVE, très solennelle",
                governance: "Prieur général, chapitres",
                vows: "Promesses canoniales",
                habit: "Soutane AMARANTE distinctive, camail bleu",
                members: "~100 prêtres et séminaristes",
                status: "PLEINE COMMUNION avec Rome",
                differences: [
                    "vs FSSP/IBP : Institut canonial (pas fraternité), spiritualité française",
                    "vs FSSPX : Pleinement réconcilié avec Rome",
                    "vs Tous : Habit distinctif amarante, esthétique liturgique très soignée",
                    "Apostolat : Sanctuaires historiques, écoles, chant sacré"
                ]
            }
        },

        // ==================== MOUVEMENTS ECCLÉSIAUX MODERNES ====================
        {
            id: 512,
            year: "1928",
            date: "1928",
            title: "🏛️ Opus Dei - Prélature de la Sainte-Croix",
            summary: "Prélature personnelle fondée par saint Josémaria Escrivá, sanctification dans le travail.",
            description: "L'Opus Dei (« Œuvre de Dieu ») est une prélature personnelle qui promeut la sanctification par le travail ordinaire. Fondée par saint Josémaria Escrivá, elle compte des laïcs (majorité), des prêtres et des numéraires vivant le célibat. Son influence dans les milieux dirigeants et son fonctionnement parfois critiqué en font un mouvement controversé mais reconnu.",
            period: "modern",
            type: "community",
            icon: "fa-briefcase",
            details: [
                "Fondateur : Saint Josémaria Escrivá (1902-1975)",
                "Charisme : Sanctification du travail ordinaire",
                "Membres : Laïcs (90%), prêtres, numéraires",
                "Statut : Prélature personnelle (depuis 1982)",
                "Spiritualité : Filiation divine, travail comme chemin de sainteté",
                "Liturgie : Forme ordinaire",
                "Implantation : Mondiale, ~90 000 membres",
                "Siège : Rome"
            ],
            communityInfo: {
                type: "Prélature personnelle de droit pontifical",
                founded: "1928 (Madrid, Espagne)",
                founder: "Saint Josémaria Escrivá",
                rule: "Statuts de la prélature",
                spirituality: "Sanctification du travail, vie ordinaire, filiation divine",
                liturgy: "Forme ordinaire",
                governance: "Prélat (évêque), conseil",
                vows: "Pas de vœux (engagements)",
                habit: "Pas d'habit (vie civile)",
                members: "~90 000 membres (laïcs majoritaires)",
                status: "PLEINE COMMUNION avec Rome",
                differences: [
                    "vs Ordres religieux : Pas de vœux, vie dans le monde",
                    "vs Mouvements : Prélature personnelle (structure juridique unique)",
                    "vs Traditionalistes : Liturgie moderne, pas d'attachement à la tradition",
                    "Controverses : Critiques sur méthodes, influence, opacité"
                ]
            }
        },
        {
            id: 513,
            year: "1943",
            date: "1943",
            title: "🏛️ Communauté de l'Emmanuel",
            summary: "Communauté charismatique catholique d'évangélisation et d'adoration.",
            description: "La Communauté de l'Emmanuel est née du Renouveau charismatique catholique. Elle rassemble laïcs (couples, célibataires), prêtres et consacrés autour de l'adoration eucharistique, l'évangélisation et la compassion. Elle organise les sessions de Paray-le-Monial et participe aux JMJ. Approche moderne et missionnaire.",
            period: "contemporary",
            type: "community",
            icon: "fa-hands-praying",
            details: [
                "Fondateur : Pierre Goursat (1914-1991)",
                "Fondation : 1972 (reconnaissance 1992)",
                "Charisme : Adoration, Compassion, Évangélisation (ACE)",
                "Membres : Laïcs (majoritaires), prêtres, consacrés",
                "Spiritualité : Charismatique, eucharistique",
                "Liturgie : Forme ordinaire avec expression charismatique",
                "Sessions : Paray-le-Monial (été)",
                "Implantation : 67 pays, ~12 000 membres"
            ],
            communityInfo: {
                type: "Association publique de fidèles",
                founded: "1972 / 1992 (approbation pontificale)",
                founder: "Pierre Goursat",
                rule: "Statuts approuvés par Rome",
                spirituality: "Charismatique, eucharistique, missionnaire",
                liturgy: "Forme ordinaire avec louange charismatique",
                governance: "Modérateur, conseil",
                vows: "Engagements divers selon les états de vie",
                habit: "Pas d'habit (vie civile ou col romain pour prêtres)",
                members: "~12 000 membres",
                status: "PLEINE COMMUNION avec Rome",
                differences: [
                    "vs Traditionalistes : Charismatique, liturgie moderne",
                    "vs Ordres anciens : Association de fidèles, pas d'ordre religieux",
                    "vs Opus Dei : Plus populaire, moins élitiste, charismatique",
                    "Expression : Louange, glossolalie, dons de l'Esprit"
                ]
            }
        },
        {
            id: 514,
            year: "1975",
            date: "1975",
            title: "🏛️ Communauté Saint-Martin",
            summary: "Communauté de prêtres diocésains vivant en commun, liturgie soignée.",
            description: "La Communauté Saint-Martin rassemble des prêtres diocésains vivant en communauté fraternelle. Elle se distingue par une liturgie soignée (forme ordinaire célébrée avec soin, en latin et en français), un esprit missionnaire et un accueil des vocations. Elle dessert de nombreuses paroisses en France et à l'étranger.",
            period: "contemporary",
            type: "community",
            icon: "fa-users",
            details: [
                "Fondateur : Abbé Jean-François Guérin",
                "Fondation : 1976 (reconnaissance 1998)",
                "Charisme : Vie fraternelle sacerdotale, liturgie soignée",
                "Liturgie : Forme ordinaire « ad orientem », latin et français",
                "Particularité : Prêtres diocésains en communauté",
                "Implantation : France, Europe, 140+ prêtres",
                "Maison-mère : Évron (Mayenne)",
                "Formation : Séminaire propre"
            ],
            communityInfo: {
                type: "Association publique cléricale de droit pontifical",
                founded: "1976 (reconnaissance 1998/2020)",
                founder: "Abbé Jean-François Guérin",
                rule: "Statuts approuvés par Rome",
                spirituality: "Sacerdotale, liturgique, fraternelle",
                liturgy: "Forme ORDINAIRE soignée (latin/français, ad orientem)",
                governance: "Modérateur général, conseil",
                vows: "Promesses de vie commune",
                habit: "Soutane noire avec ceinture bleue",
                members: "~140 prêtres, ~120 séminaristes",
                status: "PLEINE COMMUNION avec Rome",
                differences: [
                    "vs FSSP/ICRSP : Forme ordinaire (pas extraordinaire)",
                    "vs Diocésains classiques : Vie fraternelle obligatoire",
                    "vs Emmanuel : Plus liturgique, moins charismatique",
                    "Position : « Via media » entre tradition et modernité"
                ]
            }
        },

        // ==================== TABLEAU RÉCAPITULATIF ====================
        {
            id: 599,
            year: "2024",
            date: "Synthèse",
            title: "📊 Tableau Comparatif des Communautés Catholiques",
            summary: "Les grandes différences entre ordres, instituts et fraternités de l'Église catholique.",
            description: "Ce tableau synthétise les principales différences entre les communautés ecclésiales catholiques : leur rapport à la tradition et à Vatican II, leur liturgie, leur spiritualité et leur statut canonique. Cette diversité reflète la richesse de l'Église catholique, de la contemplation monastique à l'action missionnaire, de la liturgie traditionnelle au renouveau charismatique.",
            period: "contemporary",
            type: "community",
            icon: "fa-table",
            details: [
                "CONTEMPLATIFS : Bénédictins (stabilité), Cisterciens (austérité), Chartreux (solitude)",
                "MENDIANTS : Franciscains (pauvreté), Dominicains (étude), Carmes (mystique)",
                "CLERCS RÉGULIERS : Jésuites (missions, éducation, souplesse)",
                "TRADITIONALISTES EN COMMUNION : FSSP, IBP, ICRSP (messe traditionnelle, pleine communion)",
                "TRADITIONALISTES IRRÉGULIERS : FSSPX (messe traditionnelle, dialogue avec Rome)",
                "MOUVEMENTS MODERNES : Opus Dei (travail), Emmanuel (charismatique), Saint-Martin (liturgie soignée)"
            ],
            communityInfo: {
                type: "Synthèse comparative",
                liturgy: "Variable selon les communautés",
                differences: [
                    "LITURGIE : Traditionnelle exclusive (FSSPX, FSSP, IBP, ICRSP) vs Ordinaire (autres)",
                    "VATICAN II : Rejet (FSSPX) vs Acceptation traditionnelle (FSSP) vs Pleine adhésion (Jésuites, Emmanuel)",
                    "SPIRITUALITÉ : Contemplative (moines) vs Active (mendiants, Jésuites) vs Mixte (Carmes)",
                    "VIE : Cloîtrée (Chartreux, Carmélites) vs Semi-cloîtrée vs Dans le monde (Opus Dei)",
                    "HABIT : Distinctif (Franciscains, Dominicains) vs Soutane (FSSP) vs Civil (Jésuites, Opus Dei)",
                    "STATUT : Ordres anciens vs Congrégations vs Sociétés de vie apostolique vs Prélatures"
                ]
            }
        },

        // =====================================================
        // LES GRANDES DIFFÉRENCES ENTRE COMMUNAUTÉS ECCLÉSIALES
        // Analyse approfondie et comparative
        // =====================================================
        {
            id: 600,
            year: "2024",
            date: "Guide comparatif",
            title: "⚖️ Les Grandes Différences entre Communautés Ecclésiales",
            summary: "Comprendre ce qui distingue fondamentalement chaque famille spirituelle de l'Église catholique.",
            description: "Au sein de l'Église catholique, une extraordinaire diversité de communautés coexiste, chacune avec son charisme propre, sa spiritualité, sa liturgie et son rapport à Rome. Des moines contemplatifs aux fraternités traditionalistes, des ordres mendiants aux mouvements charismatiques, comprendre leurs différences permet de saisir la richesse et parfois les tensions de la vie ecclésiale catholique. Ce guide détaille les points fondamentaux qui distinguent ces communautés.",
            period: "contemporary",
            type: "community",
            icon: "fa-balance-scale",
            details: [
                "=== 1. LA LITURGIE : LE CŒUR DES DIFFÉRENCES ===",
                "MESSE TRIDENTINE EXCLUSIVE : FSSPX, FSSP, IBP, ICRSP - Missel de 1962, latin, ad orientem",
                "FORME ORDINAIRE SOIGNÉE : Communauté Saint-Martin, certains Bénédictins - Vatican II mais célébré avec solennité",
                "FORME ORDINAIRE STANDARD : Jésuites, Dominicains, Franciscains, Emmanuel - Réforme liturgique pleinement adoptée",
                "RITE PROPRE : Chartreux (rite cartusien), Dominicains (rite dominicain - rare aujourd'hui)",
                "",
                "=== 2. RAPPORT À VATICAN II ===",
                "REJET PARTIEL : FSSPX - Critique la liberté religieuse, l'œcuménisme, la collégialité",
                "HERMÉNEUTIQUE DE CONTINUITÉ : FSSP, IBP, ICRSP - Acceptent Vatican II interprété selon la Tradition",
                "ADHÉSION PLEINE : Jésuites, Dominicains, Emmanuel - Vatican II comme renouveau providentiel",
                "",
                "=== 3. VIE COMMUNAUTAIRE ===",
                "CLÔTURE STRICTE : Chartreux, Carmélites - Séparation quasi-totale du monde",
                "VIE MONASTIQUE : Bénédictins, Cisterciens - Stabilité, Office divin, vie régulière",
                "VIE APOSTOLIQUE : Dominicains, Franciscains - Communauté + missions/prédication",
                "VIE DANS LE MONDE : Opus Dei, Emmanuel - Pas de vie commune, sanctification du quotidien",
                "",
                "=== 4. SPIRITUALITÉ ===",
                "CONTEMPLATIVE PURE : Chartreux (solitude avec Dieu), Cisterciens (austérité et silence)",
                "INTELLECTUELLE : Dominicains (vérité), Jésuites (discernement ignatien)",
                "AFFECTIVE : Franciscains (pauvreté et joie), Carmes (mystique et oraison)",
                "CHARISMATIQUE : Emmanuel (dons de l'Esprit, louange, glossolalie)",
                "SACERDOTALE : FSSP, Saint-Martin (beauté liturgique, formation sacerdotale)"
            ],
            communityInfo: {
                type: "Guide explicatif détaillé",
                liturgy: "Voir comparaison ci-dessous",
                differences: [
                    "=== FRANCISCAINS vs DOMINICAINS ===",
                    "Franciscains : Spiritualité du cœur, pauvreté radicale, simplicité, joie, service des pauvres",
                    "Dominicains : Spiritualité de l'intelligence, étude approfondie, prédication savante, combat de l'hérésie",
                    "Devise franciscaine : « Paix et Bien » - Devise dominicaine : « Veritas » (Vérité)",
                    "",
                    "=== BÉNÉDICTINS vs CISTERCIENS vs CHARTREUX ===",
                    "Bénédictins : Équilibre prière/travail, abbayes souvent ornées, ouverture aux hôtes",
                    "Cisterciens : Même règle mais plus austère, architecture dépouillée, silence renforcé",
                    "Chartreux : Semi-érémitiques, cellules individuelles, silence quasi-absolu, jamais réformés",
                    "",
                    "=== TRADITIONALISTES : FSSPX vs FSSP vs IBP vs ICRSP ===",
                    "FSSPX : Hors communion pleine, critique Vatican II, dialogue difficile avec Rome, ~700 prêtres",
                    "FSSP : Pleine communion, messe tridentine exclusive, fondée par ex-FSSPX fidèles à Rome, ~350 prêtres",
                    "IBP : Pleine communion, peut critiquer Vatican II, approche plus intellectuelle, ~50 prêtres",
                    "ICRSP : Pleine communion, spiritualité française, habit amarante distinctif, liturgie très solennelle",
                    "Point commun : Tous célèbrent exclusivement la messe tridentine (Missel 1962)",
                    "Différence clé : Rapport à Rome et à Vatican II",
                    "",
                    "=== JÉSUITES vs ORDRES ANCIENS ===",
                    "Jésuites : Pas d'Office divin en commun, grande mobilité, formation très longue (10-15 ans)",
                    "Jésuites : 4e vœu d'obéissance spéciale au pape, souplesse apostolique",
                    "Ordres anciens : Stabilité, vie communautaire structurée, Office divin obligatoire",
                    "Jésuites : Souvent en habit civil, intégrés dans le monde séculier",
                    "",
                    "=== OPUS DEI vs EMMANUEL vs SAINT-MARTIN ===",
                    "Opus Dei : Prélature personnelle, laïcs majoritaires, sanctification du travail, discrétion",
                    "Emmanuel : Charismatique, louange expressive, évangélisation directe, sessions Paray-le-Monial",
                    "Saint-Martin : Prêtres en communauté, liturgie ordinaire mais soignée, « via media »",
                    "",
                    "=== STATUT CANONIQUE EXPLIQUÉ ===",
                    "ORDRE : Structure ancienne avec vœux solennels (Bénédictins, Dominicains, Franciscains)",
                    "CONGRÉGATION : Vœux simples, structure plus souple (Rédemptoristes, Salésiens)",
                    "SOCIÉTÉ DE VIE APOSTOLIQUE : Pas de vœux mais engagements (FSSP, Oratoriens)",
                    "PRÉLATURE PERSONNELLE : Rattachement direct au prélat, pas territorial (Opus Dei uniquement)",
                    "ASSOCIATION DE FIDÈLES : Structure légère pour laïcs et clercs (Emmanuel, Chemin Néocatéchuménal)"
                ]
            }
        },

        // =====================================================
        // FOCUS : COMPRENDRE LES TRADITIONALISTES
        // =====================================================
        {
            id: 601,
            year: "2024",
            date: "Focus thématique",
            title: "🔍 Focus : Comprendre le monde traditionaliste catholique",
            summary: "FSSPX, FSSP, IBP, ICRSP... Qui sont-ils ? Quelles différences ? Quel rapport à Rome ?",
            description: "Le monde traditionaliste catholique est souvent mal compris. Tous ces groupes célèbrent la messe tridentine (forme extraordinaire), mais leurs rapports avec Rome et leur position sur Vatican II diffèrent profondément. Ce focus explique les nuances essentielles entre ces communautés, leur histoire et leurs spécificités.",
            period: "contemporary",
            type: "community",
            icon: "fa-church",
            details: [
                "=== ORIGINE COMMUNE : LA CRISE POST-CONCILIAIRE ===",
                "Après Vatican II (1962-1965), la réforme liturgique de 1969-1970 remplace la messe tridentine",
                "Mgr Marcel Lefebvre refuse la réforme et fonde la FSSPX (1970) pour préserver la Tradition",
                "En 1988, Mgr Lefebvre sacre 4 évêques sans autorisation romaine → excommunication",
                "Certains prêtres FSSPX refusent les sacres et fondent la FSSP (1988) en communion avec Rome",
                "D'autres groupes se forment progressivement : IBP (2006), ICRSP (1990/2003)",
                "",
                "=== LA FSSPX : LA PLUS CONNUE ET LA PLUS CONTROVERSÉE ===",
                "Position : Critique les « erreurs » de Vatican II (liberté religieuse, œcuménisme)",
                "Liturgie : Messe tridentine EXCLUSIVE, rejet de la réforme liturgique",
                "Statut : IRRÉGULIER mais pas schismatique (excommunications levées en 2009)",
                "Relations avec Rome : Dialogue difficile, pas de pleine communion",
                "Implantation : ~700 prêtres, 6 séminaires, présence mondiale",
                "Fidèles : Environ 600 000 dans le monde",
                "",
                "=== LA FSSP : LES TRADITIONALISTES « ROMAINS » ===",
                "Position : Attachement à la Tradition DANS la pleine communion romaine",
                "Différence avec FSSPX : Accepte l'autorité du pape et Vatican II (lu traditionnellement)",
                "Liturgie : Messe tridentine EXCLUSIVE (Missel 1962)",
                "Statut : Pleine communion, société de vie apostolique de droit pontifical",
                "Implantation : ~350 prêtres, 2 séminaires (USA, Allemagne)",
                "Fondation : 1988, par 12 prêtres refusant les sacres de Mgr Lefebvre",
                "",
                "=== IBP : L'APPROCHE INTELLECTUELLE ===",
                "Origine : Prêtres FSSPX réconciliés avec Rome en 2006",
                "Particularité : Statuts permettant des « critiques constructives » de Vatican II",
                "Apostolat : Paroisses, formation, éditions (Via Romana)",
                "Style : Plus intellectuel, travail d'édition et de réflexion théologique",
                "Implantation : France principalement, ~50 prêtres",
                "",
                "=== ICRSP : L'ESTHÉTIQUE LITURGIQUE ===",
                "Origine : Fondé par le chanoine Gilles Wach (1990, érection 2003)",
                "Particularité : Institut CANONIAL (pas fraternité), spiritualité française",
                "Habit : Soutane AMARANTE distinctive (rouge-violet), très reconnaissable",
                "Liturgie : Très solennelle, grand soin des ornements et du chant",
                "Apostolat : Sanctuaires historiques, écoles, formation musicale",
                "Implantation : USA et Europe, ~100 prêtres"
            ],
            communityInfo: {
                type: "Focus explicatif sur le traditionalisme",
                liturgy: "Messe tridentine (Missel 1962) pour tous",
                differences: [
                    "=== CE QUI LES UNIT ===",
                    "Attachement exclusif à la messe tridentine (Missel 1962)",
                    "Refus de la réforme liturgique de 1969-1970",
                    "Valorisation de la Tradition catholique pré-conciliaire",
                    "Formation sacerdotale classique (thomisme, latin, soutane)",
                    "Rejet du relativisme et du modernisme théologique",
                    "",
                    "=== CE QUI LES SÉPARE ===",
                    "RAPPORT À ROME : FSSPX (tendu) vs FSSP/IBP/ICRSP (pleine communion)",
                    "VATICAN II : FSSPX (critique frontale) vs FSSP (lecture traditionnelle) vs IBP (critique constructive)",
                    "ORIGINE : FSSPX (fondation directe) vs FSSP/IBP (scissions de la FSSPX)",
                    "ECCLÉSIOLOGIE : FSSPX (état de nécessité) vs Autres (obéissance normale)",
                    "",
                    "=== QUESTIONS FRÉQUENTES ===",
                    "Q: Peut-on assister à la messe FSSPX ? R: Oui pour le devoir dominical (Rome 2017)",
                    "Q: Les sacrements FSSPX sont-ils valides ? R: OUI, ils sont valides mais illicites",
                    "Q: La FSSPX est-elle schismatique ? R: NON, situation irrégulière mais pas schisme formel",
                    "Q: Pourquoi la FSSP et non la FSSPX ? R: Pour être en pleine communion ecclésiale",
                    "",
                    "=== IMPACT DE TRADITIONIS CUSTODES (2021) ===",
                    "Le motu proprio de François restreint la messe tridentine dans les diocèses",
                    "FSSP, IBP, ICRSP : Protégés par leur statut pontifical (décret 2022)",
                    "FSSPX : Non concernée car hors du système diocésain",
                    "Paroisses diocésaines : Restrictions importantes sur la forme extraordinaire"
                ]
            }
        },

        // =====================================================
        // FOCUS : ORDRES CONTEMPLATIFS - LE CLOÎTRE
        // =====================================================
        {
            id: 602,
            year: "2024",
            date: "Focus thématique",
            title: "🙏 Focus : Les ordres contemplatifs - Vie cachée avec Dieu",
            summary: "Bénédictins, Cisterciens, Chartreux, Carmes... La vie monastique et ses nuances.",
            description: "La vie contemplative est le cœur battant de l'Église. Ces hommes et femmes qui ont choisi de se retirer du monde pour prier ne sont pas tous identiques. Du moine bénédictin accueillant les hôtes au chartreux vivant en quasi-ermite, les nuances sont profondes.",
            period: "contemporary",
            type: "community",
            icon: "fa-pray",
            details: [
                "=== LA VIE MONASTIQUE BÉNÉDICTINE ===",
                "Règle de saint Benoît (VIe siècle) : fondement de tout le monachisme occidental",
                "Devise : « Ora et labora » (Prie et travaille)",
                "Journée : 7 offices liturgiques (Vigiles, Laudes, Tierce, Sexte, None, Vêpres, Complies)",
                "Stabilité : Le moine est attaché à son abbaye pour la vie",
                "Accueil : Les abbayes bénédictines accueillent souvent des hôtes et retraitants",
                "Diversité : Certaines abbayes sont « ordinaire », d'autres « extraordinaire »",
                "Exemples : Solesmes, Fontgombault, Le Barroux, Maria Laach",
                "",
                "=== LES CISTERCIENS : LA RÉFORME AUSTÈRE ===",
                "Origine : 1098, Cîteaux - retour à la pureté de la Règle de saint Benoît",
                "Figure majeure : Saint Bernard de Clairvaux (XIIe siècle)",
                "Différence avec Bénédictins : Plus austères, architecture dépouillée, moins d'ornements",
                "Les « Trappistes » (OCSO) : Branche de stricte observance, silence presque absolu",
                "Travail manuel : Agriculture, fromages, bières (source de revenus)",
                "Exemples : Cîteaux, Sept-Fons, Aiguebelle, Tamié",
                "",
                "=== LES CHARTREUX : L'ABSOLU DE LA SOLITUDE ===",
                "Fondateur : Saint Bruno (1084, Grande Chartreuse)",
                "Mode de vie unique : Semi-érémitique (entre ermite et cénobite)",
                "Cellule : Chaque moine vit seul dans une « cellule » (petite maison avec jardin)",
                "Silence : Quasi-absolu, parole rare, communication par signes",
                "Austérité : Jamais de viande, jeûnes fréquents, peu de sorties",
                "Liturgie : Rite cartusien propre, Matines à minuit",
                "Devise : « Stat crux dum volvitur orbis » (La croix demeure tandis que le monde tourne)",
                "Fierté : « Nunquam reformata quia nunquam deformata » (Jamais réformés car jamais déformés)",
                "",
                "=== LES CARMES : LA MYSTIQUE DU CARMEL ===",
                "Origine : Ermites du Mont Carmel (XIIe siècle, Terre Sainte)",
                "Réforme : Sainte Thérèse d'Ávila et saint Jean de la Croix (XVIe siècle)",
                "Branches : O.Carm (Grands Carmes) et OCD (Carmes Déchaux, réformés)",
                "Spiritualité : Oraison silencieuse, « Nuit obscure », « Château intérieur »",
                "Caractère : Ordre mendiant mais très contemplatif (pas vraiment itinérant)",
                "Carmélites : Clôture stricte, parmi les plus austères des religieuses",
                "Saintes célèbres : Thérèse d'Ávila, Jean de la Croix, Thérèse de Lisieux"
            ],
            communityInfo: {
                type: "Focus sur la vie contemplative",
                spirituality: "Prière, silence, séparation du monde",
                differences: [
                    "=== TABLEAU COMPARATIF CONTEMPLATIFS ===",
                    "",
                    "BÉNÉDICTINS : Vie cénobitique équilibrée, accueil des hôtes, liturgie solennelle",
                    "CISTERCIENS : Plus austères que Bénédictins, architecture dépouillée, silence renforcé",
                    "TRAPPISTES : Stricte observance cistercienne, silence quasi-absolu, travail agricole",
                    "CHARTREUX : Semi-érémitiques, solitude maximale, rite propre, jamais de viande",
                    "CARMES : Ordre mendiant contemplatif, mystique, Carmélites très cloîtrées",
                    "",
                    "=== INTENSITÉ DE LA CLÔTURE ===",
                    "La plus stricte : Chartreux (cellule individuelle, sortie très rare)",
                    "Très stricte : Carmélites déchausses (clôture papale)",
                    "Stricte : Cisterciennes, Bénédictines de stricte observance",
                    "Modérée : Bénédictines classiques (accueil possible)",
                    "",
                    "=== JOURNÉE TYPE D'UN MOINE ===",
                    "3h00 : Vigiles (ou Matines) - office nocturne",
                    "6h00 : Laudes - office du matin",
                    "7h30 : Messe conventuelle",
                    "9h00 : Tierce + travail",
                    "12h00 : Sexte + repas (en silence avec lecture)",
                    "14h00 : None + travail ou lectio divina",
                    "17h30 : Vêpres",
                    "19h30 : Complies + Grand Silence jusqu'à Laudes"
                ]
            }
        },

        // =====================================================
        // FOCUS : ORDRES MENDIANTS - DANS LE MONDE
        // =====================================================
        {
            id: 603,
            year: "2024",
            date: "Focus thématique",
            title: "🚶 Focus : Les ordres mendiants - Pauvreté et prédication",
            summary: "Franciscains, Dominicains, Carmes, Augustins... Vivre pauvre pour évangéliser.",
            description: "Au XIIIe siècle, une révolution spirituelle secoue l'Église : des hommes renoncent à tout pour vivre comme les apôtres, mendiants et itinérants. Franciscains et Dominicains incarnent deux approches complémentaires de cet idéal.",
            period: "contemporary",
            type: "community",
            icon: "fa-walking",
            details: [
                "=== QU'EST-CE QU'UN ORDRE MENDIANT ? ===",
                "Naissance : XIIIe siècle, en réaction aux richesses de l'Église",
                "Principe : Pas de propriété collective, vie d'aumônes (mendicité)",
                "Différence avec moines : Pas de stabilité, vie itinérante, prédication dans le monde",
                "Les 4 grands ordres mendiants : Franciscains, Dominicains, Carmes, Augustins",
                "Aujourd'hui : La mendicité stricte a souvent été atténuée",
                "",
                "=== LES FRANCISCAINS : L'ÉVANGILE À LA LETTRE ===",
                "Fondateur : Saint François d'Assise (1209)",
                "Charisme : Pauvreté radicale, joie, fraternité, amour de la création",
                "Spiritualité : Simplicité, humilité, service des pauvres",
                "Branches actuelles :",
                "  - OFM (Observants) : Branche principale",
                "  - OFM Conv (Conventuels) : Interprétation plus souple de la pauvreté",
                "  - OFM Cap (Capucins) : Réforme austère du XVIe siècle, barbe obligatoire",
                "Habit : Bure brune (OFM/Capucins) ou grise (Conventuels), corde à 3 nœuds",
                "Saints célèbres : Antoine de Padoue, Bonaventure, Padre Pio",
                "",
                "=== LES DOMINICAINS : PRÊCHER LA VÉRITÉ ===",
                "Fondateur : Saint Dominique de Guzmán (1216)",
                "Charisme : « Contemplare et contemplata aliis tradere » (Contempler et transmettre)",
                "Origine : Combattre l'hérésie cathare par la prédication et l'exemple",
                "Spiritualité : Étude rigoureuse, recherche de la vérité, prédication savante",
                "Formation : Très intellectuelle, philosophie et théologie approfondies",
                "Habit : Robe blanche, scapulaire noir, chape noire",
                "Surnoms : « Frères Prêcheurs », « Domini canes » (Chiens du Seigneur)",
                "Saints célèbres : Thomas d'Aquin, Albert le Grand, Catherine de Sienne",
                "",
                "=== FRANCISCAINS vs DOMINICAINS : LE CŒUR vs L'INTELLIGENCE ===",
                "François : Approche affective, « sentir » Dieu, pauvreté vécue jusqu'au bout",
                "Dominique : Approche intellectuelle, « comprendre » Dieu, étude comme prière",
                "François : Simplicité, méfiance envers les études excessives",
                "Dominique : Les couvents sont des centres d'étude, bibliothèques importantes",
                "Complémentarité : L'Église a besoin des deux - le cœur ET l'intelligence"
            ],
            communityInfo: {
                type: "Focus sur les ordres mendiants",
                spirituality: "Pauvreté, itinérance, prédication",
                differences: [
                    "=== COMPARAISON DÉTAILLÉE ===",
                    "",
                    "PAUVRETÉ :",
                    "Franciscains : Radicale, pas de chaussures (Capucins), vie très simple",
                    "Dominicains : Pauvreté collective mais moyens pour l'étude acceptés",
                    "",
                    "ÉTUDE :",
                    "Franciscains : Importante mais subordonnée à la prière et au service",
                    "Dominicains : Centrale, « ne rien dire que l'on n'ait d'abord brûlé dans son cœur »",
                    "",
                    "PRÉDICATION :",
                    "Franciscains : Populaire, simple, par l'exemple de vie surtout",
                    "Dominicains : Savante, théologique, combat des erreurs",
                    "",
                    "APOSTOLAT :",
                    "Franciscains : Service des pauvres, missions lointaines, présence simple",
                    "Dominicains : Universités, formation du clergé, direction spirituelle",
                    "",
                    "HABIT :",
                    "Franciscains : Bure brune ou grise, corde, sandales",
                    "Dominicains : Blanc et noir (« pie » comme l'oiseau)",
                    "",
                    "=== LES BRANCHES FRANCISCAINES EXPLIQUÉES ===",
                    "1209 : Fondation par saint François",
                    "Après sa mort : Querelles sur l'interprétation de la pauvreté",
                    "« Spirituels » : Pauvreté absolue, parfois hérétiques",
                    "« Conventuels » : Interprétation plus souple, couvents établis",
                    "« Observants » : Retour à la stricte observance (XVe siècle)",
                    "« Capucins » : Réforme de 1528, vie très austère, barbe, capuce pointu",
                    "Aujourd'hui : OFM (~13 000), OFM Conv (~4 000), OFM Cap (~10 500)"
                ]
            }
        },

        // =====================================================
        // LES HÉRÉSIES AU COURS DE L'HISTOIRE
        // Erreurs doctrinales condamnées par l'Église
        // =====================================================

        // ==================== INTRODUCTION AUX HÉRÉSIES ====================
        {
            id: 700,
            year: "30",
            date: "Synthèse historique",
            title: "⚠️ Les Hérésies dans l'Histoire de l'Église",
            summary: "Panorama des erreurs doctrinales qui ont menacé la foi catholique au cours des siècles.",
            description: "Une hérésie (du grec hairesis, « choix ») est une doctrine qui contredit un dogme défini par l'Église. Contrairement à l'apostasie (abandon total de la foi) ou au schisme (rupture de communion), l'hérésie maintient une partie de la foi tout en niant une vérité essentielle. Les conciles œcuméniques ont souvent été convoqués pour condamner les hérésies et définir la vraie doctrine. Comprendre les hérésies permet de mieux saisir le développement du dogme catholique.",
            period: "ancient",
            type: "heresy",
            icon: "fa-exclamation-triangle",
            details: [
                "=== QU'EST-CE QU'UNE HÉRÉSIE ? ===",
                "Définition : Négation obstinée d'une vérité de foi définie par l'Église",
                "Différence avec l'erreur : L'hérésie suppose la connaissance et le refus volontaire",
                "Différence avec le schisme : Le schisme est une rupture de communion, pas de doctrine",
                "Différence avec l'apostasie : L'apostasie est l'abandon total de la foi chrétienne",
                "",
                "=== GRANDES CATÉGORIES D'HÉRÉSIES ===",
                "TRINITAIRES : Sur la nature de Dieu (arianisme, modalisme, subordinatianisme)",
                "CHRISTOLOGIQUES : Sur la personne du Christ (nestorianisme, monophysisme)",
                "SOTÉRIOLOGIQUES : Sur le salut (pélagianisme, semi-pélagianisme)",
                "ECCLÉSIOLOGIQUES : Sur l'Église (donatisme, conciliarisme)",
                "SACRAMENTELLES : Sur les sacrements (iconoclasme, protestantisme)",
                "ESCHATOLOGIQUES : Sur la fin des temps (millénarisme, montanisme)",
                "",
                "=== CHRONOLOGIE DES PRINCIPALES HÉRÉSIES ===",
                "Ier-IIe s. : Gnosticisme, Docétisme, Marcionisme",
                "IIe-IIIe s. : Montanisme, Modalisme, Subordinatianisme",
                "IVe s. : Arianisme (la plus grave), Macédonianisme, Apollinarisme",
                "Ve s. : Nestorianisme, Monophysisme (Eutychianisme), Pélagianisme",
                "VIe-VIIe s. : Monothélisme, Monoénergisme",
                "VIIIe-IXe s. : Iconoclasme, Adoptianisme",
                "XIe-XIIIe s. : Catharisme, Valdéisme (partiellement)",
                "XIVe-XVe s. : Wycliffisme, Hussitisme",
                "XVIe s. : Protestantisme (Luther, Calvin, Zwingli)",
                "XVIIe-XVIIIe s. : Jansénisme, Quiétisme",
                "XIXe-XXe s. : Modernisme"
            ]
        },

        // ==================== HÉRÉSIES DE L'ÉGLISE PRIMITIVE (Ier-IIIe s.) ====================
        {
            id: 701,
            year: "~50",
            date: "Ier siècle",
            title: "⚠️ Judaïsants",
            summary: "Premiers hérétiques : chrétiens imposant la Loi mosaïque aux païens convertis.",
            description: "Les judaïsants affirmaient que les païens convertis au christianisme devaient observer la Loi de Moïse (circoncision, règles alimentaires). Le Concile de Jérusalem (49) les condamna, affirmant que le salut vient par la foi en Christ, non par la Loi. Saint Paul combattit vigoureusement cette erreur dans ses épîtres (Galates).",
            period: "ancient",
            type: "heresy",
            icon: "fa-exclamation-triangle",
            details: [
                "Erreur : Les païens doivent devenir juifs pour être chrétiens",
                "Condamnation : Concile de Jérusalem (49)",
                "Opposant principal : Saint Paul (Épître aux Galates)",
                "Citation : « Si vous vous faites circoncire, Christ ne vous servira de rien » (Ga 5,2)",
                "Conséquence : Universalité du christianisme affirmée"
            ]
        },
        {
            id: 702,
            year: "~100",
            date: "Ier-IIe siècle",
            title: "⚠️ Docétisme",
            summary: "Le Christ n'avait qu'une apparence humaine, son corps était illusoire.",
            description: "Le docétisme (du grec dokein, « sembler ») niait la réalité de l'Incarnation : le Christ n'aurait eu qu'un corps apparent, fantomatique. Cette hérésie, influencée par le dualisme grec qui méprisait la matière, vidait la Rédemption de son sens. Saint Jean la combat dans ses épîtres : « Tout esprit qui confesse Jésus-Christ venu dans la chair est de Dieu » (1 Jn 4,2).",
            period: "ancient",
            type: "heresy",
            icon: "fa-ghost",
            details: [
                "Erreur : Le corps du Christ était une illusion, une apparence",
                "Origine : Dualisme grec méprisant la matière",
                "Conséquence : La Passion et la Résurrection seraient des illusions",
                "Opposants : Saint Jean, Saint Ignace d'Antioche",
                "Condamnation : Implicite dans les écrits apostoliques",
                "Citation : « Qui nie que Jésus-Christ est venu dans la chair est l'Antichrist » (2 Jn 7)"
            ]
        },
        {
            id: 703,
            year: "~140",
            date: "IIe siècle",
            title: "⚠️ Gnosticisme",
            summary: "Salut par la connaissance secrète (gnose), dualisme radical entre matière et esprit.",
            description: "Le gnosticisme est un ensemble de doctrines affirmant que le salut vient d'une connaissance (gnosis) secrète réservée aux initiés. Il oppose radicalement le monde matériel (mauvais, créé par un démiurge inférieur) au monde spirituel (bon). Le Christ serait un éon venu révéler cette gnose. Cette hérésie fut combattue par saint Irénée dans « Contre les hérésies ».",
            period: "ancient",
            type: "heresy",
            icon: "fa-eye",
            details: [
                "Erreur : Salut par la connaissance secrète, non par la foi",
                "Dualisme : Matière = mal, Esprit = bien",
                "Le Dieu créateur de l'AT serait inférieur au vrai Dieu",
                "Principaux gnostiques : Valentin, Basilide, Marcion",
                "Opposant principal : Saint Irénée de Lyon (« Adversus Haereses »)",
                "Textes gnostiques : Évangile de Thomas, Évangile de Philippe",
                "Condamnation : Par les Pères de l'Église (IIe siècle)"
            ]
        },
        {
            id: 704,
            year: "~144",
            date: "IIe siècle",
            title: "⚠️ Marcionisme",
            summary: "Rejet de l'Ancien Testament, opposition entre le Dieu cruel de l'AT et le Dieu d'amour du NT.",
            description: "Marcion de Sinope opposait radicalement l'Ancien et le Nouveau Testament : le Dieu de l'AT (créateur, justicier) serait différent du Dieu du NT (Père de Jésus, Dieu d'amour). Il rejetait tout l'AT et ne conservait qu'un évangile de Luc expurgé et dix épîtres de Paul. Excommunié en 144, il fonda une Église rivale qui dura plusieurs siècles.",
            period: "ancient",
            type: "heresy",
            icon: "fa-book-skull",
            details: [
                "Erreur : Deux dieux distincts (AT vs NT)",
                "Rejet total de l'Ancien Testament",
                "Canon restreint : Luc expurgé + 10 épîtres de Paul",
                "Fondateur : Marcion de Sinope (~85-160)",
                "Excommunication : Rome, 144",
                "Opposants : Tertullien (« Contre Marcion »), Saint Irénée",
                "Durée : Église marcionite jusqu'au Ve siècle"
            ]
        },
        {
            id: 705,
            year: "~156",
            date: "IIe siècle",
            title: "⚠️ Montanisme",
            summary: "Prophétisme exalté, attente imminente de la fin du monde, rigorisme moral extrême.",
            description: "Montan de Phrygie se proclama prophète de l'Esprit Saint, annonçant la Jérusalem céleste imminente. Avec deux prophétesses (Priscille et Maximilla), il prêchait un rigorisme extrême : interdiction du remariage, jeûnes prolongés, martyre recherché. Tertullien lui-même rejoignit le montanisme vers 207, ce qui montre son attrait.",
            period: "ancient",
            type: "heresy",
            icon: "fa-wind",
            details: [
                "Erreur : Nouvelle révélation de l'Esprit surpassant celle des apôtres",
                "Fondateur : Montan de Phrygie (~156)",
                "Prophétesses : Priscille et Maximilla",
                "Caractéristiques : Prophétisme extatique, rigorisme, millénarisme",
                "Célèbre converti : Tertullien (vers 207)",
                "Condamnation : Conciles locaux (IIe-IIIe siècles)",
                "Durée : Jusqu'au VIe siècle dans certaines régions"
            ]
        },
        {
            id: 706,
            year: "~180",
            date: "IIe-IIIe siècle",
            title: "⚠️ Modalisme (Sabellianisme)",
            summary: "Père, Fils et Esprit ne sont que trois « modes » d'un Dieu unique, pas trois personnes distinctes.",
            description: "Le modalisme (ou sabellianisme, de Sabellius) niait la distinction réelle des trois Personnes divines : Père, Fils et Esprit ne seraient que trois « masques » (personae) ou modes successifs d'apparition d'un Dieu unique. Ainsi, c'est le Père lui-même qui aurait souffert sur la croix (« patripassianisme »). Cette hérésie fut condamnée comme supprimant la vraie Trinité.",
            period: "ancient",
            type: "heresy",
            icon: "fa-masks-theater",
            details: [
                "Erreur : Une seule personne divine sous trois aspects",
                "Autres noms : Sabellianisme, Patripassianisme, Monarchianisme modaliste",
                "Principal représentant : Sabellius (IIIe siècle)",
                "Conséquence : Le Père lui-même aurait souffert (patripassianisme)",
                "Opposants : Tertullien, Hippolyte de Rome, Denys de Rome",
                "Vérité catholique : Un Dieu en trois Personnes réellement distinctes"
            ]
        },
        {
            id: 707,
            year: "~200",
            date: "IIe-IIIe siècle",
            title: "⚠️ Subordinatianisme",
            summary: "Le Fils et l'Esprit sont inférieurs au Père, subordonnés à lui.",
            description: "Le subordinatianisme affirmait que le Fils et l'Esprit Saint, bien que divins, sont inférieurs et subordonnés au Père. Cette tendance, présente chez certains Pères avant Nicée (Origène, Justin), préparait l'arianisme. Le concile de Nicée (325) affirma l'égalité absolue des Personnes : le Fils est « consubstantiel » au Père.",
            period: "ancient",
            type: "heresy",
            icon: "fa-sort-amount-down",
            details: [
                "Erreur : Le Fils est inférieur au Père",
                "Tendance pré-arienne chez certains Pères (avant définition dogmatique)",
                "Préparation de l'arianisme",
                "Condamnation implicite : Concile de Nicée (325) - homoousios",
                "Vérité catholique : Les trois Personnes sont égales en divinité"
            ]
        },

        // ==================== HÉRÉSIES CHRISTOLOGIQUES (IVe-VIIe s.) ====================
        {
            id: 708,
            year: "318",
            date: "IVe siècle",
            title: "⚠️ Arianisme - La plus grande hérésie",
            summary: "Le Fils n'est pas Dieu : « Il fut un temps où il n'était pas. »",
            description: "L'arianisme, fondé par le prêtre Arius d'Alexandrie, est la plus grave hérésie de l'histoire. Arius enseignait que le Verbe (Logos) n'est pas éternel mais créé : « Il fut un temps où il n'était pas. » Le Fils serait la première et plus parfaite des créatures, mais pas Dieu. Cette hérésie faillit submerger l'Église : empereurs ariens, évêques ariens, peuples barbares ariens. Le concile de Nicée (325) la condamna en proclamant le Fils « consubstantiel (homoousios) au Père ».",
            period: "imperial",
            type: "heresy",
            icon: "fa-exclamation-circle",
            details: [
                "Erreur fondamentale : Le Fils est une créature, pas Dieu",
                "Fondateur : Arius, prêtre d'Alexandrie (~256-336)",
                "Formule arienne : « Il fut un temps où il n'était pas »",
                "Condamnation : Concile de Nicée (325)",
                "Défenseur de la foi : Saint Athanase d'Alexandrie (exilé 5 fois)",
                "Réponse catholique : « Homoousios » - consubstantiel au Père",
                "Persistance : Arianisme des Goths, Vandales, Lombards jusqu'au VIIe siècle",
                "Conséquence positive : Formulation précise du dogme trinitaire"
            ]
        },
        {
            id: 709,
            year: "~360",
            date: "IVe siècle",
            title: "⚠️ Macédonianisme (Pneumatomaques)",
            summary: "Le Saint-Esprit n'est pas Dieu, il est une créature du Fils.",
            description: "Macedonius, évêque de Constantinople, et ses partisans (« pneumatomaques » = combattants de l'Esprit) niaient la divinité du Saint-Esprit. Acceptant Nicée sur le Fils, ils refusaient d'étendre la consubstantialité à l'Esprit. Le concile de Constantinople I (381) les condamna en ajoutant au Credo : l'Esprit Saint est « Seigneur et donne la vie ».",
            period: "imperial",
            type: "heresy",
            icon: "fa-wind",
            details: [
                "Erreur : Le Saint-Esprit est une créature, pas Dieu",
                "Autre nom : Pneumatomaques (« combattants de l'Esprit »)",
                "Fondateur : Macedonius de Constantinople",
                "Condamnation : Concile de Constantinople I (381)",
                "Défenseurs de la foi : Les Cappadociens (Basile, Grégoire de Nazianze)",
                "Réponse catholique : L'Esprit est « Seigneur et qui donne la vie »",
                "Symbole complété : Credo de Nicée-Constantinople"
            ]
        },
        {
            id: 710,
            year: "~375",
            date: "IVe siècle",
            title: "⚠️ Apollinarisme",
            summary: "Le Christ n'avait pas d'âme humaine rationnelle, le Logos en tenait lieu.",
            description: "Apollinaire de Laodicée, pour garantir l'unité du Christ contre les ariens, enseignait que le Verbe divin remplaçait l'âme rationnelle humaine dans le Christ. Ainsi Jésus n'aurait pas eu d'intelligence humaine. Cette erreur mutilait l'humanité du Christ : « Ce qui n'est pas assumé n'est pas sauvé » (Grégoire de Nazianze). Condamné à Constantinople I (381).",
            period: "imperial",
            type: "heresy",
            icon: "fa-brain",
            details: [
                "Erreur : Le Christ n'avait pas d'âme humaine rationnelle",
                "Fondateur : Apollinaire de Laodicée (~310-390)",
                "Logique : Le Logos remplace l'intellect humain",
                "Réfutation : « Ce qui n'est pas assumé n'est pas sauvé » (Grégoire de Nazianze)",
                "Condamnation : Concile de Constantinople I (381)",
                "Vérité catholique : Le Christ a une nature humaine complète (corps, âme, intellect)"
            ]
        },
        {
            id: 711,
            year: "428",
            date: "Ve siècle",
            title: "⚠️ Nestorianisme",
            summary: "Marie n'est pas Mère de Dieu mais seulement mère de l'homme Jésus ; deux personnes dans le Christ.",
            description: "Nestorius, patriarche de Constantinople, refusait d'appeler Marie « Theotokos » (Mère de Dieu), préférant « Christotokos » (Mère du Christ). Pour lui, il y avait en Jésus deux personnes (divine et humaine) simplement unies moralement. Le concile d'Éphèse (431), sous l'impulsion de saint Cyrille d'Alexandrie, condamna cette erreur : Marie est bien Theotokos car celui qu'elle a enfanté est une seule personne divine.",
            period: "imperial",
            type: "heresy",
            icon: "fa-user-slash",
            details: [
                "Erreur : Deux personnes dans le Christ (divine et humaine)",
                "Conséquence : Marie n'est pas Mère de Dieu (Theotokos)",
                "Fondateur : Nestorius, patriarche de Constantinople (428-431)",
                "Condamnation : Concile d'Éphèse (431)",
                "Champion de l'orthodoxie : Saint Cyrille d'Alexandrie",
                "Réponse catholique : Une seule personne (divine) en deux natures",
                "Église nestorienne : Survit aujourd'hui (Église d'Orient, Assyriens)",
                "Titre défini : Marie est THEOTOKOS (Mère de Dieu)"
            ]
        },
        {
            id: 712,
            year: "448",
            date: "Ve siècle",
            title: "⚠️ Monophysisme (Eutychianisme)",
            summary: "Une seule nature dans le Christ : la nature humaine est absorbée dans la divine.",
            description: "Eutychès, archimandrite de Constantinople, en réaction contre Nestorius, tomba dans l'erreur opposée : après l'union, il n'y aurait plus qu'une seule nature (physis) dans le Christ, la nature humaine étant absorbée dans la divine « comme une goutte d'eau dans l'océan ». Le concile de Chalcédoine (451) définit la foi orthodoxe : deux natures (divine et humaine) en une seule personne, « sans confusion, sans changement, sans division, sans séparation ».",
            period: "imperial",
            type: "heresy",
            icon: "fa-compress-arrows-alt",
            details: [
                "Erreur : Une seule nature dans le Christ après l'union",
                "Fondateur : Eutychès, archimandrite de Constantinople (~378-454)",
                "Image : La nature humaine dissoute dans la divine",
                "Condamnation : Concile de Chalcédoine (451)",
                "Champion de l'orthodoxie : Pape saint Léon le Grand (Tome à Flavien)",
                "Formule de Chalcédoine : Deux natures « sans confusion, sans changement, sans division, sans séparation »",
                "Églises monophysites : Coptes, Éthiopiens, Arméniens (aujourd'hui « miaphysites »)"
            ]
        },
        {
            id: 713,
            year: "~630",
            date: "VIIe siècle",
            title: "⚠️ Monothélisme",
            summary: "Une seule volonté dans le Christ, niant sa volonté humaine.",
            description: "Pour réconcilier les monophysites avec l'Église, l'empereur Héraclius et le patriarche Sergius proposèrent un compromis : une seule volonté (thelema) et une seule opération (energeia) dans le Christ. Mais cette position niait la pleine humanité du Christ. Le concile de Constantinople III (680-681) condamna cette erreur, affirmant deux volontés (divine et humaine) dans le Christ, la volonté humaine se soumettant librement à la divine.",
            period: "medieval",
            type: "heresy",
            icon: "fa-hand-paper",
            details: [
                "Erreur : Une seule volonté dans le Christ",
                "Variante : Monoénergisme (une seule opération/énergie)",
                "Origine politique : Tentative de réconcilier les monophysites",
                "Promoteurs : Empereur Héraclius, Patriarche Sergius de Constantinople",
                "Condamnation : Concile de Constantinople III (680-681)",
                "Pape condamné : Honorius I (pour ambiguïté, pas pour hérésie formelle)",
                "Vérité catholique : Deux volontés, humaine et divine, en harmonie"
            ]
        },

        // ==================== HÉRÉSIES SOTÉRIOLOGIQUES (Ve s.) ====================
        {
            id: 714,
            year: "~411",
            date: "Ve siècle",
            title: "⚠️ Pélagianisme",
            summary: "L'homme peut se sauver par ses propres forces sans la grâce divine.",
            description: "Pélage, moine breton, enseignait que l'homme peut, par ses propres forces naturelles, éviter le péché et mériter le salut. Le péché originel n'aurait pas corrompu la nature humaine mais seulement donné un mauvais exemple. La grâce ne serait qu'une aide extérieure. Saint Augustin combattit vigoureusement cette erreur, affirmant la nécessité absolue de la grâce pour tout bien surnaturel.",
            period: "imperial",
            type: "heresy",
            icon: "fa-fist-raised",
            details: [
                "Erreur : L'homme peut se sauver sans la grâce",
                "Négation du péché originel comme corruption de la nature",
                "Fondateur : Pélage, moine d'origine britannique (~354-420)",
                "Disciple : Célestius",
                "Champion de l'orthodoxie : Saint Augustin d'Hippone",
                "Condamnations : Conciles de Carthage (411, 416, 418), Éphèse (431)",
                "Œuvres d'Augustin : « De la grâce et du libre arbitre », « De la nature et de la grâce »",
                "Vérité catholique : La grâce est absolument nécessaire pour le salut"
            ]
        },
        {
            id: 715,
            year: "~430",
            date: "Ve siècle",
            title: "⚠️ Semi-pélagianisme",
            summary: "L'homme peut faire le premier pas vers le salut, la grâce complète ensuite.",
            description: "Après la condamnation du pélagianisme, certains moines de Gaule (Cassien, Fauste de Riez) proposèrent un compromis : l'homme peut faire le premier pas vers Dieu (initium fidei), et la grâce vient ensuite aider. Saint Augustin puis le concile d'Orange (529) condamnèrent cette erreur : même le début de la foi est un don de la grâce.",
            period: "imperial",
            type: "heresy",
            icon: "fa-shoe-prints",
            details: [
                "Erreur : L'homme peut initier le mouvement vers le salut",
                "Autre nom : Semipélagianisme, Massilianisme",
                "Principaux représentants : Jean Cassien, Fauste de Riez",
                "Condamnation : Concile d'Orange (529)",
                "Vérité catholique : Même l'initium fidei (début de la foi) est un don de la grâce",
                "Citation du concile : « En toute œuvre bonne, ce n'est pas nous qui commençons »"
            ]
        },

        // ==================== HÉRÉSIES ECCLÉSIOLOGIQUES ====================
        {
            id: 716,
            year: "~311",
            date: "IVe siècle",
            title: "⚠️ Donatisme",
            summary: "Les sacrements sont invalides s'ils sont administrés par des prêtres pécheurs.",
            description: "Le donatisme (de l'évêque Donat) affirmait que les sacrements administrés par des « traditores » (ceux qui avaient livré les Écritures pendant la persécution) étaient invalides. Seule l'Église des « purs » pouvait donner des sacrements valides. Saint Augustin réfuta cette erreur : la validité des sacrements ne dépend pas de la sainteté du ministre mais du Christ qui agit à travers eux (ex opere operato).",
            period: "imperial",
            type: "heresy",
            icon: "fa-hand-holding-water",
            details: [
                "Erreur : Sacrements invalides si le ministre est pécheur",
                "Origine : Controverse sur les « traditores » d'Afrique du Nord",
                "Fondateur : Donat de Casae Nigrae, évêque de Carthage (~313)",
                "Caractère : Schisme ET hérésie, rigorisme extrême",
                "Champion de l'orthodoxie : Saint Augustin",
                "Principe catholique : Validité ex opere operato (par l'action accomplie)",
                "Condamnations : Conciles de Rome (313), Arles (314)"
            ]
        },

        // ==================== HÉRÉSIES MÉDIÉVALES ====================
        {
            id: 717,
            year: "~726",
            date: "VIIIe-IXe siècle",
            title: "⚠️ Iconoclasme",
            summary: "Destruction des images saintes, accusées d'être des idoles.",
            description: "L'iconoclasme (« briseurs d'images ») fut une crise majeure de l'Empire byzantin. Les empereurs Léon III et Constantin V interdirent et détruisirent les icônes, les assimilant à des idoles. Le concile de Nicée II (787) rétablit le culte des images en distinguant la « vénération » (proskynèsis) due aux images de l'« adoration » (latreia) due à Dieu seul.",
            period: "medieval",
            type: "heresy",
            icon: "fa-image",
            details: [
                "Erreur : Les images sont des idoles à détruire",
                "Empereurs iconoclastes : Léon III (726), Constantin V",
                "Persécution : Destruction d'icônes, martyrs iconodoules",
                "Défenseurs des icônes : Saint Jean Damascène, Saint Germain de Constantinople",
                "Condamnation : Concile de Nicée II (787)",
                "Distinction : Latreia (adoration à Dieu) vs Proskynèsis (vénération aux images)",
                "Argument théologique : L'Incarnation justifie les images du Christ"
            ]
        },
        {
            id: 718,
            year: "~1140",
            date: "XIIe-XIIIe siècle",
            title: "⚠️ Catharisme (Albigeois)",
            summary: "Dualisme radical : le monde matériel est l'œuvre du Mal, rejet des sacrements.",
            description: "Le catharisme (du grec katharos, « pur ») était une religion dualiste présentant deux dieux : un dieu bon (esprit) et un dieu mauvais (matière). Le monde visible, création du Mal, devait être rejeté. Les « Parfaits » pratiquaient un ascétisme extrême. L'Église fut contrainte de réagir par la prédication (Dominicains) puis par la croisade des Albigeois (1209-1229) et l'Inquisition.",
            period: "schism",
            type: "heresy",
            icon: "fa-yin-yang",
            details: [
                "Erreur : Dualisme radical (Bien vs Mal, Esprit vs Matière)",
                "Autres noms : Albigeois (d'Albi), Manichéens",
                "Le monde matériel est mauvais, créé par le « démiurge »",
                "Structure : « Parfaits » (élite ascétique) vs « Croyants »",
                "Rite : Consolamentum (baptême spirituel)",
                "Régions touchées : Languedoc, Italie du Nord",
                "Réponse : Prédication dominicaine, Croisade des Albigeois (1209-1229)",
                "Fin : Chute de Montségur (1244), Inquisition"
            ]
        },
        {
            id: 719,
            year: "~1170",
            date: "XIIe siècle",
            title: "⚠️ Valdéisme",
            summary: "Pauvreté évangélique radicale, rejet de la hiérarchie, prédication laïque.",
            description: "Pierre Valdès, riche marchand de Lyon, distribua ses biens et prêcha la pauvreté évangélique. Ses disciples (« Pauvres de Lyon ») furent d'abord approuvés puis condamnés pour avoir prêché sans autorisation et rejeté certains sacrements. Contrairement aux Cathares, les Vaudois étaient chrétiens orthodoxes à l'origine. Une partie rejoignit le protestantisme au XVIe siècle.",
            period: "schism",
            type: "heresy",
            icon: "fa-hand-holding-heart",
            details: [
                "Erreur : Rejet de l'autorité ecclésiastique, prédication laïque sans mandat",
                "Fondateur : Pierre Valdès (ou Valdo) de Lyon (~1140-1205)",
                "Autre nom : Pauvres de Lyon",
                "Position : Pauvreté radicale, lecture de la Bible en langue vulgaire",
                "Condamnation : Concile de Vérone (1184), Latran IV (1215)",
                "Différence avec Cathares : Pas de dualisme, foi chrétienne de base",
                "Évolution : Rapprochement avec le protestantisme au XVIe siècle",
                "Aujourd'hui : Église évangélique vaudoise (Italie, protestante)"
            ]
        },
        {
            id: 720,
            year: "~1380",
            date: "XIVe siècle",
            title: "⚠️ Wycliffisme",
            summary: "Prédestination stricte, rejet de la transsubstantiation, autorité de l'Écriture seule.",
            description: "John Wyclif, théologien anglais, anticipa de nombreuses positions protestantes : autorité de l'Écriture seule (sola scriptura), prédestination, rejet de la transsubstantiation, critique du pouvoir temporel du pape. Il traduisit la Bible en anglais. Ses idées influencèrent Jan Hus et, plus tard, Luther. Condamné post mortem à Constance (1415), ses restes furent exhumés et brûlés.",
            period: "schism",
            type: "heresy",
            icon: "fa-book-bible",
            details: [
                "Erreurs : Sola scriptura, rejet de la transsubstantiation, prédestination stricte",
                "Fondateur : John Wyclif (~1330-1384), théologien d'Oxford",
                "Traduction de la Bible en anglais",
                "Disciples : Lollards (Angleterre)",
                "Influence sur Jan Hus et le protestantisme",
                "Condamnation : Concile de Constance (1415) - 45 propositions",
                "Exhumation et crémation des restes (1428)"
            ]
        },
        {
            id: 721,
            year: "~1400",
            date: "XVe siècle",
            title: "⚠️ Hussitisme",
            summary: "Communion sous les deux espèces, réforme radicale, proto-protestantisme tchèque.",
            description: "Jan Hus, recteur de l'Université de Prague, reprit les idées de Wyclif et critiqua vivement les abus de l'Église. Son point central était la communion sous les deux espèces (pain ET vin) pour les laïcs. Malgré un sauf-conduit, il fut brûlé vif au concile de Constance (1415). Sa mort déclencha les guerres hussites en Bohême (1419-1434).",
            period: "schism",
            type: "heresy",
            icon: "fa-wine-glass-alt",
            details: [
                "Erreurs : Communion sous les deux espèces obligatoire, ecclésiologie réformée",
                "Fondateur : Jan Hus (~1369-1415), recteur de l'Université de Prague",
                "Influence de Wyclif",
                "Point central : Utraquisme (communion sous les deux espèces)",
                "Condamnation : Concile de Constance (1415)",
                "Martyre : Brûlé vif le 6 juillet 1415",
                "Conséquences : Guerres hussites (1419-1434)",
                "Branches : Utraquistes (modérés), Taborites (radicaux)"
            ]
        },

        // ==================== HÉRÉSIES DE LA RÉFORME (XVIe s.) ====================
        {
            id: 722,
            year: "1517",
            date: "XVIe siècle",
            title: "⚠️ Protestantisme - Luther, Calvin, Zwingli",
            summary: "Sola fide, sola scriptura, rejet des sacrements et de l'autorité papale.",
            description: "La Réforme protestante, déclenchée par les 95 thèses de Luther (1517), constitue la plus grande rupture doctrinale depuis l'arianisme. Les « 5 sola » résument la doctrine protestante : sola scriptura (Écriture seule), sola fide (foi seule), sola gratia (grâce seule), solus Christus (Christ seul), soli Deo gloria (à Dieu seul la gloire). Le concile de Trente (1545-1563) répondit point par point.",
            period: "schism",
            type: "heresy",
            icon: "fa-church",
            details: [
                "=== LES CINQ SOLA ===",
                "Sola scriptura : L'Écriture seule est autorité (rejet de la Tradition)",
                "Sola fide : Justification par la foi seule (rejet des œuvres)",
                "Sola gratia : Salut par la grâce seule",
                "Solus Christus : Christ seul médiateur (rejet des saints, de Marie)",
                "Soli Deo gloria : À Dieu seul la gloire",
                "",
                "=== PRINCIPAUX RÉFORMATEURS ===",
                "Martin Luther (1483-1546) : Justification par la foi, 2 sacrements",
                "Jean Calvin (1509-1564) : Prédestination, théocratie à Genève",
                "Ulrich Zwingli (1484-1531) : Eucharistie symbolique",
                "",
                "=== RÉPONSE CATHOLIQUE ===",
                "Concile de Trente (1545-1563) : Écriture ET Tradition, foi ET œuvres, 7 sacrements"
            ]
        },

        // ==================== HÉRÉSIES MODERNES ====================
        {
            id: 723,
            year: "~1640",
            date: "XVIIe siècle",
            title: "⚠️ Jansénisme",
            summary: "Grâce irrésistible, prédestination, rigorisme moral extrême.",
            description: "Le jansénisme (de Jansénius, évêque d'Ypres) reprenait une lecture rigoriste de saint Augustin : la grâce efficace est irrésistible, l'homme est totalement corrompu, peu sont prédestinés au salut. Cette doctrine, proche du calvinisme, s'accompagnait d'un rigorisme moral et d'une communion rare. Le centre en France était l'abbaye de Port-Royal. Condamné par plusieurs papes, le jansénisme influença durablement la spiritualité française.",
            period: "modern",
            type: "heresy",
            icon: "fa-lock",
            details: [
                "Erreurs : Grâce irrésistible, double prédestination, rigorisme",
                "Fondateur : Cornelius Jansénius (1585-1638), évêque d'Ypres",
                "Œuvre : « Augustinus » (1640, posthume)",
                "Centre français : Port-Royal (Arnauld, Pascal, Racine)",
                "Condamnations : « Cum occasione » (1653), « Unigenitus » (1713)",
                "5 propositions condamnées par Innocent X",
                "Influence : Rigorisme moral, communion rare, spiritualité austère"
            ]
        },
        {
            id: 724,
            year: "~1675",
            date: "XVIIe siècle",
            title: "⚠️ Quiétisme",
            summary: "Passivité totale de l'âme, abandon de toute activité spirituelle volontaire.",
            description: "Le quiétisme (de Miguel de Molinos, puis Madame Guyon et Fénelon) enseignait une passivité totale de l'âme dans la prière : aucun effort, aucun désir, même du salut, « pur amour » désintéressé jusqu'à accepter sa propre damnation. Cette doctrine détruisait la vie morale et sacramentelle. Condamné par Innocent XI (1687) et Innocent XII (1699).",
            period: "modern",
            type: "heresy",
            icon: "fa-bed",
            details: [
                "Erreur : Passivité totale, suppression de tout acte volontaire de l'âme",
                "Fondateur : Miguel de Molinos (1628-1696), prêtre espagnol",
                "En France : Madame Guyon, Fénelon (archevêque de Cambrai)",
                "Opposition : Bossuet (évêque de Meaux)",
                "« Pur amour » : Aimer Dieu sans aucun désir, même du salut",
                "Condamnations : Innocent XI (1687), Innocent XII (1699)",
                "68 propositions de Molinos condamnées"
            ]
        },
        {
            id: 725,
            year: "~1907",
            date: "XXe siècle",
            title: "⚠️ Modernisme",
            summary: "Adaptation de la foi au monde moderne, relativisme dogmatique, évolutionnisme religieux.",
            description: "Le modernisme, condamné par saint Pie X (« Pascendi », 1907), est une tentative d'adapter radicalement la foi catholique à la pensée moderne. Il affirme l'évolution des dogmes, le subjectivisme de la foi, la critique historique radicale des Écritures, la séparation entre le « Christ de la foi » et le « Jésus de l'histoire ». Pie X le qualifia de « synthèse de toutes les hérésies ».",
            period: "modern",
            type: "heresy",
            icon: "fa-sync-alt",
            details: [
                "Erreurs : Évolution des dogmes, subjectivisme, critique radicale de la Bible",
                "Principaux représentants : Alfred Loisy, George Tyrrell, Édouard Le Roy",
                "Condamnations : « Lamentabili » (1907), « Pascendi » (1907) - Saint Pie X",
                "Pie X : « Le modernisme est la synthèse de toutes les hérésies »",
                "Serment antimoderniste (1910-1967)",
                "Influence persistante : Débats sur Vatican II et l'herméneutique",
                "65 propositions condamnées dans « Lamentabili »"
            ]
        },

        // ==================== TABLEAU RÉCAPITULATIF DES HÉRÉSIES ====================
        {
            id: 799,
            year: "2024",
            date: "Synthèse",
            title: "📊 Tableau récapitulatif des hérésies",
            summary: "Vue d'ensemble des principales hérésies classées par thème et par siècle.",
            description: "Ce tableau synthétise les grandes hérésies de l'histoire de l'Église, leurs erreurs principales, leurs condamnations et les vérités catholiques correspondantes. Chaque hérésie a contribué, par sa condamnation, à la formulation précise du dogme catholique.",
            period: "contemporary",
            type: "heresy",
            icon: "fa-table",
            details: [
                "=== HÉRÉSIES TRINITAIRES ===",
                "ARIANISME (IVe s.) : Le Fils est créature → Nicée : « Consubstantiel »",
                "MACÉDONIANISME (IVe s.) : L'Esprit est créature → Constantinople I : « Seigneur »",
                "MODALISME (IIIe s.) : Un Dieu, trois masques → Trois personnes distinctes",
                "",
                "=== HÉRÉSIES CHRISTOLOGIQUES ===",
                "DOCÉTISME (Ier s.) : Corps apparent → Vraie humanité du Christ",
                "APOLLINARISME (IVe s.) : Pas d'âme humaine → Humanité complète",
                "NESTORIANISME (Ve s.) : Deux personnes → Une personne, deux natures",
                "MONOPHYSISME (Ve s.) : Une nature → Deux natures sans confusion",
                "MONOTHÉLISME (VIIe s.) : Une volonté → Deux volontés",
                "",
                "=== HÉRÉSIES SOTÉRIOLOGIQUES ===",
                "PÉLAGIANISME (Ve s.) : Salut sans grâce → Nécessité de la grâce",
                "SEMI-PÉLAGIANISME (Ve s.) : Initiative humaine → Tout vient de la grâce",
                "JANSÉNISME (XVIIe s.) : Grâce irrésistible → Grâce et liberté",
                "",
                "=== HÉRÉSIES MÉDIÉVALES ===",
                "CATHARISME (XIIe s.) : Dualisme → Un seul Dieu créateur",
                "VALDÉISME (XIIe s.) : Prédication sans mandat → Autorité de l'Église",
                "WYCLIFFISME/HUSSITISME (XIVe-XVe s.) : Proto-protestantisme",
                "",
                "=== PROTESTANTISME ET SUITE ===",
                "PROTESTANTISME (XVIe s.) : Sola fide/scriptura → Foi + œuvres, Écriture + Tradition",
                "MODERNISME (XXe s.) : Évolution des dogmes → Immutabilité de la foi"
            ]
        }
    ]
};
