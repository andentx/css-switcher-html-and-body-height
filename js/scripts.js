const expandedSection = document.getElementById(`expanded-section`);
const expandSectionButton = document.getElementById(`expand-button`);

// Default is Expanded

// function handleExpandedSection() {
//     if (expandedSection.style.display === 'none') {
//         expandedSection.style.display = 'flex';
//         expandSectionButton.textContent = 'Minimize Container';
//         return;
//     }

//     if (expandedSection.style.display !== 'none') {
//         expandedSection.style.display = 'none';
//         expandSectionButton.textContent = 'Click to Expand';
//         return;
//     }
// }

// Default is Minimized

function handleExpandedSection() {
    if (expandedSection.style.display === 'flex') {
        expandedSection.style.display = 'none';
        expandSectionButton.textContent = 'More Info';
        return;
    }

    if (expandedSection.style.display !== 'flex') {
        expandedSection.style.display = 'flex';
        expandSectionButton.textContent = 'Minimize Container';
        return;
    }
}
