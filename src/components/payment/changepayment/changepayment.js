import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../context/authcontext";

const ChangePayment = (props) => {
  const [paymentMethod, setPaymentMethod] = useState(
    props.currentMethod === "unknown" ? "refill" : props.currentMethod
  );
  const [cardNumber, setCardNumber] = useState(
    props.cardNumber === "unknown" ? "" : props.cardNumber
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { userId } = props;

  const submitChanges = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
    console.log("hej");
    // try {
    //   const response = await fetch(
    //     `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         // Authorization: "Bearer " + context.token,
    //       },
    //       body: JSON.stringify({ name, content, code: codeMode }),
    //     }
    //   );
    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message);
    //   }
    //   props.setUser(data.user);
    //   setLoading(false);
    //   setSuccess(true);
    // } catch (err) {
    //   setError(err.message);
    //   setLoading(false);
    // }
  };

  // useEffect(() => {
  //   setCardNumber(props.cardNumber);
  // }, [props.cardNumber]);

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} centered="true">
      <ModalHeader>{props.title}</ModalHeader>
      <form onSubmit={submitChanges}>
        <ModalBody>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="paymentMethod"
              id="radioRefill"
              value="refill"
              checked={
                paymentMethod === "refill" || paymentMethod === "unknown"
              }
              onChange={(event) => setPaymentMethod(event.target.value)}
            />
            <label class="form-check-label" for="radioRefill">
              Påfyllning
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="paymentMethod"
              id="radioMonthly"
              value="monthly"
              checked={paymentMethod === "monthly"}
              onChange={(event) => setPaymentMethod(event.target.value)}
            />
            <label class="form-check-label" for="radioMonthly">
              Månadsvis
            </label>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Kortnummer:</label>
            <input
              type="number"
              class="form-control"
              id="cardNumber"
              placeholder="Skriv in kortnummer..."
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Spara</Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Stäng
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default ChangePayment;
