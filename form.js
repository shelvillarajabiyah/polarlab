// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Form submission handling
document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
    // Get form data
    const formData = new FormData(this);
    const projectData = {};
            
    for (let [key, value] of formData.entries()) {
        projectData[key] = value;
    }
            
    // Simulate form submission
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
            
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
            
    setTimeout(() => {
        alert('Thank you for your project submission! We have received your brief and will match you with the most suitable studio. Our team will contact you within 48 hours to discuss your project in detail.');
                
        // Reset form
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
                
        // In a real implementation, you would send this data to your backend
        console.log('Project submission:', projectData);
    }, 2000);
});