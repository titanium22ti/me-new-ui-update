export const fetchPort3Data = async (campaignId) => {
    try {
      const response = await fetch(
        `https://api.sograph.xyz/api/open/campaign/${campaignId}/candidates?api-key=E4496909537E4AB2C3122882A87673FB`
      );
      const data = await response.json();

      // Extract candidates array from fetched data
      const { candidates } = data.data;
      console.log("candidates api", data);
      // Create the transformed array of address-entry pairs
      const transformed = candidates.map(candidate => [
        candidate.address,
        candidate.entries
      ]);

      // Update state with the transformed array
      return transformed;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };