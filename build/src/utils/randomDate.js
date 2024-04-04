"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
exports.default = randomDate;
