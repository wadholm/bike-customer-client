import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const City = (props) => {
  const cityId = "61a7603dbb53f131584de9b3";

  const [selectedCity, setSelectedCity] = useState(cityId);
  const [cities, setCities] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveHandler = () => {
    setError(null);
    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${props.userId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: "Bearer " + context.token,
          },
          body: JSON.stringify({ city: selectedCity }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCities = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/cities`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // Authorization: "Bearer " + context.token,
            },
            // body: JSON.stringify({ name, content, code: codeMode }),
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        setCities(data.cities);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getCities();
  }, []);

  return (
    <>
      <form onSubmit={saveHandler}>
        <select
          class="form-select"
          aria-label="Available bikes"
          onChange={(event) => setSelectedCity(event.target.value)}
        >
          {cities &&
            cities.length > 0 &&
            cities.map((city) => (
              <option selected={selectedCity === city._id} value={city._id}>
                {city.name}
              </option>
            ))}
        </select>
        <Button>Spara</Button>
      </form>
    </>
  );
};

export default City;
