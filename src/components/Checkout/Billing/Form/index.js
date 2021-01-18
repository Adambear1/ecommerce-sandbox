import React from "react";
import { isAddress, isCC, isCVV, isEmail, isZipCode } from "../../../../utils";
import "./styles.css";
function Form() {
  const validate = (e) => {
    e.target.value.length >= 3
      ? e.target.classList.add("valid")
      : e.target.classList.remove("valid");
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  onKeyUp={(e) => validate(e)}
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  onKeyUp={(e) => validate(e)}
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">
                Email <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
                onKeyUp={(e) => isEmail(e)}
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                onKeyUp={(e) => isAddress(e)}
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
                onKeyUp={(e) => isAddress(e)}
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
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select
                  class="custom-select d-block w-100 form-control"
                  id="state"
                  onChange={(e) => validate(e)}
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                  <option>Washington</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
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
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="save-info"
              />
              <label class="custom-control-label" for="save-info">
                Save this information for next time
              </label>
            </div>
            <hr class="mb-4" />

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  checked=""
                />
                <label class="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="paypal">
                  Paypal
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-6">
                <label for="cc-name">Name on card</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  onClick={(e) => validate(e)}
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback" onClick={(e) => validate(e)}>
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-6">
                <label for="cc-number" onKeyUp={(e) => isCC(e)}>
                  Credit card number
                </label>
                <input type="text" class="form-control" id="cc-number" />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  onKeyUp={(e) => validate(e)}
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-expiration">CVV</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  onKeyUp={(e) => isCVV(e)}
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
