
//filter search for opportunities

    document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("searchInput");
        const opportunities = document.querySelectorAll(".opportunity");
    
        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.trim().toLowerCase();
    
            opportunities.forEach(function(opportunity) {
                const opportunityTitle = opportunity.querySelector("h2").textContent.toLowerCase();
    
                if (searchTerm === "") {
                    // If search term is empty, display all opportunities
                    opportunity.style.display = "flex";
                } else if (opportunityTitle.includes(searchTerm)) {
                    // If opportunity title contains search term, display the opportunity
                    opportunity.style.display = "flex";
                } else {
                    // Otherwise, hide the opportunity
                    opportunity.style.display = "none";
                }
            });
        });
    });
    

//filter search for all the months

    document.addEventListener("DOMContentLoaded", function() {
        const monthSelect = document.getElementById('monthSelect');
        const opportunities = document.querySelectorAll('.opportunity');
    
        monthSelect.addEventListener('change', function() {
            const selectedMonth = monthSelect.value.toLowerCase();
            
            opportunities.forEach(opportunity => {
                const openingMonth = opportunity.querySelector('p').textContent.toLowerCase();
                if (openingMonth.includes(selectedMonth)) {
                    opportunity.style.display = 'flex';
                } else {
                    opportunity.style.display = 'none';
                }
            });
        });
    });
    

    //dark mode/brightmode toggle
    var content = document.getElementsByTagName('body')[0];
    var darkModeToggle = document.getElementById('dark-change');
    
    darkModeToggle.addEventListener('click', function() {
        toggleModes();
    });
    
    function toggleModes() {
        darkModeToggle.classList.toggle('active');
        content.classList.toggle('night');
        
        var isBrightModeActive = content.classList.contains('night');
        if (isBrightModeActive) {
            content.classList.add('bright');
        } else {
            content.classList.remove('bright');
        }
    }
    

  

