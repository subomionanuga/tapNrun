describe("Controller", () => {

  beforeEach(() => {
    controller = new Controller
  })

  it("controller class has access to the querySelector", () => {
    console.log(controller.canvas)
    expect(controller.canvas).toEqual(document.getElementById('canvas'));
  });

});