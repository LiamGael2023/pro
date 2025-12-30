// ==================================================
// AdminPro - Professional Dashboard JavaScript
// Tabler.io Framework Integration
// ==================================================

'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // ==================================================
    // Sales Chart - ApexCharts
    // ==================================================

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
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800
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
                borderColor: '#e6e9ee',
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

    // ==================================================
    // Navigation Active State
    // ==================================================

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || link.getAttribute('href') === './') {
            link.closest('.nav-item').classList.add('active');
        }

        link.addEventListener('click', function() {
            if (!this.classList.contains('dropdown-toggle')) {
                document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                this.closest('.nav-item').classList.add('active');
            }
        });
    });

    // ==================================================
    // Table Search
    // ==================================================

    const tableSearch = document.getElementById('table-search');

    if (tableSearch) {
        tableSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('.datatable tbody tr');

            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // ==================================================
    // Toast Notifications
    // ==================================================

    function showToast(message, type = 'info') {
        let toastContainer = document.querySelector('.toast-container');

        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            toastContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `alert alert-${type} alert-dismissible fade show`;
        toast.style.cssText = 'min-width: 300px; margin-bottom: 10px; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);';
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 150);
        }, 3000);
    }

    // ==================================================
    // Table Action Buttons
    // ==================================================

    const viewButtons = document.querySelectorAll('.ti-eye');
    const editButtons = document.querySelectorAll('.ti-edit');

    viewButtons.forEach(btn => {
        btn.closest('.btn')?.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const id = row.querySelector('td:first-child')?.textContent.trim();
            if (id) {
                console.log('Ver pedido:', id);
                showToast(`Abriendo detalles del pedido ${id}`, 'info');
            }
        });
    });

    editButtons.forEach(btn => {
        btn.closest('.btn')?.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const id = row.querySelector('td:first-child')?.textContent.trim();
            if (id) {
                console.log('Editar pedido:', id);
                showToast(`Editando pedido ${id}`, 'warning');
            }
        });
    });

    // ==================================================
    // Form Validation
    // ==================================================

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

    // ==================================================
    // Bootstrap Tooltips
    // ==================================================

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (typeof bootstrap !== 'undefined') {
        [...tooltipTriggerList].map(tooltipTriggerEl =>
            new bootstrap.Tooltip(tooltipTriggerEl)
        );
    }

    // ==================================================
    // Keyboard Shortcuts
    // ==================================================

    document.addEventListener('keydown', function(e) {
        // Escape closes dropdowns
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-menu.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }

        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('#table-search');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

    // ==================================================
    // Smooth Scroll for Internal Links
    // ==================================================

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

    // ==================================================
    // Utility Functions
    // ==================================================

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
        }
    };

    // ==================================================
    // Console Info
    // ==================================================

    console.log('%c📊 AdminPro Dashboard', 'color: #206bc4; font-size: 20px; font-weight: bold;');
    console.log('%cProfessional template powered by Tabler.io', 'color: #626976; font-size: 12px;');

    // ==================================================
    // Welcome Message
    // ==================================================

    setTimeout(() => {
        showToast('¡Bienvenido al Panel Administrativo!', 'success');
    }, 500);

});
