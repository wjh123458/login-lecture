"use strict";

class UserStorage{
    static #users = {
        id: ["123", "1234" , "12345"],
        name: ["123", "1234", "12345"],
        psword: ["123", "1234", "12345"],
    };

    static getUser(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
    }
}

module.exports = UserStorage;