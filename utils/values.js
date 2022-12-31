// const address = 'http://127.0.0.1:9000';
const address = 'http://localhost:1500';
 export const api = process.env.NODE_ENV === 'development' ? `${address}/api` : `http://api.${process.env.WEBSITE_URL}`;
//export const api = `http://api.${process.env.WEBSITE_URL}`
export const productsUrl = '/products';
export const ordersUrl = '/order';
export const usersUrl = '/users';
export const userUrl = '/user';
export const categoriesUrl = '/category';
export const brandsUrl = '/brand';
export const profileUrl = '/profile';
export const cartUrl = '/cart';
export const paymentUrl = '/payment';
export const shippingUrl = '/shipping';
export const placeOrderUrl = '/placeOrder';
export const orderHistoryUrl = '/order-history';
export const loginUrl = '/login';
export const registerUrl = '/register';
export const contactUrl = '/contact';

export const priceUnit = ` هزار تومان`;
