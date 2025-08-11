const carManager = new CarManager();
const invoker = new CommandInvoker();

// Creating some car instances
const car1 = new Car(1, "Toyota Corolla");
const car2 = new Car(2, "Honda Civic");

// Adding cars
const addCar1 = new AddCarCommand(carManager, car1);
const addCar2 = new AddCarCommand(carManager, car2);

invoker.setCommand(addCar1);
invoker.setCommand(addCar2);

// Executing commands to add cars
invoker.executeCommands();

// Updating a car
const updateCar1 = new UpdateCarCommand(carManager, 1, "Toyota Camry");
invoker.setCommand(updateCar1);

// Executing the update command
invoker.executeCommands();

// Removing a car
const removeCar1 = new RemoveCarCommand(carManager, 2);
invoker.setCommand(removeCar1);

// Executing the remove command
invoker.executeCommands();
