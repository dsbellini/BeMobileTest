"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Usuarios', [
            {
                email: 'admin@admin.com',
                senha: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
                // senha: secret_admin
            },
            {
                email: 'user@user.com',
                senha: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
                // senha: secret_user
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Usuarios', {});
    },
};
