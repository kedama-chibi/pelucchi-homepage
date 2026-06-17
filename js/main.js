(function () {
  const orderUrl = window.PELUCCHI_ORDER_URL || "http://pelucchidogcat.cart.fc2.com/";
  const links = document.querySelectorAll(".js-order-link");
  const status = window.PELUCCHI_SITE_STATUS;

  links.forEach((link) => {
    link.href = orderUrl;
    link.target = "_blank";
    link.rel = "noopener";
  });

  if (status) {
    const fields = {
      statusDate: status.statusDate,
      statusTitle: status.statusTitle,
      statusText: status.statusText,
      receptionTitle: status.receptionTitle,
      receptionText: status.receptionText,
      shippingTitle: status.shippingTitle,
      shippingText: status.shippingText,
    };

    Object.entries(fields).forEach(([key, value]) => {
      const element = document.querySelector(`[data-status-field="${key}"]`);
      if (element && value) element.textContent = value;
    });
  }
})();
