export const orderOnWhatsApp = (category, make, model, year, price) => {
  const phoneNumber = "254119255579";
  const message = `Hello, I would like to order:
Product: ${category} ${make} ${model} 
Year: ${year}
Price: Ksh ${price}
`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappUrl, "_blank");
};
