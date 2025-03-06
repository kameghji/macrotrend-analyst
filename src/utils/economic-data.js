
// Sample data - in a real application, this would be fetched from an API
export const economicData = {
  lastUpdated: "2023-10-20",
  inflation: [
    {
      date: "2023-10-01",
      value: 3.7,
      trend: "down",
      commentary: "Inflation continues to moderate as supply chain pressures ease. Consumer prices rose at a slower pace than expected, suggesting the Federal Reserve's measures are having the desired effect.",
      source: "The Wall Street Journal"
    },
    {
      date: "2023-09-01",
      value: 3.9,
      trend: "down",
      commentary: "Inflation showed signs of cooling in September as energy prices declined, though core inflation remained sticky, indicating underlying price pressures are still present in the economy.",
      source: "CNBC"
    },
    {
      date: "2023-08-01",
      value: 4.1,
      trend: "up",
      commentary: "Inflation unexpectedly accelerated in August, driven by rising housing costs and food prices. This could complicate the Federal Reserve's decision-making process regarding interest rates.",
      source: "Bloomberg"
    },
    {
      date: "2023-07-01",
      value: 3.8,
      trend: "down",
      commentary: "Inflation fell more than anticipated, primarily due to lower energy costs. However, core inflation remains elevated, suggesting more work is needed to reach the Fed's 2% target.",
      source: "Reuters"
    },
    {
      date: "2023-06-01",
      value: 4.0,
      trend: "down",
      commentary: "Inflation continued its downward trend, though at a slower pace than in previous months. The data suggests a gradual return to normal price increases rather than a rapid decline.",
      source: "Financial Times"
    },
    {
      date: "2023-05-01",
      value: 4.3,
      trend: "down",
      commentary: "Inflation eased slightly in May, driven by declining gasoline prices. Core inflation measures remained stubborn, indicating persistent underlying pressures.",
      source: "The New York Times"
    },
  ],
  interestRates: [
    {
      date: "2023-10-01",
      value: 5.5,
      trend: "neutral",
      commentary: "The Federal Reserve maintained its benchmark interest rate, indicating it's monitoring economic data closely before deciding on further rate adjustments. Officials signaled a cautious approach.",
      source: "The Wall Street Journal"
    },
    {
      date: "2023-09-01",
      value: 5.5,
      trend: "up",
      commentary: "The Fed raised rates by 25 basis points, continuing its fight against inflation. Chair Powell emphasized that the central bank is prepared to hold rates higher for longer if necessary.",
      source: "CNBC"
    },
    {
      date: "2023-08-01",
      value: 5.25,
      trend: "neutral",
      commentary: "The Federal Reserve paused its rate hiking cycle, giving time to assess the impact of previous increases. Markets interpreted this as a signal that the tightening cycle may be nearing its end.",
      source: "Bloomberg"
    },
    {
      date: "2023-07-01",
      value: 5.25,
      trend: "up",
      commentary: "The Fed increased rates by 25 basis points, bringing the target range to 5.25-5.50%, the highest level in 22 years. Powell noted that future decisions will be data-dependent.",
      source: "Reuters"
    },
    {
      date: "2023-06-01",
      value: 5.0,
      trend: "neutral",
      commentary: "The Federal Reserve held rates steady after ten consecutive increases, indicating a potential pause in its aggressive tightening campaign as it evaluates economic conditions.",
      source: "Financial Times"
    },
    {
      date: "2023-05-01",
      value: 5.0,
      trend: "up",
      commentary: "The Fed raised its benchmark rate by 25 basis points, continuing its effort to combat inflation while acknowledging the potential impact on economic growth and the labor market.",
      source: "The New York Times"
    },
  ]
};

// Function to get the trend direction for display
export const getTrendDirection = (trend) => {
  switch (trend) {
    case 'up':
      return '↑';
    case 'down':
      return '↓';
    default:
      return '→';
  }
};

// Function to get the latest inflation data
export const getLatestInflation = () => {
  return economicData.inflation[0];
};

// Function to get the latest interest rate data
export const getLatestInterestRate = () => {
  return economicData.interestRates[0];
};

// Function to format a date string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

// Function to format a percentage value
export const formatPercentage = (value) => {
  return `${value.toFixed(1)}%`;
};
