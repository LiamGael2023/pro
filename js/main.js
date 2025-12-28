// ==========================================
// Modern Admin Dashboard - JavaScript
// ==========================================

'use strict';

// ==========================================
// Sidebar Toggle Functionality
// ==========================================

const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const toggleSidebar = document.getElementById('toggleSidebar');

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Desktop sidebar toggle
if (toggleSidebar) {
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ==========================================
// Theme Toggle (Dark/Light Mode)
// ==========================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Theme toggle event
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);

        // Update icon
        themeToggle.innerHTML = theme === 'light'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        // Add animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ==========================================
// Navigation Active State
// ==========================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked item
        link.parentElement.classList.add('active');

        // Close sidebar on mobile after click
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
});

// ==========================================
// Search Functionality
// ==========================================

const searchInput = document.querySelector('.search-box input');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
        // Implement search logic here
    });
}

// ==========================================
// Charts with Chart.js
// ==========================================

// Check if Chart.js is loaded
if (typeof Chart !== 'undefined') {
    // Sales Chart
    const salesChartCanvas = document.getElementById('salesChart');

    if (salesChartCanvas) {
        const ctx = salesChartCanvas.getContext('2d');

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

        const salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Ventas 2025',
                    data: [12500, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000],
                    backgroundColor: gradient,
                    borderColor: '#6366f1',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#6366f1',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30, 41, 59, 0.9)',
                        backdropFilter: 'blur(10px)',
                        padding: 12,
                        borderColor: 'rgba(99, 102, 241, 0.3)',
                        borderWidth: 1,
                        titleColor: '#f1f5f9',
                        bodyColor: '#94a3b8',
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return '$' + (value / 1000) + 'k';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
}

// ==========================================
// Counter Animation for Stats
// ==========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (typeof num === 'string') {
        return num;
    }
    return num.toLocaleString();
}

// Animate counters on page load
document.addEventListener('DOMContentLoaded', () => {
    const statValues = document.querySelectorAll('.stat-value');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));

                if (!isNaN(number)) {
                    target.textContent = '0';
                    animateCounter(target, number);
                    observer.unobserve(target);
                }
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(stat => observer.observe(stat));
});

// ==========================================
// Notification System
// ==========================================

const notificationBtn = document.querySelector('.notification-btn');

if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        showNotification('Tienes 3 notificaciones nuevas', 'info');
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: rgba(30, 41, 59, 0.95);
        backdrop-filter: blur(20px);
        color: #f1f5f9;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        border-left: 4px solid #6366f1;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        min-width: 300px;
        animation: slideIn 0.3s ease;
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fas fa-info-circle" style="color: #6366f1; font-size: 1.2rem;"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Table Interactions
// ==========================================

const tableRows = document.querySelectorAll('.data-table tbody tr');

tableRows.forEach(row => {
    row.addEventListener('click', (e) => {
        // Don't trigger if clicking on action buttons
        if (!e.target.closest('.btn-icon')) {
            console.log('Row clicked:', row);
            // Add your row click logic here
        }
    });
});

// Action buttons
const viewButtons = document.querySelectorAll('.data-table .btn-icon .fa-eye');
const editButtons = document.querySelectorAll('.data-table .btn-icon .fa-edit');

viewButtons.forEach(btn => {
    btn.parentElement.addEventListener('click', (e) => {
        e.stopPropagation();
        showNotification('Abriendo vista detallada...', 'info');
    });
});

editButtons.forEach(btn => {
    btn.parentElement.addEventListener('click', (e) => {
        e.stopPropagation();
        showNotification('Modo de edición activado', 'info');
    });
});

// ==========================================
// Responsive Handling
// ==========================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close sidebar on resize to desktop
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    }, 250);
});

// ==========================================
// Loading State Management
// ==========================================

window.addEventListener('load', () => {
    // Hide loader if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }

    // Show welcome notification
    setTimeout(() => {
        showNotification('¡Bienvenido al Panel de Administración!', 'info');
    }, 500);
});

// ==========================================
// Utility Functions
// ==========================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Debounce function
function debounce(func, wait) {
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

// ==========================================
// Console Welcome Message
// ==========================================

console.log('%c🚀 Admin Dashboard Pro', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cMade with ❤️ using modern web technologies', 'color: #94a3b8; font-size: 12px;');
console.log('%cHTML5 • CSS3 • JavaScript ES6+ • Chart.js', 'color: #10b981; font-size: 11px;');

// ==========================================
// Export functions for external use
// ==========================================

window.adminDashboard = {
    showNotification,
    formatCurrency,
    formatDate,
    debounce
};
