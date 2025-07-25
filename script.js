document.addEventListener('scroll', () => {
    const rows = [
        document.getElementById('row1'),
        document.getElementById('row2'), 
        document.getElementById('row3')
    ];
    
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    
    const atBottom = (scrollY + viewportHeight) >= documentHeight - 50;
    
    rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + (rect.height / 2);
        const viewportCenter = viewportHeight / 2;
        const distanceToCenter = Math.abs(rowCenter - viewportCenter);
        
        if (atBottom && index === rows.length - 1) {
            rows.forEach(r => r.classList.remove('active'));
            row.classList.add('active');
        } 

        else if (!atBottom && distanceToCenter < 100) {
            rows.forEach(r => r.classList.remove('active'));
            row.classList.add('active');
        }
    });
});