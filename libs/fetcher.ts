import axios from "axios";

const WP_CMS = process.env.WP_CMS;

// const WP_CMS = 'http://localhost:8080/graphql';

const fetcher = async (query: string, variables: any = {}) => {
  const result = await axios({
    url: WP_CMS,
    method: "POST",
    data: { query, variables },
  });

  return result;
};

export default fetcher;
