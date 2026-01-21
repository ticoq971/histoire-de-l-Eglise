// =====================================================
// DONNÉES HISTORIQUES DU PROTESTANTISME
// =====================================================

const protestantHistory = {
    periods: [
        {
            id: "pre-reformation",
            name: "Pré-Réforme",
            years: "1170 - 1517",
            description: "Les précurseurs (Vaudois, Wycliffe, Hus)"
        },
        {
            id: "reformation",
            name: "La Réforme",
            years: "1517 - 1648",
            description: "L'émergence des grandes confessions"
        },
        {
            id: "orthodoxy-pietism",
            name: "Orthodoxie & Piétisme",
            years: "1648 - 1789",
            description: "Dogmatisme et renouveau spirituel"
        },
        {
            id: "awakenings",
            name: "Grands Réveils",
            years: "1730 - 1900",
            description: "Expansion missionnaire et mouvements de réveil"
        },
        {
            id: "modern-protestantism",
            name: "Époque Moderne",
            years: "1900 - aujourd'hui",
            description: "Pentecôtisme, œcuménisme et défis contemporains"
        }
    ],


    // Types correspond to branches/denominations with detailed info
    types: {
        'lutheran': {
            label: 'Luthéranisme',
            icon: 'fa-book-bible',
            color: '#8B0000',
            birth: '1517 (Allemagne)',
            founder: 'Martin Luther (1483-1546)',
            doctrines: [
                'Sola Scriptura (Écriture seule)',
                'Sola Fide (Foi seule)',
                'Sola Gratia (Grâce seule)',
                'Présence réelle du Christ dans la Cène (consubstantiation)',
                'Baptême des enfants maintenu',
                'Deux sacrements : Baptême et Cène'
            ],
            history: 'Né de la protestation de Martin Luther contre les indulgences en 1517. Après son excommunication (1521) et la Diète de Worms, le mouvement s\'organise grâce aux princes allemands. La Confession d\'Augsbourg (1530) en fixe la doctrine. Aujourd\'hui environ 75 millions de fidèles.'
        },
        'reformed': {
            label: 'Réformés/Calvinistes/Presbytériens',
            icon: 'fa-scroll',
            color: '#006400',
            birth: '1519 (Zurich - Zwingli) / 1536 (Genève - Calvin)',
            founder: 'Ulrich Zwingli (1484-1531), Jean Calvin (1509-1564), John Knox (1514-1572)',
            clarification: '⚠️ CONFUSION FRÉQUENTE : Ces 3 termes désignent la MÊME famille théologique ! RÉFORMÉ = terme historique (origine suisse, utilisé en Europe). CALVINISTE = terme théologique (adhésion au TULIP). PRESBYTÉRIEN = terme organisationnel (gouvernance par les anciens/presbytres, utilisé dans le monde anglo-saxon : Écosse, USA, Corée). Un presbytérien écossais EST réformé ET calviniste. L\'Église Réformée de France EST calviniste avec gouvernance synodale.',
            doctrines: [
                'TULIP - 5 points du calvinisme : (T) Dépravation Totale : l\'homme est mort spirituellement, incapable de choisir Dieu par lui-même',
                '(U) Élection Inconditionnelle : Dieu choisit les élus sans condition préalable de leur part',
                '(L) Expiation Limitée : Christ est mort efficacement pour les élus seulement',
                '(I) Grâce Irrésistible : les élus ne peuvent résister à l\'appel de Dieu',
                '(P) Persévérance des Saints : les vrais croyants ne peuvent perdre leur salut',
                'Souveraineté absolue de Dieu sur tout (Providence)',
                'Prédestination double : élection des sauvés ET réprobation des perdus',
                'Cène : présence spirituelle (pas physique comme Luther, pas symbolique comme Zwingli mémorialiste)',
                'Gouvernance presbytérienne : Anciens (presbytres) élus par la congrégation',
                'Confessions de foi : Heidelberg (1563), Westminster (1646), Canons de Dordt (1619)'
            ],
            history: 'ORIGINES : Ulrich Zwingli lance une Réforme indépendante à Zurich (1519-1523), plus radicale que Luther sur la Cène et les images. Jean Calvin, français exilé à Genève, publie l\'\"Institution de la Religion Chrétienne\" (1536, révisé jusqu\'en 1559), œuvre théologique majeure qui systématise la doctrine réformée. Genève devient la \"Rome protestante\" : académie, discipline morale stricte, refuge pour persécutés. EXPANSION : Le calvinisme se répand en France (HUGUENOTS - massacrés à la Saint-Barthélemy 1572), aux Pays-Bas (réforme contre l\'Espagne catholique), en Écosse (John Knox fonde l\'Église presbytérienne 1560), en Angleterre (Puritains), et en Amérique (Pèlerins du Mayflower 1620, Puritains du Massachusetts). Le Synode de DORDT (1618-1619) condamne l\'arminianisme et définit les 5 points (TULIP). La Confession de WESTMINSTER (1646) devient la norme pour les presbytériens anglo-saxons. Aujourd\'hui : Environ 80 millions de réformés/presbytériens (Église réformée de France, Église presbytérienne USA/Corée, Églises réformées néerlandaises, etc.).'
        },
        'anglican': {
            label: 'Anglicanisme',
            icon: 'fa-crown',
            color: '#4B0082',
            birth: '1534 (Angleterre)',
            founder: 'Henri VIII (schisme), Thomas Cranmer (réforme doctrinale)',
            doctrines: [
                'Via Media : voie moyenne entre catholicisme et protestantisme',
                'Épiscopat historique maintenu',
                'Book of Common Prayer : liturgie unifiée',
                '39 Articles de Religion (1563)',
                'Large spectre théologique (anglo-catholiques à évangéliques)',
                'Communion ouverte'
            ],
            history: 'Schisme d\'Henri VIII avec Rome (1534) pour raisons matrimoniales. Réforme doctrinale sous Édouard VI (Book of Common Prayer, 1549). Après les persécutions de Marie Tudor, Élisabeth Ière établit la "via media". La Communion anglicane compte environ 85 millions de membres dans le monde.'
        },
        'anabaptist': {
            label: 'Anabaptisme',
            icon: 'fa-water',
            color: '#008B8B',
            birth: '1525 (Zurich)',
            founder: 'Conrad Grebel, Félix Manz, Georg Blaurock',
            doctrines: [
                'Baptême des croyants uniquement (rejet du pédobaptême)',
                'Séparation absolue de l\'Église et de l\'État',
                'Non-violence et refus du serment',
                'Église de professants (membres volontaires)',
                'Vie communautaire simple',
                'Discipline du ban (excommunication)'
            ],
            history: 'Né de la rupture avec Zwingli jugé trop modéré. Premiers rebaptêmes à Zurich (janvier 1525). Violemment persécutés par catholiques ET protestants. Menno Simons (1496-1561) organise les survivants (Mennonites). Aujourd\'hui : Mennonites, Amish, Huttérites (~2 millions).'
        },
        'mennonite': {
            label: 'Mennonites',
            icon: 'fa-peace',
            color: '#2F4F4F',
            birth: '1536 (Pays-Bas)',
            founder: 'Menno Simons (1496-1561)',
            doctrines: [
                'Héritage anabaptiste : baptême des croyants, non-violence',
                'Refus de porter les armes et de prêter serment',
                'Vie simple et séparation du monde',
                'Discipline communautaire (ban)',
                'Autorité des Écritures et confession de Dordrecht (1632)',
                'Service et entraide communautaire'
            ],
            history: 'ORIGINES : Menno Simons, ancien prêtre catholique frison (Pays-Bas), rejoint les anabaptistes pacifistes en 1536 après l\'échec sanglant du royaume de Münster (1534-35, anabaptistes violents). Il organise les survivants dispersés et persécutés, leur donnant une théologie et une structure. Ses disciples prennent le nom de \"Mennonites\". MIGRATION : Persécutés en Europe, ils émigrent vers la Prusse, la Russie, puis l\'Amérique (Pennsylvanie dès 1683). Les AMISH (Jakob Ammann, 1693) se séparent pour une discipline plus stricte. Aujourd\'hui : environ 2 millions de membres (Mennonite Church USA, Mennonite Brethren, Amish, etc.). Connus pour leur pacifisme, leur aide humanitaire (Mennonite Central Committee), et leur vie simple.'
        },
        'arminian': {
            label: 'Arminianisme',
            icon: 'fa-scale-balanced',
            color: '#9370DB',
            birth: '1609 (Pays-Bas)',
            founder: 'Jacobus Arminius (1560-1609)',
            doctrines: [
                'CONTRE le calvinisme strict : rejet de la prédestination inconditionnelle',
                'Libre arbitre : l\'homme peut accepter OU rejeter la grâce de Dieu',
                'Expiation universelle : Christ est mort pour TOUS les hommes (pas seulement les élus)',
                'Grâce résistible : on peut résister à l\'appel de Dieu',
                'Possibilité de perdre le salut (apostasie)',
                '5 articles de la Remontrance (1610) : réponse au TULIP calviniste'
            ],
            history: 'ORIGINES : Jacobus Arminius (Jakob Hermanzoon), pasteur et théologien réformé néerlandais, remet en question la double prédestination calviniste vers 1603. Après sa mort (1609), ses disciples publient les \"Cinq Articles de la Remontrance\" (1610), contestant le calvinisme strict. Le Synode de DORDT (1618-1619) condamne l\'arminianisme et affirme les 5 points calvinistes (TULIP). Les arminiens sont persécutés aux Pays-Bas. INFLUENCE : L\'arminianisme survit et influence profondément John Wesley et le méthodisme, les baptistes généraux, le pentecôtisme, et la majorité du protestantisme évangélique mondial aujourd\'hui. La plupart des évangéliques modernes sont théologiquement arminiens (même sans le savoir) plutôt que calvinistes.'
        },
        'baptist': {
            label: 'Baptisme',
            icon: 'fa-hands-holding-water',
            color: '#1E90FF',
            birth: '1609 (Amsterdam)',
            founder: 'John Smyth, Thomas Helwys',
            doctrines: [
                'Baptême par immersion des croyants professants',
                'Autonomie de l\'église locale (congrégationalisme)',
                'Liberté de conscience absolue',
                'Séparation de l\'Église et de l\'État',
                'Autorité des Écritures',
                'Sacerdoce universel des croyants'
            ],
            history: 'Issus des séparatistes puritains anglais réfugiés à Amsterdam. John Smyth s\'auto-baptise (1609). Thomas Helwys retourne en Angleterre et plaide pour la liberté religieuse universelle. Deux branches : Baptistes GÉNÉRAUX (arminiens : Christ mort pour tous) et PARTICULIERS (calvinistes : Christ mort pour les élus). Environ 100 millions de fidèles, surtout aux États-Unis. Southern Baptist Convention = plus grande dénomination protestante américaine.'
        },
        'methodist': {
            label: 'Méthodisme',
            icon: 'fa-fire-flame-simple',
            color: '#B22222',
            birth: '1738-1784 (Angleterre / États-Unis)',
            founder: 'John Wesley (1703-1791), Charles Wesley',
            doctrines: [
                'Grâce prévenante universelle',
                'Sanctification et perfection chrétienne',
                'Quadrilatère wesleyen : Écriture, Tradition, Raison, Expérience',
                'Assurance du salut par le témoignage de l\'Esprit',
                'Engagement social (lutte contre l\'esclavage, aide aux pauvres)',
                'Ministère itinérant et structure connexionnelle'
            ],
            history: 'John Wesley, prêtre anglican, vit une expérience spirituelle à Aldersgate (1738). Il prêche en plein air aux ouvriers négligés par l\'Église établie. Organise des "sociétés" et "classes" méthodistes. Séparation officielle de l\'Anglicanisme après sa mort (1795). Environ 80 millions de méthodistes aujourd\'hui.'
        },
        'pentecostal': {
            label: 'Pentecôtisme',
            icon: 'fa-fire',
            color: '#FF4500',
            birth: '1901-1906 (États-Unis)',
            founder: 'Charles Fox Parham (1873-1929), William J. Seymour (1870-1922)',
            doctrines: [
                'Baptême dans le Saint-Esprit distinct de la conversion',
                'Glossolalie (parler en langues) comme signe initial',
                'Dons spirituels actifs (guérison, prophétie, miracles)',
                'Vie de sainteté et séparation du monde',
                'Attente du retour imminent du Christ (prémillénarisme)',
                'Culte expressif et spontané'
            ],
            history: 'ORIGINES : Le pentecôtisme est l\'enfant du MOUVEMENT DE SAINTETÉ méthodiste. ÉTAPE 1 - Topeka, Kansas (1er janvier 1901) : Charles Parham dirige une école biblique où il enseigne que le "baptême dans le Saint-Esprit" doit être accompagné d\'un SIGNE : le parler en langues (glossolalie). Agnes Ozman est la première à recevoir ce "don". ÉTAPE 2 - Azusa Street, Los Angeles (1906-1915) : William Seymour, élève afro-américain de Parham, dirige un réveil extraordinaire dans un ancien bâtiment de l\'AME Church. Caractéristiques : égalité raciale (blancs et noirs ensemble, scandaleux pour l\'époque), guérisons, prophéties, parler en langues, culte spontané pendant des heures. Des visiteurs du monde entier viennent et repartent fonder des Églises pentecôtistes. EXPANSION : Assemblées de Dieu (Hot Springs, 1914), Église de Dieu (Cleveland, Tennessee), Église de Dieu en Christ (COGIC, afro-américaine). En 1960, le renouveau charismatique touche les Églises historiques (catholiques, protestants mainline). Aujourd\'hui : plus de 600 millions de pentecôtistes/charismatiques, le mouvement chrétien à la croissance la plus rapide.'
        },
        'evangelical': {
            label: 'Évangéliques',
            icon: 'fa-bible',
            color: '#2E8B57',
            birth: 'XVIIIe siècle (Grands Réveils anglo-saxons)',
            founder: 'George Whitefield, Jonathan Edwards, John Wesley, Charles Finney, D.L. Moody, Billy Graham',
            doctrines: [
                'Autorité suprême et inerrance de la Bible (Sola Scriptura radicalisé)',
                'Conversion personnelle nécessaire (nouvelle naissance, born again)',
                'Crucicentrisme : centralité de la croix et du sacrifice expiatoire',
                'Activisme : évangélisation, missions, engagement social',
                'Quadrilatère de Bebbington (1989) : biblisme, crucicentrisme, conversionnisme, activisme',
                'Assurance personnelle du salut'
            ],
            history: 'ORIGINES : Le terme "évangélique" (evangelisch) date de Luther (1520s) pour désigner les protestants. Le mouvement MODERNE naît des GRANDS RÉVEILS : (1) Premier Grand Réveil (1730-1750) : Jonathan Edwards aux États-Unis ("Sinners in the Hands of an Angry God"), George Whitefield prêche en plein air en Angleterre et en Amérique à des foules de 20 000 personnes. (2) Second Grand Réveil (1790-1840) : camp-meetings, Charles Finney et ses "nouvelles méthodes" (appels à l\'autel). (3) Réveil de 1859 : Irlande, Pays de Galles, États-Unis. Au XXe siècle, distinction cruciale avec le FONDAMENTALISME : les fondamentalistes (années 1920) sont séparatistes et anti-intellectuels ; les "néo-évangéliques" (Billy Graham, Carl F.H. Henry, années 1940-50) veulent un engagement culturel positif. Le Congrès de Lausanne (1974) unifie le mouvement mondial. Aujourd\'hui : 300-600 millions selon les définitions (mouvement transconfessionnel : baptistes, assemblées de Dieu, non-dénominationnels, etc.).'
        },
        'adventist': {
            label: 'Adventisme',
            icon: 'fa-clock',
            color: '#4682B4',
            birth: '1863 (États-Unis)',
            founder: 'William Miller (mouvement), Ellen G. White (organisation)',
            doctrines: [
                'Retour imminent et visible du Christ (Adventus = venue)',
                'Sabbat du 7e jour (samedi)',
                'État des morts : sommeil de l\'âme jusqu\'à la résurrection',
                'Jugement investigatif depuis 1844',
                'Don prophétique d\'Ellen White',
                'Santé : régime végétarien, abstinence tabac/alcool'
            ],
            history: 'Issu du "Grand Désappointement" de 1844 : William Miller avait prédit le retour du Christ pour le 22 octobre 1844. Après l\'échec, certains disciples réinterprètent la prophétie. Ellen G. White (1827-1915), considérée comme prophétesse, guide le mouvement. L\'Église Adventiste du Septième Jour est officiellement organisée en 1863. Aujourd\'hui environ 22 millions de membres baptisés, forte présence missionnaire mondiale.'
        },
        'restorationist': {
            label: 'Restaurationnisme',
            icon: 'fa-rotate-right',
            color: '#708090',
            birth: 'XIXe siècle (États-Unis)',
            founder: 'Divers fondateurs selon le mouvement',
            doctrines: [
                'Restauration du christianisme primitif',
                'Rejet des credos historiques (Nicée, etc.)',
                'Révélation continue ou nouvelle',
                'Souvent : rejet de la Trinité classique',
                'Autorité de leaders prophétiques'
            ],
            history: 'Mouvements nés au XIXe siècle en Amérique, prétendant restaurer le "vrai" christianisme corrompu depuis les premiers siècles. Non considérés comme protestants par les Églises historiques. Inclut les Mormons (1830), Témoins de Jéhovah (1870s), Christadelphes, et d\'autres. Doctrines souvent très éloignées du protestantisme classique.'
        },
        'mormon': {
            label: 'Mormonisme (LDS)',
            icon: 'fa-landmark-dome',
            color: '#800020',
            birth: '1830 (États-Unis)',
            founder: 'Joseph Smith Jr. (1805-1844)',
            doctrines: [
                'Livre de Mormon comme Écriture supplémentaire',
                'Prophètes vivants (président de l\'Église)',
                'Pré-existence des âmes',
                'Progression éternelle : l\'homme peut devenir comme Dieu',
                'Baptême pour les morts',
                'Temples et rituels secrets'
            ],
            history: 'Joseph Smith affirme avoir reçu des plaques d\'or en 1827 (traduites comme Livre de Mormon). Fonde l\'Église de Jésus-Christ des Saints des Derniers Jours en 1830. Après sa mort (1844), Brigham Young mène les fidèles vers l\'Utah. Polygamie abandonnée en 1890. Non reconnu comme chrétien par les Églises traditionnelles en raison de doctrines non-trinitaires. Environ 17 millions de membres.'
        },
        'jehovah': {
            label: 'Témoins de Jéhovah',
            icon: 'fa-tower-observation',
            color: '#0047AB',
            birth: '1870s (États-Unis)',
            founder: 'Charles Taze Russell (1852-1916)',
            doctrines: [
                'Jéhovah : seul vrai nom de Dieu',
                'Rejet de la Trinité : Jésus = créature, l\'archange Michel',
                'Pas d\'enfer éternel, mais annihilation des méchants',
                'Royaume de Dieu établi en 1914',
                '144 000 élus au ciel, le reste sur une Terre paradisiaque',
                'Refus des transfusions sanguines, neutralité politique'
            ],
            history: 'Charles T. Russell fonde le mouvement des "Étudiants de la Bible" dans les années 1870. Nombreuses prédictions de fin du monde (1914, 1925, 1975...). Joseph Rutherford adopte le nom "Témoins de Jéhovah" en 1931. Organisation centralisée (Watchtower). Non reconnus comme chrétiens par les Églises traditionnelles. Environ 8,5 millions de membres actifs.'
        },
        'branham': {
            label: 'Branhamisme',
            icon: 'fa-dove',
            color: '#5F4B8B',
            birth: '1946-1965 (États-Unis)',
            founder: 'William Marrion Branham (1909-1965)',
            doctrines: [
                'Branham = prophète-messager de l\'ère de Laodicée',
                'Modalisme : rejet de la Trinité (Jésus seul est Dieu)',
                'Baptême au nom de Jésus seul',
                'Doctrine de la semence du serpent',
                'Restauration de toutes choses avant le retour du Christ',
                'Enseignements enregistrés = autorité doctrinale'
            ],
            history: 'William Branham, prédicateur-guérisseur américain, est considéré comme l\'initiateur du réveil de guérison (1947). Ses enseignements deviennent de plus en plus hétérodoxes (anti-trinitaires, semence du serpent). Après sa mort en 1965, des disciples forment le mouvement "Message de l\'Heure". Estimé à 1-2 millions d\'adeptes, surtout en Afrique et Amérique latine. Non reconnu par le protestantisme classique.'
        },
        'holiness': {
            label: 'Mouvement de Sainteté',
            icon: 'fa-hand-sparkles',
            color: '#E6B800',
            birth: '1830s-1880s (États-Unis)',
            founder: 'Phoebe Palmer, campement de Vineland (1867), Églises de Sainteté',
            doctrines: [
                'SECONDE BÉNÉDICTION = sanctification entière : après la conversion (1ère bénédiction = nouvelle naissance), le croyant peut recevoir une "seconde œuvre de grâce" instantanée qui purifie le cœur du péché originel, permettant de vivre sans pécher volontairement',
                'Perfection chrétienne : idée wesleyenne que l\'amour parfait peut chasser le péché',
                'Vie séparée du monde (pas de tabac, alcool, jeux, maquillage, bijoux)',
                'Expérience émotionnelle intense (camp-meetings, témoignages, cris de joie)',
                'Saint-Esprit comme agent de sanctification'
            ],
            history: 'ORIGINE : John Wesley enseignait la "perfection chrétienne" (entire sanctification). Au XIXe siècle aux États-Unis, Phoebe Palmer (méthodiste de New York) popularise cette doctrine par ses "mardis pour la promotion de la sainteté" (années 1830-70). Elle simplifie l\'enseignement : on peut recevoir la sanctification par un acte de foi, MAINTENANT. Les CAMP-MEETINGS (Vineland 1867, National Holiness Association) propagent cette expérience. CONSÉQUENCE : les méthodistes traditionnels rejettent ce mouvement, qui fonde ses propres Églises : Armée du Salut (1865), Église du Nazaréen (1908), Church of God (Anderson), Églises wesleyennes. Le mouvement de sainteté est le TERREAU DIRECT du pentecôtisme : Parham et Seymour viennent tous deux de ce milieu. La différence : les pentecôtistes ajoutent le parler en langues comme signe de la "troisième bénédiction" (baptême de l\'Esprit).'
        },
        'pre-reform': {
            label: 'Pré-Réforme',
            icon: 'fa-seedling',
            color: '#8B4513',
            birth: 'XIIe-XVe siècle',
            founder: 'Pierre Valdo, John Wycliffe, Jan Hus',
            doctrines: [
                'Autorité de l\'Écriture sur la Tradition',
                'Critique de la richesse et corruption du clergé',
                'Prédication en langue vulgaire',
                'Communion des laïcs sous les deux espèces',
                'Rejet des indulgences'
            ],
            history: 'Mouvements de réforme avant 1517 : Vaudois (1170), Lollards de Wycliffe (1380), Hussites de Jan Hus (1415). Persécutés comme hérétiques mais préparant le terrain pour Luther. Les Vaudois rejoignent officiellement la Réforme en 1532.'
        },
        'major': {
            label: 'Événement Majeur',
            icon: 'fa-star',
            color: '#c9a227',
            birth: null,
            founder: null,
            doctrines: null,
            history: null
        }
    },

    events: [
        // ==================== PRÉ-RÉFORME ====================
        {
            id: 'p1',
            year: "1173",
            date: "vers 1173",
            title: "Mouvement Vaudois",
            summary: "Pierre Valdo commence à prêcher la pauvreté et l'Évangile en langue vulgaire à Lyon.",
            description: "Pierre Valdo, riche marchand lyonnais, se dépouille de ses biens pour suivre le Christ. Il fait traduire les Évangiles et prêche la pauvreté. Excommuniés, les Vaudois survivront dans les Alpes et rejoindront plus tard la Réforme (1532).",
            period: "pre-reformation",
            type: "pre-reform",
            icon: "fa-person-hiking",
            details: [
                "Prédication itinérante",
                "Rejet de la richesse de l'Église",
                "Adhésion à la Réforme au synode de Chanforan (1532)"
            ]
        },
        {
            id: 'p2',
            year: "1380",
            date: "vers 1380",
            title: "John Wycliffe",
            summary: "Le 'Matin de la Réforme', traduit la Bible en anglais.",
            description: "Théologien d'Oxford, Wycliffe critique la richesse du clergé, la papauté et la transsubstantiation. Il initie la première traduction complète de la Bible en anglais. Ses disciples, les Lollards, seront persécutés.",
            period: "pre-reformation",
            type: "pre-reform",
            icon: "fa-book",
            details: [
                "Autorité suprême de l'Écriture",
                "Critique des indulgences",
                "Condamné post-mortem au concile de Constance"
            ]
        },
        {
            id: 'p3',
            year: "1415",
            date: "6 juillet 1415",
            title: "Martyre de Jan Hus",
            summary: "Le réformateur tchèque est brûlé vif au concile de Constance.",
            description: "Influencé par Wycliffe, Jan Hus prêche à Prague pour une réforme de l'Église. Convoqué au concile de Constance avec un sauf-conduit impérial, il est néanmoins arrêté, condamné comme hérétique et brûlé vif. Sa mort déclenche les guerres hussites.",
            period: "pre-reformation",
            type: "pre-reform",
            icon: "fa-fire",
            quote: "« Aujourd'hui vous faites rôtir une oie, mais de ses cendres naîtra un cygne. » — Légende populaire, non attestée historiquement. Popularisée par Luther au XVIe siècle.",
            details: [
                "Prédication en langue tchèque",
                "Communion sous les deux espèces",
                "Héros national tchèque"
            ]
        },

        // ==================== LUTHÉRISME (1517+) ====================
        {
            id: 'p4',
            year: "1517",
            date: "31 octobre 1517",
            title: "Les 95 Thèses de Luther",
            summary: "Martin Luther affiche ses thèses contre les indulgences à Wittenberg. Début symbolique de la Réforme.",
            description: "Le moine augustin Martin Luther critique le commerce des indulgences qui finançait la basilique Saint-Pierre. Il appelle à un débat théologique. Grâce à l'imprimerie, ses thèses se diffusent dans toute l'Europe, déclenchant une remise en question radicale.",
            period: "reformation",
            type: "lutheran",
            icon: "fa-scroll",
            details: [
                "Critique du salut par les œuvres financières",
                "« Le juste vivra par la foi » (Rm 1,17)",
                "Début de la Réforme protestante"
            ]
        },
        {
            id: 'p5',
            year: "1521",
            date: "avril 1521",
            title: "Diète de Worms",
            summary: "Luther refuse de se rétracter devant l'empereur Charles Quint.",
            description: "Sommé de renier ses écrits, Luther déclare : « Ma conscience est captive de la Parole de Dieu. Je ne peux ni ne veux rien rétracter... Que Dieu me soit en aide. Amen. » Il est mis au ban de l'Empire mais caché par Frédéric le Sage à la Wartburg.",
            period: "reformation",
            type: "lutheran",
            icon: "fa-gavel",
            quote: "« Hier stehe ich, ich kann nicht anders. Gott helff mir. Amen. » — Formulation de 1546 ; la substance est historique, les mots exacts probablement légendaires.",
            details: [
                "Rupture définitive avec Rome",
                "Traduction du Nouveau Testament en allemand à la Wartburg",
                "Naissance de l'allemand littéraire moderne"
            ]
        },
        {
            id: 'p6',
            year: "1530",
            date: "1530",
            title: "Confession d'Augsbourg",
            summary: "Présentation de la profession de foi luthérienne rédigée par Melanchthon.",
            description: "Texte fondateur du luthérisme présenté à Charles Quint pour tenter une réconciliation (échouée). Il définit la doctrine luthérienne de manière modérée mais ferme sur la justification par la foi.",
            period: "reformation",
            type: "lutheran",
            icon: "fa-file-signature",
            details: [
                "Rédigée par Philippe Melanchthon",
                "Document doctrinal majeur du luthérisme",
                "Définit les sacrements (Baptême et Cène)"
            ]
        },

        // ==================== RÉFORMÉS (ZWINGLI / CALVIN) ====================
        {
            id: 'p7',
            year: "1523",
            date: "1523",
            title: "L'Affaire des Saucisses (Zurich)",
            summary: "Zwingli rompt le jeûne du Carême, débutant la Réforme suisse.",
            description: "Ulrich Zwingli défend des imprimeurs ayant mangé des saucisses pendant le Carême, affirmant que la Bible ne commande pas de telles règles. Zurich adopte la Réforme : messe abolie, images retirées, prédication centrale.",
            period: "reformation",
            type: "reformed",
            icon: "fa-drumstick-bite",
            details: [
                "« Sola Scriptura » appliqué radicalement",
                "Rejet des images et de la musique instrumentale",
                "Dispute de Marbourg (1529) : désaccord avec Luther sur la Cène"
            ]
        },
        {
            id: 'p8',
            year: "1536",
            date: "1536",
            title: "Institution de la Religion Chrétienne",
            summary: "Jean Calvin publie son œuvre majeure, somme théologique du protestantisme réformé.",
            description: "Jeune juriste français exilé, Calvin publie à Bâle la première version de son « Institution ». Il s'installe ensuite à Genève, qu'il transforme en « Rome protestante ». Sa théologie insiste sur la souveraineté de Dieu et la sanctification.",
            period: "reformation",
            type: "reformed",
            icon: "fa-book-journal-whills",
            details: [
                "Systématisation de la théologie réformée",
                "Organisation de l'Église (Pasteurs, Docteurs, Anciens, Diacres)",
                "Rayonnement international de Genève"
            ]
        },
        {
            id: 'p9',
            year: "1559",
            date: "1559",
            title: "Synode national de Paris",
            summary: "Première confession de foi et discipline des Églises réformées de France (Huguenots).",
            description: "Les églises réformées de France s'organisent clandestinement. Elles adoptent la Confession de foi de La Rochelle.",
            period: "reformation",
            type: "reformed",
            icon: "fa-users-line",
            details: [
                "Organisation presbytérienne-synodale",
                "Église de la Croix' (persécutée)"
            ]
        },

        // ==================== ANGLICANISME ====================
        {
            id: 'p10',
            year: "1534",
            date: "1534",
            title: "Acte de Suprématie",
            summary: "Henri VIII se proclame chef suprême de l'Église d'Angleterre, rupture avec Rome.",
            description: "Pour obtenir l'annulation de son mariage avec Catherine d'Aragon, Henri VIII sépare l'Église d'Angleterre de Rome. C'est d'abord un schisme politique, la théologie restant catholique (au début).",
            period: "reformation",
            type: "anglican",
            icon: "fa-crown",
            details: [
                "Le roi devient chef de l'Église",
                "Dissolution des monastères",
                "Martyre de Thomas More"
            ]
        },
        {
            id: 'p11',
            year: "1549",
            date: "1549",
            title: "Book of Common Prayer",
            summary: "Thomas Cranmer publie le livre de liturgie qui définit l'anglicanisme.",
            description: "Sous Édouard VI, l'Église d'Angleterre devient protestante théologiquement tout en gardant une structure épiscopale et une liturgie traditionnelle. Le 'Livre de la Prière Commune' unifie le culte en anglais.",
            period: "reformation",
            type: "anglican",
            icon: "fa-book-open",
            details: [
                "Liturgie en langue anglaise",
                "Synthèse réformée/catholique (Via Media)",
                "Toujours utilisé (avec révisions) aujourd'hui"
            ]
        },

        // ==================== ANABAPTISME ====================
        {
            id: 'p12',
            year: "1525",
            date: "janvier 1525",
            title: "Naissance de l'Anabaptisme",
            summary: "Premiers rebaptêmes d'adultes à Zurich, rupture radicale.",
            description: "Conrad Grebel et ses amis, trouvant la réforme de Zwingli trop lente, rejettent le baptême des enfants. Ils se baptisent mutuellement (d'où le nom 'anabaptiste' : rebaptiseur). Ils prônent une Église de professants, séparée de l'État, et le pacifisme.",
            period: "reformation",
            type: "anabaptist",
            icon: "fa-water",
            details: [
                "Baptême des croyants uniquement",
                "Séparation Église/État",
                "Non-violence absolue",
                "Violemment persécutés par catholiques et protestants"
            ]
        },

        // ==================== XVIIe - XVIIIe (ORTHODOXIE / PIÉTISME / RÉVEILS) ====================
        {
            id: 'p13',
            year: "1609",
            date: "1609",
            title: "Naissance du Baptisme",
            summary: "John Smyth et Thomas Helwys fondent la première église baptiste à Amsterdam.",
            description: "Issus du puritanisme anglais séparatiste, influencés par les mennonites, ils adoptent le baptême des croyants. De retour en Angleterre, Helwys publie un vibrant plaidoyer pour la liberté de conscience universelle.",
            period: "orthodoxy-pietism",
            type: "baptist",
            icon: "fa-hands-holding-water",
            details: [
                "Baptême par immersion des croyants",
                "Autonomie de l'église locale",
                "Liberté religieuse pour tous (même athées/musulmans)"
            ]
        },
        {
            id: 'p14',
            year: "1675",
            date: "1675",
            title: "Pia Desideria",
            summary: "Spener publie le manifeste du Piétisme allemand.",
            description: "Face à une orthodoxie luthérienne jugée sèche, Philipp Jakob Spener propose des 'collegia pietatis' (groupes de maison), l'étude biblique personnelle et une foi du cœur. Le piétisme revitalise le protestantisme.",
            period: "orthodoxy-pietism",
            type: "lutheran",
            icon: "fa-heart",
            details: [
                "Religion du cœur",
                "Sacerdoce universel vécu",
                "Missions mondiales (Frères Moraves, Zinzendorf)"
            ]
        },
        {
            id: 'p15',
            year: "1738",
            date: "24 mai 1738",
            title: "Conversion de John Wesley",
            summary: "Expérience du 'cœur étrangement réchauffé', début du Réveil méthodiste.",
            description: "Prêtre anglican zélé mais sans paix intérieure, Wesley vit une conversion en écoutant la préface de Luther aux Romains. Avec son frère Charles et George Whitefield, il prêche en plein air aux foules ouvrières. Le méthodisme est né.",
            period: "awakenings",
            type: "methodist",
            icon: "fa-fire-flame-simple",
            quote: "« I felt my heart strangely warmed. I felt I did trust in Christ, Christ alone, for salvation. » — Journal de John Wesley, 24 mai 1738.",
            details: [
                "Prédication itinérante de masse",
                "Organisation en 'classes' méthodistes",
                "Sanctification et perfection chrétienne",
                "Lutte contre l'esclavage"
            ]
        },

        // ==================== XIXe - XXe (MODERNE / PENTECÔTISME) ====================
        {
            id: 'p16',
            year: "1906",
            date: "1906-1915",
            title: "Réveil d'Azusa Street",
            summary: "Naissance du Pentecôtisme moderne à Los Angeles.",
            description: "Sous la conduite de William J. Seymour, pasteur afro-américain, un réveil éclate caractérisé par le 'bapême dans le Saint-Esprit' avec le parler en langues (glossolalie). Ce mouvement interracial donne naissance au pentecôtisme qui compte aujourd'hui des centaines de millions de fidèles.",
            period: "modern-protestantism",
            type: "pentecostal",
            icon: "fa-fire",
            details: [
                "Baptême de l'Esprit",
                "Gifts spirituels (guérison, prophétie)",
                "Croissance mondiale fulgurante"
            ]
        },
        {
            id: 'p17',
            year: "1934",
            date: "1934",
            title: "Déclaration de Barmen",
            summary: "L'Église Confessante s'oppose à l'idéologie nazie en Allemagne.",
            description: "Face aux 'Chrétiens allemands' ralliés à Hitler, Karl Barth et d'autres rédigent cette déclaration. Elle affirme que l'Église n'écoute que la Parole de Dieu (Christ), rejetant toute autre autorité ou Führer. Résistance spirituelle au nazisme.",
            period: "modern-protestantism",
            type: "major",
            icon: "fa-shield-halved",
            details: [
                "Résistance au nazisme",
                "Karl Barth, Dietrich Bonhoeffer",
                "Christ seule tête de l'Église"
            ]
        },
        {
            id: 'p18',
            year: "1968",
            date: "1968",
            title: "Martin Luther King Jr.",
            summary: "Assassinat du pasteur baptiste, figure des Droits Civiques.",
            description: "Pasteur baptiste infusant sa lutte non-violente de références bibliques, MLK incarne l'engagement social du protestantisme. Son rêve d'égalité est enraciné dans l'Évangile.",
            period: "modern-protestantism",
            type: "baptist",
            icon: "fa-hand-fist",
            details: [
                "Lutte pour les droits civiques",
                "Non-violence évangélique",
                "Prix Nobel de la Paix"
            ]
        },

        // ==================== ADVENTISME ====================
        {
            id: 'p19',
            year: "1844",
            date: "22 octobre 1844",
            title: "Le Grand Désappointement",
            summary: "La date prédite pour le retour du Christ par William Miller passe sans événement.",
            description: "William Miller, prédicateur baptiste, avait prédit le retour du Christ pour le 22 octobre 1844 basé sur Daniel 8:14. Des milliers de croyants avaient tout vendu et attendu. L'échec ébranle le mouvement mais certains réinterprètent la prophétie comme un événement céleste (jugement investigatif).",
            period: "awakenings",
            type: "adventist",
            icon: "fa-calendar-xmark",
            details: [
                "William Miller et le mouvement millérite",
                "Basé sur Daniel 8:14 et les 2300 jours",
                "Origine du mouvement adventiste",
                "Réinterprétation : début du 'jugement investigatif' au ciel"
            ]
        },
        {
            id: 'p20',
            year: "1863",
            date: "21 mai 1863",
            title: "Fondation de l'Église Adventiste du 7e Jour",
            summary: "Organisation officielle de l'Église Adventiste avec Ellen G. White comme prophétesse.",
            description: "Après le Grand Désappointement, les adventistes sabbatistes (observant le samedi) s'organisent officiellement. Ellen G. White (1827-1915), considérée comme ayant le don prophétique, guide le mouvement. L'Église insiste sur le sabbat, la santé, et le retour imminent du Christ.",
            period: "awakenings",
            type: "adventist",
            icon: "fa-clock",
            details: [
                "Ellen G. White : don prophétique",
                "Sabbat du 7e jour (samedi)",
                "Régime sanitaire et végétarisme",
                "22 millions de membres aujourd'hui"
            ]
        },

        // ==================== MORMONISME ====================
        {
            id: 'p21',
            year: "1830",
            date: "6 avril 1830",
            title: "Fondation de l'Église de Jésus-Christ des Saints des Derniers Jours",
            summary: "Joseph Smith organise officiellement l'Église mormone à Fayette, New York.",
            description: "Joseph Smith Jr. affirme avoir traduit le Livre de Mormon à partir de plaques d'or révélées par l'ange Moroni en 1827. L'Église est organisée avec six membres initiaux. Smith sera tué par une foule en 1844, et Brigham Young mènera les fidèles vers l'Utah.",
            period: "awakenings",
            type: "mormon",
            icon: "fa-landmark-dome",
            quote: "« Je n'ai pas l'intention de placer le Christ de côté ni de me mettre à sa place, mais c'est Dieu qui m'a envoyé ici. » — Joseph Smith",
            details: [
                "Livre de Mormon publié le 26 mars 1830",
                "Révélations continues de Joseph Smith",
                "Persécutions et migration vers l'Ouest",
                "Polygamie pratiquée puis abandonnée (1890)"
            ]
        },

        // ==================== TÉMOINS DE JÉHOVAH ====================
        {
            id: 'p22',
            year: "1879",
            date: "juillet 1879",
            title: "Première publication de La Tour de Garde",
            summary: "Charles T. Russell lance le magazine qui deviendra l'organe principal des Témoins de Jéhovah.",
            description: "Charles Taze Russell, ancien presbytérien influencé par les adventistes, fonde le mouvement des 'Étudiants de la Bible'. Sa revue La Tour de Garde de Sion (Zion's Watch Tower) diffuse ses interprétations bibliques, notamment sur le retour invisible du Christ (1874/1914).",
            period: "awakenings",
            type: "jehovah",
            icon: "fa-tower-observation",
            details: [
                "Russell prédit le retour du Christ pour 1874, puis 1914",
                "Rejet de la Trinité et de l'enfer éternel",
                "Joseph Rutherford adopte le nom 'Témoins de Jéhovah' en 1931",
                "8,5 millions de membres actifs aujourd'hui"
            ]
        },

        // ==================== MOUVEMENT DE SAINTETÉ ====================
        {
            id: 'p23',
            year: "1867",
            date: "1867",
            title: "Camp Meeting de Vineland",
            summary: "Début du Mouvement de Sainteté organisé aux États-Unis.",
            description: "Le camp meeting de Vineland (New Jersey) marque l'organisation du mouvement de sainteté, issu du méthodisme. On y prêche la 'seconde bénédiction' de sanctification entière. Ce mouvement donnera naissance à l'Armée du Salut et prépare le terrain pour le Pentecôtisme.",
            period: "awakenings",
            type: "holiness",
            icon: "fa-hand-sparkles",
            details: [
                "Phoebe Palmer, figure majeure",
                "Seconde bénédiction : sanctification entière",
                "Origine de l'Armée du Salut (1865)",
                "Prépare le terrain pour le Pentecôtisme"
            ]
        },

        // ==================== BRANHAMISME ====================
        {
            id: 'p24',
            year: "1946",
            date: "mai 1946",
            title: "Vision de William Branham",
            summary: "Branham reçoit une 'commission' d'un ange, début du réveil de guérison.",
            description: "William Marrion Branham, prédicateur baptiste de l'Indiana, affirme avoir reçu la visite d'un ange lui donnant le don de guérison et un 'signe dans sa main'. Il lance le réveil de guérison (1947) et développe des doctrines de plus en plus hétérodoxes (anti-trinitaires, semence du serpent).",
            period: "modern-protestantism",
            type: "branham",
            icon: "fa-dove",
            details: [
                "Réveil de guérison (Voice of Healing, 1947)",
                "Enseignements anti-trinitaires (Jésus seul)",
                "Doctrine de la semence du serpent",
                "1-2 millions d'adeptes après sa mort (1965)"
            ]
        },

        // ==================== ÉVANGÉLIQUES ====================
        {
            id: 'p25',
            year: "1949",
            date: "1949",
            title: "Croisade de Billy Graham à Los Angeles",
            summary: "Le jeune évangéliste devient une célébrité nationale, symbole de l'évangélisme moderne.",
            description: "La 'Canvas Cathedral' de Los Angeles propulse Billy Graham (1918-2018) comme le visage de l'évangélisme américain. Il prêchera à plus de 200 millions de personnes en personne et des milliards via les médias. Il incarne l'évangélisme mainstream, distinct du fondamentalisme fermé.",
            period: "modern-protestantism",
            type: "evangelical",
            icon: "fa-bible",
            details: [
                "Plus de 400 croisades dans 185 pays",
                "Conseiller spirituel de présidents américains",
                "Pionnier de l'usage des médias",
                "Mouvement de Lausanne (1974)"
            ]
        },

        // ==================== ARMÉE DU SALUT ====================
        {
            id: 'p26',
            year: "1865",
            date: "2 juillet 1865",
            title: "Fondation de l'Armée du Salut",
            summary: "William et Catherine Booth fondent la 'Christian Mission' à Londres Est, qui devient l'Armée du Salut.",
            description: "William Booth, pasteur méthodiste, et sa femme Catherine fondent la 'Christian Mission' dans les quartiers pauvres de l'Est londonien. En 1878, le mouvement est réorganisé sur un modèle militaire : uniformes, grades, drapeaux. L'Armée du Salut combine évangélisation et action sociale (soupes populaires, refuges).",
            period: "awakenings",
            type: "holiness",
            icon: "fa-hand-holding-heart",
            quote: "« Pendant que les femmes pleurent comme elles pleurent maintenant, je me battrai ; tant que les petits enfants auront faim, je me battrai ; tant qu'il y aura un ivrogne, je me battrai. » — William Booth",
            details: [
                "William Booth (1829-1912) : fondateur et premier 'Général'",
                "Catherine Booth : co-fondatrice, prêche l'égalité des sexes dans le ministère",
                "Modèle militaire adopté en 1878",
                "Action sociale : soupes populaires, refuges, aide aux alcooliques",
                "Présente dans 130+ pays, 1,5 million de membres"
            ]
        },

        // ==================== ÉGLISE DU NAZARÉEN ====================
        {
            id: 'p27',
            year: "1908",
            date: "octobre 1908",
            title: "Fondation de l'Église du Nazaréen",
            summary: "Fusion de plusieurs groupes de sainteté pour former une dénomination majeure.",
            description: "À Pilot Point, Texas, plusieurs groupes de sainteté fusionnent pour former l'Église du Nazaréen. Cette dénomination préserve l'enseignement wesleyen de la sanctification entière (seconde bénédiction) tout en rejetant les excès pentecôtistes (glossolalie). Elle devient l'une des plus grandes Églises de sainteté.",
            period: "modern-protestantism",
            type: "holiness",
            icon: "fa-church",
            details: [
                "Fusion de : Church of the Nazarene, Pentecostal Church of the Nazarene, Holiness Church of Christ",
                "Phineas Bresee : figure fondatrice",
                "Sanctification entière sans glossolalie",
                "2,5 millions de membres dans 160+ pays aujourd'hui"
            ]
        },

        // ==================== RESTAURATIONNISME - Stone-Campbell ====================
        {
            id: 'p28',
            year: "1832",
            date: "1832",
            title: "Mouvement de Restauration Stone-Campbell",
            summary: "Fusion des mouvements de Barton Stone et Alexander Campbell : 'Disciples du Christ'.",
            description: "En 1832, deux mouvements américains indépendants fusionnent : les 'Christians' de Barton Stone (depuis 1804) et les 'Disciples' d'Alexander Campbell (depuis 1809). Leur but : restaurer le christianisme primitif en rejetant tous les credos et traditions humaines. Slogan : 'Pas de credo sauf Christ, pas de livre sauf la Bible'.",
            period: "awakenings",
            type: "restorationist",
            icon: "fa-rotate-right",
            details: [
                "Rejet de tous les credos historiques (Nicée, etc.)",
                "Baptême des croyants par immersion",
                "Communion chaque dimanche",
                "Donne naissance à 3 branches : Églises du Christ, Disciples du Christ, Églises chrétiennes",
                "Environ 5 millions de membres"
            ]
        },

        // ==================== ÉVANGÉLIQUES - Premiers Réveils ====================
        {
            id: 'p29',
            year: "1734",
            date: "1734-1735",
            title: "Réveil de Northampton (Jonathan Edwards)",
            summary: "Premier Grand Réveil : Jonathan Edwards prêche et des centaines se convertissent.",
            description: "À Northampton, Massachusetts, le pasteur congrégationaliste Jonathan Edwards prêche sur la justification par la foi. Un réveil éclate : émotions intenses, confessions publiques, conversions en masse. Son célèbre sermon 'Sinners in the Hands of an Angry God' (1741) illustre la prédication de terreur et de grâce de cette époque.",
            period: "awakenings",
            type: "evangelical",
            icon: "fa-church",
            quote: "« Le Dieu qui vous tient au-dessus de l'abîme de l'enfer, comme on tient une araignée ou un insecte répugnant au-dessus du feu, vous abhorre. » — Jonathan Edwards, 'Sinners in the Hands of an Angry God', 1741",
            details: [
                "Premier Grand Réveil (1730-1750)",
                "Théologie calviniste + expérience émotionnelle",
                "George Whitefield prêche dans les colonies",
                "Fondations des USA : sens d'élection divine"
            ]
        },

        // ==================== PENTECÔTISME - Évènement clé ====================
        {
            id: 'p30',
            year: "1901",
            date: "1er janvier 1901",
            title: "Agnes Ozman parle en langues (Topeka)",
            summary: "Première réception documentée du 'parler en langues' dans le contexte pentecôtiste.",
            description: "À l'école biblique de Charles Parham à Topeka, Kansas, Agnes Ozman est la première à recevoir le 'baptême du Saint-Esprit' accompagné de glossolalie. Parham avait demandé à ses étudiants de chercher dans la Bible quel était le SIGNE du baptême de l'Esprit. Leur conclusion : le parler en langues (Actes 2). Cette date est considérée comme la naissance du pentecôtisme.",
            period: "modern-protestantism",
            type: "pentecostal",
            icon: "fa-comment-dots",
            details: [
                "Bethel Bible School de Charles Parham",
                "Agnes Ozman aurait parlé en 'chinois' pendant 3 jours",
                "Naissance du mouvement pentecôtiste",
                "Parham formera William Seymour (Azusa Street)"
            ]
        },

        // ==================== ÉVANGÉLIQUES - Mouvement de Lausanne ====================
        {
            id: 'p31',
            year: "1974",
            date: "juillet 1974",
            title: "Congrès de Lausanne",
            summary: "Billy Graham réunit 2 700 leaders évangéliques du monde entier, naissance du mouvement de Lausanne.",
            description: "Le Congrès international sur l'évangélisation mondiale à Lausanne, Suisse, réunit des évangéliques de 150 pays. La 'Déclaration de Lausanne', rédigée par John Stott, définit l'identité évangélique mondiale : autorité biblique, évangélisation, responsabilité sociale. C'est l'acte de naissance de l'évangélisme comme mouvement mondial unifié.",
            period: "modern-protestantism",
            type: "evangelical",
            icon: "fa-globe",
            details: [
                "2 700 participants de 150 pays",
                "Déclaration de Lausanne : charte évangélique mondiale",
                "John Stott : rédacteur principal",
                "Équilibre évangélisation + action sociale"
            ]
        },

        // ==================== MENNONITES ====================
        {
            id: 'p32',
            year: "1536",
            date: "janvier 1536",
            title: "Conversion de Menno Simons",
            summary: "Premier prêtre catholique quitte l'Église pour rejoindre les anabaptistes pacifistes.",
            description: "Menno Simons, prêtre catholique frison (Pays-Bas), est bouleversé par l'exécution d'anabaptistes et par le désastre du Royaume de Münster (1534-35, anabaptistes violents). Il quitte l'Église catholique en 1536 et rejoint les anabaptistes pacifistes. Il passe le reste de sa vie à organiser les communautés dispersées et persécutées, leur donnant une théologie cohérente.",
            period: "reformation",
            type: "mennonite",
            icon: "fa-peace",
            details: [
                "Ancien prêtre catholique ordonné en 1524",
                "Rejet du Royaume de Münster (violence anabaptiste)",
                "Organisation des survivants anabaptistes pacifistes",
                "Ses disciples prennent le nom de 'Mennonites'"
            ]
        },
        {
            id: 'p33',
            year: "1693",
            date: "1693",
            title: "Schisme Amish",
            summary: "Jakob Ammann se sépare des Mennonites pour une discipline plus stricte.",
            description: "Jakob Ammann, ancien mennonite alsacien, estime que la discipline communautaire n'est pas assez stricte. Il insiste sur le Meidung (évitement strict des excommuniés, même dans la famille) et la simplicité vestimentaire. Ceux qui le suivent forment les 'Amish'. Ils émigrent en Amérique au XVIIIe siècle et maintiennent un mode de vie traditionnel jusqu'aujourd'hui.",
            period: "orthodoxy-pietism",
            type: "mennonite",
            icon: "fa-horse",
            details: [
                "Meidung : évitement strict des excommuniés",
                "Simplicité vestimentaire (pas de boutons, couleurs sombres)",
                "Émigration en Pennsylvanie (1730s-1750s)",
                "Environ 350 000 Amish aujourd'hui (USA)"
            ]
        },

        // ==================== ARMINIANISME ====================
        {
            id: 'p34',
            year: "1610",
            date: "1610",
            title: "Les Cinq Articles de la Remontrance",
            summary: "Les disciples d'Arminius publient leur manifeste contre le calvinisme strict.",
            description: "Un an après la mort de Jacobus Arminius, 44 pasteurs néerlandais publient les 'Cinq Articles de la Remontrance', contestant les 5 points du calvinisme strict. Ils affirment : l'élection conditionnelle (basée sur la prescience de la foi), l'expiation universelle, la grâce résistible, et la possibilité de perdre le salut. Ces 'Remontrants' seront condamnés au Synode de Dordt.",
            period: "reformation",
            type: "arminian",
            icon: "fa-scale-balanced",
            details: [
                "44 pasteurs signent la Remontrance",
                "Contre la double prédestination calviniste",
                "Libre arbitre + grâce = synergie",
                "Condamnés au Synode de Dordt (1618-1619)"
            ]
        },
        {
            id: 'p35',
            year: "1618",
            date: "1618-1619",
            title: "Synode de Dordt",
            summary: "Le calvinisme strict triomphe : les 5 points TULIP sont définis contre l'arminianisme.",
            description: "Le Synode de Dordrecht (Dordt), aux Pays-Bas, réunit des délégués réformés de toute l'Europe pour juger la controverse arminienne. Les arminiens sont condamnés comme hérétiques. Le synode définit les 5 points du calvinisme (qui deviendront le TULIP). Les pasteurs arminiens sont déposés, certains emprisonnés. Dordt marque le triomphe du calvinisme orthodoxe strict.",
            period: "orthodoxy-pietism",
            type: "reformed",
            icon: "fa-gavel",
            details: [
                "Délégués de 8 pays réformés",
                "Définition des 5 points calvinistes (TULIP)",
                "Condamnation de l'arminianisme",
                "Pasteurs remontrants déposés ou exilés"
            ]
        }
    ]
};
