const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

// Przykładowa lista zaznaczonych dat w formacie 'RRRR-MM-DD'


const startDate = new Date('2025-04-1');
const endDate = new Date('2025-05-10');

const highlightedDates = [];

for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = date.toISOString().slice(0, 10);
    highlightedDates.push(formattedDate);
}

highlightedDates.push('2025-05-22');
// daje jeden dzien do przodu
const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = (firstDay.getDay() || 7) - 1;
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, -i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dateString = date.toISOString().split('T')[0]; 
    
        
        const isActiveDate = date.toDateString() === new Date().toDateString();
    
        const isHighlightedDate = highlightedDates.includes(dateString);
    
       
        let dateClasses = 'date';
        if (isActiveDate) {
            dateClasses += ' active'; 
        } else if (isHighlightedDate) {
            dateClasses += ' highlight'; 
        }
    
        datesHTML += `<div class="${dateClasses}">${i}</div>`;
    }

    if (lastDayIndex !== 0) {
        for (let i = 1; i < 8 - lastDayIndex; i++) {
            const nextDate = new Date(currentYear, currentMonth + 1, i);
            datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
        }
    }

    datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();