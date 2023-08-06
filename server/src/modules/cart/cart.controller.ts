import { Body, Controller, Get, Request, UseGuards, Post, Delete } from '@nestjs/common';
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

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Request() req, @Body() {id} : {id: string}): Promise<Cart> {
        const cart = this.carts[req.user.userId];
        const cartItem = cart.cartItems.find(
            (cartItem) => cartItem.id === parseInt(id),
        )

        if(cartItem){
            cartItem.quantity += 1;
        } else {
            cart.cartItems.push(
                {
                    ...products.find((product) => product.id === parseInt(id)),
                    quantity: 1,
                }
            )
        }

        return cart;
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async destroy(@Request() req): Promise<Cart> {
        this.carts[req.user.userId] = {cartItems: []};
        return this.carts[req.user.userId];
    }
}
