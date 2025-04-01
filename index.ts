interface UserInterface {
    id: number;
    name: string;
    email: string;
}

class User implements UserInterface {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}
