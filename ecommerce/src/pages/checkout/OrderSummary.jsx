import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemsDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div className="cart-item-container" key={cartItem.productId}>
              <DeliveryDate
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
              />

              <div className="cart-item-details-grid">
                <CartItemsDetails cartItem={cartItem} loadCart={loadCart} />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
