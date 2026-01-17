// =====================================================
// HISTOIRE DE L'ÉGLISE - SCRIPT PRINCIPAL
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const periodButtons = document.querySelectorAll('.period-btn');
    const typeButtons = document.querySelectorAll('.type-btn');
    const modal = document.getElementById('eventModal');
    const modalClose = document.getElementById('modalClose');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const resultsCount = document.getElementById('resultsCount');
    const toggleFiltersBtn = document.getElementById('toggleFilters');
    const filtersNav = document.getElementById('filtersNav');
    
    // État des filtres
    let currentFilters = {
        period: 'all',
        type: 'all'
    };
    
    // Labels pour les types d'événements
    const typeLabels = {
        'major': 'Événement majeur',
        'council': 'Concile',
        'schism': 'Schisme',
        'saint': 'Saint',
        'movement': 'Ordre/Mouvement',
        'apostle': 'Apôtre',
        'father': 'Père de l\'Église',
        'doctor': 'Docteur de l\'Église'
    };
    
    // =====================================================
    // GÉNÉRATION DE LA TIMELINE
    // =====================================================
    function generateTimeline() {
        timeline.innerHTML = '';
        let currentPeriod = null;
        let isLeft = true;
        
        // Trier les événements par année
        const sortedEvents = [...churchHistory.events].sort((a, b) => {
            const yearA = parseInt(a.year.replace(/[^0-9-]/g, '')) || 0;
            const yearB = parseInt(b.year.replace(/[^0-9-]/g, '')) || 0;
            return yearA - yearB;
        });
        
        sortedEvents.forEach((event, index) => {
            // Ajouter un marqueur de période si on change de période
            if (event.period !== currentPeriod) {
                currentPeriod = event.period;
                const periodData = churchHistory.periods.find(p => p.id === currentPeriod);
                if (periodData) {
                    const periodMarker = createPeriodMarker(periodData);
                    timeline.appendChild(periodMarker);
                }
                isLeft = true; // Reset alternance pour chaque période
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
        
        // Initialiser les animations au scroll
        initScrollAnimations();
        
        // Mettre à jour le compteur
        updateResultsCount();
    }
    
    // =====================================================
    // CRÉATION DES ÉLÉMENTS
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
    
    function createEventElement(event, isLeft) {
        const eventDiv = document.createElement('div');
        eventDiv.className = `event ${isLeft ? 'left' : 'right'}`;
        eventDiv.dataset.type = event.type;
        eventDiv.dataset.period = event.period;
        eventDiv.dataset.id = event.id;
        
        // Créer la citation courte si disponible
        let quoteHtml = '';
        if (event.quote) {
            // Extraire une version courte de la citation (max 80 caractères)
            let shortQuote = event.quote.replace(/^«\s*|\s*»$/g, '');
            if (shortQuote.length > 80) {
                shortQuote = shortQuote.substring(0, 77) + '...';
            }
            quoteHtml = `<p class="event-quote">${shortQuote}</p>`;
        }
        
        eventDiv.innerHTML = `
            <i class="fas ${event.icon} event-icon"></i>
            <span class="event-date">${event.date}</span>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-summary">${event.summary}</p>
            ${quoteHtml}
        `;
        
        // Ajouter l'événement click
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
        
        // Générer le badge de type
        const typeBadge = `<span class="modal-type-badge ${event.type}">${typeLabels[event.type] || event.type}</span>`;
        
        // Générer la citation si disponible
        let quoteHtml = '';
        if (event.quote) {
            quoteHtml = `
                <div class="modal-quote">
                    <p>${event.quote}</p>
                </div>
            `;
        }
        
        // Générer les canons si disponibles (pour les conciles)
        let canonsHtml = '';
        if (event.canons && event.canons.length > 0) {
            canonsHtml = `
                <div class="modal-canons">
                    <h4><i class="fas fa-scroll"></i> Canons et Décrets Principaux</h4>
                    <ul>
                        ${event.canons.map(canon => {
                            // Ajouter une classe spéciale pour les titres de section (commençant par ===)
                            if (canon.startsWith('===')) {
                                const title = canon.replace(/===/g, '').trim();
                                return `<li class="canon-section-title"><strong>${title}</strong></li>`;
                            }
                            // Mettre en évidence les mots en MAJUSCULES
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
        
        // Assembler le contenu du modal body
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            ${typeBadge}
            <p class="modal-description">${event.description}</p>
            ${quoteHtml}
            ${canonsHtml}
            ${detailsHtml}
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // =====================================================
    // FILTRAGE COMBINÉ (PÉRIODE + TYPE)
    // =====================================================
    function applyFilters() {
        const events = document.querySelectorAll('.event');
        const markers = document.querySelectorAll('.period-marker');
        const { period, type } = currentFilters;
        
        // Déterminer quels marqueurs de période ont des événements visibles
        const visiblePeriods = new Set();
        
        events.forEach(event => {
            const matchesPeriod = period === 'all' || event.dataset.period === period;
            const matchesType = type === 'all' || event.dataset.type === type;
            
            if (matchesPeriod && matchesType) {
                event.classList.remove('hidden');
                visiblePeriods.add(event.dataset.period);
                // Réanimer l'élément
                event.classList.remove('visible');
                setTimeout(() => {
                    if (!event.classList.contains('hidden')) {
                        event.classList.add('visible');
                    }
                }, 50);
            } else {
                event.classList.add('hidden');
                event.classList.remove('visible');
            }
        });
        
        // Afficher/masquer les marqueurs de période
        markers.forEach(marker => {
            if (visiblePeriods.has(marker.dataset.period)) {
                marker.classList.remove('hidden');
                marker.classList.add('visible');
            } else {
                marker.classList.add('hidden');
                marker.classList.remove('visible');
            }
        });
        
        // Mettre à jour le compteur
        updateResultsCount();
    }
    
    function updateResultsCount() {
        const visibleEvents = document.querySelectorAll('.event:not(.hidden)');
        if (resultsCount) {
            resultsCount.textContent = visibleEvents.length;
        }
    }
    
    // =====================================================
    // GESTION DES BOUTONS DE FILTRE PAR PÉRIODE
    // =====================================================
    periodButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mettre à jour l'état actif
            periodButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Mettre à jour le filtre
            currentFilters.period = button.dataset.period;
            
            // Appliquer les filtres
            applyFilters();
        });
    });
    
    // =====================================================
    // GESTION DES BOUTONS DE FILTRE PAR TYPE
    // =====================================================
    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mettre à jour l'état actif
            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Mettre à jour le filtre
            currentFilters.type = button.dataset.type;
            
            // Appliquer les filtres
            applyFilters();
        });
    });
    
    // =====================================================
    // RÉINITIALISATION DES FILTRES
    // =====================================================
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            // Réinitialiser l'état des filtres
            currentFilters = {
                period: 'all',
                type: 'all'
            };
            
            // Réinitialiser les boutons actifs
            periodButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.period === 'all');
            });
            
            typeButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.type === 'all');
            });
            
            // Appliquer les filtres
            applyFilters();
        });
    }
    
    // =====================================================
    // LÉGENDE CLIQUABLE (raccourci vers les filtres par type)
    // =====================================================
    const legendItems = document.querySelectorAll('.legend-item[data-type]');
    legendItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const type = item.dataset.type;
            
            // Activer le bouton de type correspondant
            typeButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.type === type);
            });
            
            // Mettre à jour le filtre
            currentFilters.type = type;
            
            // Appliquer les filtres
            applyFilters();
            
            // Scroll vers la timeline
            const timelineContainer = document.querySelector('.timeline-container');
            if (timelineContainer) {
                timelineContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // =====================================================
    // ANIMATIONS AU SCROLL
    // =====================================================
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.event, .period-marker').forEach(element => {
            observer.observe(element);
        });
    }
    
    // =====================================================
    // TOGGLE FILTRES (RÉDUIRE/DÉVELOPPER)
    // =====================================================
    if (toggleFiltersBtn && filtersNav) {
        toggleFiltersBtn.addEventListener('click', () => {
            const isCollapsed = filtersNav.classList.toggle('collapsed');
            const btnText = toggleFiltersBtn.querySelector('span');
            if (btnText) {
                btnText.textContent = isCollapsed ? 'Afficher les filtres' : 'Masquer les filtres';
            }
        });
    }
    
    // =====================================================
    // INITIALISATION
    // =====================================================
    generateTimeline();
    
    // Animation initiale du header
    const header = document.querySelector('.header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        header.style.transition = 'all 0.8s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});
