import React, { useEffect, useState } from "react";
import Price from "./Price";
import Products from "./Products";
import useAppState from "../../../state/useAppState";

export default function index() {
  const { state, dispatch } = useAppState();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <section className="section-gap">
          <div className="container">
            <div className="row">
              {Object.keys(state.cart).length > 0 ? (
                <>
                  <div className="col-12 col-lg-8">
                    <Products />
                  </div>
                  <div className="col-12 col-lg-4">
                    <Price />
                  </div>
                </>
              ) : (
                <> سبد خرید شما خالی است </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
