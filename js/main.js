// =====================================================
// HISTOIRE DE L'ÉGLISE - SCRIPT PRINCIPAL
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.querySelector('.timeline');
    const modal = document.getElementById('eventModal');
    const modalClose = document.getElementById('modalClose');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const resultsCount = document.getElementById('resultsCount');
    const toggleFiltersBtn = document.getElementById('toggleFilters');
    const filtersNav = document.getElementById('filtersNav');
    const viewButtons = document.querySelectorAll('.view-btn');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    const periodFiltersContainer = document.getElementById('periodFilters');
    const typeFiltersContainer = document.getElementById('typeFilters');
    const legendContainer = document.getElementById('legendContainer');

    // État de l'application
    let currentData = churchHistory; // Par défaut
    let currentFilters = {
        period: 'all',
        type: 'all'
    };
    let currentSearchTerm = '';

    // =====================================================
    // GESTION DU CHANGEMENT DE VUE (Source de données)
    // =====================================================
    function switchView(source) {
        // Mettre à jour les boutons de vue
        viewButtons.forEach(btn => {
            if (btn.dataset.source === source) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Changer la source de données
        if (source === 'protestant') {
            currentData = protestantHistory;
        } else {
            currentData = churchHistory;
        }

        // Réinitialiser les filtres
        currentFilters = { period: 'all', type: 'all' };

        // Régénérer l'interface
        generateFilters();
        generateLegend();
        generateTimeline();
    }

    // Écouteurs pour les boutons de vue
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const source = btn.dataset.source;
            switchView(source);
        });
    });

    // =====================================================
    // GÉNÉRATION DYNAMIQUE DES FILTRES & LÉGENDE
    // =====================================================
    function generateFilters() {
        // 1. Filtres par Période
        periodFiltersContainer.innerHTML = '';

        // Bouton "Toutes"
        const allPeriodsBtn = document.createElement('button');
        allPeriodsBtn.className = 'filter-btn period-btn active';
        allPeriodsBtn.dataset.period = 'all';
        allPeriodsBtn.textContent = 'Toutes';
        allPeriodsBtn.addEventListener('click', () => setPeriodFilter('all'));
        periodFiltersContainer.appendChild(allPeriodsBtn);

        // Autres périodes
        currentData.periods.forEach(period => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn period-btn';
            btn.dataset.period = period.id;
            btn.textContent = `${period.name} (${period.years.replace(' - ', '-')})`;
            btn.addEventListener('click', () => setPeriodFilter(period.id));
            periodFiltersContainer.appendChild(btn);
        });

        // 2. Filtres par Type
        typeFiltersContainer.innerHTML = '';

        // Bouton "Tous"
        const allTypesBtn = document.createElement('button');
        allTypesBtn.className = 'filter-btn type-btn active';
        allTypesBtn.dataset.type = 'all';
        allTypesBtn.innerHTML = '<i class="fas fa-globe"></i> Tous';
        allTypesBtn.addEventListener('click', () => setTypeFilter('all'));
        typeFiltersContainer.appendChild(allTypesBtn);

        // Générer les types disponibles
        // Si currentData a une propriété 'types' (comme protestantHistory), on l'utilise
        // Sinon, on déduit les types des événements ou on utilise une liste par défaut (churchHistory)

        let typesToDisplay = [];

        if (currentData.types) {
            // Convertir l'objet types en tableau pour itération
            typesToDisplay = Object.entries(currentData.types).map(([key, value]) => ({
                id: key,
                ...value
            }));
        } else {
            // Fallback pour churchHistory (hardcodé pour conserver l'ordre et les styles spécifiques)
            typesToDisplay = [
                { id: 'major', label: 'Événements majeurs', icon: 'fa-star', color: '#c9a227' },
                { id: 'council', label: 'Conciles', icon: 'fa-landmark', color: '#1e3a5f' },
                { id: 'apostle', label: 'Apôtres', icon: 'fa-cross', color: '#8B0000' },
                { id: 'father', label: 'Pères de l\'Église', icon: 'fa-scroll', color: '#4a6741' },
                { id: 'doctor', label: 'Docteurs de l\'Église', icon: 'fa-book', color: '#704214' },
                { id: 'saint', label: 'Saints', icon: 'fa-pray', color: '#2d5a4a' },
                { id: 'heresy', label: 'Hérésies', icon: 'fa-exclamation-triangle', color: '#8B0000' },
                { id: 'schism', label: 'Schismes', icon: 'fa-divide', color: '#6b2d2d' },
                { id: 'movement', label: 'Ordres & Mouvements', icon: 'fa-users', color: '#4a3a6b' },
                { id: 'community', label: 'Communautés', icon: 'fa-church', color: '#5B3A8C' }
            ];
        }

        typesToDisplay.forEach(type => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn type-btn';
            btn.dataset.type = type.id;
            // Appliquer la couleur personnalisée via CSS variable
            btn.style.setProperty('--btn-color', type.color);
            btn.innerHTML = `<i class="fas ${type.icon}"></i> ${type.label}`;
            btn.addEventListener('click', () => setTypeFilter(type.id));
            typeFiltersContainer.appendChild(btn);
        });
    }

    function generateLegend() {
        legendContainer.innerHTML = '';

        let typesToDisplay = [];
        if (currentData.types) {
            typesToDisplay = Object.entries(currentData.types).map(([key, value]) => ({
                id: key,
                ...value
            }));
        } else {
            typesToDisplay = [
                { id: 'major', label: 'Majeurs', color: '#c9a227' },
                { id: 'council', label: 'Conciles', color: '#1e3a5f' },
                { id: 'apostle', label: 'Apôtres', color: '#8B0000' },
                { id: 'father', label: 'Pères', color: '#4a6741' },
                { id: 'doctor', label: 'Docteurs', color: '#704214' },
                { id: 'saint', label: 'Saints', color: '#2d5a4a' },
                { id: 'heresy', label: 'Hérésies', color: '#8B0000' },
                { id: 'schism', label: 'Schismes', color: '#6b2d2d' },
                { id: 'movement', label: 'Ordres', color: '#4a3a6b' },
                { id: 'community', label: 'Communautés', color: '#5B3A8C' }
            ];
        }

        typesToDisplay.forEach(type => {
            const item = document.createElement('div');
            item.className = 'legend-item';
            item.dataset.type = type.id;
            item.style.cursor = 'pointer';
            item.innerHTML = `
                <span class="legend-color" style="background: ${type.color};"></span>
                <span>${currentData.types ? type.label : (type.label || type.id)}</span>
            `;
            item.addEventListener('click', () => {
                setTypeFilter(type.id);
                // Scroll vers la timeline
                const timelineContainer = document.querySelector('.timeline-container');
                if (timelineContainer) {
                    timelineContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            legendContainer.appendChild(item);
        });
    }

    // Helpers pour changer les filtres
    function setPeriodFilter(periodId) {
        currentFilters.period = periodId;

        // Mettre à jour l'état visuel des boutons
        document.querySelectorAll('.period-btn').forEach(btn => {
            if (btn.dataset.period === periodId) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        applyFilters();
    }

    function setTypeFilter(typeId) {
        currentFilters.type = typeId;

        // Mettre à jour l'état visuel des boutons
        document.querySelectorAll('.type-btn').forEach(btn => {
            if (btn.dataset.type === typeId) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        applyFilters();
    }

    // =====================================================
    // GÉNÉRATION DE LA TIMELINE
    // =====================================================
    function generateTimeline() {
        timeline.innerHTML = '';
        let currentPeriod = null;
        let isLeft = true;

        // Trier les événements par année
        const sortedEvents = [...currentData.events].sort((a, b) => {
            // Extraction robuste de l'année (gestion de 'vers 30', '30-33', etc.)
            const getYear = (str) => {
                if (!str) return 0;
                // Enlever le tilde ~
                const clean = str.toString().replace('~', '').trim();
                // Prendre le premier nombre trouvé
                const match = clean.match(/-?\d+/);
                return match ? parseInt(match[0]) : 0;
            };

            const yearA = getYear(a.year);
            const yearB = getYear(b.year);

            if (yearA !== yearB) return yearA - yearB;
            return (a.id < b.id) ? -1 : 1; // Tri stable par ID si même année
        });

        sortedEvents.forEach((event, index) => {
            // Vérifier que l'événement appartient bien à une période définie
            // Si on change de période (ou au début)
            if (event.period !== currentPeriod) {
                currentPeriod = event.period;
                const periodData = currentData.periods.find(p => p.id === currentPeriod);
                if (periodData) {
                    const periodMarker = createPeriodMarker(periodData);
                    timeline.appendChild(periodMarker);
                }
                isLeft = true; // Reset alternance pour chaque nouvelle période
            }

            // Créer l'événement
            const eventElement = createEventElement(event, isLeft);
            timeline.appendChild(eventElement);

            // Alterner gauche/droite
            isLeft = !isLeft;
        });

        // Ajouter le clearfix à la fin
        const clearfix = document.createElement('div');
        clearfix.style.clear = 'both';
        timeline.appendChild(clearfix);

        // Initialiser les animations et mettre à jour le compteur
        initScrollAnimations();
        updateResultsCount();
    }

    // =====================================================
    // CRÉATION DES ÉLÉMENTS UI
    // =====================================================
    function createPeriodMarker(period) {
        const marker = document.createElement('div');
        marker.className = 'period-marker';
        marker.dataset.period = period.id;
        marker.innerHTML = `
            <h2>
                ${period.name}
                <span class="period-years">${period.years}</span>
            </h2>
        `;
        return marker;
    }

    // Mapping des types vers leurs labels et icônes
    const typeLabels = {
        'major': { label: 'Événement majeur', icon: 'fa-star' },
        'council': { label: 'Concile', icon: 'fa-landmark' },
        'apostle': { label: 'Apôtre', icon: 'fa-cross' },
        'father': { label: 'Père de l\'Église', icon: 'fa-scroll' },
        'doctor': { label: 'Docteur', icon: 'fa-book' },
        'saint': { label: 'Saint', icon: 'fa-pray' },
        'heresy': { label: 'Hérésie', icon: 'fa-exclamation-triangle' },
        'schism': { label: 'Schisme', icon: 'fa-divide' },
        'movement': { label: 'Ordre/Mouvement', icon: 'fa-users' },
        'community': { label: 'Communauté', icon: 'fa-church' }
    };

    function createEventElement(event, isLeft) {
        const eventDiv = document.createElement('div');
        eventDiv.className = `event ${isLeft ? 'left' : 'right'}`;
        eventDiv.dataset.type = event.type;
        eventDiv.dataset.period = event.period;
        eventDiv.dataset.id = event.id;

        // Appliquer la couleur spécifique si disponible (pour protestantHistory)
        if (currentData.types && currentData.types[event.type]) {
            const typeInfo = currentData.types[event.type];
            eventDiv.style.setProperty('--event-color', typeInfo.color);
            // On ajoute une classe spéciale pour appliquer ces variables css inline
            eventDiv.classList.add('custom-color-event');
        }

        // Créer la citation courte si disponible
        let quoteHtml = '';
        if (event.quote) {
            let shortQuote = event.quote.replace(/^«\s*|\s*»$/g, '');
            if (shortQuote.length > 80) {
                shortQuote = shortQuote.substring(0, 77) + '...';
            }
            quoteHtml = `<p class="event-quote">${shortQuote}</p>`;
        }

        // Créer le tag de type
        let typeTag = '';
        if (currentData.types && currentData.types[event.type]) {
            // Pour protestantHistory
            const typeInfo = currentData.types[event.type];
            typeTag = `<span class="event-tag" data-type="${event.type}"><i class="fas ${typeInfo.icon}"></i> ${typeInfo.label}</span>`;
        } else if (typeLabels[event.type]) {
            // Pour churchHistory
            const typeInfo = typeLabels[event.type];
            typeTag = `<span class="event-tag" data-type="${event.type}"><i class="fas ${typeInfo.icon}"></i> ${typeInfo.label}</span>`;
        }

        eventDiv.innerHTML = `
            <i class="fas ${event.icon} event-icon"></i>
            <div class="event-header">
                <span class="event-date">${event.date}</span>
                ${typeTag}
            </div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-summary">${event.summary}</p>
            ${quoteHtml}
        `;

        eventDiv.addEventListener('click', () => openModal(event));

        return eventDiv;
    }

    // =====================================================
    // MODAL
    // =====================================================
    function openModal(event) {
        const modalDate = modal.querySelector('.modal-date');
        const modalTitle = modal.querySelector('.modal-title');

        modalDate.textContent = event.date;
        modalTitle.textContent = event.title;

        // Récupérer les infos du type
        let typeLabel = event.type;
        let typeClass = event.type;

        if (currentData.types && currentData.types[event.type]) {
            typeLabel = currentData.types[event.type].label;
        } else {
            // Fallback labels hardcodés (pour churchHistory)
            const fallbackLabels = {
                'major': 'Événement majeur',
                'council': 'Concile',
                'schism': 'Schisme',
                'saint': 'Saint',
                'movement': 'Ordre/Mouvement',
                'apostle': 'Apôtre',
                'father': 'Père de l\'Église',
                'doctor': 'Docteur de l\'Église',
                'community': 'Communauté Ecclésiale',
                'heresy': 'Hérésie'
            };
            typeLabel = fallbackLabels[event.type] || event.type;
        }

        // Générer le badge de type
        const typeBadge = `<span class="modal-type-badge ${typeClass}">${typeLabel}</span>`;

        // Générer la citation si disponible
        let quoteHtml = '';
        if (event.quote) {
            quoteHtml = `
                <div class="modal-quote">
                    <p>${event.quote}</p>
                </div>
            `;
        }

        // Générer les canons (spécifique Conciles)
        let canonsHtml = '';
        if (event.canons && event.canons.length > 0) {
            canonsHtml = `
                <div class="modal-canons">
                    <h4><i class="fas fa-scroll"></i> Canons et Décrets Principaux</h4>
                    <ul>
                        ${event.canons.map(canon => {
                if (canon.startsWith('===')) {
                    const title = canon.replace(/===/g, '').trim();
                    return `<li class="canon-section-title"><strong>${title}</strong></li>`;
                }
                const highlightedCanon = canon.replace(/\b([A-ZÀÂÄÉÈÊËÏÎÔÙÛÜÇ]{2,}(?:\s+[A-ZÀÂÄÉÈÊËÏÎÔÙÛÜÇ]+)*)\b/g, '<strong>$1</strong>');
                return `<li><i class="fas fa-gavel"></i> ${highlightedCanon}</li>`;
            }).join('')}
                    </ul>
                </div>
            `;
        }

        // Générer les détails
        let detailsHtml = '';
        if (event.details && event.details.length > 0) {
            detailsHtml = `
                <div class="modal-details">
                    <h4><i class="fas fa-info-circle"></i> Points clés</h4>
                    <ul>
                        ${event.details.map(detail => `
                            <li><i class="fas fa-chevron-right"></i> ${detail}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        // Générer les infos de la dénomination/mouvement (pour Protestant timeline)
        let denominationHtml = '';
        if (currentData.types && currentData.types[event.type] && currentData.types[event.type].birth) {
            const denom = currentData.types[event.type];
            denominationHtml = `
                <div class="modal-denomination">
                    <h4><i class="fas ${denom.icon}"></i> À propos du ${denom.label}</h4>
                    <div class="denom-info">
                        <p><strong><i class="fas fa-calendar-alt"></i> Naissance :</strong> ${denom.birth}</p>
                        <p><strong><i class="fas fa-user"></i> Fondateur(s) :</strong> ${denom.founder}</p>
                    </div>
                    <div class="denom-doctrines">
                        <p><strong><i class="fas fa-book"></i> Doctrines principales :</strong></p>
                        <ul>
                            ${denom.doctrines.map(doc => `<li>${doc}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="denom-history">
                        <p><strong><i class="fas fa-history"></i> Histoire :</strong></p>
                        <p class="history-text">${denom.history}</p>
                    </div>
                </div>
            `;
        }

        // Générer les infos de communauté ecclésiale (pour les types community)
        let communityInfoHtml = '';
        if (event.communityInfo) {
            const info = event.communityInfo;
            const statusClass = info.status && info.status.includes('PLEINE COMMUNION') ? 'communion' : 
                               (info.status && info.status.includes('IRRÉGULIER') ? 'irregular' : '');
            
            communityInfoHtml = `
                <div class="modal-community-info">
                    <h4><i class="fas fa-church"></i> Informations sur la Communauté</h4>
                    
                    <div class="community-grid">
                        ${info.type ? `<div class="community-item"><strong>Type</strong><span>${info.type}</span></div>` : ''}
                        ${info.founded ? `<div class="community-item"><strong>Fondation</strong><span>${info.founded}</span></div>` : ''}
                        ${info.founder ? `<div class="community-item"><strong>Fondateur</strong><span>${info.founder}</span></div>` : ''}
                        ${info.members ? `<div class="community-item"><strong>Membres</strong><span>${info.members}</span></div>` : ''}
                        ${info.rule ? `<div class="community-item"><strong>Règle</strong><span>${info.rule}</span></div>` : ''}
                        ${info.vows ? `<div class="community-item"><strong>Vœux</strong><span>${info.vows}</span></div>` : ''}
                        ${info.habit ? `<div class="community-item"><strong>Habit</strong><span>${info.habit}</span></div>` : ''}
                        ${info.governance ? `<div class="community-item"><strong>Gouvernance</strong><span>${info.governance}</span></div>` : ''}
                    </div>
                    
                    ${info.spirituality ? `
                        <div class="community-item" style="margin-bottom: 15px;">
                            <strong><i class="fas fa-pray"></i> Spiritualité</strong>
                            <span>${info.spirituality}</span>
                        </div>
                    ` : ''}
                    
                    ${info.liturgy ? `
                        <div class="community-item" style="margin-bottom: 15px;">
                            <strong><i class="fas fa-book-bible"></i> Liturgie</strong>
                            <span>${info.liturgy}</span>
                        </div>
                    ` : ''}
                    
                    ${info.status ? `
                        <div class="community-status ${statusClass}">
                            <i class="fas ${statusClass === 'communion' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
                            Statut canonique : ${info.status}
                        </div>
                    ` : ''}
                    
                    ${info.differences && info.differences.length > 0 ? `
                        <div class="community-differences">
                            <h5><i class="fas fa-balance-scale"></i> Différences avec les autres communautés</h5>
                            <ul>
                                ${info.differences.map(diff => `
                                    <li><i class="fas fa-angle-right"></i> ${diff}</li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        // Assembler le contenu du modal body
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            ${typeBadge}
            <p class="modal-description">${event.description}</p>
            ${quoteHtml}
            ${canonsHtml}
            ${communityInfoHtml}
            ${detailsHtml}
            ${denominationHtml}
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

    // =====================================================
    // FILTRAGE
    // =====================================================
    function applyFilters() {
        // Si une recherche est active, utiliser la fonction de recherche à la place
        if (currentSearchTerm) {
            performSearch(currentSearchTerm);
            return;
        }

        const events = document.querySelectorAll('.event');
        const markers = document.querySelectorAll('.period-marker');
        const { period, type } = currentFilters;

        const visiblePeriods = new Set();
        let count = 0;

        events.forEach(event => {
            event.classList.remove('search-match'); // Enlever les highlights de recherche
            const matchesPeriod = period === 'all' || event.dataset.period === period;
            const matchesType = type === 'all' || event.dataset.type === type;

            if (matchesPeriod && matchesType) {
                event.classList.remove('hidden');
                visiblePeriods.add(event.dataset.period);
                event.classList.remove('visible');
                setTimeout(() => {
                    if (!event.classList.contains('hidden')) event.classList.add('visible');
                }, 50);
                count++;
            } else {
                event.classList.add('hidden');
                event.classList.remove('visible');
            }
        });

        markers.forEach(marker => {
            if (visiblePeriods.has(marker.dataset.period)) {
                marker.classList.remove('hidden');
                marker.classList.add('visible');
            } else {
                marker.classList.add('hidden');
                marker.classList.remove('visible');
            }
        });

        if (resultsCount) resultsCount.textContent = count;
    }

    function updateResultsCount() {
        const visibleEvents = document.querySelectorAll('.event:not(.hidden)');
        if (resultsCount) resultsCount.textContent = visibleEvents.length;
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            currentFilters = { period: 'all', type: 'all' };
            currentSearchTerm = '';
            
            // Réinitialiser la barre de recherche
            if (searchInput) searchInput.value = '';
            if (searchResultsInfo) searchResultsInfo.textContent = '';
            if (searchClear) searchClear.classList.remove('visible');

            document.querySelectorAll('.period-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.period === 'all'));
            document.querySelectorAll('.type-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.type === 'all'));

            applyFilters();
        });
    }

    // =====================================================
    // ANIMATIONS AU SCROLL
    // =====================================================
    function initScrollAnimations() {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.event, .period-marker').forEach(element => observer.observe(element));
    }

    // =====================================================
    // TOGGLE FILTRES
    // =====================================================
    if (toggleFiltersBtn && filtersNav) {
        // S'assurer que les filtres sont masqués au chargement
        filtersNav.classList.add('collapsed');
        const btnText = toggleFiltersBtn.querySelector('span');
        if (btnText) btnText.textContent = 'Afficher les filtres';
        
        toggleFiltersBtn.addEventListener('click', () => {
            const isCollapsed = filtersNav.classList.toggle('collapsed');
            const btnText = toggleFiltersBtn.querySelector('span');
            if (btnText) btnText.textContent = isCollapsed ? 'Afficher les filtres' : 'Masquer les filtres';
        });
    }

    // =====================================================
    // RECHERCHE
    // =====================================================
    function normalizeText(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    function performSearch(searchTerm) {
        currentSearchTerm = searchTerm;
        const normalizedSearch = normalizeText(searchTerm);
        const events = document.querySelectorAll('.event');
        let matchCount = 0;

        // Clear previous highlights
        events.forEach(event => {
            event.classList.remove('search-match');
        });

        if (!normalizedSearch) {
            // Si pas de recherche, afficher selon les filtres actuels
            if (searchResultsInfo) searchResultsInfo.textContent = '';
            if (searchClear) searchClear.classList.remove('visible');
            applyFilters();
            return;
        }

        if (searchClear) searchClear.classList.add('visible');

        events.forEach(event => {
            const eventId = event.dataset.id;
            // Comparer en string car dataset retourne toujours une string
            const eventData = currentData.events.find(e => String(e.id) === String(eventId));
            
            if (!eventData) return;

            // Chercher dans tous les champs pertinents
            const searchFields = [
                eventData.title,
                eventData.summary,
                eventData.description,
                eventData.date,
                eventData.year?.toString(),
                ...(eventData.details || []),
                eventData.quote || ''
            ].join(' ');

            const normalizedFields = normalizeText(searchFields);
            const matches = normalizedFields.includes(normalizedSearch);

            // Appliquer également les filtres de période et type
            const matchesPeriod = currentFilters.period === 'all' || event.dataset.period === currentFilters.period;
            const matchesType = currentFilters.type === 'all' || event.dataset.type === currentFilters.type;

            if (matches && matchesPeriod && matchesType) {
                event.classList.remove('hidden');
                event.classList.add('search-match');
                matchCount++;
                // Re-trigger animation
                event.classList.remove('visible');
                setTimeout(() => {
                    if (!event.classList.contains('hidden')) event.classList.add('visible');
                }, 50);
            } else {
                event.classList.add('hidden');
                event.classList.remove('visible', 'search-match');
            }
        });

        // Mettre à jour les marqueurs de période
        updatePeriodMarkers();

        // Afficher les résultats
        if (searchResultsInfo) {
            searchResultsInfo.innerHTML = `<strong>${matchCount}</strong> résultat(s) pour "${searchTerm}"`;
        }
        if (resultsCount) resultsCount.textContent = matchCount;
    }

    function updatePeriodMarkers() {
        const markers = document.querySelectorAll('.period-marker');
        const events = document.querySelectorAll('.event');
        const visiblePeriods = new Set();

        events.forEach(event => {
            if (!event.classList.contains('hidden')) {
                visiblePeriods.add(event.dataset.period);
            }
        });

        markers.forEach(marker => {
            if (visiblePeriods.has(marker.dataset.period)) {
                marker.classList.remove('hidden');
                marker.classList.add('visible');
            } else {
                marker.classList.add('hidden');
                marker.classList.remove('visible');
            }
        });
    }

    function clearSearch() {
        if (searchInput) searchInput.value = '';
        currentSearchTerm = '';
        if (searchResultsInfo) searchResultsInfo.textContent = '';
        if (searchClear) searchClear.classList.remove('visible');
        applyFilters();
    }

    // Event listeners pour la recherche
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300); // Debounce de 300ms
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                clearSearch();
            }
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', clearSearch);
    }

    // =====================================================
    // INITIALISATION INITIALE
    // =====================================================
    generateFilters();
    generateLegend();
    generateTimeline();

    // Animation header
    const header = document.querySelector('.header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        header.style.transition = 'all 0.8s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});
