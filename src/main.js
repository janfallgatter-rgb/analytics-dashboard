const categories = {
    'Entwicklung': '#6366f1',
    'Meeting': '#a855f7',
    'Testing': '#ec4899',
    'Dokumentation': '#14b8a6',
    'Sicherheit': '#f59e0b',
    'Support': '#10b981',
    'DevOps': '#3b82f6'
};

const defaultData = [
    {"id": 1, "datum": "2026-01-05", "aufgabe": "Code Review PR #423", "dauer": 90, "kategorie": "Entwicklung"},
    {"id": 2, "datum": "2026-01-05", "aufgabe": "Sprint Planning Meeting", "dauer": 60, "kategorie": "Meeting"},
    {"id": 3, "datum": "2026-01-05", "aufgabe": "API Integration Tests", "dauer": 120, "kategorie": "Testing"},
    {"id": 4, "datum": "2026-01-05", "aufgabe": "Bugfix Login Flow", "dauer": 45, "kategorie": "Entwicklung"},
    {"id": 5, "datum": "2026-01-06", "aufgabe": "Database Optimization", "dauer": 180, "kategorie": "Entwicklung"},
    {"id": 6, "datum": "2026-01-06", "aufgabe": "Client Call - TechCorp", "dauer": 45, "kategorie": "Meeting"},
    {"id": 7, "datum": "2026-01-06", "aufgabe": "Documentation Update", "dauer": 30, "kategorie": "Dokumentation"},
    {"id": 8, "datum": "2026-01-06", "aufgabe": "Unit Tests Coverage", "dauer": 90, "kategorie": "Testing"},
    {"id": 9, "datum": "2026-01-07", "aufgabe": "Feature Development Dashboard", "dauer": 240, "kategorie": "Entwicklung"},
    {"id": 10, "datum": "2026-01-07", "aufgabe": "Team Standup", "dauer": 15, "kategorie": "Meeting"},
    {"id": 11, "datum": "2026-01-07", "aufgabe": "Performance Profiling", "dauer": 60, "kategorie": "Entwicklung"},
    {"id": 12, "datum": "2026-01-07", "aufgabe": "Code Refactoring Module A", "dauer": 150, "kategorie": "Entwicklung"},
    {"id": 13, "datum": "2026-01-08", "aufgabe": "Security Audit Review", "dauer": 90, "kategorie": "Sicherheit"},
    {"id": 14, "datum": "2026-01-08", "aufgabe": "Customer Support Ticket #1234", "dauer": 30, "kategorie": "Support"},
    {"id": 15, "datum": "2026-01-08", "aufgabe": "Deployment Pipeline Setup", "dauer": 120, "kategorie": "DevOps"},
    {"id": 16, "datum": "2026-01-08", "aufgabe": "Sprint Retrospective", "dauer": 60, "kategorie": "Meeting"},
    {"id": 17, "datum": "2026-01-09", "aufgabe": "Frontend Component Library", "dauer": 200, "kategorie": "Entwicklung"},
    {"id": 18, "datum": "2026-01-09", "aufgabe": "API Documentation", "dauer": 45, "kategorie": "Dokumentation"},
    {"id": 19, "datum": "2026-01-09", "aufgabe": "Integration Testing E2E", "dauer": 180, "kategorie": "Testing"},
    {"id": 20, "datum": "2026-01-09", "aufgabe": "Bugfix Memory Leak", "dauer": 75, "kategorie": "Entwicklung"},
    {"id": 21, "datum": "2026-01-12", "aufgabe": "Architecture Review", "dauer": 90, "kategorie": "Meeting"},
    {"id": 22, "datum": "2026-01-12", "aufgabe": "Microservices Refactoring", "dauer": 300, "kategorie": "Entwicklung"},
    {"id": 23, "datum": "2026-01-12", "aufgabe": "CI/CD Pipeline Optimization", "dauer": 60, "kategorie": "DevOps"},
    {"id": 24, "datum": "2026-01-12", "aufgabe": "User Acceptance Testing", "dauer": 120, "kategorie": "Testing"},
    {"id": 25, "datum": "2026-01-13", "aufgabe": "Database Migration Script", "dauer": 90, "kategorie": "Entwicklung"},
    {"id": 26, "datum": "2026-01-13", "aufgabe": "Client Demo Presentation", "dauer": 60, "kategorie": "Meeting"},
    {"id": 27, "datum": "2026-01-13", "aufgabe": "Security Patch Implementation", "dauer": 45, "kategorie": "Sicherheit"},
    {"id": 28, "datum": "2026-01-13", "aufgabe": "Performance Monitoring Setup", "dauer": 75, "kategorie": "DevOps"},
    {"id": 29, "datum": "2026-01-14", "aufgabe": "Feature Flag Implementation", "dauer": 60, "kategorie": "Entwicklung"},
    {"id": 30, "datum": "2026-01-14", "aufgabe": "Code Quality Analysis", "dauer": 30, "kategorie": "Testing"},
    {"id": 31, "datum": "2026-01-14", "aufgabe": "Technical Workshop Prep", "dauer": 90, "kategorie": "Dokumentation"},
    {"id": 32, "datum": "2026-01-14", "aufgabe": "Bugfix API Rate Limiting", "dauer": 45, "kategorie": "Entwicklung"},
    {"id": 33, "datum": "2026-01-15", "aufgabe": "System Architecture Design", "dauer": 240, "kategorie": "Entwicklung"},
    {"id": 34, "datum": "2026-01-15", "aufgabe": "Team Sync Meeting", "dauer": 30, "kategorie": "Meeting"},
    {"id": 35, "datum": "2026-01-15", "aufgabe": "Load Testing Execution", "dauer": 120, "kategorie": "Testing"},
    {"id": 36, "datum": "2026-01-15", "aufgabe": "Log Aggregation Setup", "dauer": 60, "kategorie": "DevOps"},
    {"id": 37, "datum": "2026-01-16", "aufgabe": "Authentication Module Update", "dauer": 180, "kategorie": "Entwicklung"},
    {"id": 38, "datum": "2026-01-16", "aufgabe": "Customer Feedback Review", "dauer": 45, "kategorie": "Support"},
    {"id": 39, "datum": "2026-01-16", "aufgabe": "API Versioning Strategy", "dauer": 90, "kategorie": "Entwicklung"},
    {"id": 40, "datum": "2026-01-16", "aufgabe": "Infrastructure Cost Analysis", "dauer": 60, "kategorie": "DevOps"},
    {"id": 41, "datum": "2026-01-19", "aufgabe": "Data Pipeline Development", "dauer": 300, "kategorie": "Entwicklung"},
    {"id": 42, "datum": "2026-01-19", "aufgabe": "Sprint Planning Session", "dauer": 60, "kategorie": "Meeting"},
    {"id": 43, "datum": "2026-01-19", "aufgabe": "Automated Testing Framework", "dauer": 240, "kategorie": "Testing"},
    {"id": 44, "datum": "2026-01-19", "aufgabe": "Documentation Review", "dauer": 45, "kategorie": "Dokumentation"},
    {"id": 45, "datum": "2026-01-20", "aufgabe": "Cache Strategy Implementation", "dauer": 150, "kategorie": "Entwicklung"},
    {"id": 46, "datum": "2026-01-20", "aufgabe": "Client Onboarding Call", "dauer": 45, "kategorie": "Meeting"},
    {"id": 47, "datum": "2026-01-20", "aufgabe": "Security Vulnerability Scan", "dauer": 90, "kategorie": "Sicherheit"},
    {"id": 48, "datum": "2026-01-20", "aufgabe": "Backup System Testing", "dauer": 60, "kategorie": "DevOps"},
    {"id": 49, "datum": "2026-01-21", "aufgabe": "Real-time Analytics Module", "dauer": 360, "kategorie": "Entwicklung"},
    {"id": 50, "datum": "2026-01-21", "aufgabe": "Code Review Session", "dauer": 90, "kategorie": "Entwicklung"}
];

