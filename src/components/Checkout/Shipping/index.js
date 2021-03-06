import React, { useState, useEffect } from "react";
import { isZipCode } from "../../../utils";

function Shipping() {
  const [checked, setChecked] = useState(false);
  const validate = (e) => {
    e.target.value.length >= 3
      ? e.target.classList.add("valid")
      : e.target.classList.remove("valid");
  };
  return (
    <form>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="same-address"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <label class="custom-control-label" for="same-address">
          Shipping address is the same as my billing address
        </label>
      </div>
      {!checked && (
        <>
          <div class="mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="mb-3">
            <label for="address2">
              Address 2 <span class="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select
                class="custom-select d-block w-100 form-control"
                id="country"
                onChange={(e) => validate(e)}
              >
                <option>Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select
                class="custom-select d-block w-100 form-control"
                id="state"
                onChange={(e) => validate(e)}
              >
                <option>Choose...</option>
                <option>California</option>
                <option>Washington</option>
                <option>New York</option>
                <option>Texas</option>
                <option>Florida</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                onKeyUp={(e) => isZipCode(e)}
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

export default Shipping;
