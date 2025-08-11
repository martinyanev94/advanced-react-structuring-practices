describe("TaskModel", () => {
    let taskModel;

    beforeEach(() => {
        taskModel = new TaskModel();
    });

    it("should be able to add a task", () => {
        taskModel.addTask("Finish homework");
        expect(taskModel.getTasks().length).toBe(1);
    });

    it("should maintain the correct task title", () => {
        taskModel.addTask("Finish homework");
        expect(taskModel.getTasks()[0].title).toBe("Finish homework");
    });
});
