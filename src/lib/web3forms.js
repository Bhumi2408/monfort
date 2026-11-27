// Every enquiry is sent to all of these Web3Forms access keys,
// so the same response reaches each inbox.
export const WEB3FORMS_ACCESS_KEYS = [
  "a2be3110-9cf8-494a-ba32-8f3a28caa0f4",
  "e01719be-3288-4539-b986-f99dc4c32a11",
];

async function sendWithKey(accessKey, data) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: accessKey, ...data }),
  });

  const result = await response.json();
  return Boolean(result.success);
}

// Resolves true if at least one inbox received the enquiry.
export async function submitEnquiry(data) {
  const results = await Promise.allSettled(
    WEB3FORMS_ACCESS_KEYS.map((key) => sendWithKey(key, data))
  );

  return results.some((r) => r.status === "fulfilled" && r.value === true);
}
