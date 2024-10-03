export function handleLink(event, link) {
  event.preventDefault();
  const baseURL = window.location.origin;
  window.open(`${baseURL}${link}`, "_blank");
}

export function handleEmployeeForm(event) {
  handleLink(event, "/employment-form");
}

export function handleRequestForm(event) {
  handleLink(event, "/homecare-request-form");
}

export function handleReviewForm(event) {
  handleLink(event, "/caregiver-review-form");
}
