export default function getEnvs() {
  if (process.env.NODE_ENV == "development") {
    return development;
  } else if (process.env.NODE_ENV == "production") {
    return productions;
  }
} 

const development = {
  API_URL: "http://localhost:8000",
};

const productions = {
  API_URL: "http://localhost:8000",
};