const app = Vue.createApp({
    data() {
        return {
            data: defaultData,
            darkMode: true,
            sidebarOpen: true,
            searchQuery: '',
            categories,
            charts: {}
        };
    },
    computed: {
        filteredData() {
            if (!this.searchQuery) return this.data;
            return this.data.filter(item => 
                item.aufgabe.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                item.kategorie.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        stats() {
            const totalTasks = this.filteredData.length;
            const totalTime = this.filteredData.reduce((sum, item) => sum + item.dauer, 0);
            const totalHours = (totalTime / 60).toFixed(1);
            
            const categoryStats = this.filteredData.reduce((acc, item) => {
                if (!acc[item.kategorie]) acc[item.kategorie] = { count: 0, hours: 0 };
                acc[item.kategorie].count++;
                acc[item.kategorie].hours += item.dauer;
                return acc;
            }, {});

            const dailyHours = this.filteredData.reduce((acc, item) => {
                acc[item.datum] = (acc[item.datum] || 0) + item.dauer;
                return acc;
            }, {});

            const topTasks = [...this.filteredData]
                .sort((a, b) => b.dauer - a.dauer)
                .slice(0, 5);

            return { totalTasks, totalTime: totalTime.toFixed(0), totalHours, categoryStats, dailyHours, topTasks };
        },
        chartData() {
            const cats = Object.keys(this.stats.categoryStats).map(cat => ({
                name: cat,
                hours: (this.stats.categoryStats[cat].hours / 60).toFixed(1),
                count: this.stats.categoryStats[cat].count,
                color: categories[cat] || '#6366f1'
            }));

            const sortedByHours = [...cats].sort((a, b) => b.hours - a.hours);
            const sortedByCount = [...cats].sort((a, b) => b.count - a.count);

            const dates = Object.keys(this.stats.dailyHours).sort();
            const hours = dates.map(date => this.stats.dailyHours[date] / 60);

            return { sortedByHours, sortedByCount, dates, hours };
        }
    },
    mounted() {
        this.loadSettings();
        
        setTimeout(() => {
            this.createCategoryChart('categoryHoursChart', this.chartData.sortedByHours);
            this.createCategoryChart('categoryCountChart', this.chartData.sortedByCount);
            this.createTimeSeriesChart('timeSeriesChart', this.chartData.dates, this.chartData.hours);
            this.createPieChart('topTasksChart', this.stats.topTasks);
        }, 100);

        new MutationObserver(() => {
            setTimeout(() => {
                this.createCategoryChart('categoryHoursChart', this.chartData.sortedByHours);
                this.createCategoryChart('categoryCountChart', this.chartData.sortedByCount);
                this.createTimeSeriesChart('timeSeriesChart', this.chartData.dates, this.chartData.hours);
                this.createPieChart('topTasksChart', this.stats.topTasks);
            }, 100);
        }).observe(document.getElementById('app'), { childList: true, subtree: true });
    },
    methods: {
        loadSettings() {
            try {
                const settings = localStorage.getItem('dashboard-settings');
                if (settings) {
                    this.darkMode = JSON.parse(settings).darkMode ?? true;
                }
            } catch (error) {
                console.error('Fehler beim Laden der Einstellungen:', error);
            }
        },
        saveSettings() {
            try {
                localStorage.setItem('dashboard-settings', JSON.stringify({ darkMode: this.darkMode }));
            } catch (error) {
                console.error('Fehler beim Speichern der Einstellungen:', error);
            }
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.saveSettings();
        },
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
        formatDate(dateStr) {
            const date = new Date(dateStr);
            return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
        },
        getCategoryColor(category) {
            return categories[category] || '#6366f1';
        },
        getBgColor(category) {
            return categories[category] || '#6366f1';
        },
        createCategoryChart(elementId, data) {
            const ctx = document.getElementById(elementId)?.getContext('2d');
            if (!ctx) return;

            if (this.charts[elementId]) {
                this.charts[elementId].destroy();
            }

            this.charts[elementId] = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(d => d.name),
                    datasets: [{
                        label: 'Stunden',
                        data: data.map(d => d.hours),
                        backgroundColor: data.map(d => d.color),
                        borderRadius: 8,
                        barThickness: 40
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { size: 11 } } },
                        y: { grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { font: { size: 11 } } }
                    }
                }
            });
        },
        createTimeSeriesChart(elementId, labels, data) {
            const ctx = document.getElementById(elementId)?.getContext('2d');
            if (!ctx) return;

            if (this.charts[elementId]) {
                this.charts[elementId].destroy();
            }

            const gradient = ctx.createLinearGradient(0, 0, 0, 250);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');

            this.charts[elementId] = new Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: 'Tägliche Stunden',
                        data,
                        borderColor: '#6366f1',
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: '#6366f1',
                        pointBorderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
                        y: { grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { font: { size: 11 } } }
                    }
                }
            });
        },
        createPieChart(elementId, topTasks) {
            const ctx = document.getElementById(elementId)?.getContext('2d');
            if (!ctx) return;

            if (this.charts[elementId]) {
                this.charts[elementId].destroy();
            }

            const colors = ['#6366f1', '#a855f7', '#ec4899', '#14b8a6', '#f59e0b'];

            this.charts[elementId] = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: topTasks.map(t => t.aufgabe.substring(0, 25) + (t.aufgabe.length > 25 ? '...' : '')),
                    datasets: [{
                        data: topTasks.map(t => t.dauer / 60),
                        backgroundColor: colors,
                        borderWidth: 0,
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { position: 'right', labels: { font: { size: 10 }, boxWidth: 12 } }
                    },
                    cutout: '70%'
                }
            });
        }
    }
}).mount('#app');
