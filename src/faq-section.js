document.querySelectorAll('.faq-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const faqItem = icon.closest('.faq-question-item');
        const isActive = faqItem.classList.contains('active');
    
        document.querySelectorAll('.faq-question-item').forEach(item => {
            item.classList.remove('active');
            const itemIcon = item.querySelector('.faq-icon');
            itemIcon.src = itemIcon.getAttribute('src-closed');
        });
    
        if (!isActive) {
            faqItem.classList.add('active');
            icon.src = icon.getAttribute('src-opened');
        }
    });
});