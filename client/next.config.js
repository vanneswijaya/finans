module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination:
          "http://finans-api-env.eba-rkbmdhu4.us-west-2.elasticbeanstalk.com/:path*",
      },
    ];
  };
  return {
    rewrites,
  };
};
