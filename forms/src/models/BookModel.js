class BookModel {
    constructor(id, name, read = false) {
        this.id = id;
        this.name = name;
        this.read = read;
    }
}

export default BookModel;