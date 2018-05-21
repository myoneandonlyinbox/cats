let popCatNames =(pet, catNames) => {
    if (pet.type === "Cat") {
        // push cat names only into the cats array
        catNames.push(pet.name);
    }
    return catNames;
}
