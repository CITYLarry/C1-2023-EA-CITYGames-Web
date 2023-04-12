export interface Game {
    gameId: string,
    title: string,
    price: string,
    edition: string,
    quantity: number,
    available: boolean,
    categories: string[]
}