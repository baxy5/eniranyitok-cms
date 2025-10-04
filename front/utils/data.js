export async function getStrapiData(urlPart) {
  const strapiUrl = process.env.STRAPI_URL || "http://localhost:1337";

  const response = await fetch(`${strapiUrl}/api${urlPart}?populate=*`);

  const data = await response.json();

  return data || [];
}
