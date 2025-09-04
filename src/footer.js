document.querySelectorAll('.column-arrow').forEach(icon => {
    icon.addEventListener('click', () => {
        const faqItem = icon.closest('.column');
        const isActive = faqItem.classList.contains('active');
    
        document.querySelectorAll('.column').forEach(item => {
            item.classList.remove('active');
            const itemIcon = item.querySelector('.column-arrow');
            itemIcon.src = "imgs/icons/down.png";
            itemIcon.alt = "show-links";
        });
    
        if (!isActive) {
            faqItem.classList.add('active');
            icon.src = "imgs/icons/up.png";
            itemIcon.alt = "hide-links";
        }
    });
});