import React, { useState } from "react";
import {
  Elements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./CheckOutpage.css";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51OUhGtHmbnL6YSQqZWfeofum8rceMTjFhSw7axozMQmyG6RwwG0iNtDsFdX6NhFQJZHkx5IZPanZGWnkA8Pc3Xoi00QfpQbflL"
);

const CARD_ELEMENT_CVC_OPTIONS = {
  style: {
    base: {
      "::placeholder": {
        padding: "10px 0 0 0",
      },
    },
  },
  placeholder: "Plesse input CVC",
};

const CARD_ELEMENT_EDate_OPTIONS = {
  style: {
    base: {
      "::placeholder": {
        padding: "10px 0 0 0",
      },
    },
  },
  placeholder: "Month / Year",
};

console.log(stripePromise);

const CheckoutForm = ({
  clientGrandTotal,
  setshoppingCartItem,
  setBillingDetails,
  billingDetails,
}) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    try {
      const { data } = await axios.post(
        "http://localhost:3001/create-payment-intent",
        {
          amount: clientGrandTotal,
        }
      );
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: billingDetails.cardName,
            phone: billingDetails.phone,
            address: {
              line1: billingDetails.address,
            },
          },
        },
      });

      if (result.error) {
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!");
          navigate("/CheckoutSess");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="checkOutFormWapper">
      <div className="modal">
        <form className="Checkoutform" onSubmit={handleSubmit}>
          <label className="input_label_price">
            Amount: ${clientGrandTotal}
          </label>
          <div className="separator">
            <hr className="line" />
            <p>Your information</p>
            <hr className="line" />
          </div>
          <div className="credit-card-info--form">
            <div className="input_container">
              <label htmlFor="name" className="input_label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={setBillingDetails}
                required
                placeholder="Enter your full name"
                className="input_field"
              />
            </div>
            <div>
              <div className="input_container">
                <label htmlFor="address" className="input_label">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={setBillingDetails}
                  required
                  className="input_field"
                  placeholder="Enter your address"
                />
              </div>
            </div>
            <div>
              <div className="input_container">
                <label htmlFor="phone" className="input_label">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={setBillingDetails}
                  required
                  className="input_field"
                  placeholder="Enter your phone Number"
                />
              </div>
            </div>
            <div className="separator">
              <hr className="line" />
              <p>Credit Card information</p>
              <hr className="line" />
            </div>
            <div>
              <div className="input_container">
                <label htmlFor="cardName" className="input_label">
                  Name on Card
                </label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  onChange={setBillingDetails}
                  required
                  className="input_field"
                  placeholder="Name on credit Card"
                />
              </div>
            </div>
            <div className="input_container">
              <label className="input_label">Card Number</label>
              <CardNumberElement className="input_field" />
            </div>
            <div className="input_container">
              <label className="input_label">Expiration Date</label>
              <CardExpiryElement
                className="input_field"
                options={CARD_ELEMENT_EDate_OPTIONS}
              />
            </div>
            <div className="input_container">
              <label className="input_label">CVC</label>
              <CardCvcElement
                className="input_field"
                options={CARD_ELEMENT_CVC_OPTIONS}
              />
            </div>
            <button className="purchase--btn" type="submit" disabled={!stripe}>
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CheckoutPage = ({
  clientGrandTotal,
  setBillingDetails,
  billingDetails,
}) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        clientGrandTotal={clientGrandTotal}
        setBillingDetails={setBillingDetails}
        billingDetails={billingDetails}
      />
    </Elements>
  );
};

export default CheckoutPage;
