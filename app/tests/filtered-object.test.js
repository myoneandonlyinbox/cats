describe('filtered-object', function() {
    
    const data = {
        "name": "Fred",
        "gender": "Male",
        "age": 40,
        "pets": [{
            "name": "Tom",
            "type": "Cat"
        }, {
            "name": "Jerry",
            "type": "Mouse"
        }]
    };

    let catNames = [];

    // Filter out cats from the pets - and populate CatNames
    beforeEach(function () {
        data.pets.forEach(pet => popCatNames(pet, catNames));
    });

    it('should create a new object with owner gender and only cats as pets. ', function () {
        expect(filteredObject(data.gender, catNames).gender).toBe('Male');
        expect(filteredObject(data.gender, catNames).catNames[0]).toBe('Tom');
    });


});