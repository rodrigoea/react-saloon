import mockedSalons from "../mocks/salons.json";
import mockedJobApplications from "../mocks/jobApplication.json";

const MOCKS = {
  SALONS: mockedSalons,
  JOB_APPLICATIONS: mockedJobApplications
};

const PATH = {
  SALONS: "/salons",
  JOB_APPLICATIONS: "/users/pending_approval"
};

const getMock = url => {
  const { pathname } = new URL(url);
  let mock;

  switch (pathname) {
    case PATH.SALONS:
      mock = MOCKS.SALONS;
      break;

    case PATH.JOB_APPLICATIONS:
      mock = MOCKS.JOB_APPLICATIONS;
      break;

    default:
      break;
  }

  return mock;
};

export default apiUrl => {
  const mock = getMock(apiUrl);

  return Promise.resolve({
    json: () =>
      new Promise((resolve, reject) => setTimeout(() => resolve(mock), 500))
  });
};
