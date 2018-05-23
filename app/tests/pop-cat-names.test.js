describe('filtered-object', function () {

    const data = [{
        "name": "Bob",
        "gender": "Male",
        "age": 23,
        "pets": [{
            "name": "Garfield",
            "type": "Cat"
        }, {
            "name": "Fido",
            "type": "Dog"
        }]
    }, {
        "name": "Jennifer",
        "gender": "Female",
        "age": 18,
        "pets": [{
            "name": "Jo",
            "type": "Cat"
        }]
    }, {
        "name": "Fred",
        "gender": "Male",
        "age": 40,
        "pets": [{
            "name": "Tom",
            "type": "Cat"
        }, {
            "name": "Max",
            "type": "Cat"
        }, {
            "name": "Sam",
            "type": "Dog"
        }, {
            "name": "Jim",
            "type": "Cat"
        }]
    }, {
        "name": "Samantha",
        "gender": "Female",
        "age": 40,
        "pets": [{
            "name": "Tabby",
            "type": "Cat"
        }]
    }, {
        "name": "Alice",
        "gender": "Female",
        "age": 64,
        "pets": [{
            "name": "Simba",
            "type": "Cat"
        }, {
            "name": "Nemo",
            "type": "Fish"
        }]
    }];

    let catNames = [];
    let catsWeWant = ['Garfield', 'Jo', 'Tom', 'Max', 'Jim', 'Tabby', 'Simba'];
    
    it('should populate an cats only array from a list of all aorts of pets ', function () {
        data.forEach(owner => {
            owner.pets.forEach(pet => popCatNames(pet, catNames));
        });
        expect(catNames).toEqual(catsWeWant);
    });


});