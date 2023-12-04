var btn = document.getElementById('filter-btn');
var main = document.getElementById('project-main-container');
var filter = document.getElementById('filter-list');
var close = document.getElementById('filter-close-btn');

document.addEventListener('click', function(e) {
    if (!filter.contains(e.target) && filter.style.display == 'block') {
        filter.style.display = 'none';
        main.style.filter = 'none';
    }
    else if (e.target.id == 'filter-btn') {
        filter.style.display = 'block';
        main.style.filter = 'blur(3px) grayscale(50%)';
    }
});

close.addEventListener('click', function(e) {
    
    filter.style.display = 'none';
    main.style.filter = 'none';
});

  

var selectAllCheckbox = document.getElementById("goal-all");
var childCheckboxes = document.querySelectorAll(".goal-input");

const toggleSelectAllCheckbox = () => {
    const areAllChecked = [...childCheckboxes].every((c) => c.checked === true);
    childCheckboxes.forEach((c) => {
    c.checked = !areAllChecked;
    });
    selectAllCheckbox.checked = !areAllChecked;
};

selectAllCheckbox.addEventListener("click", toggleSelectAllCheckbox);

// Handle child click events
const toggleChildCheckbox = () => {
    const areAllChecked = [...childCheckboxes].every((c) => c.checked === true);
    selectAllCheckbox.checked = areAllChecked;
};

childCheckboxes.forEach((c) => {
    c.addEventListener("click", toggleChildCheckbox);
});
  

var selectAllyearCheckbox = document.getElementById("year-all");
var childyearCheckboxes = document.querySelectorAll(".year-input");

const toggleSelectAllyearCheckbox = () => {
    const areAllChecked = [...childyearCheckboxes].every((c) => c.checked === true);
    childyearCheckboxes.forEach((c) => {
    c.checked = !areAllChecked;
    });
    selectAllyearCheckbox.checked = !areAllChecked;
};

selectAllyearCheckbox.addEventListener("click", toggleSelectAllyearCheckbox);

// Handle child click events
const toggleChildyearCheckbox = () => {
    const areAllChecked = [...childyearCheckboxes].every((c) => c.checked === true);
    selectAllyearCheckbox.checked = areAllChecked;
};

childyearCheckboxes.forEach((c) => {
    c.addEventListener("click", toggleChildyearCheckbox);
});
  

var selectAllTechCheckbox = document.getElementById("tech-all");
var childTechCheckboxes = document.querySelectorAll(".tech-input");

const toggleSelectAllTechCheckbox = () => {
    const areAllChecked = [...childTechCheckboxes].every((c) => c.checked === true);
    childTechCheckboxes.forEach((c) => {
    c.checked = !areAllChecked;
    });
    selectAllTechCheckbox.checked = !areAllChecked;
};

selectAllTechCheckbox.addEventListener("click", toggleSelectAllTechCheckbox);

// Handle child click events
const toggleChildTechCheckbox = () => {
    const areAllChecked = [...childTechCheckboxes].every((c) => c.checked === true);
    selectAllTechCheckbox.checked = areAllChecked;
};

childTechCheckboxes.forEach((c) => {
    c.addEventListener("click", toggleChildTechCheckbox);
});
