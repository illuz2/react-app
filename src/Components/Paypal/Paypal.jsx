import React, { useRef, useEffect } from 'react';

/*global error*/

export default function Paypal() {
  const paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=Ae3jjVTMyW1IQXRUuKBi6uMv68nElJQMsv-5Sht7N0ol2PiXopoWjlN-mj-krIYqAhADndZ2wKyU5maf&currency=EUR';
    script.onload = initializePaypal;
    script.onerror = handleError;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePaypal = () => {
    console.log('Initializing PayPal SDK...');
    try {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: 'cool looking table',
                  amount: {
                    currency_code: 'EUR',
                    value: '650.00'
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          }
        }).render(paypalRef.current);
      } else {
        handleError('PayPal SDK not available.');
      }
    } catch (error) {
      console.error('PayPal Initialization Error:', error);
      // You can add more error handling or UI feedback here if needed.
    }
  };

  const handleError = (error) => {
    console.error('PayPal Initialization Error:', error);
    // You can add more error handling or UI feedback here if needed.
  };

  return (
    <div>
      <div ref={paypalRef}></div>
    </div>
  );
}
