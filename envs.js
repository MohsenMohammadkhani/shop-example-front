export default function getEnvs() {
  if (process.env.NODE_ENV == "development") {
    return development;
  } else if (process.env.NODE_ENV == "production") {
    return productions;
  }
}

const development = {
  API_URL: "http://localhost:8000",
  DASHBOARD_URL: "http://localhost:3000",
  REACT_APP_STATE: "DEVELOPMENT",
};

const productions = {
  API_URL: "http://localhost:8000",
  DASHBOARD_URL: "http://localhost:3000",
  REACT_APP_STATE: "PRODUCTION",
};
