"use strict";

(function () {
    // Make a request to fetch the data
    fetch("http://agl-developer-test.azurewebsites.net/people.json").then(res => {
        // convert data to JSON
        return res.json();
    }).then(data => {
        // filter data for and check for all owners with pets (No owners with null in their pets array)
        const allPetOwners = data.filter(owner => {
            return owner.pets;
        })
        // map to a new array with only the information we want
        .map(owner => {
            // filter out cats from the multiple pets each owner may have
            let catNames = [];
            owner.pets.forEach(pet => popCatNames(pet, catNames));
            // Sort cat names alphabetically
            catNames.sort();
            // return the object to the Male Pet Owners array
            return filteredObject(owner.gender, catNames);
        });
        // Use template strings to append markup/data dynamically
        const markup =
            `
                ${allPetOwners.map(owner =>
                `   <h5>${owner.gender}</h5>
                    <ul> ${owner.catNames.map(catName =>
                    `
                            <li> ${catName} </li>
                        
                    ` ).join("")}
                    </ul>
                `).join("")}   
            `;

        // append markup to body        
        document.body.innerHTML = markup;
    }).catch(err => {
        console.error(err);
    });
})();