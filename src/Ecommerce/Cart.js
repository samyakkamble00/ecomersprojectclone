import React, { useEffect, useState } from 'react';
import './CSS/Cart.css';
import GooglePayButton from '@google-pay/button-react';

const Cart = ({cart,setCart,handleChange,search}) => {

    const[price,setPrice] = useState(0);

    function handleRemove(id){
        const arr = cart.filter(item=>item.id!==id)
        setCart(arr);
        alert("Product removed from Cart");
    }

    function handlePrice(){
      let totalAmount = 0;
      cart.map((item)=> totalAmount+= item.price*item.amount);
      setPrice(totalAmount);
    }

    useEffect(()=>{
      handlePrice();
    })

  return (
    <div className='cart'>
      <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Incre</th>
                <th>QTY</th>
                <th>Decre</th>
                <th>Total</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
        {cart && cart.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
                return(
                  <tr>
                <td>
                  <img className="cartImg" src={item.image} alt=""></img>
                </td>
                <td>{item.title}</td>
                <td>
                  <button onClick={()=> handleChange(item, +1)}><b>➕</b></button>
                </td>
                <td>{item.amount}</td>
                <td>
                  <button onClick={()=> handleChange(item, -1)}><b>➖</b></button>
                </td>
                <td>{(item.price)*(item.amount)}</td>
                <td>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td><b>Total Price of the cart</b></td>
            <td colSpan={5}><b>Rs. {price}</b></td>

            <td>
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: "100.00",
                    currencyCode: "USD",
                    countryCode: "US",
                  },
                }}
                onLoadPaymentData={(paymentRequest) => {
                  console.log("load payment data", paymentRequest);
                }}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
