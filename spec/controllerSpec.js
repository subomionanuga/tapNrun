describe("Controller", () => {

	beforeEach(() => {
		var p1 = new Player(10, 20, 12)
		var p2 = new Player(10, 20, 12)
		var l3 = new Player(10, 20, 12)
		var l4 = new Player(10, 20, 12)
		var timer = new Timer
		controller = new Controller(p1, p2, l3, l4, timer)
		display = new Display
	})

	it("checks that the ai can move", () => {
		controller.l3.moveAllowed = true
		controller.l3.move()
		expect(controller.l3.x).toEqual(22)
	})

	it("checks that the player stops at the finish line", () => {
		controller.finishLine = 10
		controller.l3.moveAllowed = true
		controller.stopAtFinish()
		controller.l3.move()
		expect(controller.p1.x).toEqual(10)
	})

})
