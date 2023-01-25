export const redirect = (req, res) => {
    if (req.session.redirectTo) {
        res.writeHead(302, { Location: req.session.redirectTo });
        res.end();
    } else {
        res.json({});
    }
};
