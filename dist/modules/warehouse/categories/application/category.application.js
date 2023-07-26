"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryApplication {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async list() {
        return this.categoryRepository.list();
    }
    async listOne(guid) {
        return this.categoryRepository.listOne(guid);
    }
    async insert(category) {
        return this.categoryRepository.insert(category);
    }
    async update(guid, user) {
        return this.categoryRepository.update(guid, user);
    }
    async delete(guid) {
        return this.categoryRepository.delete(guid);
    }
}
exports.default = CategoryApplication;
//# sourceMappingURL=category.application.js.map