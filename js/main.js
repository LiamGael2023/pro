// ==========================================
// Admin Dashboard - Professional JavaScript
// Using Tabler.io Framework & ApexCharts
// ==========================================

'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // Sales Chart with ApexCharts
    // ==========================================

    const salesChartElement = document.getElementById('chart-sales');

    if (salesChartElement && typeof ApexCharts !== 'undefined') {
        const options = {
            series: [{
                name: 'Ventas',
                data: [12500, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000]
            }],
            chart: {
                type: 'area',
                height: 300,
                fontFamily: 'inherit',
                sparkline: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    stops: [0, 100]
                }
            },
            colors: ['#206bc4'],
            xaxis: {
                categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return '$' + (value / 1000).toFixed(0) + 'k';
                    }
                }
            },
            grid: {
                borderColor: '#e6e7e9',
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            tooltip: {
                theme: 'light',
                x: {
                    show: true
                },
                y: {
                    formatter: function(value) {
                        return '$' + value.toLocaleString();
                    }
                }
            }
        };

        const chart = new ApexCharts(salesChartElement, options);
        chart.render();
    }

    // ==========================================
    // Navigation Active State
    // ==========================================

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo para links sin dropdown
            if (!this.classList.contains('dropdown-toggle')) {
                // Remover active de todos los items
                document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Agregar active al item clickeado
                this.closest('.nav-item').classList.add('active');
            }
        });
    });

    // ==========================================
    // Table Search Functionality
    // ==========================================

    const tableSearch = document.getElementById('table-search');

    if (tableSearch) {
        tableSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('.datatable tbody tr');

            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // ==========================================
    // Animated Counters for Statistics
    // ==========================================

    function animateCounter(element, target, duration = 1500) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatStatValue(target);
                clearInterval(timer);
            } else {
                element.textContent = formatStatValue(Math.floor(current));
            }
        }, 16);
    }

    function formatStatValue(value) {
        if (typeof value === 'string') {
            return value;
        }
        return value.toLocaleString();
    }

    // Observe statistics cards and animate when visible
    const statValues = document.querySelectorAll('.card .h1');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const text = target.textContent.trim();

                    // Extract number (works for currency and percentages)
                    const match = text.match(/[\d,]+\.?\d*/);
                    if (match) {
                        const number = parseInt(match[0].replace(/,/g, ''));
                        if (!isNaN(number)) {
                            target.textContent = '0';
                            animateCounter(target, number);
                            observer.unobserve(target);
                        }
                    }
                }
            });
        }, { threshold: 0.5 });

        statValues.forEach(stat => observer.observe(stat));
    }

    // ==========================================
    // Action Buttons Handlers
    // ==========================================

    const viewButtons = document.querySelectorAll('.ti-eye');
    const editButtons = document.querySelectorAll('.ti-edit');

    viewButtons.forEach(btn => {
        btn.closest('.btn').addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const id = row.querySelector('td:first-child').textContent.trim();
            console.log('Viewing order:', id);
            showToast('Abriendo detalles del pedido ' + id, 'info');
        });
    });

    editButtons.forEach(btn => {
        btn.closest('.btn').addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const id = row.querySelector('td:first-child').textContent.trim();
            console.log('Editing order:', id);
            showToast('Editando pedido ' + id, 'warning');
        });
    });

    // ==========================================
    // Toast Notifications
    // ==========================================

    function showToast(message, type = 'info') {
        // Create toast container if doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            toastContainer.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
            `;
            document.body.appendChild(toastContainer);
        }

        // Create toast
        const toast = document.createElement('div');
        toast.className = `alert alert-${type} alert-dismissible fade show`;
        toast.style.cssText = `
            min-width: 300px;
            margin-bottom: 10px;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        `;
        toast.setAttribute('role', 'alert');

        toast.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        toastContainer.appendChild(toast);

        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 150);
        }, 3000);
    }

    // ==========================================
    // Dropdown Interactions
    // ==========================================

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            const dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                e.preventDefault();
            }
        });
    });

    // ==========================================
    // Table Row Click Handler
    // ==========================================

    const tableRows = document.querySelectorAll('.datatable tbody tr');

    tableRows.forEach(row => {
        row.style.cursor = 'pointer';

        row.addEventListener('click', function(e) {
            // Don't trigger if clicking on buttons
            if (!e.target.closest('.btn')) {
                const id = this.querySelector('td:first-child').textContent.trim();
                console.log('Row clicked:', id);
            }
        });
    });

    // ==========================================
    // Responsive Navbar Toggle
    // ==========================================

    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            console.log('Mobile menu toggled');
        });
    }

    // ==========================================
    // Real-time Clock (Optional)
    // ==========================================

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Update if there's a clock element
        const clockElement = document.getElementById('current-time');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }

    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock();

    // ==========================================
    // Form Validation (if forms exist)
    // ==========================================

    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // ==========================================
    // Utility Functions
    // ==========================================

    window.AdminDashboard = {
        showToast: showToast,

        formatCurrency: function(amount) {
            return new Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency: 'USD'
            }).format(amount);
        },

        formatDate: function(date) {
            return new Intl.DateTimeFormat('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(new Date(date));
        },

        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };

    // ==========================================
    // Console Welcome Message
    // ==========================================

    console.log('%c📊 AdminPro Dashboard', 'color: #206bc4; font-size: 24px; font-weight: bold;');
    console.log('%cProfessional Admin Template powered by Tabler.io', 'color: #626976; font-size: 12px;');
    console.log('%cReady to use!', 'color: #10b981; font-size: 11px; font-weight: bold;');

    // ==========================================
    // Show Welcome Toast
    // ==========================================

    setTimeout(() => {
        showToast('¡Bienvenido al Panel Administrativo!', 'success');
    }, 500);

    // ==========================================
    // Smooth Scroll para enlaces internos
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // Auto-hide navbar on scroll down (opcional)
    // ==========================================

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    let scrollTimeout;

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Solo en desktop y si hay suficiente scroll
            if (window.innerWidth > 768 && scrollTop > 100) {
                if (scrollTop > lastScrollTop) {
                    // Scroll down - opcional: ocultar navbar
                    // navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scroll up
                    navbar.style.transform = 'translateY(0)';
                }
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 100);
    }, false);

    // ==========================================
    // Tooltips initialization (Bootstrap)
    // ==========================================

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (typeof bootstrap !== 'undefined') {
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
            new bootstrap.Tooltip(tooltipTriggerEl)
        );
    }

    // ==========================================
    // Loading state for buttons
    // ==========================================

    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('demo-loading')) {
                e.preventDefault();
                this.classList.add('loading');

                setTimeout(() => {
                    this.classList.remove('loading');
                    showToast('Acción completada exitosamente', 'success');
                }, 2000);
            }
        });
    });

    // ==========================================
    // Dropdown auto-close on click outside
    // ==========================================

    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown-menu.show');
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.previousElementSibling;
            if (toggle && !toggle.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // ==========================================
    // Card expand/collapse (para cards con mucho contenido)
    // ==========================================

    const expandableCards = document.querySelectorAll('[data-card-expand]');
    expandableCards.forEach(card => {
        const button = document.createElement('button');
        button.className = 'btn btn-sm btn-icon position-absolute top-0 end-0 m-2';
        button.innerHTML = '<i class="ti ti-arrows-maximize"></i>';
        button.title = 'Expandir';

        button.addEventListener('click', function() {
            card.classList.toggle('card-fullscreen');
            this.querySelector('i').classList.toggle('ti-arrows-maximize');
            this.querySelector('i').classList.toggle('ti-arrows-minimize');
        });

        card.style.position = 'relative';
        card.appendChild(button);
    });

    // ==========================================
    // Copy to clipboard functionality
    // ==========================================

    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Copiado al portapapeles', 'info');
            });
        }
    };

    // ==========================================
    // Stats card number formatting with animation
    // ==========================================

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    // ==========================================
    // Enhanced keyboard navigation
    // ==========================================

    document.addEventListener('keydown', function(e) {
        // Escape key closes dropdowns
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-menu.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }

        // Ctrl/Cmd + K for quick search (si existe)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('#table-search');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

});
