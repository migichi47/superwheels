export const orderOnWhatsApp = (products, totalPrice) => {
  const phoneNumber = "254119255579";
  const message = `Hello, I would like to order:
\nProducts: ${products.map((product) => {
    return `\n${product.category} ${product.make} ${product.model} ${product.year}`;
  })} 
\nTotal Price: Ksh ${totalPrice}
`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message.split(",").join(""),
  )}`;

  window.open(whatsappUrl, "_blank");
};
