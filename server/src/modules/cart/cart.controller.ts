import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import products, {Product} from '../../products';

interface CartItem extends Product {
    quantity: number;   
}

interface Cart {
    cartItems: CartItem[];
}

// Keeping quantity 1 for testing purposes only
const initialCart = (indexes: number[]): Cart => (
    { 
        cartItems: indexes.map((index) => (
            {
                ...products[index],
                quantity: 1,
            }
        ))
    }
);

@Controller('cart')
export class CartController {
    constructor() {}

    private carts: Record <number, Cart> = {
        1: initialCart([0, 2, 10]),
        2: initialCart([0, 5]),
    };

    @Get()
    @UseGuards(JwtAuthGuard)
    async index(@Request() req): Promise<Cart> {
        return this.carts[req.user.userId] ?? {cartItems: []};
    }
}
