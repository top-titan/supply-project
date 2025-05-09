"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthHeader = void 0;
const getAuthHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};
exports.getAuthHeader = getAuthHeader;
