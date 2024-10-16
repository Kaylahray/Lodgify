import { faker } from "@faker-js/faker";

export const mockInvoiceData = Array.from({ length: 15 }).map(() => ({
  guestName: faker.name.findName(),
  bookingId: `LG-${faker.datatype.uuid().slice(0, 8)}`,
  room: `Room ${faker.random.numeric(3)}`,
  pricePerNight: faker.commerce.price(100, 500, 0),
  duration: `${faker.random.numeric(1)}-night`,
  amount: faker.commerce.price(100, 1500, 0),
  status: faker.helpers.randomize(["Paid", "Unpaid"]),
}));
