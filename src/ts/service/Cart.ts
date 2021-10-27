import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    sumWithDiscount(discount: number): number {
        return this.sum() * (1 - 1 / discount);
    }

    delete(id: number): void {
        const deleteItem = this.items.findIndex((item) => item.id === id);
        this._items.splice(deleteItem, 1);
    }
}