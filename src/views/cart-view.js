import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "../components/contact-form";
import ContactTable from "../components/contact-table";
import { CartContextProvider } from "../context/cart-context";

export default function Contacts() {
  return (
    <CartContextProvider>
      <div></div>
    </CartContextProvider>
  );
}