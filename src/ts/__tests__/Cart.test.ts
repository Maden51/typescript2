import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
 
test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should add movie to Cart', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'Avengers', 99, 2012, 'USA', 'Fantasy , Action, Adventure', '137 minutes', 'Avengers Assemble!'))
    expect(cart.items).toEqual([{
        id: 1009,
        name: 'Avengers',
        price: 99,
        dateRelease: 2012,
        country: 'USA',
        genre: 'Fantasy , Action, Adventure',
        time: '137 minutes',
        slogan: "Avengers Assemble!"
    }])
})

const cart = new Cart();
cart.add(new Movie(1009, 'Avengers', 99, 2012, 'USA', 'Fantasy , Action, Adventure', '137 minutes', 'Avengers Assemble!'));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

test ('should sum items in cart', () => {
    expect(cart.sum()).toBe(2999);
})

test('should sum items with discount', () => {
    expect(cart.sumWithDiscount(10)).toBe(2699.1);
})

test('should delete item from cart', () => {
    cart.delete(1009);
    expect(cart.items.length).toBe(2);
})