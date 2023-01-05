"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = '8080';
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('HI ');
});
app.get('/h', (req, res) => {
    res.send('HI g ');
});
app.listen(port, () => {
    console.log(`server is listen at at ${port}`);
});
