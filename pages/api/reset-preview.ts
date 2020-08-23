export default (req, res) => {
  res.clearPreviewData();

  if (req?.query?.redirect) {
    res.writeHead(302, {
      Location: '/',
    });
  }

  res.status(200).end();
};
