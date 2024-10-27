import React, { useEffect, useState } from "react";
import useAppState from "../../../state/useAppState";
import Price from "./Price";
import Products from "./Products";
import Info from "./Info";

export default function index() {
  const { state, dispatch } = useAppState();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <section className="section-gap">
          <form>
            <div className="container">
              <div className="row">
                {Object.keys(state.cart).length > 0 ? (
                  <>
                    <div className="col-12 col-lg-8">
                      <Products />
                      <Info />
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
          </form>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
