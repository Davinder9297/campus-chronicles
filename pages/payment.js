import StripeCheckout from "react-stripe-checkout";

export default function Payment(){
   const onToken = async(token) => {
    let res=await fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        })
        let response =await res.json();
        console.log(response);
        // fetch('/save-stripe-token', {
        //   method: 'POST',
        //   body: JSON.stringify(token),
        // }).then(response => {
        //   response.json().then(data => {
        //     alert(`We are in business, ${data.email}`);
        //   });
        // });
      }
    return(<>
    <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51N4kbSSIJUfqLb7hHmQs0vpwTQzADHpnXUE0mDQiE3OkHeXgGJaMU2ELuSOGbBseIMGYndXc7mztU64mbq7KOSYQ00qBFAafl2"
        name="Three Comma Co." // the pop-in header title
        description="Big Data Stuff" // the pop-in header subtitle
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Give Money" // prepended to the amount in the bottom pay button
        amount={1000000} // cents
     />
    </>)
}