// Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const targetTab = tab.getAttribute('data-tab');
                document.getElementById(targetTab).classList.add('active');
                
                // Update URL
                const url = new URL(window.location);
                url.searchParams.set('tab', targetTab.charAt(0).toUpperCase() + targetTab.slice(1).replace('-', ' '));
                window.history.pushState({}, '', url);
            });
        });

        // Initialize tab from URL parameter
        document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const activeTab = urlParams.get('tab');
            
            if (activeTab) {
                const tabMap = {
                    'Project Managers': 'project-managers',
                    'Designers': 'designers', 
                    'Engineers': 'engineers'
                };
                const tabId = tabMap[activeTab] || activeTab.toLowerCase().replace(' ', '-');
                const tabButton = document.querySelector(`[data-tab="${tabId}"]`);
                if (tabButton) {
                    tabButton.click();
                }
            }
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });