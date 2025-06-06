
export async function getSkips() {
  const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
  if (!response.ok) throw new Error("Failed to fetch skips");
  return await response.json();
}