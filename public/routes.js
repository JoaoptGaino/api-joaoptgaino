"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PostsController_1 = __importDefault(require("./Controllers/PostsController"));
var routes = express_1.default.Router();
var postsController = new PostsController_1.default;
routes.get('/', function (req, res) {
    res.json({
        message: "E aí"
    });
});
routes.get('/posts', postsController.index);
routes.post('/posts', postsController.create);
exports.default = routes;
